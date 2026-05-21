# Jinko US - Rebuild (Astro + Tailwind)

> 这是 https://jinkosolar.us/ 的现代化重构示例工程
> 由 OpenClaw / 小天 生成 (2026-05-21)

## 为什么不用 WordPress？

原站痛点 + 本工程对应方案：

| 原站问题 | 本工程方案 |
|---|---|
| 🔴 TTFB ~10s (WP + 50 个 JS 插件) | **全静态预渲染，TTFB <100ms** |
| 🔴 50 个外链 JS / 单页 1.5MB+ | **零 JS 默认（Island 架构按需注水），首页 < 80KB** |
| 🔴 PHP + MySQL + Cloudflare 缓存 10 分钟 | **静态 HTML + CDN 永久缓存** |
| 🔴 完全没 meta description / OG / Twitter / JSON-LD | **全套 SEO meta + Schema.org Organization/Product/Breadcrumb** |
| 🔴 H 标签层级混乱 (H1→H6→H3) | **严格语义化 H1→H2→H3** |
| 🔴 5 张图缺 alt | **强制 alt 校验 + Astro Image 自动 WebP/AVIF** |
| 🔴 Slider Revolution 398KB | **纯 CSS Hero + Swiper(可选)** |
| 🔴 GeneratePress + Elementor + WooCommerce 堆叠 | **Astro 单一技术栈** |
| 🔴 无 hreflang, 无多语言 | **i18n 路由 + hreflang 自动注入** |
| 🔴 PDF 抢规则关键词 (旧型号 PDF 排名) | **HTML 产品页 + 结构化数据** |
| 🔴 SEO 极弱 (4月仅 5200 访问) | **完整 SEO 矩阵 + sitemap.xml/robots.txt 自动生成** |

## 技术选型

- **框架**：Astro 5.x (Islands Architecture + SSG)
- **样式**：Tailwind CSS 4 (零运行时)
- **类型**：TypeScript (严格模式)
- **图片**：Astro `<Image>` (自动 WebP/AVIF/响应式)
- **SEO**：astro-seo + 自建 SchemaOrg 组件
- **国际化**：Astro i18n (en-US / es-MX / zh-CN)
- **部署**：Cloudflare Pages / Vercel / Netlify 任选 (零成本)
- **CMS（可选）**：内容用 Markdown/MDX 维护，可后续接 Sanity/Strapi

## 性能预期

| 指标 | 原站 | 本工程 |
|---|---|---|
| Lighthouse Performance | ~30 | **95+** |
| Lighthouse SEO | ~70 | **100** |
| LCP | ~8s | **<1.5s** |
| TBT | ~2000ms | **<100ms** |
| 首页 JS | 1.5MB | **<50KB** |
| 首屏 HTML | 40KB | **15KB** |

## 启动

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # 输出到 dist/
pnpm preview  # 预览 build
```

## 目录结构

```
src/
├── components/      # 可复用组件 (Hero, Stat, Feature, Footer 等)
├── layouts/         # BaseLayout (SEO/Schema/i18n 统一注入)
├── pages/           # 路由 (基于文件)
│   ├── index.astro              # 首页
│   ├── eagle-modules.astro      # 产品页
│   ├── eagle-storage.astro      # 储能页
│   ├── homeowners.astro         # 家用市场
│   ├── about.astro              # 关于
│   ├── jacksonville.astro       # 美国工厂
│   ├── warranty.astro           # 保修 (原站缺失!)
│   ├── installer-finder.astro   # 找安装商 (原站缺失!)
│   └── tiger-neo.astro          # 旗舰产品页 (原站缺失!)
├── content/         # Markdown 内容 (新闻/案例)
├── data/            # 静态数据 (产品规格 JSON)
└── styles/          # 全局样式
```
