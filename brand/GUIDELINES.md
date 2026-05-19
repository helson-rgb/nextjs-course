# Next Academy — Brand Guidelines

Theme: **Technical Warmth**

> Bridges the gap between the high-precision, austere aesthetic of developer tools and the inviting, human-centric nature of education. The visual language is deeply inspired by modern software engineering culture—drawing from the likes of Vercel and Linear—but introduces soft geometric shapes and a vibrant accent palette to signal accessibility.

---

## Palette

### Light mode

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#f8fafc` | Page background |
| `--color-fg` | `#0b1326` | Body text, headings |
| `--color-muted` | `#64748b` | Secondary text, captions |
| `--color-border` | `#e2e8f0` | Dividers, card borders |
| `--color-primary` | `#494bd6` | CTAs, active states, progress indicators |
| `--color-primary-fg` | `#ffffff` | Text on primary |
| `--color-accent` | `#ee9800` | Highlights, certifications, motivational callouts |
| `--color-accent-fg` | `#5b3800` | Text on accent |
| `--color-success` | `#16a34a` | Completion states |
| `--color-warning` | `#d97706` | Caution indicators |
| `--color-error` | `#dc2626` | Errors, destructive actions |
| `--color-info` | `#2563eb` | Informational callouts |

### Dark mode

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0b1326` | Page background (Inky Slate) |
| `--color-fg` | `#dae2fd` | Body text |
| `--color-muted` | `#908fa0` | Secondary text |
| `--color-border` | `#464554` | Dividers |
| `--color-primary` | `#c0c1ff` | CTAs, active states |
| `--color-accent` | `#ffb95f` | Highlights |
| `--color-error` | `#ffb4ab` | Errors |

### Neutral scale

In **light mode**: Cool Grays (`#f8fafc` → `#0f172a`).  
In **dark mode**: Inky Slates (`#060e20` → `#c7c4d7`).

Use `neutral-50/100/200` for surface layers, `neutral-700/800/900` for text on dark surfaces.

### Color rules

- **Primary (Electric Indigo)** is reserved for CTAs, progress indicators, and active/focus states. **Never** use it for body text.
- **Accent (Amber)** is used sparingly — course certifications, streak callouts, and motivational UI only.
- **Tertiary (Coral `#ff516a`)** is available for high-energy marketing sections. Do not use in product UI.
- Avoid heavy pure-black shadows. Tint shadows with Indigo or Slate.

---

## Typography

### Typefaces

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display & Headlines | **Plus Jakarta Sans** | 700, 800 | Hero titles, section headings, course cards |
| Body & UI | **Inter** | 400, 500, 600 | Body copy, labels, inputs, navigation |
| Technical Labels | **Geist** | 500 | Code snippets, metadata, developer-only UI |

### Type scale

| Step | Size | CSS token |
|---|---|---|
| h1 | 3rem / 48px | `--font-size-display` |
| h2 | 2rem / 32px | `--font-size-h2` |
| h3 | 1.5rem / 24px | `--font-size-h3` |
| h4 | 1.25rem / 20px | `--font-size-h4` |
| body | 1rem / 16px | `--font-size-body` |
| small | 0.875rem / 14px | `--font-size-small` |
| caption | 0.75rem / 12px | `--font-size-caption` |

### Typography rules

- Mobile display: scale h1 down to 2rem (32px) with generous line-height.
- Line height for body copy: 1.75 (28px at 16px) to prevent fatigue during long reading sessions.
- Letter-spacing: −0.02em on display sizes; +0.05em on technical labels.
- **Never** use Plus Jakarta Sans for body text longer than a sentence.

---

## Spacing system

Base unit: **4px**. All spacing is a multiple of this unit.

| Token | Value | Common use |
|---|---|---|
| xs | 8px | Icon gap, badge padding |
| sm | 16px | Component internal padding |
| md | 24px | Card padding, component spacing |
| lg | 48px | Section vertical spacing |
| xl | 80px | Hero vertical padding |
| gutter | 24px | Grid gutter (desktop) |
| margin-mobile | 16px | Page margin (mobile) |
| margin-desktop | 40px | Page margin (desktop) |

---

## Layout

- Max-width: **1280px** (standard pages) · **1440px** (dashboard/IDE)
- Desktop: 12-column grid, 24px gutters
- Mobile: 4-column grid, 16px margins
- Sidebar (course navigation): fixed **280px** width on desktop

---

## Elevation & shadows

| Level | Context | Style |
|---|---|---|
| 0 | Page background | No shadow |
| 1 | Cards, containers | `--shadow-sm` + 1px low-contrast border |
| 2 | Popovers, modals | `--shadow-lg` + `backdrop-blur: 12px` (Glassmorphism) |

---

## Shape & radii

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 0.25rem | Chips, badges, small inputs |
| `--radius-md` | 0.75rem | Buttons, form fields (default) |
| `--radius-lg` | 1rem | Cards, course thumbnails |
| `--radius-full` | 9999px | Avatars, pill badges |

---

## Logo

### Files

| File | Use |
|---|---|
| `logo-full.svg` | Default — use on light backgrounds above 200px wide |
| `logo-mark.svg` | Icon-only — favicons, app icons, tight spaces |
| `logo-mono-light.svg` | Single-colour version for light backgrounds |
| `logo-mono-dark.svg` | Single-colour version for dark backgrounds |

### Do's and don'ts

- **Do** use the full wordmark (`logo-full.svg`) as the primary representation on marketing pages.
- **Do** maintain the minimum clear space of 16px around the logo on all sides.
- **Don't** use the wordmark below **80px wide** — use `logo-mark.svg` instead.
- **Don't** stretch, rotate, or recolour the logo outside the defined palette.
- **Don't** place the light logo on backgrounds lighter than `neutral-200`.
- **Don't** place the dark logo on backgrounds darker than `neutral-700`.

---

## Components (quick reference)

- **Buttons — primary:** solid Electric Indigo fill, white text, `--radius-md`, 150ms hover transition.
- **Buttons — secondary:** ghost style, 1px border, same radius.
- **Inputs:** subtle inset shadow, 1px border → Indigo border + soft glow on focus.
- **Cards:** minimalist — typography and chips carry information, not heavy imagery. `--radius-lg`, `--shadow-sm`.
- **Chips/Badges:** 10% tint of primary or accent, high-contrast text, `--radius-sm`.
- **Code blocks:** `neutral-50` (dark) background, brand-palette syntax highlighting, hover-reveal Copy button top-right.
- **Progress bars:** 8px height, gradient from Electric Indigo `#494bd6` → Coral `#ff516a`.

---

## Voice & tone

> *The design system is built on the philosophy of "Technical Warmth." It bridges the gap between the high-precision, austere aesthetic of developer tools and the inviting, human-centric nature of education.*

- **Authoritative but approachable.** Write like a senior engineer mentoring a junior — precise, never condescending.
- **Direct.** Prefer active voice and short sentences. Technical accuracy over marketing fluff.
- **Encouraging.** Celebrate progress. Use motivational micro-copy on milestones ("You shipped it. 🚀").
- **Inclusive.** Avoid jargon without explanation. When jargon is necessary, provide a tooltip or aside.
