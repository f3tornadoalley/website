# Tornado Alley - F3 Website

A modern, SEO-optimized splash page for Tornado Alley F3 fitness community, built with Next.js and deployed on Cloudflare Pages.

## Features

- SEO optimized with comprehensive meta tags
- Responsive design with Tailwind CSS
- Social media integration (Facebook, Instagram, X, TikTok)
- Structured data (JSON-LD) for better search engine understanding
- Static export for optimal performance on Cloudflare Pages
- Open Graph and Twitter Card support

## Prerequisites

- Node.js 20.9.0 or higher (required for Next.js 16)
- npm, yarn, pnpm, or bun package manager

## Getting Started

### Development

1. Install dependencies:

```bash
npm install
```

2. Add your logo image:
   - Place your logo file as `public/tornado-alley-logo.png`
   - Recommended size: 1200x630px for optimal social media sharing

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

Build the static site:

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

## Deployment to Cloudflare Pages

### Automated Deployment (Recommended)

This repository is configured with GitHub Actions to automatically deploy to Cloudflare Pages on every push to the `main` branch.

#### Setup Instructions

1. **Create a Cloudflare Pages Project**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Workers & Pages > Create application > Pages
   - Create a new project named `tornado-alley` (or update the `projectName` in `.github/workflows/deploy.yml`)

2. **Get your Cloudflare Account ID**:
   - In your Cloudflare Dashboard, go to Workers & Pages
   - Your Account ID is displayed in the right sidebar

3. **Create a Cloudflare API Token**:
   - Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use the "Edit Cloudflare Workers" template or create a custom token with:
     - Permissions: `Account.Cloudflare Pages — Edit`
     - Account Resources: Include your account
   - Click "Continue to summary" and "Create Token"
   - **Copy the token** (you won't be able to see it again)

4. **Add Secrets to GitHub**:
   - Go to your GitHub repository settings
   - Navigate to Settings > Secrets and variables > Actions
   - Click "New repository secret" and add:
     - Name: `CLOUDFLARE_API_TOKEN`, Value: [your API token from step 3]
     - Name: `CLOUDFLARE_ACCOUNT_ID`, Value: [your account ID from step 2]

5. **Deploy**:
   - Push to the `main` branch or merge a pull request
   - GitHub Actions will automatically build and deploy to Cloudflare Pages
   - Check the "Actions" tab in your GitHub repository to monitor deployment progress

### Manual Deployment Options

#### Option 1: Via Cloudflare Dashboard

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to Workers & Pages > Create application > Pages
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 20.9.0 or higher
6. Deploy

#### Option 2: Via Wrangler CLI

1. Install Wrangler:

```bash
npm install -g wrangler
```

2. Login to Cloudflare:

```bash
wrangler login
```

3. Deploy:

```bash
npm run build
wrangler pages deploy out --project-name=tornado-alley
```

## Customization

### Update Social Media Links

Edit [app/page.tsx](app/page.tsx:26-123) to update social media URLs.

### Update SEO Metadata

Edit [app/layout.tsx](app/layout.tsx:15-65) to customize:
- Page title and description
- Keywords
- Open Graph tags
- Twitter Card metadata
- Site verification codes (Google, etc.)

### Styling

The site uses Tailwind CSS v4. Modify styles in:
- [app/page.tsx](app/page.tsx) - Component-level styling
- [app/globals.css](app/globals.css) - Global styles

## SEO Features

This site includes:

- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: For Facebook and other social platforms
- **Twitter Cards**: Optimized preview cards for Twitter/X
- **Structured Data**: JSON-LD schema for Organizations
- **robots.txt**: Configured for proper indexing
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

## Adding Analytics

To add Google Analytics or other tracking:

1. Add the tracking script to [app/layout.tsx](app/layout.tsx) in the `<head>` section
2. Or use a Next.js analytics package like `@vercel/analytics` or `next-google-analytics`

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main splash page
│   └── globals.css         # Global styles
├── public/
│   └── tornado-alley-logo.png  # Your logo (add this)
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

## License

Copyright © F3 Tornado Alley

## Support

For issues or questions about F3 Tornado Alley, visit our social media pages or contact us through our community channels.
