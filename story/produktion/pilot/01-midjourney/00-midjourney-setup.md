# MIDJOURNEY SETUP — Neue Welt Pilot

> **Zweck:** Midjourney-Projekt einrichten BEVOR du den ersten Prompt ausfuehrst.
> Ordner, Style Creator, Personalisierung — alles fuer maximale Konsistenz.
> **Datum:** 30.01.2026
> **Midjourney Version:** V7 (Default seit Juni 2025), Niji 7

---

## Reihenfolge

```
SCHRITT 0: Dieses Dokument         ← DU BIST HIER
SCHRITT 1: character-first-images.md  ← Io + Kid erste Bilder
SCHRITT 2: look-dev.md               ← Environments, Objects, Coding-Visuals
SCHRITT 3: keyframes.md              ← Alle 27 Shot-Keyframes
```

---

## 1. ORDNERSTRUKTUR IN MIDJOURNEY

Oeffne midjourney.com → Organize → Folder-Icon links.

### Ordner anlegen

Erstelle folgende Ordner-Gruppe und Unterordner:

```
📁 NEUE WELT (Gruppe)
│
├── 📁 00-SREF-Exploration        ← Style-Code-Suche
├── 📁 01-Io-Character            ← Io Sheets, Portraits, Varianten
├── 📁 02-Kid-Character           ← Kid Sheets, Portraits, Varianten
├── 📁 03-Environments            ← Hafen 31, Docks, New World, Rampe
├── 📁 04-Objects                 ← Kugelschreiber, Coding Terminal
├── 📁 05-Keyframes-Beat1         ← Shots 01-06
├── 📁 06-Keyframes-Beat2         ← Shots 07-09
├── 📁 07-Keyframes-Beat3         ← Shots 10-14
├── 📁 08-Keyframes-Beat4         ← Shots 14a-17
├── 📁 09-Keyframes-Beat5         ← Shots 18-20
└── 📁 10-Keyframes-Beat6         ← Shots 21-27
```

### So legst du es an

1. Oeffne midjourney.com → klicke das **Folder-Icon** (links)
2. **New Folder** → Name eingeben → Enter
3. Alle 11 Ordner anlegen
4. Um eine **Gruppe** zu erstellen: Ziehe einen Ordner auf einen anderen
5. Benenne die Gruppe "NEUE WELT"

### In einen Ordner generieren

Wenn du einen Ordner oeffnest und dann im Imagine-Bar einen Prompt eingibst,
erscheint **"Generating in [Ordnername]"** — alle Bilder landen automatisch dort.

**Workflow:**
- Ordner `00-SREF-Exploration` oeffnen → SREF-Prompts ausfuehren
- Ordner `01-Io-Character` oeffnen → Io-Prompts ausfuehren
- usw.

---

## 2. STYLE CREATOR — SREF-Code finden

Der Style Creator ist das maechtigste Werkzeug fuer Konsistenz.
Er erstellt einen individuellen `--sref`-Code basierend auf deinem Geschmack.

### Warum Style Creator statt --sref random?

| Methode | Kontrolle | Konsistenz | Empfehlung |
|---------|-----------|------------|------------|
| `--sref random` | Zufall | Keine | Nur zum Entdecken |
| `--sref [CODE]` von einem Bild | Mittel | Gut | Backup-Option |
| **Style Creator** | Hoch | Sehr gut | **Beste Option** |

### So nutzt du den Style Creator

1. Oeffne **midjourney.com → Style Creator** (im Menue)
2. Dir werden Bildpaare gezeigt
3. **Klicke immer auf das Bild, das naeher am Neue-Welt-Stil ist:**
   - Semi-realistisch (nicht fotorealistisch, nicht Chibi)
   - Industriell, dunkel, hartes Licht
   - Getragene Texturen, abgenutzte Materialien
   - Gedaempfte Farben mit Neon-Akzenten
   - Cowboy Bebop / Arcane Stimmung, NICHT Fantasy/Clean Sci-Fi
4. Nach genug Auswahlen generiert der Style Creator einen **SREF-Code**
5. Kopiere den Code

### Was du WAEHLEN solltest (Checkliste)

Waehle Bilder die zeigen:
- [x] Harte Schatten, kuenstliches Licht
- [x] Gedaempfte, dunkle Farbpaletten
- [x] Getragene, reparierte Kleidung/Materialien
- [x] Anime-artige Gesichtszuege (nicht Fotorealismus)
- [x] Industrielle Umgebungen, Metall, Rost
- [x] Charaktere mit markanten Silhouetten
- [x] Emotionale Portraits mit Tiefe

Waehle NICHT:
- [ ] Helle, saubere, futuristische Designs
- [ ] Fantasy, Magie, leuchtende Effekte
- [ ] Fotorealistische Gesichter
- [ ] Chibi, Super-Deformed, grosse Augen
- [ ] Natur, Sonnenlicht, Outdoor
- [ ] Clean Sci-Fi (Apple-Aesthetik)

### SREF-Code eintragen

Sobald du deinen Code hast:

1. Trage ihn in `_referenz/stil-codes.md` ein (Zeile 27):
   ```
   --sref [DEIN-CODE-HIER]
   ```
2. Ersetze in ALLEN Prompt-Dateien `205189384` bzw. `random` durch deinen Code
3. Dateien die aktualisiert werden muessen:
   - `01-midjourney/character-first-images.md` (10 Prompts)
   - `01-midjourney/look-dev.md` (19 Prompts)
   - `01-midjourney/keyframes.md` (30 Prompts)

---

## 3. PERSONALISIERUNG (Optional aber empfohlen)

Personalisierung trainiert Midjourney auf DEINEN Geschmack.
Der `--p`-Parameter wendet dein Profil auf jeden Prompt an.

### Personalisierungs-Profil aufbauen

1. Oeffne **midjourney.com → Personalize**
2. Finde dein **Global V7 Profile**
3. Klicke **"Add Rankings"**
4. Dir werden Bildpaare gezeigt — waehle immer das Bild,
   das dem Neue-Welt-Stil naeher ist (gleiche Kriterien wie Style Creator)
5. **Ziel: Mindestens 200 Rankings** fuer stabile Ergebnisse
   (2000 Rankings = nahezu perfekt)

### Personalisierung in Prompts nutzen

Fuege `--p` am Ende deines Prompts hinzu:

```
[DEIN PROMPT] --niji 7 --sref [CODE] --ar 16:9 --s 250 --style raw --p
```

**Hinweis:** `--p` funktioniert ZUSAETZLICH zu `--sref`. Beides zusammen gibt maximale Konsistenz.

### Mehrere Profile

Du kannst separate Profile anlegen:
- **Profil 1: Neue Welt Allgemein** — der Grundstil
- **Profil 2: Hafen 31 Dunkel** — fokussiert auf dunkle, industrielle Bilder
- **Profil 3: New World Warm** — fokussiert auf warmes Schiffs-Interior

Jedes Profil hat eine eigene ID: `--p pID`

---

## 4. MOODBOARD (Optional)

Moodboards sind kuratierte Bildsammlungen die wie ein Mini-Modell funktionieren.
Staerker als Personalisierung, spezifischer als Style Creator.

### Neue-Welt-Moodboard erstellen

1. Oeffne **midjourney.com → Personalize → Moodboards**
2. Erstelle ein neues Moodboard: **"Neue Welt Stil"**
3. Fuege Bilder hinzu die den Stil definieren:
   - Cowboy Bebop Screenshots (Spike, Faye, die Bebop)
   - Arcane Screenshots (Piltover Undercity, Vi, Jinx close-ups)
   - Blade Runner 2049 Stills (Industrielles Licht, Neon)
   - Love Death and Robots Frames (handgemachte Qualitaet)
   - Eigene Midjourney-Generierungen die den Stil treffen
4. Das Moodboard bekommt eine eigene ID
5. Nutze es mit `--p [MOODBOARD-ID]`

### Moodboard vs. SREF vs. Personalisierung

| Feature | Was es tut | Praezision | Aufwand |
|---------|-----------|-----------|--------|
| `--sref` | Ein Stil-Code, fixiert | Hoch, aber eng | Gering |
| `--p` (Profil) | Geschmacks-Training | Mittel, breit | 200+ Rankings |
| `--p` (Moodboard) | Kuratierte Referenz-Bilder | Hoch, flexibel | Bilder sammeln |

**Empfehlung fuer Neue Welt:**
Nutze `--sref [CODE]` + `--p` zusammen fuer maximale Konsistenz.

---

## 5. EMPFOHLENER KOMPLETT-WORKFLOW

### Einmalig einrichten (heute)

```
1. Ordnerstruktur anlegen (5 Minuten)
   → 11 Ordner in Gruppe "NEUE WELT"

2. Style Creator durcharbeiten (15-30 Minuten)
   → SREF-Code generieren lassen
   → Code notieren

3. Personalisierungs-Profil starten (20-30 Minuten)
   → Mind. 200 Bildpaare ranken
   → Fokus: industriell, dunkel, semi-realistisch, anime

4. Optional: Moodboard anlegen (15 Minuten)
   → 10-20 Referenzbilder sammeln und hochladen
```

### Dann: Erste Bilder generieren

```
5. Ordner "00-SREF-Exploration" oeffnen
   → 5 SREF-Explore-Prompts aus look-dev.md testen
   → MIT dem neuen SREF-Code (nicht mehr random)
   → Besten Stil validieren

6. Ordner "01-Io-Character" oeffnen
   → IO-01 bis IO-05 aus character-first-images.md
   → MIT SREF-Code + --p

7. Ordner "02-Kid-Character" oeffnen
   → KID-01 bis KID-05 aus character-first-images.md
   → MIT SREF-Code + --p
```

### Prompt-Vorlage mit allen Features

```
[PROMPT-TEXT] --niji 7 --sref [DEIN-SREF-CODE] --ar 16:9 --s 250 --style raw --p --no [NEGATIVE-TAGS]
```

---

## 6. PARAMETER-REFERENZ

| Parameter | Wert | Funktion |
|-----------|------|----------|
| `--niji 7` | - | Anime-Modell |
| `--sref [CODE]` | Style Creator Code | Stil fixieren |
| `--ar 16:9` | Szenenbild | Seitenverhaeltnis |
| `--ar 2:3` | Portrait | Seitenverhaeltnis |
| `--ar 1:1` | Character Sheet | Seitenverhaeltnis |
| `--s 250` | Mittlere Stilisierung | Sweet Spot fuer Neue Welt |
| `--style raw` | Weniger MJ-Eigenstil | Mehr Prompt-Kontrolle |
| `--p` | Personalisierung | Geschmacks-Profil anwenden |
| `--p [pID]` | Spezifisches Profil | Bestimmtes Profil nutzen |
| `--sv 6` | Default SREF-Version | Style Reference Modell |
| `--cref [URL]` | Character Reference | Charakter-Konsistenz (nach Lock) |
| `--cw 80` | Character Weight | Gesicht + Koerper (0-100) |
| `--no [TAGS]` | Negative Tags | Unerwuenschtes ausschliessen |

---

## 7. NACH DEN ERSTEN BILDERN

Sobald du Io und Kid als Bilder hast die dir gefallen:

1. **Upscale** das beste Ergebnis (U1-U4)
2. **Speichere es** als `REF-IO-FACE` bzw. `REF-KID-FACE`
3. **Trage die URL** in `_referenz/stil-codes.md` ein (Ingredient-Image Inventar)
4. **Nutze `--cref [URL]`** in allen folgenden Prompts fuer Charakter-Konsistenz
5. Weiter mit `look-dev.md` (Environments) und dann `keyframes.md` (27 Shots)

---

> **Cross-Referenz:**
> - Character First Images: `01-midjourney/character-first-images.md`
> - Look Dev: `01-midjourney/look-dev.md`
> - Keyframes: `01-midjourney/keyframes.md`
> - Stil-Codes: `_referenz/stil-codes.md`
> - Konsistenz-Checkliste: `_referenz/konsistenz-checkliste.md`

> **Quellen:**
> - [Midjourney Folders](https://docs.midjourney.com/hc/en-us/articles/34580542725645-Using-Folders)
> - [Midjourney Style Creator](https://docs.midjourney.com/hc/en-us/articles/41308374558221-Style-Creator)
> - [Midjourney Personalization](https://docs.midjourney.com/hc/en-us/articles/32433330574221-Personalization)
> - [Midjourney Moodboards](https://docs.midjourney.com/hc/en-us/articles/39193335040013-Moodboards)
> - [Midjourney Style Reference](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference)
> - [Style Creator Guide 2026](https://www.geeky-gadgets.com/midjourney-style-creator-guide-2026/)
> - [Midjourney Organization Tools](https://updates.midjourney.com/new-tools-for-organization/)
