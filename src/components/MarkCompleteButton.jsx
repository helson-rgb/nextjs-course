'use client';

import { useProgress } from '@/lib/ProgressContext';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function MarkCompleteButton({ slug }) {
  const { completed, toggle } = useProgress();
  const { t } = useLocale();
  const isDone = completed.includes(slug);

  return (
    <Button
      variant={isDone ? 'secondary' : 'primary'}
      size="md"
      onClick={() => toggle(slug)}
      className={cn(isDone && 'border-success/40 text-success hover:bg-success/5')}
    >
      {isDone ? `✓ ${t('lesson.completed')}` : t('lesson.mark_complete')}
    </Button>
  );
}
