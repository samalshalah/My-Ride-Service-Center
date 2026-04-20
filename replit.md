# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Client: My Ride Service Center

**Business:** My Ride Service Center — Auto Repair & Collision Body Shop in Fredericksburg, VA  
**Website artifact:** `artifacts/united-mechanic`  
**Phone:** 540-418-6626  
**Address:** 2715 Lafayette Blvd, Fredericksburg, VA 22408  
**Brand color:** Red (hsl 4 85% 46%)  
**Logo:** `/myride-logo.png` (downloaded from client site)

### Routes
- `/` — Home  
- `/auto-repair` — Auto Repair list (8 services)  
- `/auto-repair/:slug` — Individual auto repair service page  
- `/body-shop` — Body Shop list (8 services)  
- `/body-shop/:slug` — Individual body shop service page  
- `/dealership-service-program` — Dealership Service Program  
- `/about` — About  
- `/contact` — Contact  
- `/appointment` — Book Appointment  

### Services Data
`src/data/services.ts` exports `AUTO_REPAIR_SERVICES`, `BODY_SHOP_SERVICES`, `ALL_SERVICES`  
Each has: slug, title, tagline, image, description, details, whyUs, category

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
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

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
