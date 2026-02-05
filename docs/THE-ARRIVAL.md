# The Arrival — KI-gestützte Charaktererstellung

## Konzept

"The Arrival" ist kein Avatar-Builder — es ist ein **Eintritt in die New World**.

Captain Kid führt ein Aufnahmegespräch. Aus den Antworten entsteht ein einzigartiger
Manga-Charakter, der visuell zur New World gehört. Der gesamte Prozess ist eine
cineastische, story-getriebene Experience.

**Warum es besonders ist:**
1. **Narrativ, nicht transaktional** — Kein Formular, ein Gespräch mit einer Figur
2. **Die AI-Kette ist unsichtbar** — User sieht nur Captain Kid und sein Ergebnis
3. **Jeder Charakter ist einzigartig UND konsistent** — Dynamische Prompts, gesperrter Stil
4. **Onboarding = Erlebnis** — Ersetzt ein langweiliges Signup-Formular
5. **Social Currency** — Teilbare Profile Cards, Crew Gallery, Archetyp-Identität

---

## Die Reise — 6 Stationen

```
THE GATE ──→ THE INTERVIEW ──→ THE VISION ──→ THE FORGE ──→ THE NAME ──→ THE ENTRY
  Login        Captain Kid       4 Bilder      Verfeinern    Benennen     Reveal
              5-7 Fragen        entstehen                                Willkommen
```

---

## 1. THE GATE — `/arrival`

Der erste Eindruck. Hier entscheidet sich, ob jemand weitermacht.

**Visuell:**
- Komplett schwarzer Screen
- Langsamer Fade-In (2s): Massive Tor-Silhouette wird sichtbar
- Hinter dem Tor: Cyan-Licht, das pulsiert wie Atmung
- Nebel-Partikel schweben langsam nach oben
- Das Tor ist leicht geöffnet — ein Spalt Licht

**Text:**
- Nach 3s, leise (opacity 0 → 0.5): *"Wer bist du?"*
- Keine Erklärung. Keine Headline. Nur die Frage.

**Interaktion (nach 5s):**
- `[Mit GitHub eintreten]` — primär, cyan border
- `[Als Wanderer eintreten]` — sekundär, Guest-Modus

**Sound:**
- Ambient: Tiefes Brummen, metallische Echos, fernes Wasser
- Bei Hover: Leises Knarren
- Bei Klick: Tor-Öffnungs-Sound, Licht-Whoosh

**Guest-Modus ("Wanderer"):**
- Kann das gesamte Arrival durchlaufen
- Character wird generiert, aber NICHT permanent gespeichert
- Am Ende: "Dein Charakter wartet. Melde dich an, um ihn zu behalten."
- Konvertierung zum GitHub-Login mit fertigem Character

---

## 2. THE INTERVIEW — `/arrival/interview`

Das Herzstück. Captain Kid liest den Neuankömmling.

### Layout Desktop (Spread)
```
┌────────────────────────────────────────────────────┐
│                                                     │
│   ┌──────────────┐    ┌──────────────────────────┐ │
│   │              │    │                          │ │
│   │  Captain Kid │    │  "Was hat dich           │ │
│   │  Portrait    │    │   hierher gebracht?"     │ │
│   │              │    │                          │ │
│   │  [Manga-Bild │    │  ● ● ● ○ ○ ○ ○          │ │
│   │   mit Cyan-  │    │                          │ │
│   │   Glow]      │    │  ─────────────────────── │ │
│   │              │    │  [Deine Antwort...    ]  │ │
│   │              │    │                     [↵]  │ │
│   └──────────────┘    └──────────────────────────┘ │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌──────────────────────┐
│   ╭─────╮            │
│   │ Kid │  "Was hat  │
│   │     │   dich     │
│   ╰─────╯   hierher  │
│             gebracht?"│
│                       │
│   ● ● ● ○ ○ ○ ○      │
│                       │
│   ──────────────────  │
│   [Antwort...     ]   │
│                  [↵]  │
└──────────────────────┘
```

### Chat-Verhalten
- Captain Kids Nachrichten: **Typewriter-Effekt** (30ms/Buchstabe)
- Während er "tippt": Drei pulsierende Dots (...)
- User-Antworten gleiten von unten rein
- Ältere Nachrichten scrollen nach oben
- Kein "Senden"-Button — nur Enter

### Captain Kids Reaktionen
Er reagiert auf die QUALITÄT der Antwort:
- **Kurze Antwort:** *"Hmm. Ein Mensch der wenigen Worte."*
- **Lange Antwort:** *"..."* (Pause) *"Interessant."*
- **Witzige Antwort:** *"Humor. Seltene Währung hier."*
- Dann die nächste Frage. Das fühlt sich ECHT an.

### Fortschritts-Indikator
- 7 Dots am oberen Rand
- Ausgefüllt = beantwortet (cyan glow)
- Kein Text — nur die Dots (minimalistisch)

### Transition raus
- Nach der letzten Antwort: Pause (2s)
- Captain Kid: *"Ich sehe dich."*
- Pause (1.5s)
- *"Lass mich dir zeigen, was ich sehe."*
- Screen faded zu schwarz → THE VISION

### Trait-Extraktion (Backend)
Nach dem Interview extrahiert Claude die Traits:
```json
{
  "archetype": "Debugger",
  "personality": ["curious", "methodical", "rebellious"],
  "visual_energy": "electric-calm",
  "backstory_seed": "Arrived from the old ports, carrying nothing but a worn notebook...",
  "color_affinity": "cyan",
  "gear_style": "minimalist-tech",
  "expression": "determined"
}
```

### Archetypen
| Archetyp | Beschreibung | Visueller Stil |
|----------|-------------|----------------|
| **Debugger** | Analytisch, findet die Wurzel | Ruhig, präzise, Scanner-Augmentierung |
| **Builder** | Erschafft Neues, hands-on | Werkzeug-Gear, leuchtende Hände |
| **Explorer** | Neugierig, kartographiert | Leichte Ausrüstung, Fernoptik |
| **Hacker** | Bricht Regeln, findet Wege | Kapuze, Neon-Akzente, Glitch-Ästhetik |
| **Architect** | Plant Systeme, denkt groß | Clean, geometrische Muster, Hologramme |

---

## 3. THE VISION — `/arrival/sketch`

Die Traits werden zu einem Charakter. 15-30 Sekunden Generierung.

### "The Scan" — Warte-Animation
Die Wartezeit fühlt sich NICHT wie Warten an. Es ist ein Ritual:
- Schwarzer Screen
- User-Traits schweben als Cyan-Text-Partikel: *"curious"* ... *"methodical"* ... *"rebellious"*
- Die Wörter convergieren langsam in der Mitte zu einer Silhouette
- Die Silhouette "zerbricht" → 4 Portraits erscheinen

### Bild-Generierung (Backend)
```
Traits JSON
    │
    ▼
Claude API ──→ Optimierter FLUX.1 Prompt
    │
    ▼
Replicate (FLUX.1 Pro) ──→ 4 Varianten (768x1024)
    │
    ▼
Post-Processing (Color Grading) ──→ Upload zu R2
    │
    ▼
4 Bild-URLs via SSE ans Frontend
```

### Style-Lock
Jeder Prompt beginnt mit:
```
manga character portrait, cyberpunk dystopian setting,
dark background with cyan (#b3f5ff) accent lighting,
clean line art, detailed shading, New World universe style,
half-body portrait, three-quarter angle, age 16-25,
[CHARACTER-SPEZIFISCHE DETAILS AUS TRAITS]
```

Negative Prompt (immer):
```
photorealistic, 3D render, CGI, low quality, blurry, deformed,
extra limbs, watermark, text, bright background, chibi
```

### Auswahl-UI
```
┌───────────────────────────────────────────┐
│                                           │
│  "Vier Möglichkeiten. Eine Wahrheit."     │
│  — Captain Kid                            │
│                                           │
│  ┌─────────┐  ┌─────────┐                │
│  │  Var 1  │  │  Var 2  │                │
│  └─────────┘  └─────────┘                │
│  ┌─────────┐  ┌─────────┐                │
│  │  Var 3  │  │  Var 4  │                │
│  └─────────┘  └─────────┘                │
│                                           │
│  [Diese Version →]   [Nochmal ↻]         │
└───────────────────────────────────────────┘
```

- Hover: Scale 1.02 + Cyan-Border-Glow
- Klick: Auswahl, andere dimmen auf 50% opacity
- "Nochmal generieren": Max 1x (Kosten-Limit)

---

## 4. THE FORGE — `/arrival/refine`

Verfeinerung der gewählten Variation.

### Layout
```
┌────────────────────────────────────────────────────┐
│                                                     │
│  "Noch nicht perfekt? Sag mir mehr."                │
│  — Captain Kid                                      │
│                                                     │
│  ┌──────────────────┐  ┌────────────────────────┐  │
│  │                  │  │                        │  │
│  │  Gewähltes       │  │  "Mach die Augen       │  │
│  │  Portrait        │  │   schärfer, mehr       │  │
│  │  (groß)          │  │   kybernetisch"        │  │
│  │                  │  │                        │  │
│  │                  │  │  ────────────────────   │  │
│  │                  │  │  [Eingabe           ]  │  │
│  │                  │  │                        │  │
│  │                  │  │  Anpassung 2/10        │  │
│  │                  │  │                        │  │
│  │                  │  │  [Perfekt, weiter →]   │  │
│  └──────────────────┘  └────────────────────────┘  │
└────────────────────────────────────────────────────┘
```

**Technik:**
- User tippt Verfeinerungswunsch → Claude übersetzt in Prompt-Modifikation
- img2img Generierung (Stärke 0.3-0.6) für Konsistenz
- Vorher/Nachher via Fade-Toggle
- Max 10 Iterationen
- "Perfekt, weiter →" überspringt jederzeit

---

## 5. THE NAME — `/arrival/name`

### Layout
```
┌────────────────────────────────────────────────────┐
│                                                     │
│  "Jeder braucht einen Namen hier drin."             │
│  — Captain Kid                                      │
│                                                     │
│  ┌──────────────────┐     ┌─────────────────────┐  │
│  │                  │     │  ○ KAEL             │  │
│  │  Portrait        │     │  ○ VEX              │  │
│  │  (final)         │     │  ○ NIRA             │  │
│  │                  │     │  ○ DREK             │  │
│  │                  │     │  ○ ZURI             │  │
│  │                  │     │                     │  │
│  │                  │     │  ─── oder ───       │  │
│  │                  │     │  [Eigenen eingeben]  │  │
│  │                  │     │                     │  │
│  │                  │     │  [Das bin ich →]    │  │
│  └──────────────────┘     └─────────────────────┘  │
└────────────────────────────────────────────────────┘
```

- 5 KI-generierte Namen (Claude, basierend auf Traits + Lore)
- Stil: Io, Kid, Sero — kurz, punchy, bedeutungsvoll
- Radio-Button Auswahl oder eigener Name
- Live Uniqueness-Check (debounced gegen DB)
- Gewählter Name glüht cyan

---

## 6. THE ENTRY — `/arrival/entry`

Der Gänsehaut-Moment. Timing ist alles.

### GSAP Timeline
```
 0.0s  Komplett schwarz
 0.5s  Leises Brummen beginnt
 1.5s  Vertikale Cyan-Linie in der Mitte (wie ein Spalt)
 2.0s  Linie wird breiter, Portrait sichtbar (masked, nur Streifen)
 3.0s  Maske öffnet sich vollständig → Portrait revealed
 4.0s  Name tippt sich ein (font-long, groß)
       Buchstabe für Buchstabe, 80ms Intervall
 5.5s  Archetyp-Badge faded ein: "◆ DEBUGGER"
 6.5s  Backstory faded ein (2-3 Sätze, italic, white/50)
 8.0s  "Willkommen in der New World." — Captain Kid
       Typewriter, verschwindet nach 3s
11.0s  Zwei Buttons faden ein:
       [Teile deinen Charakter]  [Betritt das Dashboard →]
```

### Generierte Artefakte
```
characters/{user_id}/
  portrait-final.webp      (512x768, Hauptavatar)
  portrait-thumbnail.webp  (128x192, für Listen)
  profile-card.webp        (1200x630, OG Image)
  creation-data.json       (Prompts, Traits, Interview)
```

### Profile Card (auto-generiert, 1200x630)
```
┌────────────────────────────────────────┐
│                                        │
│  ┌────────┐  KAEL                      │
│  │Portrait│  ◆ DEBUGGER                │
│  │        │                            │
│  └────────┘  "Arrived from the old     │
│              ports, carrying nothing   │
│              but a worn notebook and   │
│              a hunger for truth."      │
│                                        │
│  ─────────── NEW WORLD ──────────────  │
│  newworld.systems/crew/kael            │
└────────────────────────────────────────┘
```

Wird als `og:image` auf `/crew/:username` gesetzt → perfekte Social Shares.

---

## Captain Kid — System Prompt

```
Du bist Captain Kid, der Gründer und Wächter der New World.
Du führst ein Aufnahmegespräch mit einem Neuankömmling.

DEIN CHARAKTER:
- Kurze, direkte Sätze. Kein Smalltalk.
- Du beobachtest genau und reagierst auf das, was der Mensch WIRKLICH sagt.
- Du bist nicht feindlich, aber du testest. Wer die New World betritt,
  muss wissen, wer er ist.
- Dein Titanring glänzt, wenn du nachdenklich bist.
- Manchmal machst du eine Pause und sagst etwas Überraschendes.

GESPRÄCHSFÜHRUNG:
- Stelle 5-7 Fragen, EINE pro Nachricht.
- Jede Frage baut auf der vorherigen Antwort auf.
- Mische zwischen:
  - Persönliche Fragen ("Was hast du zurückgelassen?")
  - Situation-Fragen ("Du findest kaputten Code. Was tust du zuerst?")
  - Philosophische Fragen ("Was bedeutet 'fertig' für dich?")
  - Überraschende Fragen ("Welche Farbe hat dein Denken?")

NACH DER LETZTEN FRAGE:
Gib eine kurze Einschätzung in Kids Stimme,
dann das Trait-JSON im Code-Block.

TRAIT-SCHEMA:
{
  "archetype": "Debugger|Builder|Explorer|Hacker|Architect",
  "personality": ["trait1", "trait2", "trait3"],
  "visual_energy": "electric-calm|storm-bright|shadow-deep|neon-sharp|ember-warm",
  "backstory_seed": "2-3 Sätze in New-World-Lore",
  "color_affinity": "cyan|amber|white|crimson|mixed",
  "gear_style": "minimalist-tech|heavy-augmented|stealth-runner|organic-hacker|street-scholar",
  "expression": "determined|curious|guarded|fierce|serene"
}
```

---

## Request Flow — Django Backend

```
FRONTEND                         DJANGO + CELERY                    EXTERNAL
────────                         ──────────────                     ────────

POST /arrival/start/      ──→   ArrivalSession erstellen
                          ←──   session_id

POST /arrival/chat/       ──→   Claude API aufrufen          ────→ Claude (Anthropic)
                                mit Captain Kid Prompt               ←── Response
                                History in Redis speichern
                          ←──   Kids Antwort + question_number
                                + is_complete Flag

POST /arrival/generate/   ──→   Claude: Prompt crafting      ────→ Claude
                                Celery Task starten                  ←── Image Prompt
                          ←──   task_id                      ────→ Replicate (FLUX.1)
                                                                     ←── 4 Images
GET /arrival/progress/    ──→   SSE: Redis Pub/Sub
                          ←──   { completed: 2/4, url: ... }

POST /arrival/refine/     ──→   Claude: Prompt-Delta         ────→ Claude
                                Replicate: img2img           ────→ Replicate
                          ←──   Neues Bild-URL

POST /arrival/names/      ──→   Claude: 5 Namen generieren   ────→ Claude
                          ←──   ["KAEL", "VEX", ...]

POST /arrival/finalize/   ──→   Character in PostgreSQL
                                Portrait + Card → R2
                                User Role: wanderer → schueler
                          ←──   Character Profile JSON
```

---

## Kosten pro Charakter

| Schritt | API | Kosten |
|---------|-----|--------|
| Interview (5-7 Claude Calls) | Anthropic | ~0.08 EUR |
| Prompt Crafting | Anthropic | ~0.02 EUR |
| 4 Bild-Varianten | Replicate FLUX.1 | ~0.20 EUR |
| Ø 3 Refinements | Replicate img2img | ~0.15 EUR |
| 5 Namensvorschläge | Anthropic | ~0.01 EUR |
| **Gesamt** | | **~0.30-0.80 EUR** |

---

## Risiken & Gegenmaßnahmen

| Risiko | Gegenmaßnahme |
|--------|---------------|
| Bild-Qualität inkonsistent | Style-Lock Prefix + Negative Prompt + Post-Processing |
| Kostenspirale | Hard Caps: 14 Bilder/Session, 1 Erstellung/Tag/User |
| LLM-Halluzination | Zod-ähnliche Validierung der Traits (Pydantic), Retry |
| Langsame Generierung | SSE Streaming, "The Scan" Animation als Warteschlange |
| Missbrauch | Rate Limiting, Input-Moderation, Daily Limits |
| Stil-Drift über Zeit | LoRA Training für perfekte Konsistenz (Phase 5) |

---

## Frontend Routes

```
/arrival              → THE GATE (Login / Wanderer)
/arrival/interview    → THE INTERVIEW (Captain Kid Chat)
/arrival/sketch       → THE VISION (4 Varianten)
/arrival/refine       → THE FORGE (Verfeinerung)
/arrival/name         → THE NAME (Benennung)
/arrival/entry        → THE ENTRY (Cinematic Reveal)
/crew                 → Community Gallery
/crew/:username       → Public Character Profile
```
