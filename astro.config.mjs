import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jinko-rebuild.youjh120608.workers.dev',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-MX', zh: 'zh-CN' },
      },
      filter: (page) => {
        const legacyPaths = [
          '/eagle-modules/',
          '/eagle-storage/',
          '/homeowners/',
          '/installer-finder/',
          '/jacksonville/',
          '/tiger-neo/',
          '/warranty/',
          '/news/',
          '/case-studies/',
          '/es/',
          '/zh/',
          // Hidden modules (2026-07-22 客户要求隐藏，资料齐后再完善)
          '/about/v1',
          '/about/v2',
          '/about/v3',
          '/about',
          '/applications/',
          '/support/',
        ];
        const url = new URL(page);
        return !legacyPaths.some((path) => url.pathname === path || url.pathname.startsWith(path));
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
