// 构建时动态生成 OG 图: 通过 Astro getStaticPaths + 静态返回 SVG
// 路由: /og/[type]/[slug].svg → 编译期就生成 SVG 文件
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { slugify } from '@/lib/slugify';

const THEMES = {
  default: { bg1: '#108474', bg2: '#00A86B', accent: '#7cbe22' },
  product: { bg1: '#108474', bg2: '#00A86B', accent: '#7cbe22' },
  news:    { bg1: '#1E293B', bg2: '#00A86B', accent: '#7cbe22' },
} as const;

function esc(s: string): string {
  return s.replace(/[<>&"']/g, c =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]!));
}

function wrap(text: string, max: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) {
      if (cur) lines.push(cur);
      cur = w;
    } else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 4);
}

function renderSvg(title: string, eyebrow: string, themeKey: keyof typeof THEMES): string {
  const t = THEMES[themeKey] || THEMES.default;
  const lines = wrap(title, 26);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${t.bg1}"/>
      <stop offset="1" stop-color="${t.bg2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="950" cy="200" r="280" fill="${t.accent}" opacity=".15"/>
  <rect x="80" y="500" width="80" height="6" fill="${t.accent}"/>
  <text x="80" y="120" font-family="Inter,sans-serif" font-size="24" font-weight="600" fill="${t.accent}" letter-spacing="2">${esc(eyebrow.toUpperCase())}</text>
  ${lines.map((line, i) =>
    `<text x="80" y="${230 + i * 78}" font-family="Manrope,sans-serif" font-size="64" font-weight="800" fill="#fff">${esc(line)}</text>`
  ).join('\n  ')}
  <text x="80" y="560" font-family="Inter,sans-serif" font-size="26" font-weight="600" fill="#A5C8E8">Callsun</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { type: string; slug: string }; props: { title: string; eyebrow: string; theme: keyof typeof THEMES } }[] = [];

  // 产品 OG
  const products = await getCollection('products');
  for (const p of products) {
    paths.push({
      params: { type: 'product', slug: slugify(p.data.name) },
      props: { title: p.data.name, eyebrow: p.data.tech, theme: 'product' },
    });
  }

  // 新闻 OG
  const news = await getCollection('news', n => !n.data.draft);
  for (const n of news) {
    paths.push({
      params: { type: 'news', slug: n.slug },
      props: { title: n.data.title, eyebrow: n.data.category, theme: 'news' },
    });
  }

  // 默认 OG
  paths.push({
    params: { type: 'default', slug: 'home' },
    props: { title: 'Solar Modules + Storage Packages', eyebrow: 'Callsun B2B Solar', theme: 'default' },
  });

  return paths;
};

export const GET: APIRoute = ({ props }) => {
  const { title, eyebrow, theme } = props as { title: string; eyebrow: string; theme: keyof typeof THEMES };
  return new Response(renderSvg(title, eyebrow, theme), {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
