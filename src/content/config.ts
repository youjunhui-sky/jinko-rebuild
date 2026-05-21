// Astro Content Collections 配置
// 让 Decap CMS 能够直接编辑这些文件，类型安全
import { defineCollection, z } from 'astro:content';

// 📦 A. 产品 (3 款 EAGLE 模块/储能)
const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    family: z.enum(['eagle-modules', 'eagle-storage']),
    tagline: z.string(),
    tech: z.string(),
    powerRangeW: z.array(z.number()).length(2).optional(),
    capacityRangeKWh: z.array(z.number()).length(2).optional(),
    efficiencyPct: z.number().optional(),
    cellCount: z.number().optional(),
    cycleLife: z.number().optional(),
    warrantyYears: z.record(z.string(), z.number()),
    applications: z.array(z.string()),
    image: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    order: z.number().default(0),
  }),
});

// 📰 B. 新闻 / 博客
const news = defineCollection({
  type: 'content', // Markdown / MDX
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Jinko US'),
    cover: z.string().optional(),
    category: z.enum(['Press', 'Product', 'Industry', 'Sustainability']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// 📊 E. 首页 KPI 数据
const stats = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        unit: z.string().default(''),
        order: z.number().default(0),
      })
    ),
  }),
});

// 🤝 G. 安装商目录
const installers = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    state: z.string().length(2),
    type: z.enum(['Residential', 'C&I', 'Utility', 'Residential + C&I']),
    website: z.string().url().or(z.literal('')),
    phone: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { products, news, stats, installers };
