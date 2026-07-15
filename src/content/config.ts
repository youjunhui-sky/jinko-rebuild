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

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    h1: z.string(),
    keywords: z.array(z.string()).default([]),
    canonical: z.string().optional(),
    ogImage: z.string().optional(),
    noindex: z.boolean().default(false),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      image: z.string().default('/placeholders/battery-system.svg'),
      imageAlt: z.string().optional(),
      primaryCtaLabel: z.string().default('Explore Products'),
      primaryCtaHref: z.string().default('/products'),
      secondaryCtaLabel: z.string().default('View System Packages'),
      secondaryCtaHref: z.string().default('/solutions'),
      tertiaryCtaLabel: z.string().default('Request Quote'),
      tertiaryCtaHref: z.string().default('/contact'),
      floatingEyebrow: z.string().optional(),
      floatingTitle: z.string().optional(),
      floatingDescription: z.string().optional(),
    }),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    why: z.object({
      visible: z.boolean().default(true),
      eyebrow: z.string().default('Why Callsun'),
      title: z.string(),
      description: z.string().optional(),
      cards: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    }),
    productsSection: z.object({ visible: z.boolean().default(true), eyebrow: z.string(), title: z.string(), description: z.string().optional() }),
    solutionsSection: z.object({ visible: z.boolean().default(true), eyebrow: z.string(), title: z.string(), description: z.string().optional(), linkLabel: z.string().optional(), linkHref: z.string().optional() }),
    casesSection: z.object({ visible: z.boolean().default(true), eyebrow: z.string(), title: z.string(), description: z.string().optional(), linkLabel: z.string().optional(), linkHref: z.string().optional() }),
    marketingSection: z.object({
      visible: z.boolean().default(true),
      eyebrow: z.string(),
      title: z.string(),
      description: z.string().optional(),
      checklist: z.array(z.string()).default([]),
    }),
    resourcesSection: z.object({ visible: z.boolean().default(true), eyebrow: z.string(), title: z.string(), linkLabel: z.string().optional(), linkHref: z.string().optional() }),
  }),
});

const about = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    sections: z.array(z.discriminatedUnion('type', [
      z.object({
        type: z.literal('manifesto'),
        lead: z.object({
          image: z.string(),
          imageAlt: z.string(),
          subline: z.string().optional(),
        }),
        band: z.object({
          image: z.string(),
          imageAlt: z.string(),
          text: z.string(),
        }).optional(),
      }),
      z.object({
        type: z.literal('mission'),
        banner: z.object({
          image: z.string(),
          imageAlt: z.string(),
          eyebrow: z.string().optional(),
          title: z.string(),
        }).optional(),
        body: z.object({
          image: z.string(),
          imageAlt: z.string(),
          paragraphs: z.array(z.string()),
        }).optional(),
      }),
      z.object({
        type: z.literal('pillars'),
        header: z.object({
          image: z.string(),
          imageAlt: z.string(),
          eyebrow: z.string().optional(),
          title: z.string(),
        }).optional(),
        cards: z.array(z.object({
          image: z.string(),
          imageAlt: z.string(),
          title: z.string(),
          description: z.string(),
        })).default([]),
        band: z.object({
          image: z.string(),
          imageAlt: z.string(),
          title: z.string(),
          description: z.string().optional(),
        }).optional(),
      }),
    ])),
    ...seoFields,
  }),
});

const indexPageFields = {
  title: z.string(),
  hero: z.object({
    eyebrow: z.string(),
    description: z.string(),
    primaryCtaLabel: z.string().default('Request Quote'),
    primaryCtaHref: z.string().default('/contact'),
    secondaryCtaLabel: z.string().optional(),
    secondaryCtaHref: z.string().optional(),
  }),
  stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  intro: z.object({
    eyebrow: z.string().optional(),
    title: z.string(),
    description: z.string(),
  }),
  categoryNotes: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
  finalCta: z.object({
    title: z.string(),
    description: z.string().optional(),
    primaryLabel: z.string().default('Request Quote'),
    primaryHref: z.string().default('/contact'),
    secondaryLabel: z.string().optional(),
    secondaryHref: z.string().optional(),
  }).optional(),
  ...seoFields,
};

const productIndex = defineCollection({
  type: 'data',
  schema: z.object(indexPageFields),
});

const solutionIndex = defineCollection({
  type: 'data',
  schema: z.object(indexPageFields),
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
    benefits: z.array(z.union([z.string(), z.object({ title: z.string(), description: z.string() })])).default([]),
    warranty: z.string().optional(),
    relatedSolutions: z.array(z.string()).default([]),
    relatedCases: z.array(z.string()).default([]),
    image: z.string().default('/placeholders/solar-panel.svg'),
    imageAlt: z.string().optional(),
    cardImage: z.string().optional(),
    cardImageAspectRatio: z.string().optional(),
    heroBanners: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
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
    description: z.string().optional(),
    descriptionTitle: z.string().optional(),
    descriptionTopImage: z.object({ src: z.string(), alt: z.string() }).optional(),
    descriptionMiddleLabel: z.string().optional(),
    descriptionBottomImage: z.object({ src: z.string(), alt: z.string() }).optional(),
    heroImages: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    specs: z.array(z.object({ group: z.string().optional(), subGroup: z.string().optional(), label: z.string(), value: z.string() })).default([]),
    specsImages: z.object({
      panel: z.object({ src: z.string(), alt: z.string() }).optional(),
      battery: z.object({ src: z.string(), alt: z.string() }).optional(),
      inverter: z.object({ src: z.string(), alt: z.string() }).optional(),
    }).optional(),
    specsKeyPoints: z.string().optional(),
    scenarios: z.array(z.object({ label: z.string(), image: z.string(), alt: z.string() })).default([]),
    wiring: z.array(z.object({ label: z.string(), image: z.string(), alt: z.string() })).default([]),
    includes: z.object({ image: z.string(), alt: z.string() }).optional(),
    components: z.array(z.object({ category: z.string(), name: z.string(), quantity: z.string().optional(), note: z.string().optional() })).default([]),
    topologySteps: z.array(z.object({ label: z.string(), description: z.string().optional() })).default([]),
    benefits: z.array(z.string()).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    downloads: z.array(z.object({ label: z.string(), url: z.string().optional(), fileUrl: z.string().optional(), icon: z.string().default('pdf'), fileSize: z.string().optional() })).default([]),
    relatedCases: z.array(z.string()).default([]),
    useCases: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    ...seoFields,
  }),
});

const contact = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('B2B Inquiry'),
      description: z.string(),
    }),
    form: z.object({
      title: z.string(),
      description: z.string().optional(),
      submitLabel: z.string().default('Send Inquiry'),
      successMessage: z.string().optional(),
      mockModeNote: z.string().optional(),
      inquiryTypes: z.array(z.string()).default([]),
      applicationOptions: z.array(z.string()).default([]),
      roleOptions: z.array(z.string()).default([]),
      timelineOptions: z.array(z.string()).default([]),
    }),
    sidebar: z.object({
      contactTitle: z.string().default('Direct contact'),
      contactDescription: z.string().optional(),
      eventsTitle: z.string().default('Conversion events reserved'),
      events: z.array(z.string()).default([]),
    }),
    trustCards: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    ...seoFields,
  }),
});

const applicationIndex = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('Applications'),
      description: z.string(),
      primaryCtaLabel: z.string().default('Discuss Your Application'),
      primaryCtaHref: z.string().default('/contact'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    intro: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string(),
    }),
    selectionGuide: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      items: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    }),
    workflow: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      steps: z.array(z.object({ label: z.string(), description: z.string() })).default([]),
    }),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    finalCta: z.object({
      title: z.string(),
      description: z.string().optional(),
      primaryLabel: z.string().default('Request Application Advice'),
      primaryHref: z.string().default('/contact'),
      secondaryLabel: z.string().optional(),
      secondaryHref: z.string().optional(),
    }).optional(),
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
    imageAlt: z.string().optional(),
    hero: z.object({
      eyebrow: z.string().optional(),
      primaryCtaLabel: z.string().default('Discuss This Application'),
      primaryCtaHref: z.string().default('/contact'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }).optional(),
    painPoints: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    solutionApproach: z.string().optional(),
    buyerChecklist: z.array(z.string()).default([]),
    recommendedSolutions: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    relatedCases: z.array(z.string()).default([]),
    recommendedDownloads: z.array(z.string()).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
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
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Callsun'),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.enum(['Press', 'Product', 'Industry', 'Technical', 'Sustainability']),
    tags: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    relatedCases: z.array(z.string()).default([]),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ...seoFields,
  }),
});

const faqPage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('Resources'),
      description: z.string(),
      primaryCtaLabel: z.string().default('Request Support'),
      primaryCtaHref: z.string().default('/contact'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    categories: z.array(z.object({
      title: z.string(),
      items: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    })).default([]),
    finalCta: z.object({
      title: z.string(),
      description: z.string().optional(),
      primaryLabel: z.string().default('Ask a Question'),
      primaryHref: z.string().default('/contact'),
      secondaryLabel: z.string().optional(),
      secondaryHref: z.string().optional(),
    }).optional(),
    ...seoFields,
  }),
});

const videoPage = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('Resources'),
      description: z.string(),
      primaryCtaLabel: z.string().default('Request Video Materials'),
      primaryCtaHref: z.string().default('/contact'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    categories: z.array(z.object({ title: z.string(), description: z.string(), status: z.string().optional() })).default([]),
    videoSlots: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      thumbnail: z.string().default('/placeholders/battery-system.svg'),
      thumbnailAlt: z.string().optional(),
      videoUrl: z.string().optional(),
      duration: z.string().optional(),
      category: z.string().optional(),
    })).default([]),
    finalCta: z.object({
      title: z.string(),
      description: z.string().optional(),
      primaryLabel: z.string().default('Request Video Support'),
      primaryHref: z.string().default('/contact'),
      secondaryLabel: z.string().optional(),
      secondaryHref: z.string().optional(),
    }).optional(),
    ...seoFields,
  }),
});

const resourceIndex = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('Resources'),
      description: z.string(),
      primaryCtaLabel: z.string().default('Download Documents'),
      primaryCtaHref: z.string().default('/resources/downloads'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    intro: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string(),
    }),
    resourceCards: z.array(z.object({ title: z.string(), description: z.string(), href: z.string(), eyebrow: z.string().optional() })).default([]),
    conversionPath: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      steps: z.array(z.object({ label: z.string(), description: z.string() })).default([]),
    }),
    featuredDownloadsTitle: z.string().optional(),
    featuredBlogTitle: z.string().optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    finalCta: z.object({
      title: z.string(),
      description: z.string().optional(),
      primaryLabel: z.string().default('Request Documents'),
      primaryHref: z.string().default('/contact'),
      secondaryLabel: z.string().optional(),
      secondaryHref: z.string().optional(),
    }).optional(),
    ...seoFields,
  }),
});

const downloads = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    fileUrl: z.string(),
    fileType: z.enum(['PDF', 'ZIP', 'DOC', 'XLS', 'Image', 'External']).default('PDF'),
    fileSize: z.string().optional(),
    category: z.enum(['Datasheet', 'Manual', 'Certificate', 'Guide', 'Catalog', 'Warranty', 'Installation']),
    relatedProduct: z.string().optional(),
    relatedProducts: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    version: z.string().optional(),
    updatedAt: z.coerce.date().optional(),
    requiresLeadCapture: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    ...seoFields,
  }),
});

const caseIndex = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('News & Cases'),
      description: z.string(),
      primaryCtaLabel: z.string().default('Discuss a Similar Project'),
      primaryCtaHref: z.string().default('/contact'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    subtitleZh: z.string().optional(),
    cases: z.array(z.object({
      image: z.string(),
      alt: z.string().optional(),
    })).default([]),
    intro: z.object({ eyebrow: z.string().optional(), title: z.string(), description: z.string() }).optional(),
    filtersIntro: z.object({ eyebrow: z.string().optional(), title: z.string(), description: z.string().optional() }).optional(),
    proofPoints: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    finalCta: z.object({
      title: z.string(),
      description: z.string().optional(),
      primaryLabel: z.string().default('Request Case Support'),
      primaryHref: z.string().default('/contact'),
      secondaryLabel: z.string().optional(),
      secondaryHref: z.string().optional(),
    }).optional(),
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
    coverImageAlt: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    description: z.string(),
    projectBackground: z.string().optional(),
    customerPainPoints: z.array(z.string()).default([]),
    solutionOverview: z.string().optional(),
    businessResults: z.array(z.string()).default([]),
    projectParameters: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    salesAngle: z.string().optional(),
    casePdf: z.string().optional(),
    relatedProducts: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    ...seoFields,
  }),
});

const supportIndex = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      eyebrow: z.string().default('Support & Service'),
      description: z.string(),
      primaryCtaLabel: z.string().default('Request Support'),
      primaryCtaHref: z.string().default('/contact'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    intro: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string(),
    }),
    process: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      steps: z.array(z.object({ label: z.string(), description: z.string() })).default([]),
    }),
    trustBlocks: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    finalCta: z.object({
      title: z.string(),
      description: z.string().optional(),
      primaryLabel: z.string().default('Send Support Inquiry'),
      primaryHref: z.string().default('/contact'),
      secondaryLabel: z.string().optional(),
      secondaryHref: z.string().optional(),
    }).optional(),
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

const customPages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    urlPath: z.string(),
    pageType: z.enum(['SEO Page', 'Company Page', 'Support Page', 'Legal Page', 'Campaign Page']).default('SEO Page'),
    category: z.string().optional(),
    eyebrow: z.string().optional(),
    summary: z.string(),
    coverImage: z.string().optional(),
    imageAlt: z.string().optional(),
    ctaLabel: z.string().default('Request a Quote'),
    ctaHref: z.string().default('/contact'),
    secondaryCtaLabel: z.string().optional(),
    secondaryCtaHref: z.string().optional(),
    sections: z.array(z.object({
      eyebrow: z.string().optional(),
      heading: z.string(),
      description: z.string().optional(),
      items: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    })).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    relatedLinks: z.array(z.object({ label: z.string(), href: z.string(), description: z.string().optional() })).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    ...seoFields,
  }),
});

const landingPages = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    audience: z.string(),
    campaign: z.string().optional(),
    adGroup: z.string().optional(),
    targetKeywords: z.array(z.string()).default([]),
    hero: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      primaryCtaLabel: z.string().default('Request a Quote'),
      primaryCtaHref: z.string().default('#landing-form'),
      secondaryCtaLabel: z.string().optional(),
      secondaryCtaHref: z.string().optional(),
    }),
    trustBadges: z.array(z.string()).default([]),
    painPoints: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    valueProps: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    offerCards: z.array(z.object({ title: z.string(), description: z.string(), linkLabel: z.string().optional(), linkHref: z.string().optional() })).default([]),
    recommendedProducts: z.array(z.string()).default([]),
    recommendedSolutions: z.array(z.string()).default([]),
    relatedCases: z.array(z.string()).default([]),
    downloads: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    formTitle: z.string().default('Request campaign pricing'),
    formDescription: z.string().optional(),
    thankYouMessage: z.string().default('Inquiry endpoint is reserved for the next CRM phase.'),
    ctaLabel: z.string().default('Request a Quote'),
    draft: z.boolean().default(true),
    ...seoFields,
  }),
});

export const collections = { homepage, about, contact, applicationIndex, productIndex, solutionIndex, products, solutions, applications, news, faqPage, videoPage, resourceIndex, downloads, caseIndex, cases, supportIndex, supportPages, navigation, customPages, landingPages };
