# Pilot-Szene V2 — Produktions-Uebersicht

## Was ist das?

Die komplette Produktions-Pipeline fuer die Pilotszene "Licht am Arm 7" der Neuen Welt. 27 Shots, 6 Beats, ~3 Minuten. Jeder Shot hat copy-paste-fertige Prompts fuer jedes Tool der Kette.

**Version:** 2.0 (Komplett-Ueberarbeitung mit allen Writing-Master-Skills)
**Basis:** `story/akte/pilot-szene.md` (V1, 21 Shots → V2, 27 Shots)

---

## Produktions-Reihenfolge

```
SCHRITT 1: Lies drehbuch.md
           → Verstehe die Szene, die Beats, die Emotionen
           → 27 Shots, 6 Beats, emotionaler Arc

SCHRITT 2: Lies _referenz/
           → Lerne die Charakter-DNA-Blocks (Io, Kid)
           → Verstehe die Stil-Codes und Konsistenz-Checklisten
           → Diese Dateien sind die Single Source of Truth

SCHRITT 3: Arbeite 01-midjourney/ ab
           → ZUERST look-dev.md (Stil finden, Charakter-Sheets, Environments)
           → DANN keyframes.md (alle 27 Shot-Standbilder)
           → KEIN Video ohne fertige Keyframes!

SCHRITT 4: Arbeite 02-veo/ ab
           → Video-Clips fuer alle 27 Shots
           → Keyframes aus Schritt 3 als Input
           → 4-Sekunden-Regel beachten

SCHRITT 5: Arbeite 03-elevenlabs/ ab
           → voice-prompts.md (Kids Dialog)
           → sfx-prompts.md (Ambient-Loops + Foley)
           → Reversed Audio Workflow: Dialog NACH Video finalisieren

SCHRITT 6: Arbeite 04-suno/ ab
           → Score Block A (Spannung, Beat 1-3)
           → Score Block B (Hoffnung, Beat 4-6)
           → Optional Block C (Nova-Code-Motiv)

SCHRITT 7: Arbeite 05-resolve/ ab
           → Assembly in DaVinci Resolve
           → Folge dem Shot-fuer-Shot-Guide
           → Color Grade pro Beat
           → Final Export: 24fps, sRGB, 1920x1080
```

---

## Ordnerstruktur

```
pilot/
│
├── README.md                          ← DU BIST HIER
├── drehbuch.md                        ← Kreatives Drehbuch V2 (27 Shots, 6 Beats)
│
├── _referenz/                         ← Single Source of Truth
│   ├── charakter-blocks.md            ← Io + Kid DNA-Injections (EN)
│   ├── stil-codes.md                  ← SREF-Code, Stil-Anker, Negativ-Tags
│   └── konsistenz-checkliste.md       ← Checklisten fuer Io, Kid, Hafen, NW
│
├── 01-midjourney/                     ← TOOL 1: Bildgenerierung
│   ├── look-dev.md                    ← SREF-Suche, Charakter-Sheets, Environments
│   └── keyframes.md                   ← ALLE 27 Shot-Keyframe-Prompts
│
├── 02-veo/                            ← TOOL 2: Videogenerierung
│   └── video-prompts.md               ← ALLE Veo 3.1 + Flow Prompts
│
├── 03-elevenlabs/                     ← TOOL 3: Voice + Sound Effects
│   ├── voice-prompts.md               ← Dialog-Prompts (Kid, Syndikat)
│   └── sfx-prompts.md                 ← Ambient-Loops + Foley-Elemente
│
├── 04-suno/                           ← TOOL 4: Musik
│   └── score-prompts.md               ← Score-Bloecke (Spannung + Hoffnung)
│
└── 05-resolve/                        ← TOOL 5: Assembly
    └── assembly-guide.md              ← Timeline, Color Grade, Audio-Mix, Export
```

**15 Dateien. Pro Tool ein Ordner. Nummeriert in Produktions-Reihenfolge.**

---

## Tool-Stack

| Phase | Tool | Kosten/Monat | Status |
|-------|------|-------------|--------|
| Script + Prompts | Claude Max | (vorhanden) | Bezahlt |
| Keyframes | Midjourney Niji 7 | $30 | Empfohlen |
| Video | Google Veo 3.1 + Flow | $250 (AI Ultra) | Bezahlt |
| Voice + SFX | ElevenLabs Creator | $22 | Empfohlen |
| Score | Suno Pro v4.5 | $10 | Empfohlen |
| Assembly | DaVinci Resolve | $0 (Free) | Kostenlos |
| **Total** | | **~$312/Monat** | |

---

## Szenen-Uebersicht (27 Shots)

### Beat 1: Stille vor dem Sturm [0:00 - 0:30]
| Shot | Name | Typ | Dauer |
|------|------|-----|-------|
| 01 | Flash-Forward-Fragment | ECU Hand auf Metall | 3s |
| 02 | Schlafkapsel F-14 | ECU → Pull-Back | 5s |
| 03 | Ios Gesicht | CU Portrait | 4s |
| 04 | Kapsel oeffnet sich | MS von aussen | 3s |
| 05 | Korridor Hafen 31 | WS Io von hinten | 4s |
| 06 | Aussichtsplattform | WS Silhouette (Ma) | 10s |

### Beat 2: Die Jagd beginnt [0:30 - 1:00]
| Shot | Name | Typ | Dauer |
|------|------|-----|-------|
| 07 | Stimmen im Korridor | OS/POV | 3s |
| 08 | Ios Reaktion | ECU Augen | 2s |
| 09 | Io rennt | MS Tracking | 3s |

### Beat 3: Die Flucht [1:00 - 1:50]
| Shot | Name | Typ | Dauer |
|------|------|-----|-------|
| 10 | Gassen-Sequenz | Schnittfolge (4x3s) | 12s |
| 10a | Cross-Cut: NW am Dock | WS Schiff | 3s |
| 11 | Aus dem Schacht | MS von unten | 3s |
| 12 | Docks Panorama | WS Schwenk | 5s |
| 12a | Cross-Cut: Rampe oeffnet | MS Rampe | 3s |
| 13 | Syndikat auf Docks | MS Io + Bokeh | 4s |
| 14 | Ios Blick wandert | CU → Schwenk | 7s |

### Beat 4: Das Licht [1:50 - 2:20]
| Shot | Name | Typ | Dauer |
|------|------|-----|-------|
| 14a | Ma-Moment vor Rampe | FB Io allein | 4s |
| 15 | New World Hero Shot | WS Push-In | 8s |
| 16 | Ios Gesicht im Licht | CU Verwandlung | 6s |
| 17 | Hand an Rampenwand | ECU Detail | 4s |

### Beat 5: Die Entscheidung [2:20 - 2:50]
| Shot | Name | Typ | Dauer |
|------|------|-----|-------|
| 18 | Blick zurueck | OS Panorama | 6s |
| 19 | Kugelschreiber | ECU Symbol | 4s |
| 20 | Io geht ins Licht | FB von hinten | 5s |

### Beat 6: Die Schwelle [2:50 - 3:10]
| Shot | Name | Typ | Dauer |
|------|------|-----|-------|
| 21 | Innen New World | POV Steadycam | 5s |
| 22 | Coding-Visual | Insert Detail | 3s |
| 23 | Stille vor Dialog | MS Io + Kid | 3s |
| 24 | Kids Augen | ECU Erkennung | 3s |
| 25 | Ios Reaktion | CU Gesicht | 3s |
| 26 | Kid dreht sich um | FB von hinten | 3s |
| 27 | Titel-Card | Schwarzblende | 7s |

---

## Cross-Referenz-System

Jeder Shot hat Prompts in JEDEM Tool-Ordner. Beispiel Shot 15:

```
Shot 15 — New World Hero Shot
├── drehbuch.md           → Beat 4, kreative Beschreibung
├── 01-midjourney/keyframes.md → Niji 7 Prompt (Standbild)
├── 02-veo/video-prompts.md    → Veo 3.1 Prompt (Video, HERO, 4K)
├── 03-elevenlabs/sfx-prompts.md → Ambient (NW-Summen) + Foley (Atem)
├── 04-suno/score-prompts.md   → Score Block B (Hoffnung beginnt)
└── 05-resolve/assembly-guide.md → Timeline 1:50, Color Grade Beat 4
```

**Bidirektionale Verlinkung:**
- Jeder Prompt-Block beginnt mit: `Quelle: drehbuch.md → Beat X → Shot XX`
- Das Drehbuch vermerkt bei jedem Shot: `Prompts: 01-midjourney, 02-veo, etc.`

---

## V2 Verbesserungen gegenueber V1

| Aspekt | V1 | V2 |
|--------|----|----|
| Shots | 21 | 27 (+6 neue) |
| Hook | Linear (Kapsel) | In-Medias-Res Flash-Forward |
| Cross-Cutting | Keins | 2 Parallel-Montagen (Kuleshov) |
| Dialog | Sauber | King-dreckig ("klingt wie Mitternacht") |
| Ma-Momente | 1 (Shot 05) | 3 (Shot 06, 14a, 23) |
| Foreshadowing | Minimal | Stift vibriert, Schrift am Bug, Taetowierung |
| Coding-Visual | Keins | Shot 22 + Shot 26 Detail (~20 Sek) |
| Konsistenz | Informal | Tolkien-geprueft (Physik, Sprache, Raum) |
| Lektor-Audit | Keins | Balance, Pacing, Kill-Your-Darlings, Shonen-Test |

---

## Wichtige Regeln

### Deadlink-Prinzipien
1. **Look Dev VOR Produktion** — Kein Shot-Prompt ohne fertige Referenzbilder
2. **4-Sekunden-Regel** — Video-Clips max 4s, dann Extension oder Schnitt
3. **Minimale Prompt-Komplexitaet** — Einfache Video-Befehle = stabilste Ergebnisse
4. **Molding** — Vision an beste KI-Ergebnisse anpassen, nicht erzwingen
5. **Reversed Audio** — Dialog NACH visueller Generierung finalisieren
6. **Konsistenz vor Komplexitaet** — Stilreinheit > technische Brillanz

### Stil-Formel
**40% Realismus + 30% Anime + 30% Industrial Sci-Fi**
Cowboy Bebop trifft One Piece trifft Love Death and Robots im industriellen Weltraum.

### Verbotene Elemente
- Kein Sonnenlicht (nur kuenstliches Licht)
- Keine Hologramme (Screens eingelassen, nicht schwebend)
- Keine Fantasy/Magie (Technologie sieht technologisch aus)
- Keine sauberen Texturen (alles getragen, repariert)
- Keine Fotorealismus/CGI (semi-realistischer Anime)

---

## Verifikations-Checkliste

### Drehbuch
- [ ] Starkerer Hook als V1 (Flash-Forward)
- [ ] Cross-Cutting vorhanden (2 Parallel-Montagen)
- [ ] Dialog authentisch (King-Niveau)
- [ ] Mind. 2 Ma-Momente (3 vorhanden)
- [ ] Foreshadowing-Seeds gepflanzt (Stift, Schrift, Taetowierung)
- [ ] Coding-Visual organisch, kein Unterricht (~5%)
- [ ] Interne Konsistenz (Tolkien-geprueft)
- [ ] Lektor-Audit bestanden

### Prompt-Pipeline
- [ ] Jeder Shot hat Prompts in JEDEM Tool-Ordner
- [ ] Alle Prompts copy-paste-ready (EN, korrekte Parameter)
- [ ] Look Dev VOR Keyframes in 01-midjourney
- [ ] 4-Sekunden-Regel in 02-veo eingehalten
- [ ] Reversed Audio Workflow in 03-elevenlabs beachtet
- [ ] DNA korrekt in jedem relevanten Prompt

---

## Quell-Dateien

| Datei | Rolle |
|-------|-------|
| `story/akte/pilot-szene.md` | V1 Basis (21 Shots) |
| `story/characters/hauptcharaktere/io/aussehen.md` | Charakter-DNA Io |
| `story/characters/hauptcharaktere/kid/herkunft.md` | Kids Hintergrund |
| `~/.claude/skills/visual-style-neue-welt/SKILL.md` | Visuelles Regelwerk |
| `~/.claude/skills/prompt-pipeline-neue-welt/SKILL.md` | Pipeline-Regeln |
| `~/.claude/skills/code-didaktik-neue-welt/SKILL.md` | Coding-Visual-Regeln |

---

## Skalierung

Fuer Episode 1 wird dieselbe Struktur verwendet:
```
story/produktion/episode-01/
├── README.md
├── drehbuch.md
├── _referenz/
├── 01-midjourney/
├── 02-veo/
├── 03-elevenlabs/
├── 04-suno/
└── 05-resolve/
```

Die `_referenz/`-Dateien koennen zwischen Episoden geteilt oder erweitert werden (neue Charaktere, neue Orte).

---

*Diese Produktions-Pipeline wurde mit allen Writing-Master-Skills ueberarbeitet und durch die Prompt-Pipeline in ~130-150 copy-paste-fertige Prompts uebersetzt. Jeder Shot ist ein diskreter Task. Jeder Task ist AI-ausfuehrbar. Die Pipeline beginnt hier.*
