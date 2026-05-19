'use client';

import Link from 'next/link';
import { getLessonsByChapter, getAllLessons } from '@/lib/lessons';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const CHAPTER_ORDER = ['React Fundamentals', 'Next.js Essentials', 'Going to Production'];
const CHAPTER_KEYS = {
  'React Fundamentals': 'chapter.react_fundamentals',
  'Next.js Essentials': 'chapter.nextjs_essentials',
  'Going to Production': 'chapter.going_to_production',
};

export default function CurriculumPage() {
  const byChapter = getLessonsByChapter();
  const total = getAllLessons().length;
  const totalMin = getAllLessons().reduce((sum, l) => sum + l.durationMin, 0);
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-h1 font-bold text-fg">{t('curriculum.title')}</h1>
      <p className="mt-3 font-body text-body text-muted">
        {t('curriculum.subtitle', {
          count: total,
          hours: Math.round(totalMin / 60),
          min: totalMin % 60,
          chapters: CHAPTER_ORDER.length,
        })}
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {CHAPTER_ORDER.map((chapter, chapterIdx) => {
          const lessons = byChapter[chapter] ?? [];
          const chapterMin = lessons.reduce((s, l) => s + l.durationMin, 0);

          return (
            <section key={chapter}>
              <div className="mb-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary font-body text-caption font-semibold text-primary-fg">
                    {chapterIdx + 1}
                  </span>
                  <h2 className="font-display text-h3 font-bold text-fg">
                    {t(CHAPTER_KEYS[chapter])}
                  </h2>
                </div>
                <span className="font-body text-caption text-muted">
                  {lessons.length} {t('curriculum.lessons')} · {chapterMin} {t('curriculum.min')}
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-lg border border-border">
                <table className="w-full font-body text-small">
                  <thead>
                    <tr className="border-b border-border bg-neutral-100">
                      <th className="px-4 py-3 text-left font-semibold text-muted">#</th>
                      <th className="px-4 py-3 text-left font-semibold text-muted">
                        {t('nav.lessons')}
                      </th>
                      <th className="hidden px-4 py-3 text-left font-semibold text-muted md:table-cell">
                        {t('curriculum.topics')}
                      </th>
                      <th className="px-4 py-3 text-right font-semibold text-muted">
                        {t('curriculum.min')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lessons.map((lesson, idx) => (
                      <tr
                        key={lesson.slug}
                        className={`border-b border-border last:border-0 ${
                          idx % 2 === 0 ? '' : 'bg-neutral-50'
                        }`}
                      >
                        <td className="px-4 py-3 text-muted">
                          {String(lesson.order).padStart(2, '0')}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/lessons/${lesson.slug}`}
                            className="font-semibold text-fg transition-colors hover:text-primary"
                          >
                            {t(`lesson.${lesson.slug}.title`)}
                          </Link>
                          <p className="mt-0.5 text-caption text-muted line-clamp-1">
                            {t(`lesson.${lesson.slug}.summary`)}
                          </p>
                        </td>
                        <td className="hidden px-4 py-3 md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {lesson.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border px-2 py-0.5 text-caption text-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right text-muted">
                          {lesson.durationMin} {t('curriculum.min')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
