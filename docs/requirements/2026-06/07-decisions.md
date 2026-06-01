# 07. 已确认决策

> 确认时间：2026-06-01 21:12 GMT+8
> 确认人：东家

## 已确认

| 问题 | 决策 |
|---|---|
| 品牌是否正式改成 Callsun | **是，正式改为 Callsun** |
| 正式域名是什么 | **后期再处理**，当前开发阶段不阻塞 |
| 是否保留 jinko / jinkosolar.us 相关内容 | **不用保留**，后续全部剥离 |
| 询盘系统用什么 | **先放着**，后面再补充；当前只预留接口/结构，不定具体方案 |
| 客户是否已有 GA4 / GTM / Google Ads 账号 | **应该有，但目前未提供**；当前只预留配置位 |
| 飞书 sheet 图片素材 | **先用占位图**，后期客户补素材包/原图后替换 |

## 对实施的影响

### 1. 品牌重构方向明确

后续站点全部按 **Callsun** 处理：

- 页面标题
- Header / Footer
- Logo 文案
- SEO title / meta
- Schema.org Organization
- OG 图片
- CMS 文案
- 表单邮件主题
- Sitemap / robots 等基础信息

### 2. jinko 相关内容全部移除

不再保留：

- JinkoSolar US 品牌表述
- jinkosolar.us 文案
- 原站复刻痕迹
- 与 Jinko 官方站点容易混淆的内容

保留的只是现有工程技术底座：Astro / Tailwind / Decap CMS / Cloudflare Workers / GitHub Actions。

### 3. 域名暂不阻塞开发

当前继续用开发/预览域名即可。后期正式域名确定后再处理：

- production site URL
- canonical
- sitemap hostname
- robots
- Search Console
- 可能的 301/旧链接策略

### 4. 询盘系统先做“可替换接口”

当前阶段不绑定具体 CRM，但页面和代码应预留：

- Contact / RFQ 表单组件
- hidden UTM 字段
- source / referrer / landing page 字段
- dataLayer 事件
- 后端 submit endpoint 抽象层

后续可切换到：飞书多维表格 / HubSpot / Cloudflare D1 / 其他方案。

### 5. GA4 / GTM / Ads 先预留配置

当前实现方式：

- 环境变量或 site config 中预留 `gtmId`、`ga4Id`、`googleAdsId`
- 未提供 ID 时不加载真实脚本
- 所有转化事件先按 dataLayer 结构写好

### 6. 图片先占位

当前阶段：

- 产品图、系统图、首页图、案例图先用统一占位图/Unsplash/已有素材
- CMS 字段保持 image 可编辑
- 图片 alt 必须先写好，后期替换素材不影响 SEO 结构
