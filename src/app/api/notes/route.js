import { getNotes, addNote } from '@/lib/notes-store';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.has('limit') ? Number(searchParams.get('limit')) : undefined;
  const notes = limit ? getNotes().slice(0, limit) : getNotes();
  return Response.json(notes);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const text = body?.body?.toString().trim();
  if (!text) {
    return Response.json({ error: '"body" field is required' }, { status: 400 });
  }

  const note = addNote(text);
  return Response.json(note, { status: 201 });
}
