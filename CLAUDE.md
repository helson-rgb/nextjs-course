@AGENTS.md

# Next Academy — Claude Code context

## Project overview

Next Academy is a Next.js learning app. It teaches React and Next.js fundamentals through MDX lessons + interactive Sandpack playgrounds. Stack: App Router, JavaScript, Tailwind CSS, `src/` directory.

---

## Brand identity

Theme: **Technical Warmth** — developer-tool precision meets educational warmth. Source of truth: [`brand/tokens.json`](brand/tokens.json) and [`brand/GUIDELINES.md`](brand/GUIDELINES.md).

### Colors

| Role | Light | Dark |
|---|---|---|
| `primary` (Electric Indigo) | `#494bd6` | `#c0c1ff` |
| `accent` (Amber) | `#ee9800` | `#ffb95f` |
| `bg` | `#f8fafc` | `#0b1326` |
| `fg` | `#0b1326` | `#dae2fd` |
| `muted` | `#64748b` | `#908fa0` |
| `border` | `#e2e8f0` | `#464554` |
| `error` | `#dc2626` | `#ffb4ab` |
| `success` | `#16a34a` | `#4ade80` |

Primary = CTAs, active states, progress. Accent = certifications, highlights — use sparingly. Never use `primary` for body text.

### Typography

| Role | Font | Weights |
|---|---|---|
| Display / headings | **Plus Jakarta Sans** | 700, 800 |
| Body / UI | **Inter** | 400, 500, 600 |
| Technical labels | **Geist** | 500 |

### Type scale

| Class | Size |
|---|---|
| `text-h1` | 3rem |
| `text-h2` | 2rem |
| `text-h3` | 1.5rem |
| `text-h4` | 1.25rem |
| `text-body` | 1rem |
| `text-small` | 0.875rem |
| `text-caption` | 0.75rem |

### Voice & tone

- **Authoritative but approachable** — write like a senior engineer mentoring a junior; precise, never condescending.
- **Direct** — active voice, short sentences; technical accuracy over marketing fluff.
- **Encouraging** — celebrate progress; use motivational micro-copy on milestones.
- **Inclusive** — never use jargon without explanation; add a tooltip or aside when needed.
- **No marketing-speak** — never write "let's dive in", "game-changer", or "unlock your potential".

---

## How to write UI in this repo

**These rules are non-negotiable.**

- **Always** use Tailwind classes mapped to brand tokens: `bg-primary`, `text-fg`, `border-border`, `bg-accent`. Never inline hex literals. Never `style={{ color: '#xxx' }}`.
- **Spacing** must use the Tailwind scale that mirrors the brand spacing scale. No arbitrary values (`p-[13px]` is forbidden — use `p-3` or `p-4`).
- **Typography**: headings use `font-display`, body uses `font-body`. Sizes come from the type scale (`text-h1`, `text-body`, etc.).
- **Buttons** have exactly three variants: `primary`, `secondary`, `ghost`. They live in `src/components/ui/Button.jsx`. Do not create ad-hoc button styles elsewhere.
- **Dark mode**: every screen must work in both themes. Test by toggling `data-theme="dark"` on `<html>`. Never use `prefers-color-scheme` media queries — always use the attribute selector.
- **Radii**: use `rounded-sm` (0.25rem), `rounded-md` (0.75rem), `rounded-lg` (1rem), `rounded-full`. No other values.
- **Shadows**: use `shadow-sm`, `shadow-md`, `shadow-lg` only.

---

## File conventions

```
src/app/**              → routes and layouts (App Router)
src/components/ui/**    → primitive components (Button, Input, Badge…)
src/components/**       → composite components (CourseCard, LessonNav…)
src/lib/**              → pure helpers and data utilities
src/styles/**           → global CSS (tokens.css, globals.css)
src/lessons-mdx/**      → lesson content in MDX
brand/**                → design tokens and guidelines (do not edit by hand; regenerate from the Stitch export)
public/brand/**         → logo SVGs (logo-full, logo-mark, logo-mono-light, logo-mono-dark)
docs/**                 → internal documentation
```

---

## Voice & tone for course content

- Second-person ("you"), present tense throughout.
- **Concrete example first, explanation second** — show the code, then explain why it works.
- Never marketing-speak. Never "let's dive in". Never "in this lesson we will learn".
- Short paragraphs. One idea per paragraph. Inline code for all identifiers.
- When introducing a new concept, link to the MDN or React docs — never paraphrase the spec.

---

## Brand-guardian agent

**Consult the brand-guardian before shipping any UI work.** See [`.claude/agents/brand-guardian.md`](.claude/agents/brand-guardian.md).

Auto-triggers when a prompt mentions: components, pages, layouts, buttons, forms, cards, headers, footers, heroes, illustrations, microcopy, or any visual asset. On those tasks, run the brand-guardian review as the final step before opening a PR.

---

## Git workflow

```bash
git checkout dev && git pull
git checkout -b feat/prompt-XX-short-name
# implement, test locally
git push -u origin feat/prompt-XX-short-name
gh pr create --base dev --fill
gh pr merge --squash --delete-branch
```

- Work on a feature branch off `dev`. **Never commit directly to `staging` or `prod`.**
- One PR per prompt. Squash-merge only.
- Tag format: `feat/prompt-XX-name` for features, `fix/prompt-XX-name` for bug fixes.
- Promotion: `dev → staging` (merge --no-ff) → QA on preview URL → `staging → prod` (merge --no-ff + semver tag).

---

## Commands cheatsheet

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server on http://localhost:3000 |
| `npm run build` | Production build (catches type/lint errors) |
| `npm run lint` | Run ESLint |
| `nvm use` | Switch to Node 20 (reads `.nvmrc`) — run this first in a new terminal |
