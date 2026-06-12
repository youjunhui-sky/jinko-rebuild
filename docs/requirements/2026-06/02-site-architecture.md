# 02. 站点信息架构 (IA)

> 来源：客户脑图《Callsun B端官网规划 3.0优化版》，符合 SEO 三级结构 + 支持未来扩展 + 支持 B端询盘转化

## 一级导航 (8 个)

```
Home / Products / Solutions / Applications / Resources / News & Cases / Support / About Callsun
```

## 详细 IA

### 1. 首页 Home
- 1.1 Banner & Slogan
- 1.2 产品/解决方案展示
- 1.3 核心优势
- 1.4 应用场景展示（工商业 / 家庭 / RV 等）
- 1.5 认证与实力展示
- 1.6 合作伙伴 / 案例
- 1.7 新闻 / 博客精选
- 1.8 CTA 留资入口

### 2. 产品中心 Products

> 🆕 **2026-06-12 09:01 重大调整**：东家明确"产品中心 = Custom Module 系列总览"（仿 jinko `/eagle-modules/` 风格），**`/products/` 顶层 = L1 现状完整 4 段**（标语 / Hero 海上游艇 / 4 SKU 卡 / 3 通用 / ContactCTA），**砍掉**原 §2.1 标准组件段 + Hero 段 + StatStrip + finalCta。`/products/custom-modules/` 改 **301 重定向**到 `/products/`。450W/580W/620W 不在 `/products/` 顶层展示（详情页可访问），Header dropdown 跳 `/products/450w-double-glass-solar-module/`。

#### 2.1 Custom Module 系列（产品中心主体，`/products/` 顶层）
- **URL**：`/products/`（L1 + 产品中心合并）
- **段结构（4 段）**：
  - 顶部应用场景标语：mobile | off-grid | marine | rooftop
  - Hero 大场景图（画板 19 海上游艇 + H1 "High-Current. Ultra-Slim. All-Terrain."）
  - 4 SKU 卡片网格：CN120W / CN180W / CN200W / CN275W
  - 3 通用 section：QUALITY / SERVICE | SUPPORT / DOWNLOADS | DOCUMENTS
  - ContactCTA
- **4 SKU 详情页路由**：
  - 2.1.1 120W 组件 🟡 `/products/cn120w-solar-panel`（L2，东家挂起，Learn More 跳占位页）
  - 2.1.2 180W 组件 ✅ `/products/180w-custom-solar-module`（L2）
  - 2.1.3 200W 组件 ✅ `/products/200w-custom-solar-module`（L2）
  - 2.1.4 275W 组件 🟡 `/products/cn275w-solar-panel`（L2，东家挂起，Learn More 跳占位页）

#### 2.2 标准组件（Standard Modules，不在 `/products/` 顶层展示）
- 2.2.1 450W 组件 ✅ `/products/450w-double-glass-solar-module`（L2，Header dropdown 跳此）
- 2.2.2 580W 组件 ✅ `/products/580w-n-type-solar-module`（L2）
- 2.2.3 620W 组件 ✅ `/products/620w-n-type-solar-module`（L2）
- ⚠️ **入口**：Header 顶级 nav "Products" 下拉 → "Standard Modules" 跳 450W 详情页（首推），**后续可加** `/products/standard-modules/` 单独总览页

#### 2.3 历史路由（已合并 / 301）
- ~~`/products/custom-modules/`~~ → 301 → `/products/`（2026-06-12 合并，文件保留为 redirect 兜底）

> 💡 **2026-06-12 调整说明**：
> - **L1 + L2 两级**（仿 jinko eagle-modules 模式）—— L1 是系列家族入口，L2 是单 SKU 详情
> - **215W 移出 L1**：原 §2.2 列的 215W 实际**不在**客户 docx + PDF 4 型号（120/180/200/275）范围内。215W 仅保留在 `src/content/products/215w-custom-module.json`（历史兼容），L1 卡片 4 张 = 120/180/200/275
> - **型号前缀 CN**：CN120W / CN180W / CN200W / CN275W（与 04 文档一致）
> - **L2 详情页 URL 暂用现有 slug**（180w-custom-solar-module / 200w-custom-solar-module），CN 前缀路径待 IA 拍板

**每个 L2 产品详情页包含（5 段，2026-06-12 砍）**：hero 5 滚动 banner / 产品本体（白底图）/ 7 段卖点卡 / **Datasheet PDF 下载入口**（参数全在 PDF，不做 5 组结构化参数表） / **询盘 CTA**

**L2 详情页 wireframe** 详见 `09-180w-product-page-brief.md §三`（2026-06-12 升级版）

### 3. 解决方案 Solutions

#### 3.1 并网系统
- 3.1.1 **12kW · 28度电 · 10.8kW-PV**
- 3.1.2 其他并网方案（未来扩展）

#### 3.2 离网系统
- 3.2.1 **6.5kW · 10度电 · 5.4kW-PV**
- 3.2.2 **10kW · 14度电 · 7.2kW-PV**
- 3.2.3 其他离网方案（未来扩展）

**每个方案详情页包含**：系统介绍 / 组件清单 / 系统拓扑图 / 应用场景 / 案例参考 / 留资咨询

### 4. 应用场景 Applications
- 4.1 家庭储能
- 4.2 工商业屋顶
- 4.3 离网地区
- 4.4 其他场景（未来扩展）

**每个场景页包含**：场景介绍 / 推荐解决方案 / 相关产品 / 案例展示 / 留资表单按钮

### 5. 资源中心 Resources
- 5.1 技术文件下载（手册 / 规格书 / 证书）
- 5.2 技术 Blog
- 5.3 安装指南
- 5.4 常见问题 FAQ
- 5.5 视频中心

### 6. 新闻与案例 News & Cases
- 6.1 新闻动态
- 6.2 项目案例
- 6.3 展会活动（未来扩展）

### 7. 支持与服务 Support
- 7.1 付款与物流
- 7.2 质保政策
- 7.3 技术支持
- 7.4 售后服务
- 7.5 渠道政策

### 8. 关于我们 About Callsun
- 8.1 公司介绍
- 8.2 工厂实力
- 8.3 认证证书
- 8.4 合作伙伴（未来扩展）
- 8.5 联系我们

## SEO 三级结构（强制）

| 类型 | URL 示例 |
|---|---|
| 产品页面 | `首页 /Home → 产品中心 /Products → 450w solar panel /Products/450w-solar-panel` |
| 解决方案 | `首页 /Home → 解决方案 /Solutions → 离网 6.5kW /Solutions/off-grid-6.5kw` |
| 博客页面 | `首页 /Home → 资源中心 /Resources/Blog → 文章 /Resources/Blog/article-title` |

> 客户原文：「谷歌更容易抓取、权重传递更合理、SEO 更强」

## 全站留资入口

- 顶部导航栏留资按钮
- 底部留资表单
- 每个产品 / 方案页 CTA
- WhatsApp / 邮箱 / 电话
- 领英（LinkedIn）/ TK（TikTok）
