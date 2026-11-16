import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // En développement local (npm run dev), redirige /api vers le backend
    proxy: { '/api': 'http://localhost:3000' },
  },
});
