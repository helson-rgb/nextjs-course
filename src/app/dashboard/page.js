'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useProgress } from '@/lib/ProgressContext';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { useLocalStorage } from '@/lib/useLocalStorage';
import { LESSONS } from '@/lib/lessons';
import { Button } from '@/components/ui/Button';

function CircleProgress({ pct }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" aria-hidden="true">
      <circle cx="64" cy="64" r={r} fill="none" strokeWidth="10" className="stroke-border" />
      <circle
        cx="64"
        cy="64"
        r={r}
        fill="none"
        strokeWidth="10"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        className="stroke-primary transition-all duration-700"
        transform="rotate(-90 64 64)"
      />
      <text x="64" y="64" dominantBaseline="middle" textAnchor="middle"
        className="fill-fg font-display text-xl font-bold" fontSize="22">
        {pct}%
      </text>
    </svg>
  );
}

function CertificateCard({ name, total, onDownload }) {
  const { t } = useLocale();
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      id="certificate-card"
      className="rounded-lg border border-accent bg-bg p-8 text-center shadow-lg"
    >
      <div className="mb-4 text-4xl">🎓</div>
      <h2 className="font-display text-h2 font-bold text-fg">
        {t('dashboard.certificate_heading')}
      </h2>
      {name && (
        <p className="mt-2 font-body text-body text-muted">{name}</p>
      )}
      <p className="mt-3 font-body text-body text-fg">
        {t('dashboard.certificate_body', { total })}
      </p>
      <div className="mt-6">
        <Button variant="primary" size="md" onClick={onDownload}>
          {t('dashboard.download_pdf')}
        </Button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { t } = useLocale();
  const { completed } = useProgress();
  const [userName] = useLocalStorage('na-user-name', '');
  const [downloading, setDownloading] = useState(false);

  const total = LESSONS.length;
  const done = completed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const isComplete = done === total;

  const lastSlug = completed[completed.length - 1] ?? null;
  const lastLesson = lastSlug ? LESSONS.find((l) => l.slug === lastSlug) : null;

  const nextLesson = LESSONS.find((l) => !completed.includes(l.slug)) ?? null;

  async function handleDownload() {
    setDownloading(true);
    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ]);
      const card = document.getElementById('certificate-card');
      const canvas = await html2canvas(card, { scale: 2, useCORS: true });
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [canvas.width / 2, canvas.height / 2] });
      pdf.addImage(img, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('next-academy-certificate.pdf');
    } catch (e) {
      console.error('PDF error', e);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-h1 font-bold text-fg">{t('dashboard.title')}</h1>

      <div className="mt-10 flex flex-col items-center gap-6 rounded-lg border border-border bg-bg p-8 shadow-sm sm:flex-row">
        <CircleProgress pct={pct} />
        <div className="flex-1 text-center sm:text-left">
          <p className="font-body text-h3 font-semibold text-fg">
            {done} / {total}
          </p>
          <p className="font-body text-body text-muted">{t('dashboard.progress_label')}</p>

          {lastLesson && (
            <p className="mt-4 font-body text-small text-muted">
              {t('dashboard.last_lesson')}:{' '}
              <Link href={`/lessons/${lastLesson.slug}`} className="text-primary underline underline-offset-2">
                {lastLesson.title}
              </Link>
            </p>
          )}

          <div className="mt-6">
            {nextLesson ? (
              <Link href={`/lessons/${nextLesson.slug}`}>
                <Button variant="primary" size="md">
                  {done === 0 ? t('dashboard.start') : t('dashboard.continue')}
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {isComplete && (
        <div className="mt-10">
          <CertificateCard
            name={userName}
            total={total}
            onDownload={handleDownload}
          />
          {downloading && (
            <p className="mt-3 text-center font-body text-small text-muted">
              Gerando PDF…
            </p>
          )}
        </div>
      )}

      {done === 0 && (
        <p className="mt-10 text-center font-body text-body text-muted">
          {t('dashboard.no_progress')}
        </p>
      )}

      <section className="mt-12">
        <h2 className="font-display text-h3 font-bold text-fg">Lições</h2>
        <ul className="mt-4 space-y-2">
          {LESSONS.map((lesson) => {
            const isDone = completed.includes(lesson.slug);
            return (
              <li key={lesson.slug}
                className="flex items-center gap-3 rounded-md border border-border bg-bg px-4 py-3">
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                  isDone ? 'border-success bg-success/10 text-success' : 'border-border text-muted'
                }`}>
                  {isDone ? '✓' : lesson.order}
                </span>
                <Link href={`/lessons/${lesson.slug}`}
                  className="font-body text-body text-fg hover:text-primary">
                  {lesson.title}
                </Link>
                <span className="ml-auto font-body text-caption text-muted">{lesson.durationMin} min</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
