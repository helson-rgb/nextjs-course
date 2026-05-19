'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { LessonNavigation } from '@/components/LessonNavigation';

const CHAPTER_KEYS = {
  'React Fundamentals': 'chapter.react_fundamentals',
  'Next.js Essentials': 'chapter.nextjs_essentials',
  'Going to Production': 'chapter.going_to_production',
};

export function LessonPageShell({ lesson, prev, next, children }) {
  const { t } = useLocale();
  const chapterLabel = t(CHAPTER_KEYS[lesson.chapter] ?? lesson.chapter);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 font-body text-caption text-muted">
        <Link href="/lessons" className="transition-colors hover:text-fg">
          {t('nav.lessons')}
        </Link>
        <span>/</span>
        <span>{chapterLabel}</span>
        <span>/</span>
        <span className="text-fg">{t(`lesson.${lesson.slug}.title`)}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-caption font-medium text-primary">
            {chapterLabel}
          </span>
          <span className="font-body text-caption text-muted">
            {t('lesson.chapter_badge', { order: lesson.order, duration: lesson.durationMin })}
          </span>
        </div>
        <h1 className="font-display text-h1 font-bold text-fg">
          {t(`lesson.${lesson.slug}.title`)}
        </h1>
        <p className="mt-4 max-w-2xl font-body text-body text-muted">
          {t(`lesson.${lesson.slug}.summary`)}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-body text-caption text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* MDX content (RSC children) or fallback */}
      <article className="prose dark:prose-invert max-w-none">
        {children ?? <p className="text-muted">{t('lesson.content_soon')}</p>}
      </article>

      <LessonNavigation prev={prev} next={next} />
    </div>
  );
}
