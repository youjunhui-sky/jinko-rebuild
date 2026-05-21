// 产品数据 (原站全靠 PDF, 这里改成结构化数据 → 自动生成产品页 + Schema.org)
export const PRODUCTS = [
  {
    slug: 'eagle-g7',
    family: 'eagle-modules',
    name: 'EAGLE® G7',
    tagline: 'TOPCon flagship · cell efficiency over 26%',
    tech: 'N-Type TOPCon',
    powerRangeW: [575, 620],
    efficiencyPct: 22.7,
    cellCount: 144,
    warrantyYears: { product: 12, power: 30 },
    applications: ['Utility', 'C&I'],
    image: '/products/eagle-g7.webp',
    description:
      'EAGLE® G7 modules utilize our latest flagship TOPCon cell technology with record-breaking cell efficiencies of over 26%. Industry-leading power density, improved energy yield, and reliability for utility and commercial deployments.',
    keywords: ['EAGLE G7', 'TOPCon module', 'n-type solar panel', 'utility solar 600w'],
  },
  {
    slug: 'tiger-neo',
    family: 'eagle-modules',
    name: 'Tiger Neo N-Type',
    tagline: 'Best-in-class bifacial gain · Bloomberg Tier 1',
    tech: 'N-Type Bifacial',
    powerRangeW: [555, 600],
    efficiencyPct: 22.5,
    cellCount: 132,
    warrantyYears: { product: 12, power: 30 },
    applications: ['Utility'],
    image: '/products/tiger-neo.webp',
    description:
      'Tiger Neo N-Type bifacial modules with up to 25% bifacial gain — engineered for utility-scale projects demanding the lowest LCOE.',
    keywords: ['Tiger Neo', 'n-type bifacial', 'utility solar bifacial'],
  },
  {
    slug: 'eagle-storage',
    family: 'eagle-storage',
    name: 'EAGLE Storage®',
    tagline: 'LFP battery storage from a company you trust',
    tech: 'LFP Lithium-Iron-Phosphate',
    capacityRangeKWh: [5, 4000],
    cycleLife: 6000,
    warrantyYears: { product: 10, capacity: 10 },
    applications: ['Residential', 'C&I', 'Utility'],
    image: '/products/eagle-storage.webp',
    description:
      'EAGLE Storage® uses safe, long-life LFP chemistry — from 5 kWh home batteries to multi-MWh utility containers — paired seamlessly with EAGLE solar modules from one company.',
    keywords: ['EAGLE Storage', 'LFP battery storage', 'utility battery system'],
  },
] as const;

export type Product = (typeof PRODUCTS)[number];
