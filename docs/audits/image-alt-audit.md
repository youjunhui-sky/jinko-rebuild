# Callsun Image & ALT Audit

> Generated during Callsun CMS/SEO hardening. Official customer images are still pending; this file lists placeholder usage and replacement priorities.

## ALT policy

- Product images: include brand + wattage/model + application intent, e.g. `Callsun 580W N-type solar module for commercial rooftop and distributor supply`.
- Solution images: include capacity + system type + package intent, e.g. `Callsun 10kW off-grid solar system with 14kWh battery package illustration`.
- Case images: include capacity + project/application type + location/client context when available.
- Blog/Resource covers: describe the topic, not decorative wording.
- Decorative navigation thumbnails may use empty alt in header dropdowns; content images should have meaningful alt.

## Placeholder inventory

| Type | File | Image field | Placeholder assets |
|---|---|---|---|
| Product | src/content/products/200w-custom-module.json | image | /placeholders/solar-panel.svg |
| Product | src/content/products/215w-custom-module.json | image | /placeholders/solar-panel.svg |
| Product | src/content/products/450w-double-glass-module.json | image | /placeholders/solar-panel.svg |
| Product | src/content/products/580w-n-type-module.json | image | /placeholders/solar-panel.svg |
| Product | src/content/products/620w-n-type-module.json | image | /placeholders/solar-panel.svg |
| Solution | src/content/solutions/grid-tied-12kw-28kwh.json | image | /placeholders/battery-system.svg |
| Solution | src/content/solutions/off-grid-10kw-14kwh.json | image | /placeholders/battery-system.svg |
| Solution | src/content/solutions/off-grid-6-5kw-10kwh.json | image | /placeholders/battery-system.svg |
| Application | src/content/applications/commercial-rooftop.json | image | /placeholders/case-rooftop.svg |
| Application | src/content/applications/home-energy-storage.json | image | /placeholders/battery-system.svg |
| Application | src/content/applications/off-grid-remote-power.json | image | /placeholders/battery-system.svg |
| Case | src/content/cases/auto-dealership-800kw.json | coverImage | /placeholders/case-rooftop.svg |
| Case | src/content/cases/cheng-da-iii-3-5mw.json | coverImage | /placeholders/case-rooftop.svg |
| Case | src/content/cases/euro-film-3-3mw.json | coverImage | /placeholders/case-rooftop.svg |
| Case | src/content/cases/solar-storage-microgrid-100kw-215kwh.json | coverImage | /placeholders/battery-system.svg |
| Blog | src/content/news/2026-06-01-b2b-solar-installer-guide.md | cover | /placeholders/case-rooftop.svg |
| Blog | src/content/news/2026-06-02-how-to-compare-solar-module-datasheets.md | cover | /placeholders/solar-panel.svg |
| Blog | src/content/news/2026-06-02-off-grid-solar-system-package-checklist.md | cover | /placeholders/battery-system.svg |
| Landing Page | src/content/landingPages/solar-distributor-placeholder.json | hero.image | /placeholders/battery-system.svg |
| Homepage | src/content/homepage/home.json | hero.image | /placeholders/battery-system.svg |
| About | src/content/about/about.json | hero.image | /placeholders/battery-system.svg |
| Navigation | src/content/navigation/10-products.json | image/children.image | /placeholders/solar-panel.svg |
| Navigation | src/content/navigation/20-solutions.json | image/children.image | /placeholders/battery-system.svg |
| Navigation | src/content/navigation/30-applications.json | image/children.image | /placeholders/battery-system.svg, /placeholders/case-rooftop.svg |
| Navigation | src/content/navigation/40-resources.json | image/children.image | /placeholders/case-rooftop.svg |
| Navigation | src/content/navigation/50-cases.json | image/children.image | /placeholders/case-rooftop.svg |

## Replacement priority

1. **Product photos**: 450W, 580W, 620W standard modules; 180W/200W/215W custom modules.
2. **System package visuals**: grid-tied 12kW/28kWh, off-grid 6.5kW/10kWh, off-grid 10kW/14kWh.
3. **Project case photos**: commercial rooftop, industrial rooftop, automotive retail, solar + storage microgrid.
4. **Company/factory photos**: About page hero, factory/warehouse/quality control/certification visuals.
5. **Resource covers**: blog cover images, download thumbnails, video thumbnails.
6. **Navigation thumbnails**: dropdown thumbnails after the core content images are replaced.

## Customer material request checklist

- Logo source file: SVG/AI/PDF preferred.
- Product photos: transparent PNG or white-background JPG/WebP; at least 1600px wide.
- Product datasheets: official PDF for each model.
- Certificates: UL/IEC/CE or market-specific certification files.
- Factory/company photos: exterior, production line, warehouse, QC/testing, packaging.
- Project photos: 3-6 images per case, plus project capacity/location/industry confirmation.
- Video assets: installation demo, product overview, case walkthrough if available.

## Implementation notes

- CMS now contains editable image fields for products, solutions, applications, cases, custom pages, landing pages, homepage/about hero, navigation thumbnails, and OG images.
- Added missing ALT fields for product images, solution images, case cover images, and blog covers.
- Current placeholder SVGs are acceptable for structure preview but should be replaced before final client launch.
