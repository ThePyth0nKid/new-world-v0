# New World Backend — Integriert in IGOULTRAv0

> **Architektur-Entscheidung (2026-02-05):** Statt ein eigenes "Jungle Backend" zu bauen,
> werden die NW-spezifischen Apps direkt in das bestehende IGOULTRAv0 Backend integriert.
> Beide Projekte teilen User-Model, XP-System, Skills, AI-Agents und Infrastruktur.

## Architektur

```
igoultra.de  ──────┐
(Next.js)          │
                   ├──→ api.igoultra.de  (Django Backend)
neueswelt.dev  ────┘     └── /api/v1/nw/  (New World Namespace)
(Vite + React)
```

**Zwei Frontends, ein Backend:**
- `igoultra.de` — Next.js Frontend (IGO-ULTRA)
- `neueswelt.dev` — Vite + React Frontend (New World, `new_world_v0/apps/web/`)
- `api.igoultra.de` — Django Backend (bedient beide, `IGOULTRAv0/apps/api/`)

---

## Was wurde integriert

### 3 neue Django Apps (in IGOULTRAv0/apps/api/)

| App | Models | Zweck |
|-----|--------|-------|
| `arrival/` | ArrivalSession | Character Creation ("The Arrival") |
| `characters/` | Character | NW-Manga-Avatare |
| `episodes/` | Episode, EpisodeProgress | NW-Episoden + Fortschritt |

### Shared AI Module

```
shared/ai/
├── claude.py      → Anthropic SDK Wrapper (Captain Kid)
├── replicate.py   → Replicate SDK Wrapper (FLUX.1 Pro)
└── prompts.py     → Style-locked Prompt Templates
```

### User Model (erweitert)

```python
# Neue Felder auf users.User:
github_id = CharField(unique=True, nullable)   # GitHub OAuth
nw_role   = CharField(choices=NwRole)           # wanderer/schueler/crew/captain
```

### AgentTypes (erweitert)

```python
# Neue Choices auf AgentConversation.AgentType:
CAPTAIN_KID = 'captain_kid'     # Interview-Agent
CHARACTER_GEN = 'character_gen' # Character Generator
```

---

## API Endpunkte

Alle unter `/api/v1/nw/`:

### Health
```
GET  /api/v1/nw/health/                → Status Check
```

### Arrival (Session 2)
```
POST /api/v1/nw/arrival/start/         → Session erstellen
POST /api/v1/nw/arrival/chat/          → Captain Kid Interview
POST /api/v1/nw/arrival/generate/      → 4 Portraits (Celery Task)
GET  /api/v1/nw/arrival/progress/<id>/ → SSE: Generations-Fortschritt
POST /api/v1/nw/arrival/refine/        → Variation verfeinern
POST /api/v1/nw/arrival/names/         → 5 Namensvorschlaege
POST /api/v1/nw/arrival/finalize/      → Character speichern + XpEvent
```

### Community (Session 3)
```
GET  /api/v1/nw/crew/                  → Community Gallery
GET  /api/v1/nw/crew/<username>/       → Public Character Profile
```

### Episodes (Session 3)
```
GET  /api/v1/nw/episodes/              → Episoden-Liste
POST /api/v1/nw/progress/              → Fortschritt + XP vergeben
GET  /api/v1/nw/dashboard/             → NW Dashboard Data
```

---

## Synergien mit IGO-ULTRA

| Bereich | Integration |
|---------|-------------|
| **User** | Ein Account, Discord ODER GitHub Login |
| **XP** | NW-Episode → XpEvent(source='nw_episode', layer_type='Cyber') |
| **Skills** | NW-Episoden schalten Skills frei |
| **AI Agents** | Captain Kid nutzt AgentConversation mit Token-Tracking |
| **Seasons** | NW Season = IGO-ULTRA Season |
| **Missions** | NW-Episoden als Seasonal Missions |

---

## Implementierungs-Sessions

### Session 1: Skeleton + Integration (DONE)
- [x] `github_id` + `nw_role` zum User Model
- [x] GitHub OAuth Provider in allauth
- [x] 3 Django Apps erstellt (arrival, characters, episodes)
- [x] `shared/ai/` Modul (claude.py, replicate.py, prompts.py)
- [x] Models + Serializers + Admin
- [x] INSTALLED_APPS + CORS aktualisiert
- [x] `anthropic` + `replicate` in requirements.txt
- [x] Celery `arrival` Queue
- [x] `/api/v1/nw/` URL-Namespace mit Health Check
- [ ] Migrations ausfuehren (nach Computer-Neustart)

### Session 2: The Arrival API
- Captain Kid Interview (Claude SDK)
- Portrait Generation (FLUX.1 via Replicate + Celery)
- SSE Progress Stream
- Refinement + Names + Finalize

### Session 3: Community + Episodes API
- Gallery + Public Profiles
- Episoden-Liste + Progress Tracking
- XP-Integration

### Session 4: Frontend-Anbindung (in new_world_v0)
- API Client in `apps/web/src/lib/api.js`
- GitHub OAuth Flow
- The Arrival UI-Komponenten
- Dashboard-Integration

---

## Lokale Entwicklung

```bash
# IGOULTRAv0 Backend starten:
cd C:/Users/nelso/Desktop/IGOULTRAv0
docker compose up

# Ports:
# API:     localhost:8060
# DB:      localhost:5460
# Redis:   localhost:6360
# Next.js: localhost:3060

# NW Frontend (separat):
cd C:/Users/nelso/Desktop/new_world_v0
docker compose up web
# Port: localhost:3050
```

### Migrations nach Aenderungen:
```bash
docker compose run --rm api python manage.py makemigrations
docker compose run --rm api python manage.py migrate
```

### Health Check:
```bash
curl http://localhost:8060/api/v1/nw/health/
# → {"status": "ok", "service": "nw"}
```

---

## Kosten-Schaetzung

### Fixkosten (monatlich, geteilt mit IGO-ULTRA)
| Service | Kosten |
|---------|--------|
| Railway API (Django) | bereits vorhanden |
| Railway Celery Worker | bereits vorhanden |
| Railway PostgreSQL | bereits vorhanden |
| Railway Redis | bereits vorhanden |
| **Zusatzkosten** | **~0 EUR** |

### Variable Kosten (pro Character Creation)
| Service | Pro Erstellung |
|---------|----------------|
| Claude API (Interview + Prompts) | ~0.10 EUR |
| Replicate FLUX.1 (4 Bilder) | ~0.20 EUR |
| Refinements (3x) | ~0.15 EUR |
| **Gesamt pro Charakter** | **~0.30-0.80 EUR** |

---

## Env-Variablen (neue)

```env
# GitHub OAuth (New World)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Replicate (Character Generation)
REPLICATE_API_TOKEN=
```

Die bestehenden `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, etc. werden mitgenutzt.
