// Decap CMS GitHub OAuth Proxy
// 极简实现 — 部署到 Cloudflare Worker (免费 100K req/天)
//
// 部署步骤:
//   1. wrangler login
//   2. wrangler secret put OAUTH_GITHUB_CLIENT_ID
//   3. wrangler secret put OAUTH_GITHUB_CLIENT_SECRET
//   4. wrangler deploy
//
// 部署后会得到地址: https://jinko-cms-oauth.{你的子域}.workers.dev
// 把这个地址填到 public/admin/config.yml 的 backend.base_url

const SCOPE = 'repo,user';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // CORS 预检
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    // ─── /oauth/auth → 跳转到 GitHub 授权页 ───
    if (url.pathname === '/oauth/auth' || url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.OAUTH_GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: SCOPE,
        state: crypto.randomUUID(),
      });
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
    }

    // ─── /callback → 接收 GitHub 回调, 换 token, 通过 postMessage 回 CMS ───
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing code', { status: 400, headers: cors });

      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: env.OAUTH_GITHUB_CLIENT_ID,
          client_secret: env.OAUTH_GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await tokenRes.json();

      const payload = data.access_token
        ? `success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`
        : `error:${JSON.stringify({ message: data.error_description || data.error || 'OAuth failed' })}`;

      return new Response(
        `<!doctype html><html><body><script>
          (function() {
            function send(msg) {
              if (window.opener) window.opener.postMessage('authorization:github:' + msg, '*');
            }
            window.addEventListener('message', function(e) {
              if (e.data === 'authorizing:github') send(${JSON.stringify(payload)});
            });
            send(${JSON.stringify(payload)});
            setTimeout(function() { window.close(); }, 1000);
          })();
        </script>
        <p style="font-family: system-ui; padding: 40px;">
          Login complete. You can close this window.
        </p></body></html>`,
        { headers: { 'Content-Type': 'text/html', ...cors } }
      );
    }

    // 健康检查
    return new Response(
      'Decap CMS OAuth Proxy is running.\n\nEndpoints:\n  /oauth/auth  → Start GitHub OAuth\n  /callback    → OAuth callback handler',
      { headers: { 'Content-Type': 'text/plain', ...cors } }
    );
  },
};
