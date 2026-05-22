'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createNote } from '@/app/playground/notes/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="shrink-0 rounded-md bg-primary px-4 py-2 font-body text-small font-semibold text-primary-fg transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {pending ? 'Adding…' : 'Add note'}
    </button>
  );
}

export function NewNoteForm() {
  const [error, formAction] = useActionState(createNote, null);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex gap-3">
        <input
          name="body"
          type="text"
          placeholder="Write a note…"
          className="flex-1 rounded-md border border-border bg-bg px-3 py-2 font-body text-small text-fg placeholder:text-muted focus:border-primary focus:outline-none"
        />
        <SubmitButton />
      </div>
      {error && (
        <p className="font-body text-caption text-error">{error}</p>
      )}
    </form>
  );
}
