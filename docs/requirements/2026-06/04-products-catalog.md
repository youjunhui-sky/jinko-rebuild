# 04. 产品与系统方案目录

> 来源：飞书 sheet《<新> 2026.06 B端官网规划》→ 子表「产品及系统」
> 注：完整原始参数已保存到 `raw-sheet-dump.tsv`，本文做结构化整理，方便后续转成 CMS content collection。

## 1. 标准组件

| 类别 | 品名 | 认证 | 核心参数摘要 |
|---|---|---|---|
| 450W | 450W 双玻板 | IEC 61215 / IEC 61730 / ISO 9001 / ISO 14001 / ISO 45001 | Model CN450W；效率 23.04%；尺寸 1762×1134×30mm；重量 24.5kg；双玻 2.0+2.0mm；25年产品质保 / 30年线性功率质保 |
| 580W | 待补品名 | IEC 61215 / IEC 61730 / ISO 9001 / ISO 14001 / ISO 45001 | Model CN580W；尺寸 2278×1134×30mm；重量 30kg；N-type；144 cells；25年产品质保 / 30年线性功率质保 |
| 620W | 待补品名 | IEC 61215 / IEC 61730 / ISO 9001 / ISO 14001 / ISO 45001 | Model CN620W；效率 23%；尺寸 2382×1134×30mm；重量 32.5kg；N-type；132 cells；25年产品质保 / 30年线性功率质保 |

## 2. 非标组件

> 🆕 **2026-06-12 升级**：参考 jinkosolar.us/eagle-modules 风格，4 型号归为 **"Custom Module 系列"**（L1 系列总览页 + L2 SKU 详情页两级）。详细 IA 见 `02-site-architecture.md §2.2`，页面 wireframe 见 `09-180w-product-page-brief.md §二 / §三`。

| 类别 | 品名 | 认证 | 核心参数摘要 | CMS 状态 |
|---|---|---|---|---|
| 120W | 120W 单玻板 | 待取证（UL） | Model CN120W；N-Type 16BB 182mm；Cell Efficiency 25%；Pmax 120W；Vmp 20.48V；Imp 5.86A；Voc 24.06V；Isc 6.21A；系统电压 1000V DC；25年保持 84.5% 输出；尺寸 1100×578×30mm；重量 6.85kg；IP68；2400/5400Pa 风/雪载；首年 1% + 线性 0.4% 衰减 | 🟡 **挂起**（L1 卡片占位 + Learn More 跳占位页；不建独立详情页；不建 `src/content/products/120w-*.json`）|
| 180W | 180W 单玻板 | 待取证（UL） | Model CN180W；N-Type 16BB 182mm；Cell Efficiency 25%；Pmax 180W；Vmp 21.93V；Imp 8.21A；Voc 25.56V；Isc 8.62A；系统电压 1000V DC；25年保持 84.5% 输出；尺寸 1180×770×35mm；重量 9.80kg；IP68；2400/5400Pa 风/雪载；首年 1% + 线性 0.4% 衰减 | ✅active（`src/content/products/180w-custom-module.json` 已升级，22 项 specs + 7 段 benefits + 6 applications + 3 related solutions）|
| 200W | 200W 单玻板 | 待取证（UL） | Model CN200W；N-Type 16BB 182mm；Cell Efficiency 25%；Pmax 200W；Vmp 23.74V；Imp 8.43A；Voc 27.31V；Isc 8.91A；系统电压 1000V DC；25年保持 84.5% 输出；尺寸 1304×770×35mm；重量 10.80kg；IP68；2400/5400Pa 风/雪载；首年 1% + 线性 0.4% 衰减 | ✅active（`src/content/products/200w-custom-module.json`，具体 specs 待跟 180W 模板对齐）|
| 215W | 215W 单玻板 | 待取证（UL） | Model CN215W；N-Type 16BB 182mm；Cell Efficiency 25%；系统电压 1000V DC；25年保持 84.5% 输出（215W 详细电气参数 Vmp/Imp/Voc/Isc 待客户提供） | ✅active（`src/content/products/215w-custom-module.json`，Vmp/Imp/Voc/Isc 4 项待客户提供）|
| 275W | 275W 单玻板 | 待取证（UL） | Model CN275W；N-Type 16BB 182mm；Cell Efficiency 25%；Pmax 275W；Vmp 21.29V；Imp 12.92A；Voc 25.26V；Isc 13.69A；系统电压 1000V DC；25年保持 84.5% 输出；尺寸 1736×766×35mm；重量 13.51kg；IP68；2400/5400Pa 风/雪载；首年 1% + 线性 0.4% 衰减 | 🟡 **挂起**（L1 卡片占位 + Learn More 跳占位页；不建独立详情页；不建 `src/content/products/275w-*.json`）|

> 🟡 **已知存在但 CMS 暂不建**（东家 2026-06-11 挂起）：120W、275W 完整参数见 `09-180w-product-page-brief.md` §十.1。等东家通知再建 `src/content/products/120w-*.json` / `275w-*.json`。
> 💡 **2026-06-12 调整**：L1 系列总览页 **仍展示 4 张卡片**（120W/180W/200W/275W，215W 暂不进 L1 见说明），Learn More 按钮根据 CMS 状态跳：active → 详情页 / 挂起 → 占位页（"Coming Soon"）。**215W 不在客户 docx + PDF 4 型号范围内**，L1 卡片暂不展示（4 SKU = 120/180/200/275），215W 保留在 `src/content/products/215w-custom-module.json` 用于历史兼容。
> 🔴 **型号前缀**：2026-06-11 东家确认产品型号前缀统一为 **CN**（CN180W/CN200W/CN215W/CN450W/CN580W/CN620W）。客户原始交付规格书 PDF 文件名虽为 `CS-120w180w200w275w...pdf`，但 PDF 内部表格全部使用 CN 前缀，按 CN 对齐。

## 3. 并网系统

### 3.1 12kW / 28度电 / 10.8kW-PV

| 组件 | 型号/品名 | 认证 | 备注 |
|---|---|---|---|
| 太阳能板 | 450W 双玻板 | - | Pmax 450W；Vmp 30.08V；Imp 14.97A；Voc 35.03V；Isc 16.05A |
| 逆变器 | HS-LV12KNA | UL1741 & IEEE1547.1-2020 / CEC / RULE 21 / HECO / FCC 15 class B / RoHS | 12kW 输出；2 路 MPPT；PV 阵列 9000W+9000W；IP65 |
| 电池 1 | GSL-051280A-B-GBP2（14度电壁挂式） | UL1973 / UL9540A / UL9540 / CE-IEC62619 / CE-EMC / UN38.3 / MSDS | 51.2V；280Ah；14.34kWh；最多 16 组并联；10 年质保 |
| 电池 2（可选） | GSL051280A-B-GBP2F（14度电落地式） | 同上 | 51.2V；280Ah；14.34kWh；IP65；落地/户外；10 年质保 |
| 配件 | MC4工具包、6mm²线材、Z型支架、PV直流断路器、2进2出汇流箱、三角支架 | - | 汇流箱 DC500V 2进2出，IP65 |

## 4. 离网系统

### 4.1 6.5kW / 10度电 / 5.4kW-PV

| 组件 | 型号/品名 | 认证 | 备注 |
|---|---|---|---|
| 太阳能板 | 450W 双玻板 | - | Pmax 450W；Vmp 30.08V；Imp 14.97A；Voc 35.03V；Isc 16.05A |
| 逆变器 | SPI-6.5K-UP | IEC62109-1 / IEC62109-2 / UL1741 / EN61000-6-1 / EN61000-6-3 / FCC 15 class B / RoHS | 6500W；峰值 13000VA；2 路 MPPT；可并机 1-6 台 |
| 电池 | GSL-051200A-B-GBP2 | UL1973 / CE-EMC / UN38.3 / MSDS | 51.2V；200Ah；10.24kWh；最多16台并联；10年保修 |
| 配件 | MC4工具包、线材、支架、断路器、汇流箱 | - | 同并网系统配件结构 |

### 4.2 10kW / 14度电 / 7.2kW-PV

| 组件 | 型号/品名 | 认证 | 备注 |
|---|---|---|---|
| 太阳能板 | 450W 单玻板 | - | Pmax 450W；Vmp 30.08V；Imp 14.97A；Voc 35.03V；Isc 16.05A |
| 逆变器 | SPI-10K-UP | IEC62109-1 / IEC62109-2 / UL1741 / EN61000-6-1 / EN61000-6-3 / FCC 15 class B / RoHS | 10,000W；峰值 20,000W；2 路 MPPT；最大 PV 输入 11,000W |
| 电池 | GSL-051280A-B-GBP2（14度电壁挂式） | UL1973 / UL9540A / UL9540 / CE-IEC62619 / CE-EMC / UN38.3 / MSDS | 51.2V；280Ah；14.34kWh；10年质保 |
| 配件 | MC4工具包、线材、支架、断路器、汇流箱 | - | 同上 |

## 后续建模建议

建议拆成 3 类 CMS collection：

1. `products`：标准组件 / 非标组件
2. `solutions`：并网 / 离网系统方案
3. `accessories`：逆变器、电池、配件、支架、线材等可复用组件

每条记录至少包含：
- title / slug / category / model
- seoTitle / metaDescription / keywords
- certifications[]
- specs[]（key-value）
- gallery[]
- datasheet PDF
- relatedSolutions[]
- inquiry CTA 文案
