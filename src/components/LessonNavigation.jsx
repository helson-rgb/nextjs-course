'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function LessonNavigation({ prev, next }) {
  const { t } = useLocale();

  return (
    <nav className="mt-16 grid grid-cols-2 gap-4" aria-label="Lesson navigation">
      <div>
        {prev && (
          <Link
            href={`/lessons/${prev.slug}`}
            className="group flex flex-col rounded-lg border border-border p-4 transition-shadow hover:shadow-md"
          >
            <span className="font-body text-caption text-muted">{t('lesson.prev')}</span>
            <span className="mt-1 font-body text-small font-semibold text-fg group-hover:text-primary">
              {prev.title}
            </span>
          </Link>
        )}
      </div>
      <div className="flex justify-end">
        {next && (
          <Link
            href={`/lessons/${next.slug}`}
            className="group flex w-full flex-col rounded-lg border border-border p-4 text-right transition-shadow hover:shadow-md"
          >
            <span className="font-body text-caption text-muted">{t('lesson.next')}</span>
            <span className="mt-1 font-body text-small font-semibold text-fg group-hover:text-primary">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
