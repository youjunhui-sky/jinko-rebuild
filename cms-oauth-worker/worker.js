// Decap CMS GitHub OAuth Proxy (符合 Decap 标准握手协议)
// Endpoints:
//   /oauth/auth → 跳到 GitHub 授权页
//   /callback   → 接收 code, 换 token, 通过 postMessage 发给 opener

const SCOPE = 'repo,user';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── /oauth/auth or /auth → 跳转到 GitHub 授权页 ──
    if (url.pathname === '/oauth/auth' || url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.OAUTH_GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: SCOPE,
        state: crypto.randomUUID(),
      });
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
    }

    // ── /callback → 接收 GitHub 回调 + 换 access_token + 给 opener ──
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing ?code parameter', {
          status: 400,
          headers: { 'Content-Type': 'text/plain' },
        });
      }

      let payload;
      try {
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

        if (data.access_token) {
          payload =
            'success:' +
            JSON.stringify({ token: data.access_token, provider: 'github' });
        } else {
          payload =
            'error:' +
            JSON.stringify({
              message: data.error_description || data.error || 'token exchange failed',
            });
        }
      } catch (err) {
        payload = 'error:' + JSON.stringify({ message: 'fetch failed: ' + String(err) });
      }

      // ⚠️ Decap CMS 标准 OAuth 握手协议（CRITICAL）:
      //   1. popup 主动告诉 opener: "authorizing:github"
      //   2. opener 回 echo: "authorizing:github"
      //   3. popup 收到 echo 后才发: "authorization:github:" + payload
      //
      // 之前的写法把方向反了, opener 在等 popup, popup 在等 opener → 死锁
      const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Authorizing…</title>
<style>body{font-family:system-ui;padding:40px;text-align:center;color:#0F172A}</style>
</head><body>
<p id="msg">Authorizing with GitHub…</p>
<script>
(function() {
  if (!window.opener) {
    document.getElementById('msg').textContent =
      'No opener window. Please initiate login from the CMS admin page.';
    return;
  }

  var payload = ${JSON.stringify(payload)};
  var finalMessage = 'authorization:github:' + payload;

  // 1. 监听 opener 的 echo, 收到后回 token 并关闭
  function handle(e) {
    if (e.data && e.data.indexOf && e.data.indexOf('authorizing:github') === 0) {
      window.opener.postMessage(finalMessage, e.origin || '*');
      document.getElementById('msg').textContent = 'Login complete. You can close this window.';
      setTimeout(function(){ window.close(); }, 800);
    }
  }
  window.addEventListener('message', handle, false);

  // 2. 主动告诉 opener "我准备好了, 你回个 echo 给我"
  function ping(){ window.opener.postMessage('authorizing:github', '*'); }
  ping();
  // 兜底: 每 250ms 再发一次, 最多 20 次 (防止 opener 还没准备好)
  var n = 0;
  var t = setInterval(function(){
    if (++n > 20) return clearInterval(t);
    ping();
  }, 250);
})();
</script>
</body></html>`;

      return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }

    // 健康检查
    return new Response(
      'Decap CMS OAuth Proxy is running.\n\nEndpoints:\n  /oauth/auth  → Start GitHub OAuth\n  /callback    → OAuth callback handler\n',
      { headers: { 'Content-Type': 'text/plain' } }
    );
  },
};
