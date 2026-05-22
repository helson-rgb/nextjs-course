'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { LESSONS } from '@/lib/lessons';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t } = useLocale();

  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [toggle]);

  function navigate(slug) {
    setOpen(false);
    router.push(`/lessons/${slug}`);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('palette.placeholder')}
      className="fixed inset-0 z-50 flex items-start justify-center pt-24"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="font-body text-body text-fg" label="Command palette">
          <div className="flex items-center border-b border-border px-4">
            <svg className="mr-3 h-4 w-4 shrink-0 text-muted" fill="none" stroke="currentColor"
              strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <Command.Input
              autoFocus
              placeholder={t('palette.placeholder')}
              className="h-12 flex-1 bg-transparent font-body text-body text-fg placeholder:text-muted outline-none"
            />
            <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-body text-caption text-muted sm:inline-block">
              Esc
            </kbd>
          </div>

          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center font-body text-small text-muted">
              {t('palette.no_results')}
            </Command.Empty>

            {LESSONS.map((lesson) => (
              <Command.Item
                key={lesson.slug}
                value={`${lesson.title} ${lesson.slug} ${lesson.chapter}`}
                onSelect={() => navigate(lesson.slug)}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-border font-body text-caption text-muted">
                  {lesson.order}
                </span>
                <span className="flex-1 font-body text-body text-fg">{lesson.title}</span>
                <span className="font-body text-caption text-muted">{lesson.durationMin} min</span>
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
