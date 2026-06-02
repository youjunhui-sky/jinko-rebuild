# Callsun Launch QA Checklist

> Purpose: final review list before sending the Callsun B2B website to the customer or connecting a production domain.

## 1. Build and deployment

- [ ] `npm run build` passes locally.
- [ ] GitHub Actions / Cloudflare deployment finishes successfully.
- [ ] Production domain is connected and HTTPS certificate is valid.
- [ ] `workers.dev` or production URL can be accessed from an external network.
- [ ] `/robots.txt` is reachable.
- [ ] `/sitemap-index.xml` and sitemap entries are reachable.
- [ ] Legacy Jinko URLs are excluded from sitemap.
- [ ] Legacy Jinko URLs either noindex+redirect or have Cloudflare Redirect Rules if true 301 is required.

## 2. Brand and content cleanup

- [ ] No visible `Jinko`, `Jinkosolar`, `EAGLE`, `Tiger`, `NYSE`, `Jacksonville` legacy wording on public Callsun pages.
- [ ] Logo, favicon and OG default image are final Callsun assets.
- [ ] Homepage H1 and hero copy are approved.
- [ ] About page company/factory/quality claims are approved by customer.
- [ ] Product names, wattages, specs and warranty text are approved.
- [ ] Solution package capacity, battery capacity, PV capacity and BOM descriptions are approved.
- [ ] Case references are approved for public use.

## 3. CMS editing

- [ ] Customer or operator can access `/admin/`.
- [ ] CMS login provider is configured and tested.
- [ ] Homepage can be edited and published.
- [ ] Products Index and individual Products can be edited and published.
- [ ] Solutions Index and individual Solutions can be edited and published.
- [ ] Applications Index and individual Applications can be edited and published.
- [ ] Resources Index, Downloads, Blog, FAQ and Videos can be edited and published.
- [ ] Cases Index and individual Cases can be edited and published.
- [ ] Support Index and Support Pages can be edited and published.
- [ ] Navigation can be edited without breaking header/footer links.
- [ ] See `docs/audits/cms-editing-guide.md` for editing order and collection map.

## 4. SEO and indexing

- [ ] Each index page has approved `seoTitle`, `metaDescription`, `h1`, `canonical`, `ogImage`.
- [ ] Each detail page has approved SEO fields.
- [ ] `noindex` is enabled only for intended pages such as SEM landing pages or legacy pages.
- [ ] Product / Solution / Application / Blog URLs follow the three-level SEO structure.
- [ ] Blog category and tag pages render correctly.
- [ ] FAQ pages output FAQPage schema.
- [ ] Blog and case detail pages output Article schema where applicable.
- [ ] Search page works and Pagefind index is generated.

## 5. Images and media

- [ ] Product placeholder images are replaced with official product photos.
- [ ] Solution package placeholder images are replaced or approved.
- [ ] Case placeholder images are replaced with real project photos.
- [ ] About/company placeholder images are replaced with official company/factory photos.
- [ ] Download thumbnails and blog covers are replaced or approved.
- [ ] Video thumbnails and video URLs are filled if video center is public at launch.
- [ ] Image ALT text is meaningful for public content images.
- [ ] See `docs/audits/image-alt-audit.md` for current placeholder inventory.

## 6. Downloads and documents

- [ ] Product datasheets are official PDFs.
- [ ] Certificates are official PDFs and match the product/market.
- [ ] Product catalog is final.
- [ ] Warranty document is final.
- [ ] Installation guides are final or clearly marked as placeholder.
- [ ] Downloads requiring lead capture are configured intentionally.
- [ ] Download click events are tracked.

## 7. Forms and inquiry backend

- [ ] Contact form submits successfully to `/api/inquiry`.
- [ ] Landing page RFQ form submits successfully to `/api/inquiry`.
- [ ] Required field validation works.
- [ ] Invalid email validation works.
- [ ] Honeypot `_gotcha` blocks spam submissions.
- [ ] UTM, referrer, landing page and form source fields are captured.
- [ ] Inquiry fields include application, buyer role, timeline, market, size and document needs.
- [ ] Production backend mode is decided: `mock`, `webhook`, HubSpot, Feishu Bitable, Cloudflare D1 or self-hosted CRM.
- [ ] If webhook mode is used, `INQUIRY_WEBHOOK_URL` and token are configured.
- [ ] If Cloudflare Turnstile is enabled, `TURNSTILE_SECRET_KEY` and site key are configured and tested.

## 8. Analytics and advertising

- [ ] GTM ID is provided and configured.
- [ ] GA4 ID is provided and configured.
- [ ] Google Ads conversion ID/labels are provided and configured.
- [ ] Cookie Consent behavior is approved.
- [ ] `dataLayer` events fire for page view / CTA / form submit / download / landing events.
- [ ] Email click, WhatsApp click and video watch click events are mapped if those channels are used.
- [ ] SEM landing pages remain `noindex` unless intentionally opened for indexing.

## 9. Navigation and internal links

- [ ] Header primary navigation matches customer IA.
- [ ] Dropdown links work.
- [ ] Footer links work.
- [ ] Breadcrumbs are correct on detail pages.
- [ ] CTAs route to the intended pages.
- [ ] Related products / solutions / applications / cases / downloads links work.
- [ ] Legacy `/news/` and `/case-studies/` handling is intentional.

## 10. Performance and accessibility

- [ ] Images are compressed and sized appropriately.
- [ ] Core pages load acceptably on mobile.
- [ ] Mobile navigation works.
- [ ] Buttons and links are keyboard accessible.
- [ ] Forms have labels.
- [ ] Public images have meaningful alt text unless decorative.
- [ ] Color contrast is acceptable for key text and buttons.

## 11. Customer material still required

- [ ] Official Callsun logo and favicon source.
- [ ] Product photos.
- [ ] Datasheet PDFs.
- [ ] Certificate PDFs.
- [ ] Warranty and after-sales policy documents.
- [ ] Factory/company photos.
- [ ] Real project photos and case permission.
- [ ] Final contact email/phone/WhatsApp/LinkedIn/TikTok.
- [ ] Domain and Cloudflare account decision.
- [ ] GTM/GA4/Google Ads account IDs.
- [ ] CRM or webhook destination.

## 12. Recommended final acceptance flow

1. Run local build and grep legacy terms.
2. Deploy to staging or production URL.
3. Test top navigation and all index pages.
4. Test one page from each detail type: Product, Solution, Application, Blog, Download, Case, Support, Landing, Custom Page.
5. Test Contact and Landing form submissions.
6. Test sitemap, robots and legacy URL behavior.
7. Ask customer to review CMS-editable copy and provide missing assets.
8. Replace placeholders and rerun build.
9. Connect analytics and CRM.
10. Final customer acceptance.
