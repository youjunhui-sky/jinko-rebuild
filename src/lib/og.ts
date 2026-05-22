/** OG 图 URL 构造工具 — 对应 src/pages/og/[type]/[slug].svg.ts */
import { slugify } from './slugify';

export function ogForProduct(name: string): string {
  return `/og/product/${slugify(name)}.svg`;
}
export function ogForNews(slug: string): string {
  return `/og/news/${slug}.svg`;
}
export function ogDefault(): string {
  return `/og/default/home.svg`;
}
