# Next Academy

A hands-on React & Next.js course app. 18 lessons, interactive Sandpack playgrounds, full i18n (EN / PT / IT), dark mode, progress tracking, and a PDF certificate on completion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-org%2Fnextjs-course)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 — App Router, RSC, Server Actions |
| Language | JavaScript (no TypeScript) |
| Styling | Tailwind CSS v4 + brand design tokens |
| Content | MDX + Shiki syntax highlighting |
| Playground | Sandpack v2 (CodeSandbox) |
| i18n | React Context — EN, PT, IT |
| Fonts | Plus Jakarta Sans (display) · Inter (body) via `next/font` |
| Testing | Playwright smoke suite |

---

## Course structure

**Chapter 1 — React Fundamentals** (7 lessons)

1. JSX & Rendering
2. Components & Props
3. State & Events
4. Lists & Keys
5. Forms & Controlled Inputs
6. Side Effects & useEffect
7. Context & Prop Drilling

**Chapter 2 — Next.js Essentials** (10 lessons)

8. App Router Basics
9. Layouts & Templates
10. Server vs Client Components
11. Data Fetching Patterns
12. Dynamic Routes
13. Route Handlers
14. Metadata, Images & Fonts
15. Loading & Error States
16. Server Actions
17. Caching & Deploy

**Chapter 3 — Going to Production** (1 lesson)

18. Deploy & Optimize

---

## Running locally

```bash
# 1. Use Node 20 (reads .nvmrc)
nvm use

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build (catches errors) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test:e2e` | Run Playwright smoke tests |
| `npm run test:e2e:ui` | Open Playwright UI mode |

---

## Key features

- **Progress tracking** — `localStorage` stores completed lessons; header shows progress badge
- **Dashboard** — `/dashboard` shows completion %, last lesson, continue button, and a PDF certificate when all 18 lessons are finished
- **Command palette** — `Cmd/Ctrl+K` opens a fuzzy-search palette over all lessons
- **Dark mode** — `data-theme="dark"` on `<html>`; Sandpack theme syncs automatically
- **Middleware** — `src/middleware.js` redirects `/lesson/*` → `/lessons/*` (308)
- **OG images** — per-lesson 1200×630 cards generated via `next/og` `ImageResponse`
- **ISR** — lesson pages are pre-rendered at build time via `generateStaticParams`

---

## Environment variables

```bash
# .env.local (never commit this file)
NEXT_PUBLIC_SITE_URL=http://localhost:3000   # set to your production domain on Vercel
```

---

## Deploying

Push to GitHub and import the repo on [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically. Add `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables** before the first deploy.

All lesson pages are pre-rendered (`●` SSG). The API routes (`/api/notes`) are serverless functions. No extra configuration needed.

---

## Project structure

```
src/
├── app/                    — App Router pages and layouts
│   ├── dashboard/          — Progress dashboard + PDF certificate
│   ├── lessons/[slug]/     — Lesson page, OG image, generateStaticParams
│   └── api/notes/          — Playground notes API (Route Handler)
├── components/
│   ├── ui/                 — Button, Badge, Input primitives
│   ├── CommandPalette.jsx  — ⌘K fuzzy-search over lessons
│   ├── Header.jsx          — Nav, progress badge, dark mode, ⌘K trigger
│   └── Playground.jsx      — Sandpack wrapper with dark mode sync
├── lessons-mdx/
│   ├── en/                 — 18 English MDX lessons
│   ├── pt/                 — 18 Portuguese translations
│   └── it/                 — 18 Italian translations
├── lib/
│   ├── i18n/               — LocaleProvider + en/pt/it JSON
│   ├── lessons.js          — Lesson registry (slug, title, chapter, order)
│   ├── ProgressContext.jsx — Completed-lessons state via localStorage
│   └── useLocalStorage.js  — Generic localStorage React hook
└── middleware.js           — URL canonicalisation (Edge runtime)
```

---

## Screenshots

> _Add screenshots here_

---

## License

MIT
