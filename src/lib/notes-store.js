let notes = [
  { id: 1, body: 'Server Actions eliminate the need for API routes for simple mutations.' },
  { id: 2, body: 'useFormStatus gives the submit button a pending state without extra useState.' },
  { id: 3, body: 'revalidatePath purges the cached page so the next visit fetches fresh data.' },
];
let nextId = 4;

export function getNotes() {
  return [...notes];
}

export function addNote(body) {
  const note = { id: nextId++, body };
  notes.push(note);
  return note;
}

export function removeNote(id) {
  notes = notes.filter((n) => n.id !== id);
}
