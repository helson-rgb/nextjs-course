'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const CHAPTER_KEYS = {
  'React Fundamentals': 'chapter.react_fundamentals',
  'Next.js Essentials': 'chapter.nextjs_essentials',
  'Going to Production': 'chapter.going_to_production',
};

export function LessonSidebar({ chapters }) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLocale();

  const allLessons = Object.values(chapters).flat();
  const currentLesson = allLessons.find(l => pathname === `/lessons/${l.slug}`);

  function handleMobileChange(e) {
    router.push(e.target.value);
  }

  return (
    <>
      {/* Mobile: dropdown */}
      <div className="mb-6 lg:hidden">
        <select
          value={currentLesson ? `/lessons/${currentLesson.slug}` : ''}
          onChange={handleMobileChange}
          className="w-full rounded-md border border-border bg-bg px-3 py-2 font-body text-small text-fg focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          {Object.entries(chapters).map(([chapter, lessons]) => (
            <optgroup key={chapter} label={t(CHAPTER_KEYS[chapter] ?? chapter)}>
              {lessons.map(lesson => (
                <option key={lesson.slug} value={`/lessons/${lesson.slug}`}>
                  {lesson.order}. {t(`lesson.${lesson.slug}.title`)}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Desktop: sidebar */}
      <aside className="hidden w-60 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-6">
          {Object.entries(chapters).map(([chapter, lessons]) => (
            <div key={chapter}>
              <p className="mb-2 px-3 font-body text-caption font-medium uppercase tracking-wider text-muted">
                {t(CHAPTER_KEYS[chapter] ?? chapter)}
              </p>
              <ul className="space-y-0.5">
                {lessons.map(lesson => {
                  const isActive = pathname === `/lessons/${lesson.slug}`;
                  return (
                    <li key={lesson.slug}>
                      <Link
                        href={`/lessons/${lesson.slug}`}
                        className={[
                          'flex items-center gap-2 rounded-md px-3 py-1.5 font-body text-small transition-colors',
                          isActive
                            ? 'bg-primary/10 font-medium text-primary'
                            : 'text-muted hover:bg-border/60 hover:text-fg',
                        ].join(' ')}
                      >
                        <span className="w-5 shrink-0 font-body text-caption text-muted/60">
                          {lesson.order}
                        </span>
                        {t(`lesson.${lesson.slug}.title`)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
