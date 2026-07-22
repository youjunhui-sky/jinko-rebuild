import type { APIRoute } from 'astro';
import { SITE } from '@/data/site';

export const GET: APIRoute = () => {
  const body = `# Callsun — robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /search?
Disallow: /admin/
Disallow: /eagle-modules/
Disallow: /eagle-storage/
Disallow: /homeowners/
Disallow: /installer-finder/
Disallow: /jacksonville/
Disallow: /tiger-neo/
Disallow: /warranty/
Disallow: /case-studies/
Disallow: /news/
Disallow: /es/
Disallow: /zh/
Disallow: /admin/
# Hidden until content ready (2026-07-22)
Disallow: /about/v1
Disallow: /about/v2
Disallow: /about/v3
Disallow: /applications/
Disallow: /cases/
Disallow: /support/

Sitemap: ${SITE.domain}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
