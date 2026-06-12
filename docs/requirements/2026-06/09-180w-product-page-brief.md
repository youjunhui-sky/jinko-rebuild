# 09. Custom Module 非标组件系列页面规划

> 来源：客户 docx `docs/1-180w-规划示意.docx`（4.1 MB / 52 段 / 11 张内嵌图）  
> 补充：客户滚动图原文件夹 + 180W 规格书 PDF（`inbox/callsun-2026-06-11/`，2026-06-11 投放）
> 提取时间：2026-06-11
> 整理人：小天
> 升级时间：2026-06-12（v0.2，参考 jinkosolar.us/eagle-modules 重构为"系列总览 + SKU 详情"两级）
> 状态：✅active（docx + 7 张滚动图 + 12 页规格书 PDF 全部入库并分析完毕）

> ✅ **详情页 banner 模式已定：方案 A · 5 滚动 banner**（2026-06-12 08:31 东家明确"上方需要展现滚动图的形式" + "滚动的图片我也给到你了"—— 客户原文件夹 `inbox/callsun-2026-06-11/1-180w 2-定-选图-上传用/` 7 张图入库）。**banner 顺序见 §九**。

---

## 一、摘要

参考 jinkosolar.us/eagle-modules 风格（2026-06-12 实测扒站），客户给的 wireframe 应升级为**两级页面**：

- **L1 非标组件系列总览页**（= eagle-modules 角色）：顶部应用场景标语 + 4 SKU 卡片（CN120W/CN180W/CN200W/CN275W），每张卡 Learn More 跳详情
- **L2 SKU 详情页**（= eagle-g7b 角色）：hero 头图 + 产品本体 + 7 段卖点 + **参数表** + **询盘 CTA** + **相关 Solutions**

**主题产品**：180W N-Type TOPCon 工商业级太阳能组件（已收录于 `src/content/products/180w-custom-module.json`，本稿是其详情页视觉与文案升级源）。**L1 页面是新增**（当前 IA 缺此层级），L2 页面 180W 是首版，其它 SKU 复用模板。

**jinko eagle-modules 扒站结论**（2026-06-12 实测）：
- 顶部"utility | commercial | residential" 是**装饰标语**（Elementor h6），**不是 tab**
- 核心分组：**EAGLE® G7 系列** → 子 SKU **EAGLE® G7B**（独立页 `/eagle-g7b/`）
- G7 section 内只有 h1 + 一段描述 + 产品图 + Learn More 链到子页（无滚动 banner、无 7 段卖点、无白底图，那些都在子页）
- 底部三个通用 section：**QUALITY** / **SERVICE | SUPPORT** / **DOWNLOADS | DOCUMENTS | ARCHIVED PRODUCTS**
- 所有规格/证书/手册都归到 `/download-center/`，eagle-modules 页本身不放参数表

---

## 二、L1 · 非标组件系列总览页（参考 jinko eagle-modules）

> **页面定位**：相当于 jinko `/eagle-modules/`，**不是**单 SKU 内嵌所有内容。  
> **URL**：`/products/custom-modules/`（或 `/products/n-type-topcon-mobile/` 暂定，待 IA 定）  
> **角色**：Custom Module 系列家族入口，下挂 4 SKU（CN120W/CN180W/CN200W/CN275W），每张卡跳 L2 详情页

### 1. 顶部应用场景标语

- **结构**：仿 jinko "utility | commercial | residential" 的 h6 装饰行，**不是 tab**（jinko 是静态文本，无 JS 切换）
- **文案（中英）**：
  - EN：`mobile | off-grid | marine | rooftop`
  - 中：`移动电源 · 离网作业 · 船用甲板 · 屋顶应用`
- **位置**：页面 hero 区上方或下方一行小字，跟 hero 平级
- **用途**：告诉访客这个系列覆盖哪些应用场景，引导向下滚

### 2. Hero 头图（大场景太阳能安装项目）

- **客户原意**："放一张头图示意 大场景的太阳能安装项目即可"
- **参考素材**：
  - `image1.png`（927 KB）—— 头图占位
  - `image2.png`（860 KB）—— 参考样式（"比如这样的"）
  - `inbox/callsun-2026-06-11/1-180w   2-定-选图-上传用/画板 18.jpg`（家庭屋顶，1464×600）—— 客户已选的真实摄影 banner
  - `画板 19.jpg`（海上游艇，1464×600）—— 备选
- **建议**：用 `画板 18.jpg` 或 `画板 19.jpg`（客户选的实拍图，比占位图质量高），image1/2 占位可废弃

### 3. 4 SKU 卡片网格（核心 ⭐）

> 仿 jinko EAGLE G7 section 内的"系列下挂 SKU"逻辑：1 个系列总览页 + 4 个 SKU 详情页

#### 3.1 卡片样式（参考 jinko EAGLE G7B 子链）

- **客户原意**："像这样单个去展示，然后有个详情按钮，点击进去就是详情"（"图片用我们 180W 的白底图生成就可以了"）
- **结构**（每张卡）：
  ```
  ┌──────────────────────────────┐
  │  [白底产品图，1:1]            │
  │                              │
  │  CN180W        ★ featured   │
  │  180W Custom N-Type TOPCon   │
  │  Solar Module                │
  │                              │
  │  Pmax 180W · Vmp 21.93V      │
  │  Cell Eff 25% · IP68         │
  │  尺寸 1180×770×35 mm         │
  │                              │
  │  [ Learn More → ]            │
  └──────────────────────────────┘
  ```
- **按钮文案**：EN `Learn More` / 中 `了解详情`（jinko 用 Learn More）
- **白底图素材**：
  - `画板 1.jpg`（1600×1600，980KB）—— CN180W/CN200W/CN275W 通用（客户自选）
  - `画板 2.jpg`（1600×1600，460KB）—— 备用
  - CN120W 暂无白底图，需客户提供（120W 暂不建详情页，卡片用占位图）

#### 3.2 4 SKU 卡片内容

| # | 型号 | 卡片标题 | 关键 spec 行 | Learn More 跳 | 卡片状态 |
|---|---|---|---|---|---|
| 1 | **CN120W** | 120W Custom N-Type TOPCon Solar Module | Pmax 120W · Vmp 20.48V · Cell Eff 25% · 1100×578×30 mm | `/products/cn120w-solar-panel` | 🟡 暂不建（东家挂起，卡片占位）|
| 2 | **CN180W** | 180W Custom N-Type TOPCon Solar Module | Pmax 180W · Vmp 21.93V · Cell Eff 25% · IP68 · 1180×770×35 mm | `/products/cn180w-solar-panel`（或 `180w-custom-solar-module`，现 slug）| ✅active（180w-custom-module.json 已升级）|
| 3 | **CN200W** | 200W Custom N-Type TOPCon Solar Module | Pmax 200W · Vmp 23.74V · Cell Eff 25% · IP68 · 1304×770×35 mm | `/products/cn200w-solar-panel` | ✅active（200w-custom-module.json）|
| 4 | **CN275W** | 275W Custom N-Type TOPCon Solar Module | Pmax 275W · Vmp 21.29V · Cell Eff 25% · IP68 · 1736×766×35 mm | `/products/cn275w-solar-panel` | 🟡 暂不建（东家挂起，卡片占位）|

> 💡 **型号前缀 CN**：2026-06-11 已统一；卡片标题统一用 `XXXW Custom N-Type TOPCon Solar Module`（与 180W/200W 现 slug 风格一致）。
> 🟡 **120W/275W 卡片**：东家挂起，CMS 暂不建独立详情页。L1 卡片仍展示 4 张，**Learn More 跳占位页**（"Coming Soon" 或锚点跳 L1 顶部说明）。

#### 3.3 卡片文案（中英双语） ⭐可直接进 CMS

**EN（系列级 tagline，可放 L1 hero 副标题或 series.description）：**
> High-Current. Ultra-Slim. All-Terrain. Our commercial-grade TOPCon solar modules deliver outputs from 120W to 275W. Featuring a unique dual-cell parallel design, they ensure uninterrupted energy yields even under complex conditions—whether it's shading, high temperatures, or narrow spaces.

**中：**
> 高电流、超纤薄、全地形。工商业级 TOPCon 太阳能模块，覆盖 120W-275W 功率区间。凭借独特的双电池并联设计，让复杂工况（阴影/高温/狭窄空间）不再阻碍能效收成。

> 💡 **应用建议**：这段正好是 L1 系列页的 `series.tagline` + 各 SKU 的 `tagline` 共用源。`src/content/products/180w-custom-module.json` 当前 tagline 已含 180W 单型号版本，**L1 升级时建议在 series 集合新建一个 `custom-modules-series.json` 共用这段。**

### 4. L1 底部三个通用 section（仿 jinko）

> jinko eagle-modules 底部固定 3 个 section，**所有系列总览页通用**，建议做成 Astro layout 的共享组件。

#### 4.1 QUALITY

- 引用 Callsun 真实认证（PDF p2）：IEC 61215 / IEC 61730 / ISO 9001:2023 / ISO 14001:2023 / ISO 45001:2023 / CE / RoHS
- EN 文案：
  > Looking for high-quality solar? Callsun modules are manufactured under rigorous quality-control standards. Each module passes UL and IEC testing. We work with the world's leading third-party organizations to audit our facilities, test our products, and refine our state-of-the-art manufacturing process. As a result, Callsun ranks among the lowest warranty claim rates in the industry.

#### 4.2 SERVICE | SUPPORT

- 客服邮箱：**callsun-service@outlook.com**（PDF p10 真实邮箱）
- EN 文案：
  > We stand behind every module we ship. If you have a warranty claim, contact your installer first. If you cannot reach your installer or you were the direct purchaser, please contact us at callsun-service@outlook.com with your order details and a description of the issue. Our service team will respond within 1 business day.

#### 4.3 DOWNLOADS | DOCUMENTS

- EN 文案（仿 jinko）：
  > Datasheets, installation manuals, warranty terms, certifications, brochures, and more — all available in our [Download Center →](/resources/).
- **L1 页本身不放具体 PDF**（仿 jinko 跳 download-center 模式）—— 详细 PDF 放 `/resources/datasheets/` 或 `/resources/`

### 5. 询盘 CTA（L1 底部全宽条）

- **结构**：全宽深色背景条 + 一句 slogan + "Request a Quote" 按钮
- EN 文案：
  > Need a custom configuration or volume pricing? Our B2B team is ready to help.
  > [ Request a Quote → ]
- 中文案：
  > 需要定制配置或批量报价？我们的 B2B 团队随时为您服务。
  > [ 立即询盘 → ]
- **位置**：QUALITY / SERVICE / DOWNLOADS 三个 section 之后，footer 之前
- **逻辑**：每张 SKU 卡有 Learn More 跳详情；详情页底部有同款 CTA（§三.6）；L1 顶部 nav 也有 inquiry 入口（仿 jinko 顶部按钮）

---

## 三、L2 · SKU 详情页（参考 jinko EAGLE G7B 风格）

> **页面定位**：相当于 jinko `/eagle-g7b/`，**单 SKU 详情页**。  
> **URL**：`/products/cn180w-solar-panel`（CN180W 暂用现 slug `180w-custom-solar-module`）  
> **角色**：每个 SKU 一套详情页，复用同模板；CN180W 是首版（已升级），CN200W/215W 复用，CN120W/275W 暂不建  
> **结构（6 段）**：hero + 产品本体 + 7 段卖点 + **参数表** + **询盘 CTA** + **相关 Solutions** —— 比原 wireframe 多了 3 个 jinko 风标配

### 1. Hero 头图（方案 A 5 滚动 / 方案 B 1 hero）⏸待拍板

- 客户指示："头图这里做滚动播放"，"这里放这几张滚动图（另外附上了文件夹）"
- 内嵌图：
  - `image7.png`（1.1 MB）—— 滚动图 1
  - `image8.png`（258 KB）—— 滚动图 2
  - `image9.jpeg`（121 KB）—— 滚动图 3
  - `image10.png`（154 KB）—— 滚动图 4
- 客户原文件夹（7 张已入库，0 重叠）：
  - `inbox/callsun-2026-06-11/1-180w   2-定-选图-上传用/画板 18.jpg`（家庭屋顶，608K）
  - `画板 19.jpg`（海上游艇，696K）
  - `画板 6.jpg`（沙漠房车+高温图，252K）
  - `画板 8.jpg`（N-Type vs P-Type 对比，652K）
  - `画板 1.jpg` / `画板 2.jpg`（白底产品图，980K / 460K）
  - `1.png`（卖点矩阵 5 模块拼图，1.2M）
- ⚠️ **方案 A vs B 拍板**：见顶部 banner A/B 提示
  - A：5 滚动 banner（客户原意）—— 推荐顺序见 §九
  - B：1 hero + 多组卖点配图卡（jinko EAGLE G7B 风）

### 2. 产品白底图

- 客户指示："这个直接就用我们的 180W 的白底图生成就可以了"
- 客户已选的真实白底图（替换原 docx image4 占位）：
  - `画板 1.jpg`（1600×1600，980K）—— 详情页主图
  - `画板 2.jpg`（1600×1600，460K）—— 详情页主图 #2 / 不同角度
- 展示形式建议：白底图 + 倒影，1:1 或 4:3 居中，鼠标 hover 切换正面/反面

### 3. 七段卖点卡（中英双语） ⭐核心文案

> 每段结构：**英文标题 + 英文描述 + 中文标题 + 中文描述**（共 4 段）  
> 每段配 1 张装饰图（图中图标/产品图）

| # | 英文标题 | 中文标题 | 装饰图建议 |
|---|---|---|---|
| 1 | Flagship N-Type Technology | N型旗舰技术 | `画板 8.jpg`（N-Type vs P-Type 对比）|
| 2 | 30% Bifacial Power Gain | 30% 双面功率增益 | `画板 19.jpg`（海上游艇反射场景）或 `image6.jpeg`（docx 占位）|
| 3 | Excellent Low Temperature Coefficient | 优异的低温系数 | `画板 6.jpg`（沙漠房车+高温折线图）|
| 4 | Tailored Architecture for Narrow Spaces | 狭窄空间定制结构 | `画板 18.jpg`（家庭屋顶场景）或 `image9.jpeg`|
| 5 | Dual-Cell Parallel Circuitry for Shade Resilience | 双电池并联抗阴影 | `image10.png`（双单元示意图）|
| 6 | All-Terrain, All-Weather Protection | 全地形全天候防护 | `1.png`（IP68 / 抗冲击图标）|
| 7 | Dual Quality Assurance | 双重品质质保 | `1.png`（25 年寿命 / 质保图标）|

> ⚠️ 图-段对应是按 docx 段落引用顺序 + 客户新图内容反推的，可能与最终视觉稿略有差异。**待东家按图核对**。卖点 6/7 都从 `1.png`（卖点矩阵）取图标，与 docx 原 wireframe 一致（docx 段 6/7 也未指定配图）。

#### 完整文案（7 段 × 2 语）

**EN-1 · Flagship N-Type Technology**
> Utilizes industry-leading N-type TOPCon cell technology, setting new records in cell efficiency. Compared to conventional modules, it features lower degradation rates and exceptional long-term power generation reliability.

**EN-2 · 30% Bifacial Power Gain**
> Leverages advanced bifacial technology combined with a transparent backsheet to fully capture reflected light from white RV roofs, sand, or boat decks. It delivers up to a 30% additional energy boost even in extreme environments.

**EN-3 · Excellent Low Temperature Coefficient**
> Features a class-leading temperature coefficient of −0.3%/°C. It maintains peak voltage output in scorching deserts or intense summer heat, significantly reducing summer power drop-offs.

**EN-4 · Tailored Architecture for Narrow Spaces**
> An ultra-slim, optimized aspect ratio design specifically engineered for mobile and off-grid scenarios. It fits perfectly between RV vents and truck racks, maximizing space utilization while eliminating hazardous overhangs.

**EN-5 · Dual-Cell Parallel Circuitry for Shade Resilience**
> Features an innovative dual-cell parallel circuit design that allows the panel to operate as two independent units. Even if partially shaded by tree branches or rooftop vents, the unaffected half continues to supply full power.

**EN-6 · All-Terrain, All-Weather Protection**
> IP68-certified for premium dust and water resistance, built to withstand 35mm hail impacts and high-speed highway vibrations. It flawlessly endures high humidity, severe cold, and heavy rain—engineered for decades of off-grid adventure.

**EN-7 · Dual Quality Assurance**
> Comes with a worry-free 10-year product material and workmanship warranty, alongside a 25-year linear power performance guarantee to safeguard your high-value energy assets.

**中-1 · N 型旗舰技术**
> 采用行业领先的 N 型 TOPCon 电池技术，电池效率创下全新纪录。相比传统组件，具有更低的衰减率和卓越的长期发电可靠性。

**中-2 · 30% 双面功率增益**
> 利用先进的双面发电技术与透明背板，充分捕捉白色车顶、沙地或船甲板的反射光。在极限环境下，可为系统带来最高 30% 的额外能量加成。

**中-3 · 优异的低温系数**
> 具备同级领先的 −0.3%/°C 温度系数。在炎热的沙漠或酷暑高温下，依然能保持峰值电压输出，大幅减少夏季功率下降。

**中-4 · 狭窄空间定制结构**
> 专为移动和离网场景打造的纤薄、优化宽高比设计。可完美嵌入房车通风口与卡车货架之间，最大化利用空间的同时避免任何危险悬垂。

**中-5 · 双电池并联抗阴影**
> 创新采用双电池并联电路设计，使面板可作为两个独立单元运行。即使局部被树枝或通风口遮挡，未受影响的另一半仍能保持全功率供电。

**中-6 · 全地形全天候防护**
> 具备 IP68 顶级防水防尘认证，可抵御 35mm 强力冰雹与公路高速震动。完美耐受高湿、严寒、暴雨等恶劣环境，专为数十年离网冒险而生。

**中-7 · 双重品质质保**
> 提供长达 10 年的无忧产品材料工艺质保，以及长达 25 年的线性电力性能保证，为您的高价值用电资产保驾护航。

### 4. Datasheet PDF 下载入口（jinko G7B 风）⏸保留

> 仿 jinko G7B：链 `/wp-content/uploads/2025/09/30mm-EAGLE-G7B-JKM615-640N-66HL4M-BDV-F1-US.pdf` 直链 PDF，**不在 web 详情页做 5 组结构化参数表**（参数全在 PDF）。

- 客户指示："然后这里放一个下载说明规格书的入口（单独附上一个 PDF 文件）"
- 内嵌图：
  - `image11.png`（7 KB）—— 按钮/图标占位
- **PDF 文件**（已收到）：`/downloads/callsun-cn120-180-200-275w-datasheet.pdf`（PDF 4 型号合一，12 页，9.4 MB）
- **展示形式**：CTA 卡片，含 PDF 文件名 + 大小 + 4 型号适用范围 + "Download Datasheet" 按钮
  - EN：`Download Datasheet (PDF, 9.4 MB) — Covers CN120W / CN180W / CN200W / CN275W`
  - 中：`下载规格书 (PDF, 9.4 MB) — 覆盖 CN120W / CN180W / CN200W / CN275W`
- **滚动图位置**（东家 2026-06-12 08:31 再次明确）：客户目录 `/root/.openclaw/workspace/inbox/callsun-2026-06-11/1-180w 2-定-选图-上传用/` 下的 7 张图，**前 5 张作 hero 5 滚动 banner**（顺序见 §九），后 2 张作详情页内配图（白底 + 卖点配图）
- **为什么不放 5 组参数表**：
  1. **jinko G7B 没做**（参数全在 PDF 链）—— 我们跟 jinko 风格对齐就不做
  2. **客户 docx 没要**（docx 段 51 只说"放一个下载说明规格书的入口"）
  3. **22 项 specs 已在 JSON**（`src/content/products/180w-custom-module.json` 的 `specs[]`）—— 保留以备 SEO/二次开发，但当前模板**不 render**

- 客户指示："然后这里放一个下载说明规格书的入口（单独附上一个 PDF 文件）"
- 内嵌图：
  - `image11.png`（7 KB）—— 按钮/图标占位
- **PDF 文件**（已收到）：`/downloads/callsun-cn120-180-200-275w-datasheet.pdf`（PDF 4 型号合一，12 页，9.4 MB）
- **展示形式**：CTA 卡片，含 PDF 文件名 + 大小 + 4 型号适用范围 + "Download Datasheet" 按钮
  - EN：`Download Datasheet (PDF, 9.4 MB) — Covers CN120W / CN180W / CN200W / CN275W`
  - 中：`下载规格书 (PDF, 9.4 MB) — 覆盖 CN120W / CN180W / CN200W / CN275W`

### 5. 询盘 CTA（B2B 必需，jinko 风的"Service | Support"在我们这是独立段）⏸保留

> 仿 jinko G7B 的 SERVICE | SUPPORT 通用 section 的转化意图。jinko 用 WordPress Contact Form 7 插件做表单，我们 Astro 站独立做全宽 CTA section，更醒目。

- **位置**：Datasheet PDF 下载入口下方，全宽深色背景条，详情页最后一段
- EN：
  > **Get a Quote for CN180W**
  > Volume pricing, custom configurations, and OEM/ODM available. Our B2B team responds within 1 business day.
  > [ Request a Quote → ] [ Download Spec Sheet (PDF) ]
- 中：
  > **CN180W 询盘**
  > 支持批量定价、定制配置、OEM/ODM。B2B 团队 1 个工作日内回复。
  > [ 立即询盘 → ] [ 下载规格书 (PDF) ]

> 💡 **为什么没保留 Related Solutions**（2026-06-12 砍）：
> 1. **jinko G7B 没做**——jinko 详情页底部只有通用 SERVICE / DOWNLOADS 段，无相关产品/方案推荐
> 2. **客户 docx 没要**——原 wireframe 不含 Related Solutions 段
> 3. **CMS 字段保留**：`180w-custom-module.json.relatedSolutions[]` 3 个 slug 暂存，二次开发时启用
> 4. **站内引导靠顶部导航**（02 文档 §1 一级导航 8 个入口覆盖）

---

## 四、提取的产品/技术参数（可进 CMS 字段）

| 维度 | 客户 wireframe 表述 | 对应 CMS 字段 |
|---|---|---|
| 功率 | 180W | `products.specs` |
| 技术 | N-Type TOPCon | `products.tech` |
| 结构 | 双电池并联电路（双独立单元）| `products.benefits` |
| 增益 | 双面发电 +30% | `products.benefits` |
| 温度系数 | −0.3%/°C | `products.specs` |
| 防护 | IP68 | `products.specs` |
| 抗冲击 | 35mm 冰雹 | `products.benefits` |
| 产品质保 | 10 年 | `products.warranty` |
| 线性电力质保 | 25 年 | `products.warranty` |
| 适用场景 | 房车 / 卡车 / 离网 / 沙漠 / 船甲板 | `products.applications` |
| 核心叙事 | 高电流、超纤薄、全地形 | `products.tagline` |

> 💡 这张表是从客户 wireframe 反推的产品事实清单。**比现有 `180w-custom-module.json` 详细**（现有版本只有占位 tagline + 基础 specs）。**建议在下一轮产品页改造时直接套用**。

---

## 五、docx 内嵌图清单（11 张全在 inbox）

```
~/.openclaw/workspace/inbox/callsun-2026-06-11/_from-docx-180w/media/
├── image1.png    927 KB   列表页头图占位
├── image2.png    860 KB   列表页头图参考
├── image3.png     87 KB   列表卡片样式参考
├── image4.png    370 KB   180W 产品白底图
├── image5.jpeg   110 KB   卖点 1 装饰图
├── image6.jpeg   118 KB   卖点 2 装饰图
├── image7.png   1.1 MB    滚动图 1 / 卖点 2 装饰图
├── image8.png    258 KB   滚动图 2 / 卖点 3 装饰图
├── image9.jpeg   121 KB   滚动图 3 / 卖点 4 装饰图
├── image10.png   154 KB   滚动图 4 / 卖点 5 装饰图
└── image11.png     7 KB   规格书下载按钮占位
```

---

## 六、待补项 / 风险（已 2026-06-11 更新）

| 优先级 | 项目 | 来源 | 状态 |
|---|---|---|---|
| 🔴 P0 | ~~滚动图原文件夹~~ | 客户在 docx 里写"另外附上了文件夹" | ✅ **已收到**（7 张，含 4 张横幅 banner + 2 张白底产品图 + 1 张卖点矩阵）|
| 🔴 P0 | ~~规格书 PDF~~ | 客户在 docx 里写"单独附上一个 PDF 文件" | ✅ **已收到**（`CS-120w180w200w275w双透单玻板系列说明书-US-V1.4-已转曲-260529.pdf`，12 页，4 型号合一）|
| 🟡 P1 | **图-卖点对应核对** | 我按 docx 段落引用顺序反推 | ⏸ 客户最终视觉稿可能略有差异（已对照新滚动图，重叠 = 0）|
| 🟡 P1 | **是否同步其他功率（120W/200W/275W）** | 客户说"先以 180W 为例子" | ⚠️ **PDF 标题明确 4 型号 120W/180W/200W/275W 合一**（之前 04-products-catalog.md 没列 120W/275W）|
| 🟢 P2 | **现有 `180w-custom-module.json` 是否升级** | 本稿是产品页 wireframe | ⏸ 改造时把 §四 + §十 的字段全填进去 |
| 🟢 P2 | **详情页的 customPages 落地路径** | "点击进去的落地页" | ⏸ 走 `/products/180w-solar-panel` 还是 `/pages/180w-xxx` 单独页待定 |

---

## 七、与 06-gap-and-questions 的关联

- 06 文件 §2 P0 "产品模型需按 Callsun 新参数重构" → 本稿就是 180W 的**视觉/文案重塑源**。
- 06 §3 Q14 首页文案 → 本稿暂未涉及首页，仅产品页。
- 06 §3 Q15 580W/620W 标准组件品名为空 → 本稿未涉及。
- 06 §3 Q16 产品手册/规格书/证书 PDF → 本稿确认规格书 PDF 仍未到位。

---

## 八、配套资源

- 原始 docx：`projects/jinko-rebuild/docs/1-180w-规划示意.docx`（4.1 MB / 52 段）
- 提取脚本思路：`zipfile` + `xml.etree` 直抽 `word/document.xml`，图片 `shutil.copyfileobj` 出包
- inbox 收件目录：`~/.openclaw/workspace/inbox/callsun-2026-06-11/`
- 滚动图文件夹（7 张）：`~/.openclaw/workspace/inbox/callsun-2026-06-11/1-180w   2-定-选图-上传用/`
- 规格书 PDF：`~/.openclaw/workspace/inbox/callsun-2026-06-11/CS-120w180w200w275w双透单玻板系列说明书-US-V1.4-已转曲-260529.pdf`（9.4 MB / 12 页）
- PDF 转图（OCR 临时）：`~/.openclaw/workspace/inbox/callsun-2026-06-11/_pdf_pages/page-01..12.png`（200dpi，1.6 MB）

---

## 九、客户滚动图（7 张）落地建议 ⭐

> 客户投的"滚动图原文件夹"实际是 **7 张**——比 docx wireframe 段 14 说的"几张"多。已用 `sha256` hash 与 docx 11 张内嵌图比对，**0 重叠**，确认是**全新一批真品**（docx 里的滚动图是 wireframe 编辑时塞的占位小图）。

### 1. 7 张图分类（按用途）

| 文件 | 尺寸 / 体积 | 类型 | 实际内容（image 工具识别）| 建议落位 |
|---|---|---|---|---|
| `画板 18.jpg` | 1464×600 / 608K | 横幅 banner | **家庭屋顶场景**（白房+深瓦+蓝天，无文字）| 详情页头图滚动 #1 / 家庭应用场景页 hero |
| `画板 19.jpg` | 1464×600 / 696K | 横幅 banner | **海上游艇场景**（白船甲板 + 3 块组件 + 深蓝海面）| 详情页头图滚动 #2 / 户外应用场景页 hero |
| `画板 6.jpg` | 1464×600 / 252K | 横幅 banner | **沙漠房车 + 高温性能折线图**（+2% 增益 @167°F）| 详情页**卖点区装饰**（不当 hero）|
| `画板 8.jpg` | 1464×600 / 652K | 横幅 banner | **N-Type vs P-Type 技术对比**（+25% vs +22.5% cell eff）| 详情页**卖点区装饰**（不当 hero）|
| `画板 1.jpg` | 1600×1600 / 980K | 白底方形 | **产品正反面展示**（白底，左正右反 + 倒影）| 产品列表卡片主图 ✅ + 详情页主图 |
| `画板 2.jpg` | 1600×1600 / 460K | 白底方形 | **产品正反面展示变体**（一前一后两板）| 详情页主图 #2 / 规格页配图 |
| `1.png` | 1.2M / 暗色 | 卖点矩阵 | **Feature Grid 5 模块拼图**（IP68 / 25 年寿命 / 高温性能 / 抗冲击 / 25% N-type）| 详情页中部**卖点卡整图**（不当 hero）|

### 2. 关键洞察

- **真滚动 banner 只有 4 张横幅**（画板 6/8/18/19.jpg），其中**画板 18 + 画板 19 是真摄影**（家庭+海上），**画板 6 + 画板 8 是技术信息图**（折线/对比表）—— banner 顺序建议：**真摄影 → 卖点**穿插
- **2 张白底（画板 1 + 画板 2）= 客户说的"180W 白底图"**（docx 段 21 指示"直接就用我们的 180W 的白底图"）—— 之前 image4.png 370KB 的占位白底可以**彻底替换**
- **1.png 卖点矩阵**内容与 docx 7 段卖点卡**部分重合**（IP68 / 25 年 / 高温 / 抗冲击 / 25% N-type）—— 两种用法：①整图当 1 张卖点区大图 ②拆 5 个图标分发到 7 段卖点卡里
- **docx 内嵌的 image4-10 装饰图**（卖点 1-5 装饰）→ **新图到位后大概率用不上**（客户给了更高质量的白底 + 矩阵图）
- **docx 内嵌的 image1-3**（列表页头图/卡片样式参考）→ **是真·参考样式**（"像这样单个去展示"），保留作为开发参照，但**不进 build**

### 3. banner 顺序建议（5 段详情页头图）

```
#1  画板 18.jpg  家庭屋顶        真摄影，温和开场
#2  画板 1.jpg   180W 白底正反面  产品本体（看清单品）
#3  画板 6.jpg   沙漠房车+高温图  卖点 1：耐高温（呼应 docx 卖点 3）
#4  画板 19.jpg  海上游艇        真摄影，应用场景延展
#5  画板 2.jpg   180W 白底变体    产品本体（再看一遍）
```

> 💡 5 段是 docx 段 14 说的"几张" + 1 张产品本体的折中（5 段是 banner 滑动的舒适上限）。**待东家最终决定**。

---

## 十、规格书 PDF 提炼 ⭐

> 9.4 MB / 12 页 / **Adobe Illustrator 28.6 出**（"已转曲"= 文字栅格化）  
> **pdftotext 0 文字输出**（正常，转曲后纯文字层消失）  
> **解法**：pdftoppm 200dpi 转图 → image 工具 OCR 逐页识别  
> 12 页拆解：p1 封面 / p2 认证+前言 / p3 120W 尺寸图 / p4-6 注意事项+尺寸图（未深读） / p7 核心参数表 / p8 Quick Guide / p9-10 维护+质保 / p11 I-V 曲线 / p12 空白

### 1. 4 型号合一规格表（来源：PDF p7 核心参数）⭐

| Model | **CN120W** | **CN180W** | **CN200W** | **CN275W** |
|---|---|---|---|---|
| Pmax | 120W | 180W | 200W | 275W |
| Vmp | 20.48V | 21.93V | 23.74V | 21.29V |
| Imp | 5.86A | 8.21A | 8.43A | 12.92A |
| Voc | 24.06V | 25.56V | 27.31V | 25.26V |
| Isc | 6.21A | 8.62A | 8.91A | 13.69A |
| **尺寸 mm** | 1100×578×30 | 1180×770×35 | 1304×770×35 | 1736×766×35 |
| **重量 kg** | 6.85 | 9.80 | 10.80 | 13.51 |
| Cell | N-Type 16BB 182mm Mono | ← | ← | ← |
| Cell Eff | 25% | ← | ← | ← |
| 功率公差 | 0~5% | ← | ← | ← |
| Max Sys V | 1000V DC | ← | ← | ← |
| Fuse | 25A | ← | ← | ← |
| 首年衰减 | 1% | ← | ← | ← |
| 线性衰减 | 0.4%/年 | ← | ← | ← |
| 84.5% 维持 | 25 年 | ← | ← | ← |
| 玻璃 | 3.2mm Tempered | ← | ← | ← |
| 边框 | Anodized Aluminium Alloy | ← | ← | ← |
| IP | IP68 | ← | ← | ← |
| 风/雪载 | 2400Pa / 5400Pa | ← | ← | ← |
| 温度系数 Pmax | -0.30%/K | ← | ← | ← |
| 温度系数 Voc | -0.25%/K | ← | ← | ← |
| 温度系数 Isc | +0.045%/K | ← | ← | ← |
| 工作温度 | -40°C ~ 85°C | ← | ← | ← |
| **型号前缀** | CN（✅ 2026-06-11 东家确认按 CN 对齐）| | | |

> 🟡 **120W 和 275W** 是 PDF 新给的产品线，参数完整但**东家 2026-06-11 决定 CMS 暂不建**，等通知。规格留在 §十.1 备查。  
> ✅ **型号前缀 CN**：2026-06-11 东家确认按 CN 对齐。`src/content/products/180w-200w-215w-custom-module.json` 三处 `model` 字段已同步从 `180W/200W/215W` 改为 `CN180W/CN200W/CN215W`（450W/580W/620W 原本就是 CN，无需改）。客户原始交付件 PDF 文件名 `CS-120w180w200w275w...pdf` 保留不动。  
> 🟡 **docx wireframe 段 7 卖点"双电池并联"** PDF 也确认了："Innovative dual-module design ensures shading on one half won't impact the power output of the other."

### 2. 认证（来源：PDF p2）

| 认证 | 含义 |
|---|---|
| IEC 61215 | 晶硅光伏组件设计鉴定 |
| IEC 61730 | 光伏组件安全鉴定 |
| ISO 9001:2023 | 质量管理体系 |
| ISO 14001:2023 | 环境管理体系 |
| ISO 45001:2023 | 职业健康安全管理体系 |
| CE | 欧盟符合性 |
| RoHS | 欧盟有害物质限制 |
| EMC（推测 FCC class B）| 电磁兼容 |

> 💡 docx 段 4-7 卖点没提认证，**但 PDF 4 型号通用**。可在产品页加 **"Certifications" 区块**（已有 03-tech-and-seo.md 的 certifications 字段规范）。

### 3. 质保（来源：PDF p10 Warranty Policy）

- **10 年** 材料工艺质保
- 25 年保持 84.5% 输出（线性电力）
- 不保：使用中外观瑕疵 / 自行拆改 / 自然灾害雷击事故
- 流程：联系客服 → 提交凭证 + 问题描述 → 客服协助 → 确认后给方案
- 客服邮箱：**callsun-service@outlook.com**

> 💡 docx 段 51 写的"10 年材料工艺 + 25 年线性电力" 与 PDF 完全一致 ✅  
> 🟡 **docx 段 51 + PDF 都没提首年/线性衰减具体值**（但 PDF p7 表给"首年 1% / 线性 0.4%"）—— **建议 CMS `warranty` 字段加：首年 1% + 线性 0.4%**

### 4. 公司信息（来源：PDF p10 末）

- **公司全称**：Shenzhen Guangchuxinneng Technology Co., Ltd.
- **地址**：Room 1706, Phase 1, Overseas Students Entrepreneurship Building, No. 3170 Keyuan South Road, Gaoxin District Community, Yuehai Subdistrict, Nanshan District, Shenzhen, China
- **客服邮箱**：callsun-service@outlook.com

> 🔴 **新信息**：04-products-catalog.md + 07-decisions.md + `src/data/site.ts` 全是空 placeholder。**这是首份带 Callsun 真实公司信息的文档**。建议回填到 `site.ts.organization`：
> ```ts
> organization: {
>   legalName: 'Shenzhen Guangchuxinneng Technology Co., Ltd.',
>   hqAddress: { city: 'Shenzhen', region: 'Guangdong', country: 'CN',
>                street: 'Room 1706, ... Keyuan South Road, ... Nanshan District' },
>   contact: { support: 'callsun-service@outlook.com', sales: 'callsun-service@outlook.com' }
> }
> ```

### 5. 卖点匹配（PDF ↔ docx 7 段）

| docx 卖点 | PDF 实证 | 状态 |
|---|---|---|
| Flagship N-Type Technology | PDF p7 Cell = N-Type 16BB / p3 SMBB 技术 / docx 段 24 描述 | ✅ |
| 30% Bifacial Power Gain | PDF 标题"N-Type Bifacial Solar Panel" / **PDF p7 未列具体增益** | 🟡 30% 来源 = docx，未在 PDF 验证 |
| Excellent Low Temperature Coefficient | PDF p7 温度系数 -0.30%/K | ✅ 一致（-0.3%/°C = -0.30%/K）|
| Tailored Architecture for Narrow Spaces | PDF p7 尺寸（4 型号均 ≤1.4m 长）/ docx 卖点 4 描述 | ✅ |
| Dual-Cell Parallel Circuitry for Shade Resilience | PDF p3 "Parallel Connection Design" + p7 图 | ✅ 确认 |
| All-Terrain, All-Weather Protection | PDF p7 IP68 + 2400/5400Pa 风/雪载 | ✅ IP68 一致；35mm 冰雹 ≈ 5400Pa |
| Dual Quality Assurance | PDF p10 10yr 材料 + 25yr 84.5% | ✅ |

> 🟡 **30% Bifacial 增益** 客户 docx 写 30%，PDF **未给具体数字**（PDF p7 只说"N-Type Bifacial Solar Panel"无 % 数）。**建议东家找客户书面确认** 30% 来源（是否实验室数据 / 是否 UL 认证 / 是否双面标准测试条件）。

---

## 十一、关键发现 / 行动项

### A. 立刻要做的（建站就绪）

1. **现有 `src/content/products/180w-custom-module.json` 升级**：
   - specs 加 18 项 PDF p7 详细参数（Vmp/Imp/Voc/Isc/尺寸/重量/IP68/风雪载/温度系数/工作温度/玻璃/边框/连接器/寿命衰减）
   - warranty 字段加 "10-year product + 25-year linear power (84.5% @ 25yr, 1% first year + 0.4%/yr linear)"
   - benefits 字段加 docx 7 段卖点（中英）
   - applications 字段加 房车/卡车/离网/沙漠/船甲板/家庭屋顶
2. **新增 `src/content/products/120w-custom-module.json` 和 `275w-custom-module.json`**（**04 没列**，PDF 给了完整参数）
3. **更新 `src/data/site.ts.organization`**：填 PDF 真实公司信息（南山区 / 客服邮箱）
4. **替换 `public/uploads/284a0007c2c9e73207ff885f70fa4c40.jpeg` 和 `image.png`**：用 `画板 1.jpg` + `画板 2.jpg` 替换（更高质量 + 是 Callsun 自己的图）

### B. docx 7 段卖点的"待东家确认"

- 30% Bifacial 增益 → PDF 没给具体数字（**降风险：写为 "up to 30% additional energy yield in field tests" + 留待客户书面确认**）
- 35mm 冰雹抗冲击 → PDF 5400Pa 雪载与 35mm 冰雹约等（**降风险：直接写 5400Pa / 35mm hail 写脚注**）

### C. 后续要做的（客户需求外延）

- 200W / 215W / 450W / 580W / 620W 是否有同系列说明书？**建议东家跟客户一起要**（如果齐全，04 文档可一次性补完）
- 120W 和 275W 是否也要按"先以 180W 为例子"做产品页 wireframe？**待东家问客户**
