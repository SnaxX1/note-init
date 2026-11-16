import { useEffect, useState } from 'react';
import { api } from './api.js';
import NoteForm from './components/NoteForm.jsx';
import NoteList from './components/NoteList.jsx';

export default function App() {
  const [notes, setNotes] = useState([]);

  async function loadNotes() {
    setNotes(await api.getNotes());
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function handleCreate(note) {
    await api.createNote(note);
    await loadNotes();
  }

  return (
    <div className="container">
      <h1>📝 Notes App</h1>
      <NoteForm onCreate={handleCreate} />
      <NoteList notes={notes} />
    </div>
  );
}
