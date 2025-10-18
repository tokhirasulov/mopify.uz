# Mopify - Professional Cleaning Service Website

## Overview
Mopify is a multilingual professional cleaning service website built with Next.js 15 and App Router. The application features comprehensive SEO optimization for search visibility across Russian and Uzbek languages, and is optimized for deployment on Replit.

## Tech Stack
- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **UI Library**: shadcn-ui with Radix UI components
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl with locale-based routing
- **State Management**: TanStack Query (React Query) v5
- **Icons**: Lucide React

## Project Structure
```
app/
├── [locale]/           # Locale-based routing (ru, uz)
│   ├── layout.tsx     # Root layout with SEO metadata
│   ├── page.tsx       # Home page (Server Component)
│   └── globals.css    # Global styles
├── sitemap.ts         # Dynamic sitemap generation
└── robots.ts          # Robots.txt configuration
components/
├── ui/                # shadcn-ui components
├── Providers.tsx      # Client-side providers (React Query, Toaster)
└── ...                # Feature components (Hero, Services, etc.)
i18n/
├── routing.ts         # i18n routing configuration
└── request.ts         # Server-side i18n utilities
messages/
├── ru.json            # Russian translations
└── uz.json            # Uzbek translations
middleware.ts          # Next.js middleware for locale routing
next.config.mjs        # Next.js configuration
```

## SEO Features
The application implements comprehensive SEO optimization:

### Metadata
- **Locale-specific titles and descriptions** in Russian and Uzbek
- **Keywords** covering cleaning services in multiple languages (Russian, Uzbek, English)
- **Open Graph tags** for social media sharing
- **Twitter Card tags** for Twitter previews
- **Hreflang tags** for language alternates
- **Canonical URLs** for each locale
- **Robots meta tags** with granular crawler control

### Structured Data
- **LocalBusiness Schema** (JSON-LD) with:
  - Business information (name, description, contact)
  - Address and geo-coordinates
  - Service offerings
  - Aggregate ratings
  - Area served

### Sitemap & Robots
- **Dynamic sitemap** (`/sitemap.xml`) with locale-specific URLs
- **Robots.txt** (`/robots.txt`) configuration
- **Verification tags** for Google and Yandex (placeholders)

## Internationalization (i18n)
The application uses next-intl with the following configuration:

### Supported Locales
- **Russian (ru)**: Default locale
- **Uzbek (uz)**: Secondary locale

### Routing Pattern
- Locale is part of the URL: `/ru`, `/uz`
- Root path `/` redirects to default locale `/ru`
- Middleware handles locale detection and redirects

### Translation Management
- Translations stored in JSON files: `messages/ru.json`, `messages/uz.json`
- Server Components use `getTranslations()` from next-intl/server
- Client Components use `useTranslations()` hook

## Replit Configuration

### Development Server
- **Command**: `npm run dev`
- **Port**: 5000 (required for Replit)
- **Host**: 0.0.0.0 (required for Replit container)
- **HMR**: WebSocket configured for Replit proxy

### Next.js Configuration (`next.config.mjs`)
```javascript
{
  experimental: {
    allowedDevOrigins: true, // For Replit proxy
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
}
```

### Workflow
- **Name**: "Start application"
- **Command**: `npm run dev`
- **Port**: 5000
- **Output**: webview

### Deployment (Publishing)
- **Target**: autoscale (static deployment)
- **Build**: `npm run build`
- **Run**: `npm run start`

## Development

### Running the Project
The workflow "Start application" is configured to automatically run `npm run dev` which starts the Next.js development server on port 5000.

### Making Changes
- **Components**: Use Server Components by default, add `'use client'` only when necessary (hooks, event handlers)
- **Translations**: Update `messages/ru.json` and `messages/uz.json`
- **Styling**: Use Tailwind CSS classes
- **SEO**: Update metadata in `app/[locale]/layout.tsx`

## Architecture Notes

### Server vs Client Components
- **Server Components**: Pages, layouts, most UI components (better performance)
- **Client Components**: 
  - `Providers.tsx` - React Query provider, toasters
  - `app/[locale]/page.tsx` - Uses state for loading animation
  - Components with interactivity (forms, buttons with onClick)

### Data Fetching
- Use TanStack Query for client-side data fetching
- Server Components can fetch data directly
- API routes can be added in `app/api/` if needed

## Recent Changes

### 2025-10-04: Next.js 15 Migration & SEO Enhancement
- **Converted from Vite + React Router to Next.js 15 with App Router**
  - Migrated all components to Next.js structure
  - Implemented locale-based routing with [locale] pattern
  - Split components into Server/Client based on requirements
  
- **Implemented Comprehensive SEO**
  - Added generateMetadata() with locale-specific content
  - Included multilingual keywords (Russian, Uzbek, English)
  - Added Open Graph and Twitter Card tags
  - Implemented hreflang tags for language alternates
  - Added LocalBusiness structured data (JSON-LD)
  - Created dynamic sitemap and robots.txt
  
- **Enhanced i18n Support**
  - Migrated from react-i18next to next-intl
  - Configured middleware for locale detection
  - Set up proper Server/Client Component architecture
  
- **Improved UX**
  - Added proper padding to Hero section
  - Maintained all existing features and styling
  
- **Replit Optimization**
  - Configured Next.js for Replit environment
  - Set allowedDevOrigins for proxy support
  - Maintained port 5000 configuration

### Previous: Initial Replit Setup (Vite-based)
- Imported from GitHub and configured for Replit
- Updated Vite config for Replit environment
- Configured HMR WebSocket for Replit proxy

## Known Behaviors & Minor Items

### Current Status
- ✅ Application loads successfully with 200 status
- ✅ All core features working
- ✅ SEO metadata implemented
- ✅ Multilingual support functional
- ⚠️ Minor hydration warning in browser console (non-blocking, related to year in footer)

### Future Enhancements (Optional)
1. Fix hydration mismatch by making footer year render identically on server/client
2. Replace placeholder verification codes with actual Google/Yandex codes
3. Add actual OG image at `/public/og-image.jpg` (currently referenced but not created)

## Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Base URL for the site (default: https://mopify.uz)

## User Preferences
- SEO-focused: Keywords and metadata for search visibility
- Multilingual: Russian and Uzbek language support
- Clean, modern design with professional appearance
