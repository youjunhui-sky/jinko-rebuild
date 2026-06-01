import type { APIRoute } from 'astro';
import { SITE } from '@/data/site';

export const GET: APIRoute = () => {
  const body = `# Callsun — robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /search?
Disallow: /admin/

Sitemap: ${SITE.domain}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
