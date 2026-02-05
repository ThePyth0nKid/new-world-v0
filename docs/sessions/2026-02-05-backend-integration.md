# Claude Session — 5. Februar 2026 (Backend Integration)

## Resume

Zum Weitermachen nach Computer-Neustart:

```bash
cd C:/Users/nelso/Desktop/new_world_v0
claude
```

Dann sagen:
> "Wir haben gestern die Backend-Integration (Session 1) in IGOULTRAv0 gemacht.
> Alle Code-Aenderungen sind geschrieben. Wir muessen jetzt:
> 1. Docker starten: `docker compose up` in IGOULTRAv0
> 2. Migrations ausfuehren
> 3. Health Check verifizieren
> Dann weiter mit Session 2 (The Arrival API)."

## Context

Siehe:
- `memory/backend-integration.md` — Vollstaendiger Stand
- `docs/JUNGLE-BACKEND.md` — Aktualisierte Architektur-Doku

## Was gemacht wurde

### Session 1: Skeleton + Integration (COMPLETE, pending migrations)

In `C:/Users/nelso/Desktop/IGOULTRAv0/apps/api/`:

**Neue Apps:**
- `arrival/` — ArrivalSession (UUID, Phasen, Traits, Interview History, Images)
- `characters/` — Character (Name, Archetype, Personality, Portraits)
- `episodes/` — Episode + EpisodeProgress

**Shared Module:**
- `shared/ai/claude.py` — Anthropic SDK Wrapper
- `shared/ai/replicate.py` — FLUX.1 Pro Wrapper
- `shared/ai/prompts.py` — Captain Kid + Portrait + Name Templates

**User Model erweitert:**
- `github_id` (CharField, unique, nullable)
- `nw_role` (TextChoices: wanderer/schueler/crew/captain)

**AI Agents erweitert:**
- `CAPTAIN_KID` + `CHARACTER_GEN` AgentTypes

**Config:**
- INSTALLED_APPS: arrival, characters, episodes, github allauth provider
- CORS: localhost:3050 (dev), neueswelt.dev (prod)
- requirements.txt: anthropic>=0.40, replicate>=1.0
- Celery: arrival queue + task route
- Docker: arrival queue im worker
- .env.example: GitHub + Replicate Credentials

**URL Namespace:**
- `/api/v1/nw/health/` — Health Check
- `/api/v1/nw/arrival/` — Arrival (Session 2)
- `/api/v1/nw/crew/` — Characters (Session 3)
- `/api/v1/nw/episodes/` — Episodes (Session 3)

## Naechste Schritte

1. **Migrations ausfuehren** (Task 9 — sofort nach Neustart)
2. **Session 2**: The Arrival API implementieren
3. **Session 3**: Community + Episodes API
4. **Session 4**: Frontend-Anbindung
