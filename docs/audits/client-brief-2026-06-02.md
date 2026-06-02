# Callsun 官网阶段交付简报

## 当前阶段结论

Callsun 官网已从原先偏展示型站点，升级为面向 B2B 询盘、SEO 内容运营和后续广告投放的官网基础版本。

当前版本已具备：

- 完整一级导航结构
- 产品中心
- 解决方案
- 应用场景
- 资源中心
- 新闻与案例
- 支持与服务
- 关于我们
- 联系询盘
- 后台 CMS 自助编辑
- SEO 字段编辑
- 表单询盘基础接口
- 后续 GA4 / GTM / Google Ads / CRM 对接预留

## 已完成的主要内容

### 1. 网站结构

已按 B2B 官网规划完成主要栏目：

- Home
- Products
- Solutions
- Applications
- Resources
- News & Cases
- Support
- About Callsun
- Contact

### 2. CMS 后台编辑

以下内容已支持后台编辑：

- 首页内容
- 产品总览和产品详情
- 解决方案总览和详情
- 应用场景总览和详情
- 资源中心、下载、博客、FAQ、视频中心
- 案例总览和案例详情
- 支持服务总览和详情
- 关于我们
- 联系页面和表单选项
- 导航栏和页脚导航
- SEM 落地页
- 自定义 SEO 页面

### 3. SEO 基础

主要页面已支持：

- SEO Title
- Meta Description
- H1
- Keywords
- Canonical
- OG Image
- Noindex
- FAQ schema
- Article schema
- Sitemap
- Robots
- 站内搜索索引

### 4. B2B 转化能力

已完成：

- 联系表单
- 落地页 RFQ 表单
- UTM 来源追踪字段
- Referrer 记录
- Landing page 记录
- Buyer role / Application / Timeline / Document needs 等字段
- Cloudflare Worker `/api/inquiry` 接口
- 默认 mock 模式
- 后续 Webhook / CRM / 飞书多维表格 / HubSpot 对接预留

### 5. 广告和数据追踪预留

已预留：

- GTM
- GA4
- Google Ads conversion
- Cookie Consent
- dataLayer events
- 表单提交事件
- 下载点击事件
- CTA 点击事件
- 视频观看点击事件
- SEM 落地页事件

## 当前验证状态

已新增自动 QA 命令：

```bash
npm run qa:launch
```

最近一次检查结果：

- 构建成功
- 生成 66 个 HTML 文件
- 站内搜索索引 65 个页面
- 0 个失败项
- 2 个预期提醒：
  1. 当前仍是 staging `workers.dev` 域名
  2. 部分图片仍是 placeholder，等待正式素材替换

## 当前仍需客户提供

### 品牌素材

- Callsun 官方 Logo 源文件
- Favicon / Icon
- 品牌色或品牌规范，如有

### 产品资料

- 450W / 580W / 620W 产品图
- 180W / 200W / 215W 非标组件产品图
- 各型号规格书 PDF
- 认证证书 PDF
- 质保文件

### 方案资料

- 并网 / 离网系统图
- BOM 或组件清单
- 安装指南
- 电池、逆变器、配件图片

### 案例资料

- 真实项目照片
- 项目容量、地点、完工时间
- 是否允许公开展示
- 案例 PDF，如有

### 公司资料

- 工厂外观
- 产线照片
- 仓库照片
- 质检 / 测试照片
- 团队或办公室照片，如需展示

### 上线配置

- 正式域名
- GTM ID
- GA4 ID
- Google Ads 转化 ID / Label
- CRM 或 Webhook 接收地址
- 最终联系方式：邮箱、电话、WhatsApp、LinkedIn、TikTok

## 后续上线建议流程

1. 客户确认当前页面结构和栏目方向
2. 客户提供正式图片、PDF 和联系信息
3. 替换 placeholder 素材
4. 配置正式域名
5. 配置 GA4 / GTM / Google Ads
6. 决定询盘接收方式：邮箱、CRM、Webhook、飞书多维表格等
7. 测试 Contact 和 Landing Page 表单
8. 运行 `npm run qa:launch`
9. 最终上线

## 技术交付文档

已同步生成：

- `docs/audits/delivery-summary-2026-06-02.md`
- `docs/audits/cms-editing-guide.md`
- `docs/audits/image-alt-audit.md`
- `docs/audits/launch-qa-checklist.md`
