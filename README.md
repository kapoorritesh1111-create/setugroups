# Setu Groups Website Repository

Production-ready Next.js 14 App Router website for **Setu Groups**, including:

- master landing page for Setu Groups
- dedicated **Setu Track** SaaS product page
- **pricing structure** page for Setu Track
- **Setu CRM waitlist** page

The repository is designed for clean Vercel deployment and can be used as the baseline marketing site for the Setu ecosystem.

## Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Framer Motion

## Routes

- `/` — Setu Groups landing page
- `/setu-track` — SaaS-style product page for Setu Track
- `/pricing` — pricing structure page for Setu Track
- `/setu-crm` — waitlist / coming-soon page for Setu CRM

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Keep the default Next.js build settings.
4. Add your production domain.
5. Deploy.

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts
  setu-track/
    page.tsx
  pricing/
    page.tsx
  setu-crm/
    page.tsx

components/
  header.tsx
  hero.tsx
  who-we-are.tsx
  products.tsx
  services.tsx
  why-setu.tsx
  credibility.tsx
  contact.tsx
  footer.tsx
  forms/
    waitlist-form.tsx
  pricing/
    pricing-page.tsx
  setu-track/
    feature-grid.tsx
    final-cta.tsx
    product-hero.tsx
    screenshots.tsx
    social-proof.tsx
    workflow.tsx
  setu-crm/
    waitlist-page.tsx
  ui/
    button.tsx
    container.tsx
    section-shell.tsx

public/
  logo-setu.svg
  logo-setu-track.png
  setu-crm-icon.svg
  client-logo-1.svg
  client-logo-2.svg
  client-logo-3.svg
```

## Brand Assets

- `public/logo-setu.svg` — Setu Groups master brand logo
- `public/logo-setu-track.png` — Setu Track product logo
- `public/setu-crm-icon.svg` — temporary Setu CRM icon

## Notes for Production

- Replace `hello@setugroups.com` with your real contact email.
- Update `https://www.setugroups.com` in metadata if your final domain differs.
- The Setu CRM waitlist form currently uses a `mailto:` handoff so the site works immediately without a backend. Replace it later with your preferred form backend or CRM capture endpoint.
- The Setu Track product page includes structured visual placeholders for screenshots. Swap those blocks later with real product captures without changing the page layout.

## Recommended Next Steps

1. Add a real demo booking link for Setu Track.
2. Connect the Setu CRM waitlist form to a live backend.
3. Replace placeholder metrics and preview cards with real screenshots and customer proof.
4. Add dedicated contact and legal pages if needed.
