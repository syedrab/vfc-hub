# VFC Client Intelligence Hub — CLAUDE.md

## Project Overview
Internal tool for **VersaFile Consulting Group** to manage client relationships, engagements, team assignments, and stakeholder intelligence. Think: a purpose-built CRM for a boutique content management consulting firm.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Database + Auth:** Supabase (Postgres + Supabase Auth)
- **Deployment:** Vercel
- **Package Manager:** npm

## Brand & Design
- VersaFile brand colors: primary blue `#003087`, accent teal `#00A3A1`, white, light grays
- Bold, professional consulting aesthetic — NOT a generic SaaS look
- Dark sidebar navigation, white/light content areas
- Clean typography, no excessive animations

## Architecture
- `app/` — Next.js App Router pages and layouts
- `app/(auth)/` — Login/auth pages
- `app/(dashboard)/` — All authenticated app pages
- `components/` — Shared UI components
- `lib/supabase/` — Supabase client, server helpers
- `lib/types/` — TypeScript types for all entities
- `supabase/migrations/` — Database schema migrations
- `supabase/seed.sql` — Fake seed data

## Data Entities
1. **clients** — company records (one per company)
2. **engagements** — projects/work done for clients
3. **vfc_team_members** — VFC internal staff
4. **engagement_team** — junction table: team member + engagement + role
5. **stakeholders** — client-side contacts (subset flagged as Heroes)
6. **engagement_stakeholders** — junction: stakeholder + engagement
7. **activity_log** — timestamped notes on client records
8. **technologies** — lookup table for tech tags (Box, SAP, SharePoint, etc.)
9. **engagement_technologies** — junction: engagement + technology

## Key Rules
- All pages behind Supabase Auth — no public pages except `/login`
- No role-based permissions — all authenticated VFC staff have full read/write access
- Always use TypeScript — no `any` types
- Use Supabase server-side client in Server Components, browser client in Client Components
- Keep components small and focused
- No unnecessary abstractions — build for current requirements only
- Do not add features not in the PRD

## Entity Status Values
- **Client status:** `active` | `inactive` | `prospect`
- **Engagement status:** `active` | `on_hold` | `complete` | `lost`
- **Relationship health:** `green` | `yellow` | `red`
- **Influence level:** `high` | `medium` | `low`
- **Service type:** `advisory` | `solution_delivery` | `technical_services` | `managed_services`

## Navigation Structure
```
/ (redirect to /clients if authenticated, /login if not)
/login
/clients                    — client list (default landing)
/clients/[id]               — client profile
/clients/[id]/engagements   — nested under client
/engagements                — all engagements across all clients
/engagements/[id]           — engagement detail
/team                       — VFC team member directory
/team/[id]                  — team member profile (their clients + projects)
/dashboard                  — stats overview
```
