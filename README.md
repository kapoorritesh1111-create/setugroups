# SETU Groups Website Rebuild

Production-ready Next.js 14 starter for rebuilding `setugroup.com` as a premium SaaS ecosystem website.

## Included
- Home page with premium SaaS structure
- Shared header, footer, CTA system, and reusable section primitives
- Product pages for **SETU Track** and **SETU CRM**
- Solutions, Company, and Contact pages
- Tailwind design tokens with a clean brand system
- Metadata, robots, sitemap, and Open Graph scaffolding
- Vercel-ready App Router structure
- Contact API route stub ready for CRM/email integration

## Important implementation note
The uploaded handoff kit contained strategy documents and prompts, but no finalized production logo asset files. To keep the repo runnable and visually complete, this build includes clean SVG brand placeholders for:
- `public/setu-groups-logo.svg`
- `public/setu-symbol.svg`
- `app/icon.svg`
- `public/og-image.svg`

Replace those with the approved master brand assets before launch if you want exact logo fidelity.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
1. Push to GitHub
2. Import into Vercel
3. Set `NEXT_PUBLIC_SITE_URL=https://setugroup.com`
4. Replace placeholder contact routing in `app/api/contact/route.ts` with Resend, SMTP, HubSpot, or your CRM webhook
5. Swap placeholder SVG brand files with final approved assets

## File structure
```text
app/
  api/contact/route.ts
  company/page.tsx
  contact/page.tsx
  products/page.tsx
  setu-crm/page.tsx
  setu-track/page.tsx
  solutions/page.tsx
  globals.css
  icon.svg
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  button-link.tsx
  container.tsx
  feature-grid.tsx
  final-cta.tsx
  logo.tsx
  metadata.ts
  product-hero.tsx
  section-heading.tsx
  site-footer.tsx
  site-header.tsx
lib/
  site.ts
  utils.ts
public/
  favicon.svg
  og-image.svg
  setu-groups-logo.svg
  setu-symbol.svg
```
