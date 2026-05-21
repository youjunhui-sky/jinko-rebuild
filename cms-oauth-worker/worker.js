// Cloudflare Worker: Decap CMS GitHub OAuth Proxy
// 部署后地址类似: https://cms-oauth.your-name.workers.dev
// 用于让 Decap CMS 完成 GitHub OAuth 登录

const SCOPE = 'repo,user';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── /auth → 跳转到 GitHub OAuth 授权页 ──
    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.OAUTH_GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: SCOPE,
        state: crypto.randomUUID(),
      });
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
    }

    // ── /callback → GitHub 回调, 换 access_token, 通过 postMessage 给 CMS ──
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing code', { status: 400 });

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
        : `error:${JSON.stringify({ message: data.error_description || 'OAuth failed' })}`;

      // 通过 postMessage 把 token 传回 Decap CMS 弹窗
      return new Response(
        `<!doctype html><html><body><script>
          (function() {
            function send(msg){ window.opener && window.opener.postMessage('authorization:github:' + msg, '*'); }
            window.addEventListener('message', function(e){
              if (e.data === 'authorizing:github') send(${JSON.stringify(payload)});
            });
            send(${JSON.stringify(payload)});
            setTimeout(function(){ window.close(); }, 1000);
          })();
        </script><p>Login complete. You can close this window.</p></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    return new Response('Decap CMS OAuth Proxy — endpoints: /auth /callback', {
      headers: { 'Content-Type': 'text/plain' },
    });
  },
};
