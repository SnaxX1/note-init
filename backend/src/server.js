import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import noteRoutes from './routes/noteRoutes.js';
import { initDb } from './config/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

// API
app.use('/api/notes', noteRoutes);

// Frontend React compilé (copié dans /app/public par le Dockerfile)
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));
app.get('*', (req, res) => res.sendFile(path.join(publicDir, 'index.html')));

// Gestion centralisée des erreurs
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erreur serveur' });
});

const PORT = process.env.PORT || 3000;

initDb()
  .then(() => app.listen(PORT, () => console.log(`✅ Serveur sur le port ${PORT}`)))
  .catch((err) => {
    console.error('❌ Connexion base de données impossible', err);
    process.exit(1);
  });
