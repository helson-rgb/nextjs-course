import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LessonNotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-body text-caption font-medium text-muted">404</span>
      <h1 className="mt-3 font-display text-h2 font-bold text-fg">Lesson not found</h1>
      <p className="mt-4 max-w-sm font-body text-body text-muted">
        This lesson doesn't exist yet. Browse the full curriculum to find what you're looking for.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/lessons" variant="primary">
          Back to lessons
        </Button>
        <Button href="/curriculum" variant="secondary">
          Browse curriculum
        </Button>
      </div>
    </div>
  );
}
