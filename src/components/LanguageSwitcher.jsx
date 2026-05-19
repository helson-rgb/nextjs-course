'use client';

import { useLocale, LOCALES } from '@/lib/i18n/LocaleProvider';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language selector">
      {LOCALES.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          title={label}
          aria-pressed={locale === code}
          className={[
            'flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors',
            locale === code
              ? 'bg-primary text-primary-fg'
              : 'text-muted hover:bg-neutral-200 hover:text-fg',
          ].join(' ')}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
