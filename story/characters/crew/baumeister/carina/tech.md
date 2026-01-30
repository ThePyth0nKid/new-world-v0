# Carina — Tech-Seele

## Stack-Position: Deployment-Stufen / Environment Management

## Framework & Sprache
- **Konzept:** Three-Stage Deployment Pipeline
- **Tools:** Docker Compose (lokal), Railway Environments, CI/CD
- **Paradigma:** Stufenweise. Kein Code erreicht Production ohne Testflug.

## Funktionsbereich
| Stufe | Story | Tech | Was Carina prueft |
|-------|-------|------|-------------------|
| **Lokal (Bau)** | Gleiter wird im Hangar gebaut | Docker lokal, dev server | Laeuft es ueberhaupt? |
| **Staging (Testflug)** | Gleiter wird im geschuetzten Raum getestet | Railway Staging Environment | Laeuft es unter echten Bedingungen? |
| **Production (Mission)** | Gleiter wird in die echte Welt geschickt | Railway Production Environment | Laeuft es fuer echte User? |

## Die Regeln zwischen den Stufen
```
Lokal → Staging:
  ✓ Tests bestanden
  ✓ Build erfolgreich
  ✓ Perseus hat neue Staging-Keys ausgegeben
  ✓ Code Review durch mindestens einen Reviewer

Staging → Production:
  ✓ Staging-Tests bestanden (E2E, Integration)
  ✓ Performance akzeptabel
  ✓ Perseus hat Production-Keys getauscht
  ✓ Carinas Freigabe
  ✓ Kein Shortcut. Nie.
```

## Code-Patterns
```yaml
# .github/workflows/deploy.yml — Carinas Pipeline
name: Stufenweise Deployment

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test           # Ohne Test kein Weiter

  staging:
    needs: test
    environment: staging        # Stufe 2
    steps:
      - run: railway up --environment staging

  production:
    needs: staging
    environment: production     # Stufe 3 — nur mit Freigabe
    steps:
      - run: railway up --environment production
```

## Ihr Charakter als Code
Carina ist der Prozess selbst. Ohne sie wuerde Argo zu frueh packen, Auriga zu frueh losfahren, und Perseus die falschen Schluessel ausgeben. Sie ist nicht glamouroes — sie ist der Grund, warum Production nicht brennt.
