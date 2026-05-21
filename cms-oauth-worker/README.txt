# =============================================================
# Decap CMS GitHub OAuth 代理 (Cloudflare Worker)
# =============================================================
# 把这个 Worker 部署到 Cloudflare, 让编辑者点 "Login with GitHub"
# 时能完成 OAuth 流程, 而不需要依赖 Netlify / Decap 公开代理。
#
# 部署步骤:
#   1. cd cms-oauth-worker
#   2. npm install -g wrangler && wrangler login
#   3. 在 GitHub: Settings → Developer settings → OAuth Apps → New
#      - Homepage URL: https://jinkosolar.us
#      - Callback URL: https://cms-oauth.YOUR-SUBDOMAIN.workers.dev/callback
#      获得 CLIENT_ID 和 CLIENT_SECRET
#   4. wrangler secret put OAUTH_GITHUB_CLIENT_ID
#      wrangler secret put OAUTH_GITHUB_CLIENT_SECRET
#   5. wrangler deploy
#   6. 把 public/admin/config.yml 里 base_url 改成你的 Worker 地址
# =============================================================
