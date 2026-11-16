import pg from 'pg';

// Pool = ensemble de connexions réutilisables vers PostgreSQL
export const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'notes',
  password: process.env.DB_PASSWORD || 'notes',
  database: process.env.DB_NAME || 'notesdb',
});

// Crée la table au démarrage si elle n'existe pas encore
export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS notes (
      id         SERIAL PRIMARY KEY,
      title      VARCHAR(150) NOT NULL,
      content    TEXT NOT NULL DEFAULT '',
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `);
}
