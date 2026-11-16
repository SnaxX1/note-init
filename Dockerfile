# ---------- Étape 1 : compiler le frontend React ----------
FROM node:20-alpine AS front-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build            # produit /app/frontend/dist

# ---------- Étape 2 : image finale (backend + frontend compilé) ----------
FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY backend/src ./src
COPY --from=front-build /app/frontend/dist ./public
EXPOSE 3000
CMD ["npm", "start"]
