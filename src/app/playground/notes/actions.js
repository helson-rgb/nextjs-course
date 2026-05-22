'use server';

import { revalidatePath } from 'next/cache';
import { addNote, removeNote } from '@/lib/notes-store';

export async function createNote(prevState, formData) {
  const body = formData.get('body')?.toString().trim();
  if (!body) return 'Note cannot be empty.';
  addNote(body);
  revalidatePath('/playground/notes');
  return null;
}

// Extra arguments bound via .bind() come before formData
export async function deleteNote(id, _formData) {
  removeNote(id);
  revalidatePath('/playground/notes');
}
