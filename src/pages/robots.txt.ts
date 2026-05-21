import type { APIRoute } from 'astro';
import { SITE } from '@/data/site';

// 动态生成 robots.txt (比原站手动维护更可靠)
export const GET: APIRoute = () => {
  const body = `# Jinko US — robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /search?

# 显式声明 sitemap
Sitemap: ${SITE.domain}/sitemap-index.xml

# 不要被 AI 训练? 取消注释下面两行
# User-agent: GPTBot
# Disallow: /
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
