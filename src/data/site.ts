// 站点全局元数据 (替代原站散落的 WP 配置)
export const SITE = {
  name: 'Jinko US',
  domain: 'https://jinko-rebuild.youjh120608.workers.dev',
  defaultTitle: 'Jinko US — Solar + Storage From One Company',
  defaultDescription:
    "Jinko (NYSE: JKS) is a leading global PV module manufacturer and energy storage system integrator. EAGLE® modules and EAGLE Storage® for U.S. utility, C&I, and residential projects. Made in Jacksonville, FL since 2018.",
  defaultOgImage: '/og/default.png',
  twitter: '@JinkoSolar',
  organization: {
    legalName: 'Jinko Solar (U.S.) Inc.',
    foundingDate: '2010',
    nyseTicker: 'JKS',
    hqAddress: {
      street: '350 Sansome Street, Suite 360',
      city: 'San Francisco',
      region: 'CA',
      postal: '94104',
      country: 'US',
    },
    factory: {
      city: 'Jacksonville',
      region: 'FL',
      country: 'US',
      since: 2018,
    },
    contact: {
      sales: 'sales@jinkosolar.us',
      support: 'support@jinkosolar.us',
      phone: '+1-415-402-1450',
    },
    sameAs: [
      'https://www.linkedin.com/company/jinkosolar',
      'https://twitter.com/JinkoSolar',
      'https://www.youtube.com/@JinkoSolar',
      'https://www.facebook.com/JinkoSolar',
    ],
  },
  // 三大主推关键词桶 (上一轮 SEO 诊断给出的"应该抢却没抢"清单)
  seoTargets: {
    money: [
      'topcon solar panel manufacturer',
      'n-type tiger neo solar',
      'made in usa solar panels',
      'utility scale solar module',
      'commercial solar panels',
      'residential solar panel',
    ],
    longTail: [
      'jinko eagle g7 spec',
      'jinko 575w solar panel',
      'jinko solar warranty claim',
      'jinko vs qcells',
      'jinko vs canadian solar',
      'solar panel manufacturer florida',
    ],
  },
} as const;

export type SiteConfig = typeof SITE;
