# Stil-Codes -- Single Source of Truth

> **Zweck:** Alle visuellen Stil-Parameter fuer die Neue-Welt-Pilotproduktion.
> Alle tool-spezifischen Prompt-Dateien referenzieren dieses Dokument.
> Quelle: `welt/visueller-stil.md`

---

## 1. SREF-Code (Midjourney Style Reference)

```
--sref 205189384
```

**Status:** GELOCKT (30.01.2026)

---

## 1b. Personalisierungs-Code (Midjourney --p)

Trainiertes Model fuer den Neue-Welt-Stil:

```
--p 600d5f0d-6193-472f-85eb-64ccd85e3ca1
```

**Status:** GESPEICHERT (30.01.2026 trainiert) — NICHT kompatibel mit Niji 7

### Niji 7 Kompatibilitaet (Stand: 30.01.2026)

| Parameter | Niji 7 Status |
|-----------|---------------|
| `--sref` | Funktioniert |
| `--style raw` | Funktioniert |
| `--s` (Stylize) | Funktioniert |
| `--p` (Personalisierung) | NICHT verfuegbar — eigene Niji-7-Rating-Aufgabe kommt spaeter |
| `--cref` (Character Ref) | NICHT verfuegbar — Ersatz in Entwicklung |

### Verwendung (sobald Niji 7 --p unterstuetzt)

An jeden Prompt anfuegen — kombinierbar mit `--sref`:

```
[PROMPT] --niji 7 --sref [SREF-CODE] --p 600d5f0d-6193-472f-85eb-64ccd85e3ca1 --ar 16:9 --s 250 --style raw --no [NEGATIV-TAGS]
```

### Verwendung mit Midjourney V7 (nicht Niji)

`--p` funktioniert mit dem regulaeren Midjourney V7-Modell. Falls du Szenen OHNE Anime-Stil brauchst:

```
[PROMPT] --v 7 --sref [SREF-CODE] --p 600d5f0d-6193-472f-85eb-64ccd85e3ca1 --ar 16:9 --s 250 --style raw --no [NEGATIV-TAGS]
```

**Hinweis:** `--p` und `--sref` zusammen ergeben maximale Stil-Konsistenz. Das Personalisierungs-Model beeinflusst die Bildaesthetik, der SREF-Code fixiert den konkreten Stil.

---

## 2. Stil-Anchors (Universeller Stil-Block)

In JEDEN Prompt einfuegen -- unabhaengig vom Tool:

```
anime screenshot, semi-realistic style, industrial sci-fi aesthetic,
worn textures, hard artificial lighting,
muted color palette with neon accents,
Cowboy Bebop meets One Piece in space,
cinematic composition
```

### Stil-Formel (Referenz)

```
Realismus:              40% -- Anatomisch korrekte Proportionen, physisch glaubwuerdige Posen
Anime-Expressivitaet:  30% -- Ueberzeichnete Augenausdruecke, markante Silhouetten, Farb-Storytelling
Industrial Sci-Fi:     30% -- Sichtbare Naehte, Metall-Akzente, recycelte Aesthetik, hartes Licht
```

---

## 3. Universelle Negativ-Tags

In JEDEN Prompt als Negative einfuegen:

```
photorealistic, hyperrealistic, chibi, oversized eyes,
clean new clothing, fantasy, magic, glowing aura,
holographic displays, floating UI,
3D render, CGI, bright saturated colors,
pristine surfaces, sunlight
```

### Erweiterte Negativ-Tags (bei Bedarf ergaenzen)

```
uncanny valley, pore detail, super deformed, sparkle effects,
supernatural, grimdark, gratuitous gore, horror elements,
plastic skin, doll-like, apple design, sterile future,
muscular bodybuilder physique, confident hero pose
```

---

## 4. Qualitaets-Tags

In JEDEN Prompt einfuegen:

```
highly detailed, sharp focus, professional illustration,
concept art quality
```

### Erweiterte Qualitaets-Tags (fuer Hero Shots / Keyframes)

```
highly detailed, sharp focus, professional illustration,
concept art quality, consistent proportions,
masterpiece, best quality, ultra-detailed
```

---

## 5. Niji 7 Basis-Parameter

Standard-Parameterblock fuer Midjourney Niji 7:

```
--niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw
```

### Parameter-Varianten nach Verwendungszweck

| Zweck | Parameter |
|-------|-----------|
| Szenen-Keyframe (16:9) | `--niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw` |
| Portrait (2:3) | `--niji 7 --sref 205189384 --ar 2:3 --s 250 --style raw` |
| Character Sheet (1:1) | `--niji 7 --sref 205189384 --ar 1:1 --s 250 --style raw` |
| Panorama / Establishing (21:9) | `--niji 7 --sref 205189384 --ar 21:9 --s 250 --style raw` |
| Hoehere Stilisierung | `--niji 7 --sref 205189384 --ar 16:9 --s 400 --style raw` |
| Weniger Stilisierung | `--niji 7 --sref 205189384 --ar 16:9 --s 100 --style raw` |

### Zusaetzliche Midjourney-Optionen

```
--cref [URL]    -- Character Reference (genehmigtes Referenzbild)
--cw 80         -- Character Weight (80 = Gesicht + Koerper, 0 = nur Stimmung)
--no [TAGS]     -- Negativ-Tags (siehe Abschnitt 3)
```

---

## 6. Ingredient-Image Inventar (Referenzbilder)

Platzhalter fuer genehmigte Referenzbilder. URLs/Pfade eintragen nach Erstellung:

| Referenz-ID | Beschreibung | Status | Pfad/URL |
|-------------|-------------|--------|----------|
| `REF-IO-FACE` | Io Portrait -- Gesicht frontal, warmes Licht | OFFEN | `[PFAD]` |
| `REF-IO-ACTION` | Io in Bewegung -- Rennend, Gassen, dynamisch | OFFEN | `[PFAD]` |
| `REF-KID-FACE` | Kid Portrait -- Gesicht frontal, ruhiger Ausdruck | OFFEN | `[PFAD]` |
| `REF-HAFEN-DOCKS` | Hafen 31 Docks -- Spiralarme, Container, grelles Licht | OFFEN | `[PFAD]` |
| `REF-HAFEN-KORRIDOR` | Hafen 31 Korridor -- Schlafkapseln, Gitterrost, Notlicht | OFFEN | `[PFAD]` |
| `REF-NW-AUSSEN` | New World Aussenansicht -- Am Dock, dunkle Huelle | OFFEN | `[PFAD]` |
| `REF-NW-INNEN` | New World Innenansicht -- Korridor, warmes Weiss, Cyan-Screens | OFFEN | `[PFAD]` |
| `REF-NW-STIL` | Universum Mood Board -- Gesamtstil-Referenz | OFFEN | `[PFAD]` |
| `REF-KUGELSCHREIBER` | Kugelschreiber Detail -- Verchromt, Delle am Clip, zerkratzt | OFFEN | `[PFAD]` |
| `REF-CODING-TERMINAL` | Coding-Screen -- Gruen auf Schwarz, Nova-Baumstruktur | OFFEN | `[PFAD]` |

### Verwendung der Referenzbilder

```
/imagine [PROMPT] --cref [REF-IO-FACE] --cw 80 --sref 205189384 --niji 7 --ar 16:9 --s 250 --style raw
```

---

## 7. Farbpalette -- Neue Welt Universum

### Basis-Toene (Die Dunkelheit)

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Tiefe | Kohlenschwarz | `#0D0D0D` | Weltraum, tiefe Schatten |
| Station | Rostbraun-Grau | `#2A2420` | Hafenwaende, alte Infrastruktur |
| Metall | Oxidiertes Silber | `#6B6B6B` | Schiffshuellen, Werkzeuge |
| Staub | Warmes Anthrazit | `#3D3530` | Textilien, Leder, Holz |

### Akzent-Toene (Das Licht)

| Rolle | Farbe | Hex | Verwendung |
|-------|-------|-----|------------|
| Signal | Neon-Cyan | `#00E5FF` | Navigationsdaten, Schiffs-UI |
| Warnung | Glueh-Amber | `#FF8F00` | Alarme, Feuer, Waerme |
| Leben | Organisches Gruen | `#69F0AE` | Lebenserhaltung, Wachstum |
| Gefahr | Tiefer Rotton | `#D50000` | Blut, Notfall, Syndikate |

### Io -- Persoenliche Palette

| Rolle | Farbe | Hex |
|-------|-------|-----|
| Primaer | Gewaschenes Grau | `#78909C` |
| Sekundaer | Verblasstes Indigo | `#37474F` |
| Akzent | Khaki-Sand | `#A1887F` |
| Dunkel | Stiefel-Schwarz | `#212121` |
| Haut | Olivbraun | `#8D6E63` |
| Augen | Dunkelbraun | `#3E2723` |
| Haar | Schwarz | `#1A1A1A` |

### Kid -- Persoenliche Palette

| Rolle | Farbe | Hex |
|-------|-------|-----|
| Primaer | Tiefes Anthrazit | `#263238` |
| Sekundaer | Dunkelbraun-Grau | `#3E2723` |
| Akzent | Titan-Schwarz | `#1A1A1A` |
| Dunkel | Kohle | `#0D0D0D` |
| Haut | Verwittertes Bronzebraun | `#795548` |
| Augen | Dunkelgrau-Gruen | `#455A64` |
| Haar | Dunkelbraun | `#3E2723` |

### Gruppen-Paletten (Kurzreferenz)

| Gruppe | Primaer | Sekundaer | Akzent |
|--------|---------|-----------|--------|
| Gestalter | Saphirblau `#1565C0` | Silberweiss `#CFD8DC` | Elektro-Violet `#AA00FF` |
| Ingenieure | Obsidianschwarz `#1A1A2E` | Dunkles Teal `#004D40` | Phosphor-Gruen `#00E676` |
| Hueter | Erdbraun `#4E342E` | Kupfer `#BF6A30` | Bernstein-Gold `#FFD600` |
| Baumeister | Stahl-Grau `#455A64` | Rost-Orange `#BF360C` | Schweiss-Weiss `#FAFAFA` |
| Waechter | Tiefschwarz `#0D0D0D` | Blutrot-Dunkel `#B71C1C` | Silber-Chrom `#E0E0E0` |
| Navigatoren | Nebel-Indigo `#1A237E` | Sternenweiss `#E8EAF6` | Puls-Cyan `#00BCD4` |

### Titel-Palette

| Element | Hex |
|---------|-----|
| Titel-Weiss | `#FAFAFA` |
| Hintergrund-Schwarz | `#0D0D0D` |
| Cyan-Akzent | `#00E5FF` |

### Coding-Screens

| Element | Hex |
|---------|-----|
| Terminal-Hintergrund | `#0D0D0D` |
| Code-Gruen | `#00E676` |
| Screen-Glow | `#00E5FF` |

### Licht-Regeln

- Hauptlichtquelle ist IMMER kuenstlich (Neonroehren, Schweissblitze, Bildschirmglow)
- Natuerliches Licht (Sterne, ferne Sonnen) ist kalt und indirekt
- Warmes Licht NUR in menschlichen Raeumen: Kueche, Quartiere, Pyxis' Naehe
- Schatten sind hart, nie diffus -- das Universum hat keine Wolken
- KEIN Sonnenlicht in Hafen- oder Schiffsszenen

---

> **Cross-Referenz:**
> - Charakter-Blocks: `_referenz/charakter-blocks.md`
> - Konsistenz-Checkliste: `_referenz/konsistenz-checkliste.md`
> - Visueller Stil Quell-Datei: `welt/visueller-stil.md`
> - Drehbuch: `produktion/pilot/drehbuch.md`
