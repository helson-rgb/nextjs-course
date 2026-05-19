'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';
import { Button } from '@/components/ui/Button';

const PILLARS = [
  { titleKey: 'about.approach.title', bodyKey: 'about.approach.body' },
  { titleKey: 'about.stack.title',    bodyKey: 'about.stack.body' },
  { titleKey: 'about.open.title',     bodyKey: 'about.open.body' },
];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <div className="max-w-2xl">
        <h1 className="font-display text-h1 font-bold text-fg">{t('about.title')}</h1>
        <p className="mt-3 font-display text-h3 font-bold text-primary">{t('about.headline')}</p>
        <p className="mt-6 font-body text-body text-muted">{t('about.mission')}</p>
      </div>

      {/* Pillars */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {PILLARS.map(({ titleKey, bodyKey }) => (
          <div
            key={titleKey}
            className="rounded-lg border border-border bg-bg p-6"
          >
            <h2 className="font-display text-h4 font-bold text-fg">{t(titleKey)}</h2>
            <p className="mt-3 font-body text-small text-muted">{t(bodyKey)}</p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-12 flex flex-wrap gap-3">
        <Button href="/lessons" variant="primary">
          {t('about.cta.lessons')}
        </Button>
        <Button
          href="https://github.com"
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('about.cta.github')}
        </Button>
      </div>
    </div>
  );
}
