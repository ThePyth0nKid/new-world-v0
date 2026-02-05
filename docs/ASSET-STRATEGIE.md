# Asset-Strategie — Neue Welt V0

Diese Dokumentation beschreibt die Hybrid-Strategie für Asset-Management im Neue-Welt-Projekt.

---

## Übersicht

| Asset-Typ | Speicherort | Verwendung | Grund |
|-----------|-------------|------------|-------|
| **Videos** | R2 CDN | `asset('/videos/...')` | Zu groß für Build, CDN-Streaming |
| **Große Bilder** (>100KB) | R2 CDN | `asset('/images/...')` | CDN-Caching, Build klein halten |
| **SVGs** | Lokal `/public` | `src="/images/..."` | Content-Type Problem auf R2 |
| **Kleine Bilder** (<100KB) | Lokal `/public` | `src="/images/..."` | Kein extra HTTP-Request nötig |
| **Fonts** | Lokal `/public` | CSS `@font-face` | Werden mit CSS geladen |

---

## Warum Hybrid?

### Problem 1: SVGs auf R2
Cloudflare R2 setzt keinen `Content-Type: image/svg+xml` Header für SVGs.
Browser können SVGs ohne korrekten Content-Type nicht rendern.

**Lösung:** SVGs bleiben lokal in `/public/images/`.

### Problem 2: Kleine Assets
Für ein 1KB Icon einen separaten HTTP-Request zu machen ist ineffizient.
Die Latenz des Requests überwiegt den Vorteil des CDN.

**Lösung:** Kleine Assets (<100KB) bleiben lokal.

### Problem 3: Große Assets im Build
Videos (37MB) und große Bilder im Build machen:
- Builds langsam (Minuten statt Sekunden)
- Docker Images riesig
- Git Repository aufgebläht

**Lösung:** Große Assets auf R2 CDN auslagern.

---

## Entscheidungsbaum

```
Neues Asset hinzufügen?
│
├─ Ist es ein Video? ───────────────────────► R2 CDN
│
├─ Ist es ein SVG? ─────────────────────────► LOKAL
│
├─ Ist es größer als 100KB? ────────────────► R2 CDN
│
└─ Ist es kleiner als 100KB? ───────────────► LOKAL
```

---

## Implementierung

### R2 Assets (große Dateien)

```jsx
import { asset } from '../constants/config';

// Video
<video src={asset('/videos/hero.mp4')} />

// Großes Bild
<img src={asset('/images/io-1.png')} />
```

### Lokale Assets (SVGs, kleine Dateien)

```jsx
// SVG — KEIN asset() verwenden!
<img src="/images/nw-logo.svg" />

// Kleines Bild
<img src="/images/icon.png" />
```

---

## Asset Registry

Die komplette Liste aller Assets ist in `constants/config.js` dokumentiert:

```javascript
export const ASSET_REGISTRY = {
  r2: {
    videos: [...],    // Auf R2 CDN
    images: [...],    // Große Bilder auf R2
  },
  local: {
    svgs: [...],      // Lokal in /public
    images: [...],    // Kleine Bilder lokal
    fonts: [...],     // Fonts lokal
  },
};
```

**Bei jedem neuen Asset diese Registry aktualisieren!**

---

## Upload-Workflow

### Neues Video hinzufügen

```bash
# 1. Datei lokal ablegen (für Development)
cp video.mp4 apps/web/public/videos/

# 2. Auf R2 hochladen
wrangler r2 object put "neue-welt-assets/videos/video.mp4" \
  --file apps/web/public/videos/video.mp4 --remote

# 3. In Komponente verwenden
<video src={asset('/videos/video.mp4')} />

# 4. Registry in config.js aktualisieren
```

### Neues großes Bild hinzufügen (>100KB)

```bash
# 1. Datei lokal ablegen
cp character.png apps/web/public/images/

# 2. Auf R2 hochladen
wrangler r2 object put "neue-welt-assets/images/character.png" \
  --file apps/web/public/images/character.png --remote

# 3. In Komponente verwenden
<img src={asset('/images/character.png')} />

# 4. Registry aktualisieren
```

### Neues SVG/Icon hinzufügen

```bash
# 1. Datei lokal ablegen — FERTIG!
cp icon.svg apps/web/public/images/

# 2. In Komponente verwenden (KEIN asset()!)
<img src="/images/icon.svg" />

# 3. Registry aktualisieren
```

---

## URLs

| Environment | App | Assets |
|-------------|-----|--------|
| **Production** | https://playbook.newworld.systems | https://assets.newworld.systems |
| **Development** | http://localhost:3050 | Lokal `/public` |

---

## Kosten

R2 ist praktisch kostenlos für unser Nutzungsmuster:

| Posten | Menge | Kosten |
|--------|-------|--------|
| Storage | ~50MB | ~$0.01/Monat |
| Reads | ~10.000/Monat | ~$0.04/Monat |
| Egress | Unlimited | **$0** |
| **Gesamt** | | **~$0.05/Monat** |

---

## Troubleshooting

### Asset lädt nicht in Production

1. **Prüfe ob auf R2:** `curl -I https://assets.newworld.systems/pfad/zur/datei`
2. **Prüfe Registry:** Ist das Asset in `ASSET_REGISTRY` eingetragen?
3. **Prüfe Verwendung:** Wird `asset()` für R2-Assets verwendet?

### SVG zeigt nicht an

**Symptom:** SVG auf R2 gibt 200 OK aber Browser zeigt nichts.
**Ursache:** Fehlender Content-Type Header.
**Lösung:** SVGs IMMER lokal verwenden, nicht auf R2.

### Video buffert langsam

1. Prüfe Video-Größe (sollte <15MB für smooth scrubbing sein)
2. Prüfe Encoding (H.264, 30fps, 1080p max)
3. Cloudflare Cache prüfen: `cf-cache-status: HIT` im Response Header

---

## Checkliste: Neues Asset

- [ ] Dateityp bestimmt (Video/Bild/SVG)
- [ ] Größe geprüft (<100KB = lokal, >100KB = R2)
- [ ] Datei in `/public` abgelegt (für Dev)
- [ ] Falls R2: Mit Wrangler hochgeladen
- [ ] In Komponente korrekt eingebunden (`asset()` oder direkt)
- [ ] `ASSET_REGISTRY` in config.js aktualisiert
- [ ] Getestet in Development UND Production
