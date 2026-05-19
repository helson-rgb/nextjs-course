'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function Home() {
  const { t } = useLocale();

  return (
    <section className="flex flex-1 flex-col items-center justify-center py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <Image
          src="/brand/logo-mark.svg"
          alt=""
          width={56}
          height={56}
          aria-hidden="true"
        />

        <h1 className="font-display text-h1 font-bold leading-tight tracking-tight text-fg">
          {t('home.headline')}
        </h1>

        <p className="max-w-xl font-body text-body text-muted">{t('home.subtitle')}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/lessons" variant="primary">
            {t('home.cta.start')}
          </Button>
          <Button href="/curriculum" variant="secondary">
            {t('home.cta.browse')}
          </Button>
        </div>
      </div>
    </section>
  );
}
