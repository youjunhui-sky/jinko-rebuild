# 06. 与现有工程差距 + 需要确认事项

## 1. 现有 jinko-rebuild 已具备能力

| 能力 | 现状 |
|---|---|
| Astro + Tailwind 静态站 | ✅ 已完成 |
| Cloudflare Workers 静态部署 | ✅ 已完成 |
| GitHub Actions 自动部署 | ✅ 已完成 |
| Decap CMS | ✅ 已完成 |
| 产品页 | ✅ 已有初版，但产品模型需按 Callsun 新参数重构 |
| 新闻/博客能力 | ✅ 有新闻；博客需要升级成 Resources/Blog 体系 |
| Case Studies | ✅ 已有模块，但需迁移到新案例库与美国代理商叙事 |
| 多语言 en/es/zh | ✅ 已有初版 |
| Pagefind 全站搜索 | ✅ 已有 |
| Cloudflare Web Analytics | ✅ 已有 |
| SEO meta / OG / sitemap | ✅ 已有基础 |

## 2. 新需求带来的主要改造

### P0：品牌与定位变更

- 从 Jinko US Rebuild 转为 **Callsun B端官网**
- 首页、导航、SEO title、OG、schema、页脚、CMS 文案全部需要改品牌
- URL 与内容结构按 Callsun IA 重建

### P0：三级 SEO 结构落地

需要新增/调整路由：

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

### P0：CMS 内容模型升级

需要新增或重构 collection：

- `products`：组件产品
- `solutions`：并网/离网系统方案
- `applications`：应用场景
- `blog`：技术文章
- `downloads`：手册/规格书/证书
- `cases`：安装案例
- `supportPages`：付款物流、质保、技术支持、售后、渠道政策
- `navigation`：导航自定义入口 + 下拉缩略图
- `landingPages`：SEM 独立落地页
- `inquiries`：如果继续用静态站，需要接外部表单/CRM；Decap 不适合作询盘后台

### P0：SEO 字段标准化

所有可发布页面统一支持：

- seoTitle
- metaDescription
- h1
- slug
- keywords[]
- canonical
- ogImage
- noindex（可选）
- imageAlt

### P0：GTM/GA4/Ads 埋点

现状只有 Cloudflare Web Analytics。新需求需要：

- GTM Container ID 配置项
- Cookie Consent 横幅
- dataLayer event 事件体系
- 表单提交事件
- WhatsApp / Email / Phone 点击事件
- Catalog / Datasheet 下载事件
- Product Inquiry Button 点击事件
- 滚动深度 / 停留时间事件

### P0：询盘系统 / 轻量 CRM

现有 Contact 页面只是页面，不是完整 CRM。

可选方案：

1. **低成本最快**：Web3Forms / Formspree / Basin + 邮件通知 + CSV 导出
2. **中等方案**：Airtable/Bitable/飞书多维表格作为 CRM
3. **专业方案**：HubSpot Free CRM + 表单嵌入/GTM
4. **自建方案**：Cloudflare Worker + D1/KV + 后台管理页

建议优先：**Cloudflare Worker + D1/KV 或 HubSpot Free**，因为客户明确要来源追踪、询盘导出、后台留资。

## 3. 需要东家确认的问题

### A. 品牌/域名

1. 最终品牌名是否确定为 **Callsun**？
2. 是否仍然保留 jinkosolar.us 相关表述，还是全部剥离？
3. 正式域名是什么？是否需要做旧域名 301？

### B. CMS / 后台

4. 客户说「运营能自己修改，不依赖开发」，是否接受 Decap CMS？还是要更像 WordPress 的可视化后台？
5. 导航栏自定义是否必须做到 CMS 可编辑？
6. 独立 Landing Page 是否要开放 CMS 创建？

### C. 询盘 / CRM

7. 询盘数据放哪里？邮件、飞书多维表格、HubSpot，还是 Cloudflare D1？
8. 是否要客户登录后台看询盘？
9. 是否需要防垃圾：Turnstile / reCAPTCHA？

### D. Google / SEM

10. 客户是否已有 GA4 / GTM / Google Ads 账号？
11. Cookie Consent 需要严格 GDPR 还是简单提示？
12. 是否需要我们代问 Google Manager，还是只在技术上预留？

### E. 内容与素材

13. sheet 中很多产品图片是 embed-image，需要从飞书导出原图；目前只抓到图片占位 id。
14. 首页 sheet 只有两张图片，无文字内容。是否需要客户补首页文案？
15. 580W/620W 标准组件品名为空，是否要补全？
16. 产品手册 / 规格书 / 证书 PDF 是否已有？

## 4. 推荐实施顺序

### Phase 1：结构与品牌重构（优先）
- Callsun 品牌替换
- 一级导航 + 三级路由搭建
- CMS collection schema 重构
- 产品/方案/案例基础数据录入

### Phase 2：转化系统
- 全站 CTA
- 表单系统
- 来源追踪
- 邮件通知 / CRM 接入

### Phase 3：SEO/SEM 基建
- GTM/GA4 配置
- Cookie Consent
- dataLayer 事件
- 下载/点击/表单/WhatsApp 埋点

### Phase 4：内容运营能力
- Blog 分类/Tag/推荐文章/内链
- Resources 下载中心
- SEM Landing Pages
- 案例详情页扩展

## 5. 当前结论

客户这次不是简单改页面，而是要求把站点升级为：

> **面向美国二三级代理商的 Callsun B2B 询盘型官网 + SEO/SEM 内容增长底座 + 轻量 CRM 转化系统。**

这会比现有 jinko-rebuild 增加 3 类核心工作：

1. **内容模型重构**：Products / Solutions / Applications / Resources / Cases / Support
2. **营销技术栈**：GTM / GA4 / Ads Conversion / Cookie Consent / 事件埋点
3. **询盘闭环**：表单、来源追踪、通知、导出、后台查看
