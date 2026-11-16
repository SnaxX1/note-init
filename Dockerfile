# ---------- Étape 1 : compiler le frontend React ----------
FROM node:20-alpine AS front-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build            # produit /app/frontend/dist

