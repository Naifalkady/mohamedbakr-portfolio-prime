# Mohamed Bakr — Director of Photography Portfolio

Complete reference for this project: what exists today, how it looks, and how to
continue into a real backend + database. Frontend prototype is finished; all
content is mock data held in `src/data/`.

---

## 1. Stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start v1 (React 19, SSR) |
| Router | TanStack Router (file-based, `src/routes/`) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (CSS-first, config in `src/styles.css`) |
| UI primitives | shadcn/ui (new-york) + Radix |
| Animation | `motion` v13 (`motion/react`) |
| Data fetching | TanStack Query (installed, currently unused — mock data is static) |
| Icons | lucide-react |
| Validation | zod (available; contact form is currently uncontrolled/local) |

No backend, database, auth, or storage yet. Nothing in the app calls a network
API except remote placeholder images.

---

## 2. File map

```
src/
  data/
    site.ts             all site-wide copy: name, title, bio, contact, stats, services
    projects.ts         17 projects + categories, filters, lookup, prev/next helpers
  routes/
    __root.tsx          html shell, head meta, fonts, Navbar + Footer + cursor + transition
    index.tsx           home: parallax hero, selected work, approach, stats, CTA
    work.index.tsx      /work — category filter chips + editorial grid + LOAD MORE (page size 6)
    work.$projectId.tsx /work/:id — hero, credits, description, video block, gallery, prev/next
    about.tsx           bio, portrait, disciplines, animated stats, selected-work list
    contact.tsx         contact details + inquiry form with local success state
  components/
    Navbar.tsx          sticky, shrinks on scroll; animated mobile menu
    Footer.tsx          contact CTA, socials, location, copyright
    CustomCursor.tsx    desktop-only spring cursor, label from `data-cursor` attr
    PageTransition.tsx  per-route fade + 12px rise
    SectionTitle.tsx    section heading + generic scroll `Reveal`
    ProjectCard.tsx     image card, hover scale + overlay, links to detail page
    ProjectGrid.tsx     art-directed grid: varying column spans, ratios, vertical offsets
    ProjectGallery.tsx  large / two-up / full-width gallery rhythm
    VideoPlaceholder.tsx cinematic play block, opens modal; renders iframe if videoUrl set
    AnimatedCounter.tsx  count-up numbers on scroll into view
    CineSelect.tsx      custom dark dropdown matching the design system (used on contact)
  styles.css            the entire design system
```

---

## 3. Design system

### 3.1 Colour

Dark, near-monochrome cinema grade. All values are `oklch` semantic tokens in
`src/styles.css`. **Never hardcode colours in components** (`text-white`,
`bg-black`, `bg-[#111]` are forbidden) — use `bg-background`, `text-foreground`,
`text-muted-foreground`, `border-border`, `text-accent`, etc.

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `oklch(0.145 0 0)` | near-black page base |
| `--foreground` | `oklch(0.955 0 0)` | off-white text |
| `--surface` | `oklch(0.185 0 0)` | raised panel |
| `--surface-2` / `--muted` / `--secondary` | `oklch(0.225 0 0)` | deeper panel, chips |
| `--muted-foreground` | `oklch(0.635 0 0)` | mid grey labels/meta |
| `--primary` | `oklch(0.955 0 0)` | inverted button (white on dark) |
| `--primary-foreground` | `oklch(0.145 0 0)` | text on primary |
| `--accent` | `oklch(0.78 0.018 80)` | warm tungsten highlight — used sparingly |
| `--border` | `oklch(1 0 0 / 10%)` | hairline rules |
| `--border-strong` | `oklch(1 0 0 / 26%)` | active/hover rules |
| `--ring` | `accent / 60%` | focus ring |

Radius is deliberately near-zero: `--radius: 2px` (`sm/md` 2px, `lg` 3px). No
rounded cards, no soft shadows, no glow. Contrast comes from hairlines and
negative space.

### 3.2 Typography

- Single family: **Inter** (weights 300/400/500/600), loaded via `<link>` in
  `__root.tsx`. `--font-sans` and `--font-display` both map to Inter with
  Helvetica fallbacks. Do not `@import` font URLs in CSS (Tailwind v4 breaks).
- `display-cine` utility — oversized editorial headings: weight 500,
  `letter-spacing: -0.03em`, `line-height: 0.92`, uppercase.
- `label-cine` utility — 11px, `letter-spacing: 0.22em`, uppercase, muted. Used
  for every eyebrow, category, year, and form label.
- Body copy: regular weight, relaxed leading, `text-muted-foreground` for
  secondary paragraphs.
- Almost all UI text is uppercase; project descriptions are the exception.

### 3.3 Layout

- `container-cine` utility: max-width `96rem`, centred, inline padding
  `1.25rem → 2.5rem (md) → 4rem (xl)`.
- Sections are generous vertical bands (large `py`), separated by hairline
  `border-border` rules rather than colour changes.
- Home: full-viewport hero with parallax image → selected work grid → approach
  (two-column text) → stats row → full-width CTA.
- Work index: filter row (`ALL / COMMERCIALS / FILMS / TV SERIES / DOCUMENTARY`)
  above an asymmetric grid. Shows 6, LOAD MORE reveals 6 more, resets on filter
  change.
- Project detail: full-bleed hero with bottom scrim → title + credits table →
  description → video block → gallery rhythm → prev/next pair.
- Mobile: single column everywhere, grid spans collapse, nav becomes a full
  overlay menu.

### 3.4 Effects and motion

CSS utilities in `styles.css`:
- `film-grain` — SVG fractal-noise overlay at 0.16 opacity, `mix-blend-mode: overlay`.
- `vignette` — radial darkening from 35% outward.
- `scrim-bottom` — bottom-up gradient so titles stay legible over stills.
- `link-underline` — 1px rule wiping in from left on hover over 0.45s.
- `cursor-none-fine` — hides the native cursor on fine pointers only.
- `--ease-cine: cubic-bezier(0.16, 1, 0.3, 1)` — the house easing curve; use it
  for every transition.

Motion rules:
- Route change: fade + 12px rise, 0.55s, ease-cine (`PageTransition`).
- Scroll reveals: opacity + small y offset, `whileInView`, `once: true`.
- Image hover: slow scale (~1.04) over ~0.7s plus an overlay fade.
- Counters animate once when scrolled into view.
- Custom cursor is a spring-follow dot that swaps to `VIEW` / `PLAY` / `OPEN`
  labels based on the hovered element's `data-cursor` attribute. Desktop only.
- Keep it restrained: no bounce, no parallax beyond the hero, no autoplay sound.

---

## 4. Current data model (mock)

`src/data/projects.ts`

```ts
type Category = "Commercial" | "Film" | "TV Series" | "Documentary";

interface Project {
  id: string;            // slug, used in /work/:id
  title: string;
  category: Category;
  year: string;
  client: string;
  director: string;
  role: string;          // "Director of Photography"
  production: string;
  description: string;
  thumbnail: string;     // portrait ~1400x1750
  heroImage: string;     // wide ~2000x1125
  videoUrl: string;      // "" -> renders local placeholder instead of iframe
  gallery: string[];     // 5 mixed-orientation stills
  featured: boolean;     // drives home page selected work (first 6)
  credits: { label: string; value: string }[];
}
```

Helpers: `projects`, `featuredProjects`, `categories`, `filterProjects`,
`getProject`, `getAdjacent`.

Images are deterministic `https://picsum.photos/seed/<seed>/<w>/<h>` URLs —
replace with real asset URLs and nothing else changes.

`src/data/site.ts` holds `name`, `title`, `descriptor`, `bio`, `bioSecondary`,
`based`, `email`, `phone`, `instagram`, `vimeo`, `stats[]`, `services[]`.

---

## 5. Backend + database plan

Backend work should be enabled through **Lovable Cloud** (managed Postgres,
auth, storage, no external accounts). Server logic uses `createServerFn` from
`@tanstack/react-start`; raw HTTP endpoints (webhooks) go in
`src/routes/api/public/*`. Do not add Express or a separate API server.

### 5.1 Proposed schema

```sql
-- enum mirrors the frontend Category union
create type project_category as enum ('commercial','film','tv_series','documentary');

create table public.projects (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  category     project_category not null,
  year         int not null,
  client       text,
  director     text,
  role         text default 'Director of Photography',
  production   text,
  description  text,
  thumbnail_url text,
  hero_url      text,
  video_url     text,
  featured     boolean not null default false,
  sort_order    int not null default 0,
  published    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table public.project_images (   -- gallery
  id         uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  url        text not null,
  orientation text check (orientation in ('wide','portrait')) default 'wide',
  sort_order int not null default 0
);

create table public.project_credits (
  id         uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  label      text not null,
  value      text not null,
  sort_order int not null default 0
);

create table public.site_settings (   -- single row: bio, contact, stats, services
  id           int primary key default 1 check (id = 1),
  name text, title text, descriptor text,
  bio text, bio_secondary text, based text,
  email text, phone text, instagram text, vimeo text,
  stats jsonb default '[]'::jsonb,
  services jsonb default '[]'::jsonb
);

create table public.inquiries (       -- contact form submissions
  id uuid primary key default gen_random_uuid(),
  name text not null, email text not null,
  project_type text, budget text, message text,
  created_at timestamptz not null default now()
);
```

Every one of those tables needs GRANTs in the same migration, then RLS:

```sql
grant select on public.projects to anon, authenticated;   -- public portfolio reads
grant all    on public.projects to service_role;          -- repeat per table
alter table public.projects enable row level security;
create policy "public read published" on public.projects
  for select to anon, authenticated using (published);
```

- Read policies: `anon` SELECT on `projects`, `project_images`,
  `project_credits`, `site_settings` (published rows only).
- `inquiries`: `anon` INSERT only, **no** anon SELECT (never expose submissions).
  Reads go through an admin-verified server function.
- Admin writes require an `admin` role. Roles live in a separate
  `user_roles` table with a `has_role()` security-definer function — never a
  boolean on a profile row, never client-side checks.

### 5.2 Storage

One `project-media` bucket (public read, admin-only write) for stills and
posters. Keep `thumbnail_url` / `hero_url` as full URLs so the frontend code
stays identical to today. Video stays on Vimeo/YouTube via `video_url`.

### 5.3 Migration path from mock data

1. Enable Lovable Cloud.
2. Run one migration containing the schema, GRANTs, RLS policies **and literal
   INSERT statements seeding all 17 current projects** so the first render is
   already populated. Never seed on page load or via a server function.
3. Add `src/lib/projects.functions.ts` with `createServerFn` reads:
   `listProjects({ category, limit, offset })`, `getProjectBySlug(slug)`,
   `getFeaturedProjects()`, `getSiteSettings()`.
4. Convert `src/data/projects.ts` from data into pure types + view-model mappers
   so component props never change.
5. Route loaders call `context.queryClient.ensureQueryData(queryOptions)`;
   components use `useSuspenseQuery`. Public routes must not call
   auth-protected server functions (SSR prerender has no session).
6. Contact form: `submitInquiry` server function with zod validation + honeypot
   or rate limit; keep the existing local success animation.
7. Optional admin at `src/routes/_authenticated/admin/*` behind the route gate,
   with role checks server-side on every mutation.

### 5.4 Non-negotiables when extending

- Colours only via tokens in `src/styles.css`.
- `process.env.*` read inside `.handler()`, never at module scope; browser config
  uses `import.meta.env.VITE_*`.
- Server-only helpers live in `*.server.ts`; client-imported functions in
  `*.functions.ts`.
- Never edit `src/routeTree.gen.ts`.
- Every new route needs its own `head()` with a unique title and description.

---

## 6. Content still needed from Mohamed

All project titles, clients, directors, production companies, descriptions and
the biography are currently invented placeholders, as are the phone number and
email. Real stills, showreel links and copy replace them one-for-one.
