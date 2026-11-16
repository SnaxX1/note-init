import NoteItem from './NoteItem.jsx';

export default function NoteList({ notes }) {
  if (notes.length === 0) return <p>Aucune note pour le moment.</p>;

  return (
    <ul className="notes">
      {notes.map((n) => (
        <NoteItem key={n.id} note={n} />
      ))}
    </ul>
  );
}
