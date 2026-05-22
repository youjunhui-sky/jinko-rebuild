/**
 * 极简 i18n: 把页面文案抽出来, 通过 t(key, locale) 取值
 * 三语: en (默认) / es / zh
 */

export const LOCALES = ['en', 'es', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-MX',
  zh: 'zh-CN',
};

type Dict = Record<string, string>;

const STRINGS: Record<Locale, Dict> = {
  en: {
    'nav.modules': 'Solar Modules',
    'nav.storage': 'Energy Storage',
    'nav.tigerNeo': 'Tiger Neo',
    'nav.homeowners': 'Homeowners',
    'nav.installers': 'Installer Finder',
    'nav.madeUsa': 'Made in USA',
    'nav.warranty': 'Warranty',
    'nav.news': 'News',
    'nav.about': 'About',
    'cta.contact': 'Contact Sales',
    'cta.exploreModules': 'Explore EAGLE® Modules →',
    'cta.findInstaller': 'Find an Installer',
    'cta.requestQuote': 'Request a Quote',
    'cta.allNews': 'All news →',
    'hero.eyebrow': 'NYSE: JKS · Bloomberg Tier 1 · Made in Jacksonville, FL',
    'hero.title.l1': 'U.S. Solar Panels',
    'hero.title.plus': '+',
    'hero.title.l2': 'Battery Storage,',
    'hero.title.l3': 'From One Trusted Manufacturer',
    'hero.subtitle': 'EAGLE® TOPCon modules and EAGLE Storage® LFP batteries — engineered for U.S. utility, commercial, and residential projects.',
    'section.lineup.title': 'One Lineup. Solar + Storage. Made in America.',
    'section.lineup.subtitle': 'From flagship TOPCon panels to LFP battery systems — every product engineered in-house, vetted by third-party labs, and backed by industry-leading warranties.',
    'section.difference.title': 'The Jinko Difference',
    'section.difference.subtitle': 'Best-in-class solar + storage from a company you trust. Public on NYSE since 2010. Manufacturing locally since 2018.',
    'section.news.title': 'Latest News & Insights',
    'section.cta.title': 'Talk to a Jinko Engineer',
    'section.cta.subtitle': 'Local U.S. team. Custom system design. Quote within 1 business day.',
    'footer.products': 'Products & Resources',
    'footer.contact': 'Contact Sales',
    'footer.subscribe.title': 'Stay Updated',
    'footer.subscribe.subtitle': 'Quarterly industry insights. No spam.',
    'footer.subscribe.button': 'Subscribe',
    'search.placeholder': 'Search Jinko products & news…',
  },
  es: {
    'nav.modules': 'Módulos Solares',
    'nav.storage': 'Almacenamiento',
    'nav.tigerNeo': 'Tiger Neo',
    'nav.homeowners': 'Propietarios',
    'nav.installers': 'Buscar Instalador',
    'nav.madeUsa': 'Hecho en EE.UU.',
    'nav.warranty': 'Garantía',
    'nav.news': 'Noticias',
    'nav.about': 'Sobre Nosotros',
    'cta.contact': 'Contactar Ventas',
    'cta.exploreModules': 'Explorar Módulos EAGLE® →',
    'cta.findInstaller': 'Encontrar Instalador',
    'cta.requestQuote': 'Solicitar Cotización',
    'cta.allNews': 'Todas las noticias →',
    'hero.eyebrow': 'NYSE: JKS · Bloomberg Tier 1 · Fabricado en Jacksonville, FL',
    'hero.title.l1': 'Paneles Solares de EE.UU.',
    'hero.title.plus': '+',
    'hero.title.l2': 'Almacenamiento,',
    'hero.title.l3': 'De Un Solo Fabricante Confiable',
    'hero.subtitle': 'Módulos EAGLE® TOPCon y baterías LFP EAGLE Storage® — diseñados para proyectos utilitarios, comerciales y residenciales en EE.UU.',
    'section.lineup.title': 'Una Línea Completa. Solar + Almacenamiento. Hecho en América.',
    'section.lineup.subtitle': 'Desde nuestros paneles TOPCon insignia hasta sistemas de baterías LFP — cada producto diseñado internamente, validado por laboratorios externos y respaldado por garantías líderes en la industria.',
    'section.difference.title': 'La Diferencia Jinko',
    'section.difference.subtitle': 'Lo mejor en solar + almacenamiento de una empresa de confianza. En NYSE desde 2010. Fabricando localmente desde 2018.',
    'section.news.title': 'Últimas Noticias',
    'section.cta.title': 'Habla con un Ingeniero Jinko',
    'section.cta.subtitle': 'Equipo local en EE.UU. Diseño personalizado. Cotización en 1 día hábil.',
    'footer.products': 'Productos y Recursos',
    'footer.contact': 'Contactar Ventas',
    'footer.subscribe.title': 'Mantente Informado',
    'footer.subscribe.subtitle': 'Insights trimestrales. Sin spam.',
    'footer.subscribe.button': 'Suscribirse',
    'search.placeholder': 'Buscar productos y noticias…',
  },
  zh: {
    'nav.modules': '光伏组件',
    'nav.storage': '储能系统',
    'nav.tigerNeo': 'Tiger Neo',
    'nav.homeowners': '家庭用户',
    'nav.installers': '查找安装商',
    'nav.madeUsa': '美国制造',
    'nav.warranty': '质保',
    'nav.news': '新闻动态',
    'nav.about': '关于晶科',
    'cta.contact': '联系销售',
    'cta.exploreModules': '了解 EAGLE® 组件 →',
    'cta.findInstaller': '查找安装商',
    'cta.requestQuote': '申请报价',
    'cta.allNews': '查看全部 →',
    'hero.eyebrow': '纽交所: JKS · 彭博 Tier 1 · 佛州杰克逊维尔本土制造',
    'hero.title.l1': '美国本土光伏组件',
    'hero.title.plus': '+',
    'hero.title.l2': '储能系统',
    'hero.title.l3': '一家可信赖的制造商',
    'hero.subtitle': 'EAGLE® TOPCon 组件与 EAGLE Storage® 磷酸铁锂电池 — 专为美国电站、工商业与户用项目设计。',
    'section.lineup.title': '一站式产品线 · 光伏 + 储能 · 美国制造',
    'section.lineup.subtitle': '从旗舰 TOPCon 组件到磷酸铁锂储能系统 — 每款产品自研、第三方实验室验证、行业领先质保。',
    'section.difference.title': '晶科优势',
    'section.difference.subtitle': '业内顶级的光伏 + 储能方案。2010 年纽交所上市。2018 年起本土制造。',
    'section.news.title': '最新资讯',
    'section.cta.title': '与晶科工程师沟通',
    'section.cta.subtitle': '美国本土团队 · 定制化系统设计 · 1 个工作日内报价',
    'footer.products': '产品与资源',
    'footer.contact': '联系销售',
    'footer.subscribe.title': '订阅更新',
    'footer.subscribe.subtitle': '季度行业洞察。绝不打扰。',
    'footer.subscribe.button': '订阅',
    'search.placeholder': '搜索晶科产品与资讯…',
  },
};

export function t(key: string, locale: Locale = 'en'): string {
  return STRINGS[locale]?.[key] ?? STRINGS.en[key] ?? key;
}

/** 从 URL pathname 推断 locale */
export function getLocaleFromPath(path: string): Locale {
  const seg = path.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : 'en';
}

/** 给一个路径加上 locale 前缀 (默认 en 不加前缀) */
export function localizedPath(path: string, locale: Locale): string {
  const p = path.startsWith('/') ? path : '/' + path;
  if (locale === 'en') return p;
  return `/${locale}${p === '/' ? '' : p}`;
}
