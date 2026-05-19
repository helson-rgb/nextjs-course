'use client';

import Link from 'next/link';
import { getLessonsByChapter } from '@/lib/lessons';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const CHAPTER_ORDER = ['React Fundamentals', 'Next.js Essentials', 'Going to Production'];
const CHAPTER_KEYS = {
  'React Fundamentals': 'chapter.react_fundamentals',
  'Next.js Essentials': 'chapter.nextjs_essentials',
  'Going to Production': 'chapter.going_to_production',
};

export default function LessonsPage() {
  const byChapter = getLessonsByChapter();
  const { t } = useLocale();
  const lessonCount = Object.values(byChapter).flat().length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-h1 font-bold text-fg">{t('lessons.title')}</h1>
      <p className="mt-3 font-body text-body text-muted">
        {t('lessons.subtitle', { count: lessonCount, chapters: CHAPTER_ORDER.length })}
      </p>

      <div className="mt-12 flex flex-col gap-16">
        {CHAPTER_ORDER.map((chapter, chapterIdx) => {
          const lessons = byChapter[chapter] ?? [];
          return (
            <section key={chapter}>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary font-body text-caption font-semibold text-primary-fg">
                  {chapterIdx + 1}
                </span>
                <h2 className="font-display text-h2 font-bold text-fg">
                  {t(CHAPTER_KEYS[chapter])}
                </h2>
              </div>

              <ol className="flex flex-col gap-3">
                {lessons.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link
                      href={`/lessons/${lesson.slug}`}
                      className="group flex items-start justify-between rounded-lg border border-border bg-bg p-5 transition-shadow hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        <span className="mt-0.5 font-body text-caption font-medium text-muted">
                          {String(lesson.order).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-body text-small font-semibold text-fg group-hover:text-primary">
                            {t(`lesson.${lesson.slug}.title`)}
                          </h3>
                          <p className="mt-1 font-body text-caption text-muted line-clamp-2">
                            {t(`lesson.${lesson.slug}.summary`)}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {lesson.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border px-2 py-0.5 font-body text-caption text-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0 text-right">
                        <span className="font-body text-caption text-muted">
                          {lesson.durationMin} {t('curriculum.min')}
                        </span>
                        <div className="mt-1 font-body text-small font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          {t('lessons.start')}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
