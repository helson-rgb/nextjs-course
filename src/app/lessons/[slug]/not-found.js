'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';
import { Button } from '@/components/ui/Button';

export default function LessonNotFound() {
  const { t } = useLocale();

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-body text-caption font-medium text-muted">{t('notfound.code')}</span>
      <h1 className="mt-3 font-display text-h2 font-bold text-fg">{t('notfound.title')}</h1>
      <p className="mt-4 max-w-sm font-body text-body text-muted">{t('notfound.body')}</p>
      <div className="mt-8 flex gap-3">
        <Button href="/lessons" variant="primary">
          {t('notfound.back')}
        </Button>
        <Button href="/curriculum" variant="secondary">
          {t('notfound.browse')}
        </Button>
      </div>
    </div>
  );
}
