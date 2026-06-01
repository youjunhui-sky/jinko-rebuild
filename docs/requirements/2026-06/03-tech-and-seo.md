# 03. 技术与 SEO/SEM 基础设施需求

> 来源：飞书 docx《（需沟通）技术与结构层》

## A. 网站架构必须可扩展

- 可扩展的页面结构
- 分类体系
- 后台内容管理能力
- URL 层级结构（支持三级）

## B. SEO 后台能力（运营自助，不依赖开发）

运营需要能改：
- 页面 Title
- Meta Description
- H1 / H2 / H3
- URL slug
- 页面关键词
- 分类名称

**导航栏可自定义**：
- 新入口
- 下拉列表带入口示例缩略图

**各层级页面可扩展**：
- 自定义新页面（产品页 / 系列页 / 自定义页 / 条款页 / 博客页 / 图片替代文本 等）
- 导航栏和自定义页面均可修改标题、描述

**所有页面支持**：
- 自定义 Title
- Meta Description
- H 标签结构
- URL 自定义
- 分类层级
- 页面关键词埋词
- 博客内容管理

## C. 三级 URL 结构（硬性要求）

```
Home → Products → 450w solar panel
Home → Solutions → RV Solar System
Home → Blog → 某篇文章
```

## D. 博客系统（必须）

支持：分类 / Tag / SEO 标题 / 封面图 / 内链 / 推荐文章 / 持续发布

## E. SEM / Google Ads 接口预留

| 项 | 必装 |
|---|---|
| GA4 部署 | ✅ |
| GTM（统一管理所有追踪代码） | ✅ |
| Google Ads Conversion | ✅ |
| 表单转化追踪 | ✅ |
| 再营销代码（Remarketing） | ✅ |
| Cookie Consent（GDPR 合规） | ✅ |
| Pixel | ✅ |
| 事件埋点 | ✅ |
| 表单追踪 | ✅ |

**部署方案**：站点只装 1 个 **GTM Container**，所有追踪代码在 GTM 里统一管理。

## F. 必须埋点的事件清单

### 第一层（核心转化）
- Contact Form Submit
- RFQ Submit（Request for Quote）询价
- WhatsApp Click
- Email Click

### 第二层（高意向行为）
- Catalog Download
- Datasheet Download
- Product Inquiry Button

### 第三层（辅助行为）
- Time on Page > 90 秒
- Scroll Depth > 75%
- Video Watch（后期做案例视频时启用）

## G. 轻量级 CRM / 询盘系统

不仅仅是表单，需要：
- Contact Form
- Inquiry Management
- 客户后台留资
- 邮件通知
- 询盘导出
- 来源追踪（UTM / Referrer）

## H. SEO + SEM 协同（客户原话）

统一：
- Landing Page 结构
- 页面速度
- 关键词结构
- 广告词与 SEO 词协同

→ SEO 负责长尾流量积累；SEM 负责高商业意图词；两者最终都导向**同一个 Landing Page 体系**。

## I. B2B 广告结构建议（客户列出待与 Google 官方确认）

- Search（优先级最高）
- PMAX
- Display
- YouTube（第三阶段）
- Demand Gen（第四阶段）
- Remarketing（非常重要）

**必须**：不同广告系列使用独立 Landing Page。

## J. 必须保留的技术基建（脑图最后清单复述）

| 模块 | 用途 |
|---|---|
| ✅ GTM 集成 | 统一管理所有追踪代码 |
| ✅ GA4 集成 | 用户行为分析、流量追踪 |
| ✅ Conversion Tracking | 表单提交 / 点击追踪、转化事件 |
| ✅ Remarketing | 再营销受众、像素追踪 |
| ✅ Cookie Consent | 合规数据收集、GDPR / 隐私合规 |
| ✅ 可自定义 SEO | Title / Meta / H1 / URL / 描述等 |
| ✅ 博客系统 | 支持分类 / 标签、持续内容发布 |
| ✅ 询盘系统 | 表单 + CRM 客户管理 |

## K. 域名 SEO

客户原文仅写「域名的seo」一项，**需要东家确认**：是否要换新域名（callsun.com 之类）？是否要做 301 重定向？多语言是否走子目录 `/en/ /es/ /zh/` 还是子域名？
