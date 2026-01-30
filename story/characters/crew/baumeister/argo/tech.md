# Argo — Tech-Seele

## Stack-Position: Containerisierung

## Framework & Sprache
- **Tool:** Docker / Docker Compose
- **Sprache:** Dockerfile, YAML (docker-compose)
- **Paradigma:** Isolation. Portabilitaet. "Laeuft bei mir" gilt nicht mehr.

## Funktionsbereich
| Funktion | Was Argo macht |
|----------|----------------|
| Containerisierung | Applikation + Abhaengigkeiten = ein Container. Ueberall gleich. |
| Multi-Stage Builds | Schlank bauen. Dev-Tools raus, Production-Image rein. |
| Docker Compose | Mehrere Services orchestrieren. DB + Backend + Frontend = ein Befehl. |
| Volumes | Persistenter Speicher. Daten ueberleben den Container. |
| Networks | Container sprechen miteinander. Isoliert von aussen. |
| Image Registry | Container veröffentlichen. Argo packt, die Registry lagert. |

## Code-Patterns
```dockerfile
# Argo packt sauber
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Schlank. Sauber. Portabel.
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]

# Was Argo verpackt, laeuft ueberall.
```

## Sein Charakter als Code
Argo ist Ordnung. Jedes Paket abgeschlossen, jede Abhaengigkeit enthalten, keine Ueberraschungen. Seine Philosophie: Wenn es im Container laeuft, laeuft es ueberall. Punkt.
