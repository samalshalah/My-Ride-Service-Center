# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Client: My Ride Service Center

**Business:** My Ride Service Center — Auto Repair & Collision Body Shop in Fredericksburg, VA  
**Website artifact:** `artifacts/united-mechanic`  
**Phone:** 540-418-6626  
**Address:** 2715 Lafayette Blvd, Fredericksburg, VA 22408  
**Brand color:** Red (hsl 4 85% 46%)  
**Canonical URL:** https://www.myrideserivcecenter.com (note: "serivce" typo is intentional — matches the real domain)

### Framework
**Next.js 15 App Router** — fully migrated from React+Vite for SSR-based SEO.

### Architecture Pattern
- **Server components** at `src/app/*/page.tsx` — export `metadata`, render JSON-LD `<script>`, wrap client content
- **Client components** at `src/components/pages/*Content.tsx` — have `'use client'`, contain all interactive JSX
- **Root layout** at `src/app/layout.tsx` — site-wide metadata, LocalBusiness JSON-LD, Navbar + Footer
- **Shared components** at `src/components/` — Navbar, Footer, BoxedHero, PageHero (all use `next/link`)

### Routes
- `/` — Home  
- `/auto-repair` — Auto Repair list (8 services)  
- `/auto-repair/[slug]` — Individual auto repair service page (SSG via `generateStaticParams`)
- `/body-shop` — Body Shop list (8 services)  
- `/body-shop/[slug]` — Individual body shop service page (SSG via `generateStaticParams`)
- `/dealership-service-program` — Dealership Service Program  
- `/about` — About  
- `/contact` — Contact  
- `/appointment` — Book Appointment  

### SEO
- `src/app/sitemap.ts` — generates `/sitemap.xml` with all 25 URLs
- `src/app/robots.ts` — generates `/robots.txt`
- Each page exports `generateMetadata` (or `export const metadata`)
- FAQPage JSON-LD rendered server-side on all list/service pages
- LocalBusiness + AutoRepair JSON-LD in root layout head

### Services Data
`src/data/services.ts` exports `AUTO_REPAIR_SERVICES`, `BODY_SHOP_SERVICES`, `ALL_SERVICES`  
Each has: slug, title, tagline, image, description, metaTitle, metaDescription, details, whyUs, faq, sections, process, category

### Key Files
- `artifacts/united-mechanic/src/app/layout.tsx` — root layout
- `artifacts/united-mechanic/src/app/globals.css` — Tailwind v4 theme (hsl CSS vars)
- `artifacts/united-mechanic/next.config.ts` — Next.js config (BASE_PATH support, @ alias)
- `artifacts/united-mechanic/postcss.config.mjs` — @tailwindcss/postcss plugin

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Website framework**: Next.js 15 (App Router) + Tailwind v4
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/united-mechanic run dev` — run Next.js website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
