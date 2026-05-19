'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <p className="font-body text-caption text-muted">
          © {new Date().getFullYear()} Next Academy. {t('footer.rights')}
        </p>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-caption text-muted transition-colors hover:text-fg"
        >
          GitHub ↗
        </Link>
      </div>
    </footer>
  );
}
