'use client';

import { useEffect } from 'react';

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-lg border border-error/30 bg-error/5 px-6 py-8 text-center">
        <p className="mb-2 font-display text-h3 font-bold text-fg">
          Something went wrong
        </p>
        <p className="mb-6 font-body text-small text-muted">
          {error.message || 'Failed to load posts. Please try again.'}
        </p>
        <button
          onClick={unstable_retry}
          className="rounded-md bg-primary px-5 py-2 font-body text-small font-semibold text-primary-fg transition-opacity hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
