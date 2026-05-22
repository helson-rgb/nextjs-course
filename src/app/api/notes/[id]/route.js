import { getNotes, removeNote } from '@/lib/notes-store';

export async function GET(request, { params }) {
  const { id } = await params;
  const note = getNotes().find((n) => n.id === Number(id));
  if (!note) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json(note);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const exists = getNotes().some((n) => n.id === Number(id));
  if (!exists) return Response.json({ error: 'Not found' }, { status: 404 });
  removeNote(Number(id));
  return new Response(null, { status: 204 });
}
