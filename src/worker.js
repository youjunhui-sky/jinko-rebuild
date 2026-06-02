const REQUIRED_FIELDS = ['name', 'company', 'email', 'inquiry_type', 'message'];
const TRACKING_FIELDS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'referrer',
  'landing_page',
  'landing_page_slug',
  'campaign',
  'ad_group',
  'form_source',
];

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status || 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(init.headers || {}),
    },
  });
}

function clean(value, max = 2000) {
  if (value == null) return '';
  return String(value).replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
}

function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function parseInquiry(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return await request.json();
  }
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

function normalizeInquiry(raw, request) {
  const inquiry = {
    name: clean(raw.name, 120),
    company: clean(raw.company, 160),
    email: clean(raw.email, 200).toLowerCase(),
    phone: clean(raw.phone, 120),
    inquiry_type: clean(raw.inquiry_type, 160),
    market: clean(raw.market, 160),
    size: clean(raw.size, 200),
    application: clean(raw.application, 160),
    buyer_role: clean(raw.buyer_role, 160),
    timeline: clean(raw.timeline, 160),
    document_needs: clean(raw.document_needs, 300),
    message: clean(raw.message, 4000),
  };

  const tracking = {};
  for (const key of TRACKING_FIELDS) tracking[key] = clean(raw[key], 500);
  tracking.path = new URL(request.url).pathname;
  tracking.user_agent = clean(request.headers.get('user-agent'), 500);
  tracking.ip_country = clean(request.headers.get('cf-ipcountry'), 10);

  return { inquiry, tracking };
}


async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) return { ok: true, skipped: true };
  if (!token) return { ok: false, code: 'missing_turnstile', message: 'Please complete the anti-spam verification.' };
  const form = new FormData();
  form.append('secret', env.TURNSTILE_SECRET_KEY);
  form.append('response', token);
  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) form.append('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const result = await response.json().catch(() => ({}));
  return result.success ? { ok: true } : { ok: false, code: 'turnstile_failed', message: 'Anti-spam verification failed.', details: result['error-codes'] || [] };
}

function validateInquiry(raw, inquiry) {
  if (clean(raw._gotcha)) return { ok: false, code: 'spam_detected', status: 400, message: 'Spam protection triggered.' };
  for (const field of REQUIRED_FIELDS) {
    if (!inquiry[field]) return { ok: false, code: 'missing_field', status: 400, message: `Missing required field: ${field}` };
  }
  if (!looksLikeEmail(inquiry.email)) return { ok: false, code: 'invalid_email', status: 400, message: 'Please provide a valid email address.' };
  return { ok: true };
}

async function forwardToWebhook(payload, env) {
  if (!env.INQUIRY_WEBHOOK_URL) return { skipped: true, reason: 'missing_webhook_url' };
  const response = await fetch(env.INQUIRY_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(env.INQUIRY_WEBHOOK_TOKEN ? { authorization: `Bearer ${env.INQUIRY_WEBHOOK_TOKEN}` } : {}),
    },
    body: JSON.stringify(payload),
  });
  return { ok: response.ok, status: response.status };
}

async function handleInquiry(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: { allow: 'POST, OPTIONS' } });
  }
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, code: 'method_not_allowed', message: 'Use POST /api/inquiry.' }, { status: 405, headers: { allow: 'POST, OPTIONS' } });
  }

  let raw;
  try {
    raw = await parseInquiry(request);
  } catch (error) {
    return jsonResponse({ ok: false, code: 'invalid_payload', message: 'Invalid inquiry payload.' }, { status: 400 });
  }

  const { inquiry, tracking } = normalizeInquiry(raw, request);
  const validation = validateInquiry(raw, inquiry);
  if (!validation.ok) return jsonResponse(validation, { status: validation.status });

  const turnstile = await verifyTurnstile(clean(raw['cf-turnstile-response'], 4000), request, env);
  if (!turnstile.ok) return jsonResponse({ ok: false, code: turnstile.code, message: turnstile.message, details: turnstile.details || [] }, { status: 400 });

  const payload = {
    id: `inq_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`,
    receivedAt: new Date().toISOString(),
    source: tracking.form_source || 'website',
    inquiry,
    tracking,
    status: 'received',
  };

  const backend = env.INQUIRY_BACKEND || 'mock';
  let delivery = { backend, mode: 'mock', ok: true };
  if (backend === 'webhook') {
    try {
      delivery = { backend, mode: 'webhook', ...(await forwardToWebhook(payload, env)) };
      if (!delivery.ok) {
        return jsonResponse({ ok: false, code: 'webhook_failed', message: 'Inquiry received but webhook delivery failed.', id: payload.id, delivery }, { status: 502 });
      }
    } catch (error) {
      return jsonResponse({ ok: false, code: 'webhook_error', message: 'Inquiry received but webhook delivery errored.', id: payload.id }, { status: 502 });
    }
  }

  return jsonResponse({
    ok: true,
    id: payload.id,
    message: backend === 'mock' ? 'Inquiry endpoint is working in mock mode. CRM integration can be connected later.' : 'Inquiry received.',
    delivery,
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/inquiry') return handleInquiry(request, env || {});
    return env.ASSETS.fetch(request);
  },
};
