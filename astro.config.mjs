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
