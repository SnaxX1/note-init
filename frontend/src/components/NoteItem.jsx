export default function NoteItem({ note }) {
  return (
    <li className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{new Date(note.created_at).toLocaleString()}</small>
    </li>
  );
}
