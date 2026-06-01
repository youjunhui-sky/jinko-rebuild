import { defineCollection, z } from 'astro:content';

const seoFields = {
  seoTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  h1: z.string().optional(),
  keywords: z.array(z.string()).default([]),
  canonical: z.string().optional(),
  ogImage: z.string().optional(),
  noindex: z.boolean().default(false),
};

const specItem = z.object({
  label: z.string(),
  value: z.string(),
  group: z.string().optional(),
});

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['standard-module', 'custom-module']),
    model: z.string().optional(),
    tagline: z.string(),
    tech: z.string(),
    certifications: z.array(z.string()).default([]),
    image: z.string().default('/placeholders/solar-panel.svg'),
    imageAlt: z.string().optional(),
    description: z.string(),
    specs: z.array(specItem).default([]),
    applications: z.array(z.string()).default([]),
    downloads: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    ...seoFields,
  }),
});

const solutions = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['grid-tied', 'off-grid']),
    capacityLabel: z.string(),
    pvCapacity: z.string().optional(),
    batteryCapacity: z.string().optional(),
    image: z.string().default('/placeholders/battery-system.svg'),
    imageAlt: z.string().optional(),
    summary: z.string(),
    components: z.array(z.object({ category: z.string(), name: z.string(), quantity: z.string().optional(), note: z.string().optional() })).default([]),
    useCases: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    ...seoFields,
  }),
});

const applications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    image: z.string().default('/placeholders/case-rooftop.svg'),
    recommendedSolutions: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    order: z.number().default(0),
    ...seoFields,
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Callsun'),
    cover: z.string().optional(),
    category: z.enum(['Press', 'Product', 'Industry', 'Technical', 'Sustainability']),
    tags: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ...seoFields,
  }),
});

const downloads = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    fileUrl: z.string(),
    category: z.enum(['Datasheet', 'Manual', 'Certificate', 'Guide']),
    relatedProduct: z.string().optional(),
    order: z.number().default(0),
    ...seoFields,
  }),
});

const cases = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    client: z.string().optional(),
    location: z.string(),
    region: z.enum(['Domestic', 'Overseas']).default('Domestic'),
    industry: z.string().optional(),
    capacityKW: z.number().optional(),
    capacityMWh: z.number().optional(),
    segment: z.enum(['Small C&I', 'Mid-Scale C&I', 'Large C&I', 'Solar + Storage']).default('Mid-Scale C&I'),
    completedAt: z.coerce.date().optional(),
    application: z.enum(['Commercial & Industrial', 'Residential', 'Municipal', 'Solar + Storage']),
    coverImage: z.string().default('/placeholders/case-rooftop.svg'),
    gallery: z.array(z.string()).default([]),
    description: z.string(),
    salesAngle: z.string().optional(),
    relatedProducts: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    ...seoFields,
  }),
});

const supportPages = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    body: z.string(),
    order: z.number().default(0),
    ...seoFields,
  }),
});

const navigation = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    href: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
    visible: z.boolean().default(true),
    footerVisible: z.boolean().default(true),
    children: z.array(z.object({
      label: z.string(),
      href: z.string(),
      description: z.string().optional(),
      image: z.string().optional(),
      order: z.number().default(0),
      visible: z.boolean().default(true),
    })).default([]),
  }),
});

const landingPages = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    audience: z.string(),
    campaign: z.string().optional(),
    ctaLabel: z.string().default('Request a Quote'),
    draft: z.boolean().default(true),
    ...seoFields,
  }),
});

export const collections = { products, solutions, applications, news, downloads, cases, supportPages, navigation, landingPages };
