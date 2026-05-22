import Link from 'next/link';
import { getNotes } from '@/lib/notes-store';
import { deleteNote } from './actions';
import { NewNoteForm } from '@/components/NewNoteForm';

export const metadata = {
  title: 'Notes — Next Academy Playground',
};

export default async function NotesPage() {
  const notes = getNotes();

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <nav className="mb-8 font-body text-caption text-muted">
        <Link href="/" className="hover:text-fg">
          Home
        </Link>
        {' / '}
        <span className="text-fg">Notes</span>
      </nav>

      <h1 className="mb-2 font-display text-h2 font-bold text-fg">Notes</h1>
      <p className="mb-10 font-body text-small text-muted">
        Server Actions demo — add and delete notes without any API routes.
      </p>

      <NewNoteForm />

      {notes.length === 0 ? (
        <p className="mt-10 font-body text-small text-muted">No notes yet. Add one above.</p>
      ) : (
        <ul className="mt-8 space-y-3">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex items-start justify-between gap-4 rounded-md border border-border px-4 py-3"
            >
              <p className="font-body text-small text-fg">{note.body}</p>
              <form action={deleteNote.bind(null, note.id)}>
                <button
                  type="submit"
                  className="shrink-0 rounded-sm font-body text-caption font-medium text-error transition-opacity hover:opacity-70"
                >
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
