# Setu Groups Landing Site

A clean, modern Next.js landing website for **Setu Groups**, designed for fast deployment on Vercel.

## What is included

- Premium one-page landing experience with responsive layout
- Setu Groups hero and company positioning
- Setu Track product section using provided brand assets
- Setu CRM placeholder section with a temporary brand icon
- Import–export services section
- Web app development services section
- Clean navigation, footer, gradients, and subtle glassmorphism styling
- Public asset structure ready for deployment

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Plain CSS with reusable components

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  ProductCard.tsx
  SectionShell.tsx
  ServiceCard.tsx
  icons/
    CRMIcon.tsx
public/
  brand/
    setu-groups/
    setu-track/
  site.webmanifest
```

## Local setup

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open the site

```text
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Keep framework preset as **Next.js**.
4. Deploy with default settings.

## Important post-build updates

Before launch, update these placeholders:

- `mailto:hello@setugroups.com` with the correct contact email
- CTA links for Setu Track with the real product URL
- Optional SEO metadata in `app/layout.tsx`
- Optional social sharing image in `public/`

## Notes on assets

This repository includes the provided brand packs in `public/brand`.
The site uses:

- Setu Groups logo assets for the company brand
- Setu Track logo assets for the live SaaS product
- A temporary custom icon component for Setu CRM

## Suggested next enhancements

- Add a real contact form or CRM capture flow
- Add product detail pages for Setu Track and Setu CRM
- Add testimonials, trust badges, and case studies
- Add analytics and conversion tracking
- Add an OG image and more complete SEO metadata
