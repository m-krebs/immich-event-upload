# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Immich Event Upload is a SvelteKit web application that enables anyone with a room link to upload photos/videos to an Immich photo library. Admins (multi-user, authenticated) create rooms; each room auto-creates an Immich album with a shareable QR code.

## Commands

```bash
pnpm dev              # Start dev server (localhost:5173)
pnpm build            # Production build
pnpm start            # Run production build (node build/)
pnpm check            # TypeScript type checking
pnpm check:watch      # Type checking in watch mode
pnpm lint             # Prettier check
pnpm format           # Prettier auto-fix

# Database (Drizzle + SQLite)
pnpm db:push          # Push schema to database
pnpm db:generate      # Generate migrations
pnpm db:migrate       # Run migrations
pnpm db:studio        # Open Drizzle Studio

pnpm auth:schema      # Regenerate better-auth schema
```

## Architecture

### Stack
- **SvelteKit** with Node adapter, TypeScript, Svelte 5
- **Tailwind CSS v4** for styling
- **better-auth** for email+password authentication
- **Drizzle ORM + better-sqlite3** for SQLite database
- **@immich/sdk** for Immich API integration

### Route Structure
- `/` — Redirect to /admin if authenticated, else /login
- `/admin` — Room list and management (auth required)
- `/admin/room/new` — Create new room
- `/admin/room/[slug]` — Room detail/settings
- `/room/[token]` — Public upload page (no auth required)
- `/api/album/*` — Album API endpoints

### Key Directories
- `src/lib/server/db/` — Drizzle schema and database connection
- `src/lib/server/auth.ts` — better-auth configuration
- `src/lib/components/ui/` — Reusable UI components
- `src/routes/admin/room/new/data.remote.ts` — Room creation with Immich album integration

### Authentication
- All `/admin/*` routes are protected via `locals.user` in layout server files
- Rooms are scoped by `created_by` — users only see their own rooms
- `/room/[token]` is fully public

### Immich Integration
Uses `@immich/sdk` to create albums and upload assets. Environment variables:
- `IMMICH_BASE` — Immich API base URL
- `IMMICH_API_KEY` — API key with upload + album permissions

## Environment Variables

Required in `.env` (see `.env.example`):
```
DATABASE_URL=local.db
ORIGIN=http://localhost:5173
BETTER_AUTH_SECRET=<32+ char secret>
IMMICH_BASE=https://your-immich-instance/api
IMMICH_API_KEY=<api-key>
```
