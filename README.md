# Setu Groups Landing Site — Brand Aligned Edition

A clean, modern Next.js landing website for **Setu Groups**, revised so the visual system aligns more closely with the **Setu Groups master logo**.

## What changed in this brand-aligned pass

- Shifted the site away from a generic dark SaaS palette
- Rebuilt the visual tone around the **Setu Groups logo colors**:
  - navy / deep blue for trust and structure
  - orange / gold for warmth, motion, and brand emphasis
- Updated hero messaging to reflect the master brand idea:
  **Intertwining Trade & Technology**
- Restyled cards, buttons, badges, and accents to match the logo more naturally
- Updated the temporary **Setu CRM** icon so it sits inside the same brand family

## What is included

- Premium one-page landing experience with responsive layout
- Setu Groups hero and company positioning
- Setu Track product section using provided brand assets
- Setu CRM placeholder section with a temporary brand-aligned icon
- Import–export services section
- Web app development services section
- Clean navigation, footer, gradients, and polished interaction styling
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

```bash
npm install
npm run dev
```

Open:

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

- `mailto:hello@setugroups.com` with the correct company email
- the Setu Track CTA with the real product URL
- metadata in `app/layout.tsx` with your final domain
- optional OG/social image in `public/`

## Notes on design direction

This pass is intentionally more **brand-led** than the original. It aims to make the site feel more like a real master company homepage and less like a generic startup landing page.
