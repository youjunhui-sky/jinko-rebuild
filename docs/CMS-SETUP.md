# 🚀 Decap CMS 部署 + 使用指南

> 给非技术编辑者的内容编辑系统已经搭好。本文档教你 **3 步上线**。

---

## 📦 已经包含什么

| 内容类型 | 文件位置 | CMS 标签 |
|---|---|---|
| 📦 产品 (3 款 EAGLE) | `src/content/products/*.json` | "Products" |
| 📰 新闻 / 博客 | `src/content/news/*.md` | "News & Insights" |
| 📊 首页 KPI | `src/content/stats/homepage.json` | "Homepage KPI Numbers" |
| 🤝 安装商目录 | `src/content/installers/*.json` | "Authorized Installers" |
| 🖼️ 媒体上传 | `public/uploads/` | 所有图片 |

CMS 入口：**`https://你的域名/admin/`**

---

## 🚀 上线 3 步走（合计 ~10 分钟）

### 第 1 步：推到 GitHub（2 分钟）

```bash
cd jinko-rebuild
./scripts/init-github.sh jinko-rebuild 你的GitHub用户名
```

脚本会提示你去 GitHub 创建空仓库，然后告诉你下一条命令。

---

### 第 2 步：部署到 Cloudflare Pages（3 分钟）

1. 打开 **https://dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git**
2. 授权 GitHub，选 `你的用户名/jinko-rebuild`
3. 填写：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. 点 **Save and Deploy**
5. ~60 秒后拿到一个 `*.pages.dev` 域名（之后可以绑自有域名）

---

### 第 3 步：开通 Decap CMS GitHub OAuth（5 分钟）

> 这一步让编辑者能用 GitHub 账号登录 `/admin/`。

#### 3.1 创建 GitHub OAuth App

1. 打开 **https://github.com/settings/developers → New OAuth App**
2. 填写：
   - **Application name**: `Jinko CMS`
   - **Homepage URL**: `https://你的pages.dev地址`
   - **Authorization callback URL**: `https://cms-oauth.你的子域.workers.dev/callback`  
     （先随便填，部署 Worker 后回来改）
3. 点 **Register**，复制 **Client ID** 和 **Client Secret**（Secret 只显示一次）

#### 3.2 部署 OAuth 代理（Cloudflare Worker）

```bash
cd cms-oauth-worker
npm install -g wrangler
wrangler login                                      # 浏览器登录 CF
wrangler secret put OAUTH_GITHUB_CLIENT_ID          # 粘贴 Client ID
wrangler secret put OAUTH_GITHUB_CLIENT_SECRET      # 粘贴 Client Secret
wrangler deploy                                     # 部署
```

部署完会给你一个地址，类似 `https://cms-oauth.youjunhui.workers.dev`。

回到 **第 3.1 步**，把 GitHub OAuth App 的 Callback URL 改成：  
`https://cms-oauth.youjunhui.workers.dev/callback`

#### 3.3 修改 CMS 配置指向你的 OAuth 代理

编辑 `public/admin/config.yml`：

```yaml
backend:
  name: github
  repo: 你的用户名/jinko-rebuild     # ⚠️ 改成真实仓库
  branch: main
  base_url: https://cms-oauth.youjunhui.workers.dev   # ⚠️ 改成你的 Worker
  auth_endpoint: auth
```

提交 + 推送：
```bash
git add public/admin/config.yml
git commit -m "chore: wire CMS to OAuth proxy"
git push
```

CF Pages 自动重新部署。1 分钟后访问 `https://你的pages.dev/admin/`，点 **Login with GitHub** 即可登录。

---

## 👥 邀请编辑者

任何**对仓库有 write 权限的 GitHub 用户**都能登录 CMS。给同事加入：

1. GitHub 仓库 → **Settings → Collaborators → Add people**
2. 填写他们的 GitHub 用户名
3. 他们接到邀请邮件，点接受
4. 让他们打开 `https://你的域名/admin/` → Login with GitHub

---

## ✏️ 日常编辑工作流

1. 编辑者打开 `https://你的域名/admin/`
2. 用 GitHub 登录
3. 选择左侧的内容类型（Products / News / KPI / Installers）
4. 添加 / 编辑 / 删除内容
5. 点 **Save** → 状态变 "Draft"
6. 点 **Set status: In Review** → 状态变 "In Review"
7. 点 **Publish** → 自动提交到 GitHub `main` 分支
8. **Cloudflare Pages 自动触发构建** → 60 秒后内容上线

> ✅ 启用了 **Editorial Workflow**：所有改动先进入草稿，可在 CMS 内预览，确认后才发布。  
> ✅ 所有操作都有 Git 历史，可以一键回滚。  
> ✅ 图片上传自动存到 `public/uploads/` 并 commit。

---

## 🔐 安全说明

- CMS 数据 100% 在你 GitHub 仓库里，没有任何第三方锁定
- Cloudflare Worker 只做 OAuth 转发，不存储任何 token
- 编辑者权限完全由 GitHub 仓库的 collaborators 控制
- `/admin/` 自带 `noindex` 标签，不会被搜索引擎收录

---

## 💸 长期成本

| 服务 | 费用 |
|---|---|
| Cloudflare Pages 托管 | **$0**（500 build/月免费） |
| Cloudflare Worker (OAuth) | **$0**（100K req/天免费） |
| GitHub 仓库（私有） | **$0**（个人无限） |
| Decap CMS | **$0**（开源） |
| **合计** | **$0 / 月** ✅ |

---

## ❓ 常见问题

**Q：编辑者不会用 GitHub 怎么办？**  
A：他们不需要懂 Git。只需注册 GitHub 账号（3 分钟），剩下全在 Web 界面操作。

**Q：能在本地预览 CMS 吗？**  
A：能。把 `config.yml` 里的 `local_backend: true` 取消注释，然后运行 `npx decap-server` + `npm run dev`。

**Q：误删了内容怎么办？**  
A：GitHub 永远保留历史。去仓库 Commits → 点 Revert 一键恢复。

**Q：换 CMS 会很麻烦吗？**  
A：不会。所有数据是 markdown/json，是你的资产，可以无缝迁移到 Sanity/Strapi/Contentful。

---

需要我帮你跑下一步：① 直接帮你创建 GitHub 仓库（需要 token）；② 写 OG 图片自动生成脚本；③ 加搜索功能（Pagefind）？
