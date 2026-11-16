import { pool } from '../config/db.js';

export async function findAll() {
  const { rows } = await pool.query(
    'SELECT * FROM notes ORDER BY created_at DESC'
  );
  return rows;
}

export async function create({ title, content }) {
  const { rows } = await pool.query(
    'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return rows[0];
}
