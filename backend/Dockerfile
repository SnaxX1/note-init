# ---------- Étape 2 : image finale (backend + frontend compilé) ----------
FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY backend/src ./src
COPY --from=front-build /app/frontend/dist ./public
EXPOSE 3000
CMD ["npm", "start"]
