import { useState } from 'react';

export default function NoteForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await onCreate({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenu de la note"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
