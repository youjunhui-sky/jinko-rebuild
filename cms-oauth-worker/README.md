# Decap CMS OAuth 代理

这是一个**独立的 Cloudflare Worker**，专门处理 Decap CMS 的 GitHub 登录。
和你主站的 Worker 完全独立。

## 🚀 5 分钟部署步骤

### 1. 创建 GitHub OAuth App

打开 **https://github.com/settings/developers** → **New OAuth App**

填写：
- **Application name**: `Jinko CMS`
- **Homepage URL**: `https://jinko-rebuild.youjh120608.workers.dev`
- **Authorization callback URL**: `https://jinko-cms-oauth.YOUR-SUBDOMAIN.workers.dev/callback`  
  （子域名先随便填，部署 Worker 后回来改）

点 **Register application** →
- 复制 **Client ID**
- 点 **Generate a new client secret** → 复制 **Secret**

### 2. 部署 Worker

```bash
cd cms-oauth-worker

# 安装 wrangler (如果还没装)
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 写入 secrets
wrangler secret put OAUTH_GITHUB_CLIENT_ID
# 粘贴上一步的 Client ID, 回车

wrangler secret put OAUTH_GITHUB_CLIENT_SECRET
# 粘贴上一步的 Secret, 回车

# 部署
wrangler deploy
```

部署完成后会输出你的 Worker URL，类似：  
`https://jinko-cms-oauth.youjunhui-sky.workers.dev`

### 3. 回到 GitHub OAuth App 改 Callback URL

把第 1 步那个**Authorization callback URL** 改成真实地址：  
`https://jinko-cms-oauth.youjunhui-sky.workers.dev/callback`

点保存。

### 4. 更新主站 config.yml 指向真实 Worker

打开 `public/admin/config.yml`，把：

```yaml
backend:
  base_url: https://jinko-rebuild.youjh120608.workers.dev
```

改成：

```yaml
backend:
  base_url: https://jinko-cms-oauth.youjunhui-sky.workers.dev
```

提交：

```bash
cd ..
git add public/admin/config.yml
git commit -m "chore: wire CMS to OAuth proxy"
git push
```

主站会自动重新部署。60 秒后访问 `https://jinko-rebuild.youjh120608.workers.dev/admin/` →  
点 **Login with GitHub** → 大功告成 ✅

## ❗ 验证 Worker 工作正常

部署完后直接访问 `https://你的-cms-oauth.workers.dev/`，
应该返回：

```
Decap CMS OAuth Proxy is running.

Endpoints:
  /oauth/auth  → Start GitHub OAuth
  /callback    → OAuth callback handler
```

看到这段就说明 Worker 部署成功了。

## 🐛 常见问题

**Q: 点 Login with GitHub 后弹窗一闪就关了**  
A: 浏览器拦了弹窗。允许 `jinko-rebuild.youjh120608.workers.dev` 弹窗。

**Q: GitHub 跳回来后报 "OAuth failed"**  
A: Callback URL 没对上。检查 GitHub OAuth App 的 Callback URL 是否和 Worker 地址一字不差。

**Q: 登录成功但 CMS 报 "User account requires Authorization"**  
A: 这个 GitHub 用户没有仓库的 write 权限。去仓库 Settings → Collaborators 加。
