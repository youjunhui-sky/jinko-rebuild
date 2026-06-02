# Callsun CMS Editing Guide

> Purpose: keep the Decap CMS structure understandable after the B2B SEO/CMS expansion.

## Recommended editing order

1. **Homepage**: brand-level messaging, hero, stats, key sections.
2. **Products Index / Products**: product category page first, then individual module records.
3. **Solutions Index / Solutions**: package overview first, then each grid-tied/off-grid solution.
4. **Applications Index / Applications**: scenario overview first, then detail pages.
5. **Resources Index / Downloads / Blog**: resource hub, downloadable files, SEO content.
6. **Cases Index / Cases**: case library page, then individual project proof records.
7. **Support Index / Support Pages**: procurement confidence and policy pages.
8. **About / Contact**: company trust page and lead capture page.
9. **Navigation**: update only after page URLs are confirmed.
10. **Landing Pages / Custom Pages**: campaign or SEO expansion pages.

## Collection map

| CMS label | Content path | Use |
|---|---|---|
| 🏠 Homepage | `src/content/homepage` | Main homepage content |
| 📦 Products Index | `src/content/productIndex` | `/products/` overview |
| 📦 Products | `src/content/products` | Individual module pages |
| 🔋 Solutions Index | `src/content/solutionIndex` | `/solutions/` overview |
| 🔋 Solutions | `src/content/solutions` | Individual system package pages |
| 🏠 Applications Index | `src/content/applicationIndex` | `/applications/` overview |
| 🏠 Applications | `src/content/applications` | Scenario detail pages |
| 📚 Resources Index | `src/content/resourceIndex` | `/resources/` overview |
| 📄 Downloads | `src/content/downloads` | Datasheets, catalogs, certificates |
| 📰 Blog | `src/content/news` | Blog and technical articles |
| 🏗️ Cases Index | `src/content/caseIndex` | `/cases/` overview |
| 🏗️ Cases | `src/content/cases` | Case detail pages |
| 🛠️ Support Index | `src/content/supportIndex` | `/support/` overview |
| 🛠️ Support Pages | `src/content/supportPages` | Warranty/logistics/technical/channel pages |
| 🏢 About Callsun | `src/content/about` | About page |
| 📩 Contact Page | `src/content/contact` | Contact page and form options |
| 🧭 Navigation | `src/content/navigation` | Header/footer navigation |
| 🎯 Landing Pages | `src/content/landingPages` | SEM/Google Ads landing pages |
| 🧩 Custom Pages | `src/content/customPages` | SEO/custom static pages |

## Image replacement workflow

1. Replace product and solution images first.
2. Fill image alt fields immediately after upload.
3. Replace case cover images and gallery photos.
4. Replace homepage/about hero images.
5. Replace blog/resource covers and navigation thumbnails.
6. Update OG image fields for important pages.

See `docs/audits/image-alt-audit.md` for the current placeholder inventory.

## Fields operators should not ignore

- `seoTitle`, `metaDescription`, `h1`, `keywords`, `canonical`, `ogImage`, `noindex`
- Product/Solution/Application related links: related products, solutions, cases, downloads
- Contact form options: inquiry types, application options, buyer roles, timelines
- Download records: `requiresLeadCapture`, category, related products/solutions
- Navigation visibility and order

## Launch blockers still requiring customer material

- Official product photos and datasheets
- Certificate PDFs
- Real project photos and project approval
- Official company/factory photos
- Final domain, GA4/GTM/Ads IDs
- Final contact phone/WhatsApp/LinkedIn/TikTok
- CRM/webhook destination if inquiry backend should move out of mock mode
