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

| 类别 | 品名 | 认证 | 核心参数摘要 |
|---|---|---|---|
| 180W | 180W 单玻板 | 待取证（UL） | N-Type 16BB 182mm；Cell Efficiency 25%；系统电压 1000V DC；25年保持 84.5% 输出 |
| 200W | 200W 单玻板 | 待取证（UL） | N-Type 16BB 182mm；Cell Efficiency 25%；系统电压 1000V DC；25年保持 84.5% 输出 |
| 215W | 215W 单玻板 | 待取证（UL） | N-Type 16BB 182mm；Cell Efficiency 25%；系统电压 1000V DC；25年保持 84.5% 输出 |

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
