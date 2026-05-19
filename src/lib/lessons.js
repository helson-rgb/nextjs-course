export const LESSONS = [
  // ─── Chapter 1: React Fundamentals ───────────────────────────────────────
  {
    slug: 'jsx-and-rendering',
    order: 1,
    chapter: 'React Fundamentals',
    title: 'JSX & Rendering',
    summary:
      'Learn how JSX extends JavaScript to describe UI, how Babel transforms it, and how React reconciles the virtual DOM with the real one.',
    durationMin: 12,
    tags: ['jsx', 'rendering', 'vdom'],
  },
  {
    slug: 'components-and-props',
    order: 2,
    chapter: 'React Fundamentals',
    title: 'Components & Props',
    summary:
      'Build your first reusable components, pass data down with props, and understand the one-way data flow that makes React predictable.',
    durationMin: 14,
    tags: ['components', 'props', 'composition'],
  },
  {
    slug: 'state-and-events',
    order: 3,
    chapter: 'React Fundamentals',
    title: 'State & Events',
    summary:
      'Manage local state with useState, wire up event handlers, and see how state changes trigger re-renders without you doing anything extra.',
    durationMin: 16,
    tags: ['state', 'events', 'useState'],
  },
  {
    slug: 'lists-and-keys',
    order: 4,
    chapter: 'React Fundamentals',
    title: 'Lists & Keys',
    summary:
      'Render dynamic arrays of data, avoid reconciliation bugs by providing stable keys, and filter or sort lists reactively.',
    durationMin: 10,
    tags: ['lists', 'keys', 'map'],
  },
  {
    slug: 'forms-and-controlled-inputs',
    order: 5,
    chapter: 'React Fundamentals',
    title: 'Forms & Controlled Inputs',
    summary:
      'Build controlled form components where React owns the input value, handle validation, and submit data without a full-page reload.',
    durationMin: 15,
    tags: ['forms', 'controlled', 'validation'],
  },
  {
    slug: 'side-effects-and-useeffect',
    order: 6,
    chapter: 'React Fundamentals',
    title: 'Side Effects & useEffect',
    summary:
      'Run code after render, fetch data on mount, subscribe to external systems, and clean up properly to avoid memory leaks.',
    durationMin: 18,
    tags: ['useEffect', 'side-effects', 'lifecycle'],
  },
  {
    slug: 'context-and-prop-drilling',
    order: 7,
    chapter: 'React Fundamentals',
    title: 'Context & Prop Drilling',
    summary:
      'Identify when prop drilling becomes painful, lift shared state into React Context, and consume it anywhere in the tree without threading props.',
    durationMin: 14,
    tags: ['context', 'useContext', 'state-management'],
  },

  // ─── Chapter 2: Next.js Essentials ───────────────────────────────────────
  {
    slug: 'app-router-basics',
    order: 8,
    chapter: 'Next.js Essentials',
    title: 'App Router Basics',
    summary:
      "Understand file-based routing in the App Router: folders are routes, page.js renders the UI, and layout.js wraps every child — no config needed.",
    durationMin: 12,
    tags: ['app-router', 'routing', 'next.js'],
  },
  {
    slug: 'layouts-and-templates',
    order: 9,
    chapter: 'Next.js Essentials',
    title: 'Layouts & Templates',
    summary:
      'Share persistent UI across routes with layout.js, reset state between navigations with template.js, and nest layouts for complex shells.',
    durationMin: 11,
    tags: ['layouts', 'templates', 'next.js'],
  },
  {
    slug: 'server-vs-client-components',
    order: 10,
    chapter: 'Next.js Essentials',
    title: 'Server vs Client Components',
    summary:
      'Learn the React Server Component model: what runs on the server, what runs in the browser, and how to draw the boundary with "use client".',
    durationMin: 20,
    tags: ['RSC', 'server-components', 'use-client'],
  },
  {
    slug: 'data-fetching-patterns',
    order: 11,
    chapter: 'Next.js Essentials',
    title: 'Data Fetching Patterns',
    summary:
      'Fetch data directly in async Server Components, understand Next.js fetch caching, and choose between static, dynamic, and incremental rendering.',
    durationMin: 18,
    tags: ['fetch', 'caching', 'ISR', 'SSG', 'SSR'],
  },
  {
    slug: 'dynamic-routes',
    order: 12,
    chapter: 'Next.js Essentials',
    title: 'Dynamic Routes',
    summary:
      'Create [slug] segments, generate static params at build time with generateStaticParams, and handle catch-all and optional catch-all routes.',
    durationMin: 13,
    tags: ['dynamic-routes', 'generateStaticParams', 'params'],
  },
  {
    slug: 'route-handlers',
    order: 13,
    chapter: 'Next.js Essentials',
    title: 'Route Handlers',
    summary:
      'Build JSON API endpoints with route.js, handle GET/POST/PATCH/DELETE, read request bodies, and return typed Response objects.',
    durationMin: 14,
    tags: ['api', 'route-handlers', 'REST'],
  },
  {
    slug: 'metadata-and-seo',
    order: 14,
    chapter: 'Next.js Essentials',
    title: 'Metadata & SEO',
    summary:
      'Export a static metadata object or a generateMetadata function, set Open Graph tags, and verify your pages in the browser head.',
    durationMin: 10,
    tags: ['metadata', 'SEO', 'og-tags'],
  },
  {
    slug: 'loading-and-error-states',
    order: 15,
    chapter: 'Next.js Essentials',
    title: 'Loading & Error States',
    summary:
      'Add instant loading skeletons with loading.js, catch runtime errors with error.js, and compose Suspense boundaries for granular streaming.',
    durationMin: 15,
    tags: ['loading', 'error', 'Suspense', 'streaming'],
  },

  // ─── Chapter 3: Going to Production ──────────────────────────────────────
  {
    slug: 'deploy-and-optimize',
    order: 16,
    chapter: 'Going to Production',
    title: 'Deploy & Optimize',
    summary:
      'Push to Vercel, read the build output, set environment variables, enable image optimization, and run Lighthouse to measure real-world performance.',
    durationMin: 22,
    tags: ['vercel', 'deploy', 'performance', 'lighthouse'],
  },
];

export function getAllLessons() {
  return LESSONS;
}

export function getLessonBySlug(slug) {
  return LESSONS.find((l) => l.slug === slug) ?? null;
}

export function getNextLesson(slug) {
  const idx = LESSONS.findIndex((l) => l.slug === slug);
  return idx !== -1 && idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;
}

export function getPrevLesson(slug) {
  const idx = LESSONS.findIndex((l) => l.slug === slug);
  return idx > 0 ? LESSONS[idx - 1] : null;
}

export function getLessonsByChapter() {
  return LESSONS.reduce((acc, lesson) => {
    if (!acc[lesson.chapter]) acc[lesson.chapter] = [];
    acc[lesson.chapter].push(lesson);
    return acc;
  }, {});
}
