# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based static splash page for the F3 Tornado Alley fitness community. The site is SEO-optimized, built with TypeScript and Tailwind CSS v4, and deployed to Cloudflare Pages via automated GitHub Actions.

## Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build static site to out/ directory
npm run lint         # Run ESLint
```

### Deployment
- **Automatic**: Push to `main` branch triggers GitHub Actions deployment
- **Manual via Wrangler**: `wrangler pages deploy out --project-name=tornado-alley`

## Architecture & Configuration

### Static Site Export
This project uses Next.js with static export (`output: "export"`) configured in `next.config.ts`. Key implications:
- Site is pre-rendered to static HTML at build time
- Images use `unoptimized: true` for static hosting compatibility
- Output goes to `out/` directory
- All pages have `trailingSlash: true` for consistent routing

### Cloudflare Integration

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
- Triggers on push/PR to `main` branch
- Uses Node.js 20 (required for Next.js 16+)
- Deploys to Cloudflare Pages project named `tornado-alley`
- Requires secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

**R2 Asset Storage**:
- Bucket: `tornadoalley-website-assets`
- Public URL: `https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev`
- Used for images and media to avoid storing large files in Git
- Accessible via Wrangler CLI: `npx wrangler r2 bucket list`

### SEO Implementation

**Metadata** (`app/layout.tsx:15-65`):
- Comprehensive meta tags for title, description, keywords
- Open Graph tags for social sharing (Facebook, LinkedIn)
- Twitter Card metadata with `@f3tornadoalley` handle
- robots.txt configuration for search engine crawling
- Structured data uses JSON-LD schema in `app/page.tsx:4-17`

**Social Media Links** (`app/page.tsx`):
- Facebook: https://www.facebook.com/f3tornadoalley
- Instagram: https://www.instagram.com/f3tornadoalley/
- X/Twitter: https://x.com/f3tornadoalley
- TikTok: https://www.tiktok.com/@f3tornadoalley

## Key Files

- `app/layout.tsx` - Root layout with SEO metadata and fonts (Geist Sans/Mono)
- `app/page.tsx` - Main splash page with social links and hero image
- `app/globals.css` - Global Tailwind CSS imports
- `next.config.ts` - Next.js configuration for static export
- `.github/workflows/deploy.yml` - Automated Cloudflare Pages deployment

## Image Handling

Images should be hosted on Cloudflare R2 rather than committed to the repository:
1. Upload to R2: `npx wrangler r2 object put tornadoalley-website-assets/images/[filename] --file [local-path]`
2. Reference via public URL: `https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev/images/[filename]`
3. Use Next.js `<Image>` component with `fill` prop for responsive sizing

## Node.js Version

Requires Node.js 20.9.0+ (Next.js 16 requirement). GitHub Actions uses Node 20.
