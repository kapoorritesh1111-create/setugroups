# SETU Groups — marketing site repo

This repo is a rebuilt Next.js App Router site for SETU Groups.

## What is included
- Parent brand website for SETU Groups
- Product pages for SETU Track and SETU CRM
- Locale routing for `en` and `hi`
- SEO basics: metadata, robots, sitemap, JSON-LD
- Theme toggle with persistence
- Contact form API route with optional Resend integration
- Case studies and newsroom pages
- Logo usage notes and starter asset pack in `public/`

## Chosen logo direction
Use the intertwined bridge symbol as the master corporate mark.

Why:
- It expresses the meaning of SETU as a bridge.
- It visually supports data flow, supply chain routes, and interconnected systems.
- It can scale into product icons for SETU Track and SETU CRM.

## Asset usage
- `public/logo.png` → main horizontal logo lockup
- `public/symbol.png` → symbol only for app-style use, favicon generation, and product branding

## Quick start
1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Add your production domain and Resend credentials if needed
4. `npm run dev`
5. Open `http://localhost:3000`

## Deploy
Deploy on Vercel. The middleware will redirect root traffic to `/en` or `/hi`.
