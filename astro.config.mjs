import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://jinko-rebuild.youjh120608.workers.dev',

  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-MX', zh: 'zh-CN' },
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
  adapter: cloudflare()
});