# 08. Callsun B端官网实施拆解 + 工期/报价口径

> 版本：v1
> 日期：2026-06-01
> 用途：给客户沟通范围、排期、报价边界
> 前提：基于现有 `jinko-rebuild` 技术底座继续改造，不从零开发。

---

## 1. 项目定位

本次不是简单页面修改，而是把现有站点升级为：

> **Callsun B2B 询盘型官网 + SEO/SEM 内容增长底座 + 后续可接 CRM 的转化系统。**

核心目标：

1. **品牌切换**：从 Jinko 相关展示站完全切换为 Callsun 独立品牌站。
2. **SEO 结构升级**：建设 Products / Solutions / Applications / Resources / Cases 等三级页面结构。
3. **运营后台升级**：让运营人员可以自行维护产品、方案、博客、案例、SEO 信息。
4. **转化能力预留**：为后续 GA4 / GTM / Google Ads / 表单询盘 / CRM 对接预留基础设施。
5. **内容资产落地**：把客户给的产品参数、系统方案、安装案例转成网站内容。

---

## 2. 总体实施分期

建议拆成 4 个阶段：

| 阶段 | 名称 | 目标 | 建议优先级 |
|---|---|---|---|
| Phase 1 | 品牌与结构重构 | 完成 Callsun 品牌切换、导航、基础页面、三级路由 | **必须做** |
| Phase 2 | 内容模型与 CMS 升级 | 产品、方案、案例、博客、资源中心可后台维护 | **必须做** |
| Phase 3 | SEO/SEM 技术基础设施 | GTM/GA4/Ads 配置位、SEO 字段、埋点结构、Cookie Consent | **强烈建议做** |
| Phase 4 | 询盘与 CRM 闭环 | 表单、来源追踪、询盘管理、邮件通知、导出 | 可后置 |

---

## 3. 详细实施拆解

## Phase 1：品牌与信息架构重构

### 目标

把现有站点从 Jinko 相关内容，全面改造为 Callsun B端官网。

### 工作内容

#### 1.1 品牌替换

- 替换全站品牌为 **Callsun**
- 移除 Jinko / jinkosolar.us 相关内容
- 更新：
  - Header
  - Footer
  - SEO title
  - Meta description
  - Open Graph
  - Schema.org Organization
  - Sitemap 基础信息
  - 页面文案
  - CMS 配置文案

#### 1.2 导航结构重建

一级导航调整为：

```txt
Home
Products
Solutions
Applications
Resources
News & Cases
Support
About Callsun
Contact / Inquiry CTA
```

#### 1.3 三级 SEO 路由建设

新增或重构路由：

```txt
/products/
/products/[slug]/
/solutions/
/solutions/[slug]/
/applications/
/applications/[slug]/
/resources/
/resources/blog/
/resources/blog/[slug]/
/resources/downloads/
/resources/faq/
/resources/videos/
/news/
/cases/
/cases/[slug]/
/support/
/support/[slug]/
/about/
/contact/
```

#### 1.4 基础页面搭建

- 首页 Home
- 产品中心 Products
- 解决方案 Solutions
- 应用场景 Applications
- 资源中心 Resources
- 新闻与案例 News & Cases
- 支持与服务 Support
- 关于我们 About Callsun
- 联系我们 Contact

### 交付物

- Callsun 新版站点结构
- 全新导航
- 基础页面模板
- 可 SEO 抓取的三级 URL 结构

### 工期预估

**3-5 个工作日**

---

## Phase 2：内容模型与 CMS 升级

### 目标

让客户后期能通过后台维护产品、方案、案例、博客、SEO 信息，不依赖开发反复改代码。

### 工作内容

#### 2.1 CMS Collection 重构

新增/调整内容模型：

| Collection | 用途 |
|---|---|
| `products` | 标准组件、非标组件 |
| `solutions` | 并网系统、离网系统 |
| `applications` | 家庭储能、工商业屋顶、离网地区等应用场景 |
| `blog` | 技术文章、SEO 内容 |
| `downloads` | 手册、规格书、证书 |
| `cases` | 安装案例 / 项目案例 |
| `supportPages` | 付款物流、质保政策、技术支持、售后服务、渠道政策 |
| `landingPages` | 后续 SEM 独立落地页预留 |
| `navigation` | 导航入口 / 下拉菜单预留 |

#### 2.2 SEO 字段统一

所有页面支持：

- SEO Title
- Meta Description
- H1
- URL Slug
- Keywords
- Canonical
- OG Image
- Image Alt
- 分类 / 标签

#### 2.3 产品数据录入

根据客户 sheet 初步录入：

标准组件：
- 450W 双玻板
- 580W 组件
- 620W 组件

非标组件：
- 180W 单玻板
- 200W 单玻板
- 215W 单玻板

系统方案：
- 12kW / 28度电 / 10.8kW-PV 并网系统
- 6.5kW / 10度电 / 5.4kW-PV 离网系统
- 10kW / 14度电 / 7.2kW-PV 离网系统

#### 2.4 案例库录入

初步录入：

- 微小型 B端案例：9 个
- 中型工商业案例：15 个
- 大型工商业案例：3 个
- 美国市场重点展示案例：8 个

#### 2.5 页面模板开发

- 产品列表页
- 产品详情页
- 方案列表页
- 方案详情页
- 应用场景列表页
- 应用场景详情页
- 案例列表页
- 案例详情页
- 博客列表页
- 博客详情页
- 下载中心页
- FAQ 页

### 交付物

- CMS 后台可维护内容模型
- 产品 / 方案 / 案例 / 博客模板
- 初始内容录入
- SEO 字段可编辑

### 工期预估

**5-8 个工作日**

---

## Phase 3：SEO / SEM / 数据追踪基础设施

### 目标

为后续 Google SEO、Google Ads、转化追踪、再营销做基础设施。

### 工作内容

#### 3.1 GTM / GA4 / Ads 配置位

预留配置：

- GTM Container ID
- GA4 Measurement ID
- Google Ads Conversion ID
- Google Ads Conversion Label

客户未提供 ID 时，不加载真实脚本；提供后可快速启用。

#### 3.2 dataLayer 事件结构

预埋事件：

核心转化：
- Contact Form Submit
- RFQ Submit
- WhatsApp Click
- Email Click

高意向行为：
- Catalog Download
- Datasheet Download
- Product Inquiry Button Click

辅助行为：
- Scroll Depth 75%
- Time on Page 90s
- Video Watch（预留）

#### 3.3 Cookie Consent

- 增加 Cookie Consent 提示
- 支持用户同意后再加载追踪脚本
- 为 GDPR / 隐私合规预留基础结构

#### 3.4 SEO 技术检查

- sitemap.xml
- robots.txt
- canonical
- hreflang（如继续保留多语言）
- JSON-LD Schema
- Open Graph
- 图片 alt
- 页面语义化 H1/H2/H3

### 交付物

- GTM/GA4/Ads 配置位
- dataLayer 事件体系
- Cookie Consent
- SEO 技术结构

### 工期预估

**3-5 个工作日**

---

## Phase 4：询盘系统 / 轻量 CRM（可后置）

### 目标

把询盘从「表单提交」升级为「可追踪、可通知、可导出、可管理」。

### 当前决策

东家已确认：**询盘系统先放着，后续再补充。**

所以当前阶段只建议做：

- 表单 UI
- 表单字段设计
- 来源追踪字段预留
- submit endpoint 抽象
- GTM 事件触发

### 后续可选方案

| 方案 | 优点 | 缺点 | 适合场景 |
|---|---|---|---|
| 飞书多维表格 | 国内团队查看方便，低成本 | 海外客户不一定适合 | 客户内部主要用飞书 |
| HubSpot Free CRM | B2B 外贸友好，营销能力强 | 配置稍复杂 | 要做标准外贸 CRM |
| Cloudflare D1/KV 自建 | 可控、轻量、低成本 | 需要开发后台 | 要完全自主掌控 |
| Formspree / Web3Forms | 快速上线 | CRM 能力弱 | MVP 阶段 |

### 推荐

如果客户后续认真做 B2B 外贸询盘，建议优先考虑：

> **HubSpot Free CRM + GTM + 网站表单事件**

如果客户希望数据留在自己系统：

> **Cloudflare Worker + D1 + 邮件通知 + CSV 导出**

### 工期预估

| 方案 | 工期 |
|---|---|
| 只做表单 UI + 事件预留 | 1-2 个工作日 |
| 接第三方表单工具 | 2-3 个工作日 |
| 接 HubSpot | 3-5 个工作日 |
| 自建轻量 CRM | 5-10 个工作日 |

---

## 4. 推荐报价方案（三档）

> 以下是沟通口径，不是最终合同价格。可根据客户预算上下浮动。

## A 档：基础改造版

### 范围

- Callsun 品牌替换
- 导航结构重建
- 基础页面搭建
- 产品 / 方案 / 案例基础模板
- CMS 基础字段
- 图片占位
- 不含完整 GTM/GA4/Ads 埋点
- 不含 CRM

### 适合

客户预算有限，但需要尽快把站点改成 Callsun 并上线展示。

### 工期

**8-12 个工作日**

### 报价口径

**¥18,000 - ¥28,000**

---

## B 档：SEO 增长标准版（推荐）

### 范围

包含 A 档，并增加：

- 完整三级 SEO 结构
- CMS 内容模型完整升级
- 产品 / 方案 / 案例 / 博客 / 资源中心完整模板
- SEO 字段后台可编辑
- 初始内容录入
- sitemap / canonical / Schema / OG
- GTM / GA4 / Ads 配置位
- dataLayer 事件预埋
- Cookie Consent 基础版
- 表单 UI + 来源追踪字段预留

### 适合

客户明确要做 SEO / SEM / B2B 询盘，且希望后续运营人员能自己维护内容。

### 工期

**15-22 个工作日**

### 报价口径

**¥38,000 - ¥58,000**

### 推荐理由

这档最符合客户当前需求，既能控制成本，又能把未来 SEO / SEM / 内容运营 / 询盘转化的基础设施搭好。

---

## C 档：询盘转化闭环版

### 范围

包含 B 档，并增加：

- 表单后端
- 询盘入库
- 邮件通知
- UTM / 来源追踪
- 询盘导出
- 简单询盘管理后台或第三方 CRM 对接
- HubSpot / 飞书多维表格 / Cloudflare D1 任选一种集成
- Conversion Tracking 实际联调
- Google Ads 转化事件联调

### 适合

客户已经准备投 Google Ads，并要求每个询盘都能追踪来源和转化效果。

### 工期

**22-35 个工作日**

### 报价口径

**¥68,000 - ¥98,000+**

---

## 5. 当前推荐给客户的表达

建议你和客户这样说：

> 这次需求已经不是普通官网页面调整，而是要把网站升级成一个面向海外 B端代理商和 EPC 客户的询盘型官网。我们建议分阶段做：第一阶段先完成 Callsun 品牌重构、SEO 三级结构、产品/方案/案例内容体系和后台可维护能力；第二阶段再接 GTM/GA4/Google Ads 转化追踪；询盘 CRM 可以先预留接口，等你们确认使用 HubSpot、飞书还是自建系统后再接。

> 如果希望控制成本，建议先做「SEO 增长标准版」，把官网、内容后台、SEO/SEM 基础设施一次搭好；CRM 和正式广告转化联调可以作为后续二期。

---

## 6. 对客户需要补充索取的资料

### 必须补

1. Callsun Logo 源文件
2. 品牌色 / VI 基础规范（如果有）
3. 首页主视觉图 / 工厂图 / 产品图 / 案例图素材包
4. 产品 datasheet PDF
5. 认证证书 PDF / 图片
6. 公司介绍英文版
7. 联系方式：邮箱、电话、WhatsApp、LinkedIn、TikTok
8. GA4 / GTM / Google Ads 账号 ID（后续）

### 可后补

1. 正式域名
2. CRM 方案
3. 真实客户案例图片
4. 博客初始文章
5. 视频素材
6. 多语言翻译内容

---

## 7. 风险与边界

### 风险 1：客户以为只是“改几个页面”

实际是信息架构、CMS、SEO、转化体系重构。报价时要强调「增长型官网」而不是「展示页修改」。

### 风险 2：询盘系统边界不清

当前已确认先放着，所以报价中要明确：

- 当前只预留表单和接口
- 不包含完整 CRM
- 不包含客户后台登录管理
- 不包含广告账户实际配置

### 风险 3：图片素材未给

当前先占位，后续替换素材属于内容更新。如果需要大量修图、选图、AI 生成图，应单独计费。

### 风险 4：Google Ads / GA4 账号未给

当前只能做技术预留，无法完成真实转化联调。等客户给账号后再做二期联调。

---

## 8. 小天建议

对外主推 **B 档：SEO 增长标准版**。

原因：

1. 正好覆盖客户文档里的主要诉求。
2. 不把 CRM 这种未确认模块绑死，避免范围失控。
3. 后续可以自然追加 Phase 4 和广告联调费用。
4. 现有 jinko-rebuild 技术底座可以复用，成本比从零开发低。

建议报价话术：

> 如果只是品牌和页面结构调整，可以做基础版；但考虑你们后续要做 SEO、Google Ads 和 B端询盘，我建议直接做标准版，把 Products、Solutions、Applications、Resources、Cases、SEO 后台字段、GTM/GA4 预留一次搭好。这样后面投广告和发博客时，不需要再返工。

