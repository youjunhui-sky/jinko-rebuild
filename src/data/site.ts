// Callsun site-wide metadata and marketing configuration.
export const SITE = {
  name: 'Callsun',
  domain: 'https://jinko-rebuild.youjh120608.workers.dev', // TODO: replace after official domain is confirmed
  defaultTitle: 'Callsun — Solar Modules & Energy Storage for B2B Installers',
  defaultDescription:
    'Callsun supplies solar modules, off-grid and grid-tied solar storage systems for distributors, dealers and EPC installers. Built for B2B inquiry, SEO and Google Ads landing pages.',
  defaultOgImage: '/og/default.svg',
  twitter: '',
  organization: {
    legalName: 'Callsun',
    foundingDate: '',
    hqAddress: {
      street: '',
      city: '',
      region: '',
      postal: '',
      country: 'CN',
    },
    factory: {
      city: '',
      region: '',
      country: 'CN',
      since: '',
    },
    contact: {
      sales: 'sales@callsun.com',
      support: 'support@callsun.com',
      phone: '',
      whatsapp: '',
      linkedin: '',
      tiktok: '',
    },
    sameAs: [] as string[],
  },
  analytics: {
    cloudflareToken: 'db83513384f843468330c384bd250fed',
    plausibleDomain: '',
    gtmId: '',
    ga4Id: '',
    googleAdsId: '',
    googleAdsConversionLabel: '',
  },
  seoTargets: {
    money: [
      'solar panel distributor',
      'commercial solar panels for installers',
      'off grid solar system supplier',
      'solar storage system supplier',
      'solar panels for EPC contractors',
      'B2B solar module manufacturer',
    ],
    longTail: [
      '450w solar panel supplier',
      '580w solar module specification',
      '620w n type solar panel',
      '6.5kw off grid solar system',
      '10kw off grid solar system with battery',
      '12kw grid tied solar storage system',
    ],
  },
} as const;

export type SiteConfig = typeof SITE;
