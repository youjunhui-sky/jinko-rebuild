#!/usr/bin/env bash
# ============================================================
# 一键初始化 GitHub 仓库 + 提交代码 + 部署到 Cloudflare Pages
# ============================================================
set -e

REPO_NAME="${1:-jinko-rebuild}"
GH_USER="${2:-}"

if [ -z "$GH_USER" ]; then
  echo "用法: ./scripts/init-github.sh <repo-name> <github-username>"
  echo "例: ./scripts/init-github.sh jinko-rebuild youjunhui"
  exit 1
fi

cd "$(dirname "$0")/.."

# 1. 初始化 Git
if [ ! -d .git ]; then
  git init -b main
  echo "✅ git 仓库初始化完成"
fi

# 2. 写 GitHub Actions (CF Pages 已有自动构建, 这里可选)
mkdir -p .github/workflows
cat > .github/workflows/build-check.yml <<'YML'
name: Build Check
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run build
YML

# 3. 提交代码
git add -A
git commit -m "feat: initial commit — Astro + Decap CMS rebuild of jinkosolar.us"

# 4. 提示用户创建 GitHub 仓库
echo ""
echo "═══════════════════════════════════════════════════════"
echo "📋 下一步 (手动 2 分钟):"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "1️⃣  打开浏览器: https://github.com/new"
echo "    - Repository name: $REPO_NAME"
echo "    - Public 或 Private 都可以"
echo "    - 不要勾选 README/gitignore/license (我已经有了)"
echo ""
echo "2️⃣  回到这里, 运行:"
echo "    git remote add origin git@github.com:$GH_USER/$REPO_NAME.git"
echo "    git push -u origin main"
echo ""
echo "3️⃣  部署到 Cloudflare Pages:"
echo "    打开 https://dash.cloudflare.com → Pages → Create → 连接 GitHub"
echo "    - Repo: $GH_USER/$REPO_NAME"
echo "    - Framework preset: Astro"
echo "    - Build command: npm run build"
echo "    - Build output directory: dist"
echo "    点 Deploy. 1 分钟出 URL"
echo ""
echo "4️⃣  设置 Decap CMS GitHub OAuth (5 分钟):"
echo "    见 docs/CMS-SETUP.md"
echo ""
