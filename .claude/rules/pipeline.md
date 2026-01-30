# Neue-Welt-Produktionspipeline — Human-in-the-Loop

Diese Rule definiert die 8-Phasen-Pipeline mit expliziter User-Steuerung nach jeder Phase.

**Kernprinzip:** Nichts geht weiter ohne User-Freigabe. Jede Phase wird praesentiert, geprueft, und erst nach explizitem "Weiter" fortgesetzt.

---

## Trigger

Wenn der User eine Folge produzieren will, erkennbar an:
- "Erstelle Folge [X]"
- "Produziere Episode [X]"
- "Folge [X] schreiben"
- "Naechste Folge"
- Oder explizit: `/orchestrate`

---

## Input-Spezifikation

Bevor die Pipeline startet, braucht der Orchestrator diese Informationen:

```
PFLICHT:
- Folgen-Nummer
- Arc (Nummer + Titel)
- Haupt-Konzept (das Code-Konzept dieser Folge)

OPTIONAL (wird aus Kontext/Knowledge-Graph ergaenzt):
- Staffel
- Folgen-Typ (Einfuehrung / Praxis / Debug / Boss / Uebergang)
- Charakter-Status (wo steht der Protagonist)
- Vorwissen (was kann er schon)
- Besondere Anforderungen
```

Falls Pflichtfelder fehlen: NACHFRAGEN bevor die Pipeline startet.

---

## Human-in-the-Loop-Protokoll

### Status-Anzeige nach JEDER Phase

Nach jedem Agenten-Output zeige dem User diesen Status-Block:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PIPELINE STATUS — Folge [X]: [Konzept]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  [✓] Phase 1+2  Analyse        ← abgeschlossen
  [→] Phase 3+4  Skript         ← AKTUELL
  [ ] Phase 5+6  Visuals
  [ ] Phase 7    Lektorat
  [ ] Phase 8    Produktion

  Datei gespeichert: output/folge-XXX/01-analyse.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Entscheidungspunkt nach JEDER Phase

Nach dem Status-Block IMMER dem User diese Optionen anbieten (via AskUserQuestion):

```
Wie moechtest du weitermachen?

1. Weiter          → Naechste Phase starten
2. Anpassen        → Aenderungswuensche an dieser Phase
3. Details zeigen  → Bestimmten Abschnitt genauer anschauen
4. Stopp           → Pipeline hier pausieren (Zwischenergebnis gespeichert)
```

**WICHTIG:** NIEMALS automatisch zur naechsten Phase. IMMER auf User-Entscheidung warten.

---

## Pipeline-Ablauf

```
Phase 1+2 ──→ Phase 3+4 ──→ Phase 5+6 ──→ Phase 7 ──→ Phase 8
ANALYST       WRITER         VISUAL        LEKTOR      PRODUCER
    │              │              │             │            │
    ▼              ▼              ▼             ▼            ▼
 ZEIGEN         ZEIGEN         ZEIGEN       ZEIGEN       ZEIGEN
 FRAGEN         FRAGEN         FRAGEN       FRAGEN       FRAGEN
 WARTEN         WARTEN         WARTEN       WARTEN       WARTEN
```

### Phase 1+2: Analyse

```
Spawne Agent: neue-welt-analyst
Input: Folgen-Briefing + optionale Knowledge-Graph-Daten
Output: Analyse-Dokument
Speichern: output/folge-XXX/01-analyse.md
```

**Praesentiere dem User:**
- Zusammenfassung der Analyse (Bloom, Dreyfus, Kishotenketsu, Skill-Routing)
- Hinweis auf offene Fragen falls vorhanden
- Status-Block + Entscheidungspunkt

**Quality Check (intern, vor der Praesentation):**
- Alle Felder ausgefuellt?
- Bloom/Dreyfus plausibel?
- Skill-Routing vorhanden?
- Bei Luecken: Ergaenze oder frage den User BEVOR der Output gezeigt wird.

### Phase 3+4: Skript

```
Spawne Agent: neue-welt-writer
Input: Folgen-Briefing + Analyse-Dokument (freigegeben)
Output: Folgen-Skript (Skelett + Narrative Anreicherung)
Speichern: output/folge-XXX/02-skript.md
```

**Praesentiere dem User:**
- Kurzuebersicht: Seiten, Meta/Code-Verhaeltnis, Phasen-Aufbau
- Zusammenfassung jeder Kishotenketsu-Phase (2-3 Saetze)
- Hinweis auf eingesetzte Writing Masters
- Status-Block + Entscheidungspunkt

### Phase 5+6: Visuals

```
Spawne Agent: neue-welt-visual
Input: Analyse-Dokument + Skript (beide freigegeben)
Output: Visual Briefing (Infografiken + Key Panels + Seiten-Flow)
Speichern: output/folge-XXX/03-visuals.md
```

**Praesentiere dem User:**
- Anzahl Infografiken mit Typ-Uebersicht
- Key Panel Highlights (3-4 wichtigste Panels kurz beschreiben)
- Farbdramaturgie-Ueberblick
- Status-Block + Entscheidungspunkt

**Konsistenz-Check nach Praesentation:**
Wenn User "Weiter" sagt, pruefe intern:
- Passen Infografik-Positionen zum Skript-Flow?
- Stimmen Key Panels mit den emotionalen Beats ueberein?
- Bei Inkonsistenz: User informieren und Korrektur-Vorschlag machen.

### Phase 7: Lektorat

```
Spawne Agent: neue-welt-lektor
Input: Analyse + Skript + Visual Briefing + Original-Briefing
Output: Lektorats-Urteil
Speichern: output/folge-XXX/04-lektorat.md
```

**Praesentiere dem User:**
- Urteil gross und klar: **PASS** / **REVISE** / **REJECT**
- Balance-Audit (Story/Didaktik/Visuell Prozente)
- Top 3 Staerken
- Top 3 Probleme (falls vorhanden)
- Status-Block + Entscheidungspunkt

**Bei REVISE:**
- Zeige die Revisions-Anweisungen des Lektors
- Frage: "Soll ich die Revision durchfuehren? (Betrifft Phase [X])"
- Nach Revision: Erneut zum Lektor (max 2 Revisions-Schleifen)
- Nach 2. Schleife ohne PASS: User entscheidet

**Bei REJECT:**
- Erklaere das Grundproblem
- Zeige Neustart-Optionen (welche Phase)
- User entscheidet komplett

### Phase 8: Produktion

```
Spawne Agent: neue-welt-producer
Input: Skript + Visual Briefing (vom Lektor freigegeben)
Output: Prompt-Paket (aufgeteilt nach Tools UND nach Shots)
Speichern: output/folge-XXX/05-produktion/ (Verzeichnis mit Einzeldateien)
```

**BESONDERHEIT Phase 8 — Schritt-fuer-Schritt-Workflow:**

Phase 8 wird NICHT als ein Block praesentiert. Stattdessen:

**Schritt 8a: Uebersicht**
- Zeige Shot-Liste (Nummer, Seite, Phase, Beschreibung)
- Zeige Produktions-Reihenfolge
- Zeige Kosten-Schaetzung
- Frage: "Bereit fuer die Prompts? Welches Tool zuerst?"

**Schritt 8b: Tool-fuer-Tool Lieferung**

Der User waehlt die Reihenfolge. Empfohlen:

```
1. Midjourney Niji 7    → Look Dev Assets + alle Shot-Bilder
2. Google Veo 3.1       → Animierte Shots
3. ElevenLabs v3        → Dialog-Aufnahmen
4. Suno v4.5            → Sound + Musik
5. DaVinci Resolve      → Assembly-Notizen
```

Fuer JEDES Tool:
1. Zeige alle Prompts fuer dieses Tool als nummerierte Liste
2. Jeder Prompt ist copy-paste-fertig
3. Warte auf User-Bestaetigung bevor das naechste Tool kommt
4. User kann einzelne Prompts anpassen lassen

**Schritt 8c: Shot-Karten (optional)**

Wenn der User "Zeig mir Shot [X]" sagt, zeige ALLE Prompts fuer diesen einen Shot:
- Midjourney, Veo, ElevenLabs, Suno, Assembly — alles an einem Ort
- Gespeichert unter: `output/folge-XXX/05-produktion/shots/shot-XXX.md`

---

## Ausgabe-Struktur

Speichere jeden Phasen-Output als Datei im Projektverzeichnis:

```
new_world_v0/output/
└── folge-[NNN]/
    ├── 00-dashboard.md          ← Status + Metadaten
    ├── 01-analyse.md            ← Phase 1+2
    ├── 02-skript.md             ← Phase 3+4
    ├── 03-visuals.md            ← Phase 5+6
    ├── 04-lektorat.md           ← Phase 7
    ├── 05-produktion/           ← Phase 8 (Verzeichnis)
    │   ├── 00-uebersicht.md     ← Shot-Liste + Reihenfolge + Kosten
    │   ├── 01-midjourney.md     ← Alle MJ-Prompts
    │   ├── 02-veo.md            ← Alle Veo-Prompts
    │   ├── 03-elevenlabs.md     ← Alle Voice-Prompts
    │   ├── 04-suno.md           ← Alle Sound/Music-Prompts
    │   ├── 05-assembly.md       ← DaVinci Assembly-Notizen
    │   ├── 06-konsistenz.md     ← Konsistenz-Protokoll
    │   └── shots/               ← Shot-Karten (optional, bei Bedarf)
    │       ├── shot-001.md
    │       ├── shot-002.md
    │       └── ...
    └── meta.json                ← Briefing, Timestamps, Revisions
```

### Dashboard (00-dashboard.md)

Wird nach jeder Phase aktualisiert:

```markdown
# Dashboard: Folge [X] — [Titel]

## Status
| Phase | Status | Datei | Timestamp |
|-------|--------|-------|-----------|
| Analyse | ✓ Fertig | 01-analyse.md | 2026-01-30 14:23 |
| Skript | → Aktiv | 02-skript.md | — |
| Visuals | ○ Offen | — | — |
| Lektorat | ○ Offen | — | — |
| Produktion | ○ Offen | — | — |

## Briefing
- Folge: [X]
- Arc: [X] — [Titel]
- Konzept: [...]
- Typ: [...]

## Revisionen
- [Timestamp]: [Was wurde geaendert, warum]
```

---

## Skill-Referenz

Die Agents laden selbst die Skills die sie brauchen. Zur Uebersicht:

| Agent | Laedt diese Skills |
|---|---|
| neue-welt-analyst | code-didaktik-neue-welt, episode-rhythm-neue-welt |
| neue-welt-writer | episode-rhythm, code-didaktik, writing-master-[nach Routing] |
| neue-welt-visual | tech-infographic-neue-welt, visual-style-neue-welt |
| neue-welt-lektor | writing-master-lektor, code-didaktik (Checkliste), episode-rhythm |
| neue-welt-producer | prompt-pipeline-neue-welt, visual-style-neue-welt |

---

## Abkuerzungen

Nicht jede Folge braucht die volle Pipeline:

| Situation | Abkuerzung |
|---|---|
| Nur Analyse gewuenscht | Stopp nach Phase 2 |
| Nur Skript gewuenscht | Stopp nach Phase 4 |
| Revision einer bestehenden Folge | Starte bei Phase 7 (Lektor) |
| Nur Prompts fuer fertiges Skript | Starte bei Phase 8 (Producer) |
| Nur Prompts fuer ein Tool | Phase 8, nur das gewaehlte Tool |

Der User kann jederzeit sagen:
- "Stopp nach Phase X"
- "Starte ab Phase X"
- "Ueberspringe Phase X"
- "Nur [Tool]-Prompts"

---

## Fehlerbehandlung

| Problem | Reaktion |
|---|---|
| Agent liefert unvollstaendigen Output | Nochmal spawnen mit Hinweis auf fehlende Teile |
| Lektor sagt REVISE 3x hintereinander | Stopp, User einbeziehen mit konkreten Optionen |
| Lektor sagt REJECT | Stopp, Problem erklaeren, User entscheidet Neustart-Phase |
| Skill-Datei nicht gefunden | Warnen, trotzdem weitermachen mit verfuegbarem Wissen |
| User bricht ab | Zwischen-Ergebnisse sind gespeichert, spaeter fortsetzbar |
| User will zurueck zu Phase X | Dashboard aktualisieren, Phase X erneut starten |

---

## Orchestrator-Verhalten

Der Orchestrator (die Hauptkonversation) ist KEIN stiller Vermittler. Er:

1. **Praesentiert** jeden Phasen-Output in einer lesbaren Zusammenfassung (nicht den Roh-Output)
2. **Erklaert** was gerade passiert ist und was als naechstes kommt
3. **Fragt** explizit nach der User-Entscheidung
4. **Speichert** jeden Output als Datei und aktualisiert das Dashboard
5. **Merkt sich** User-Aenderungswuensche fuer spaetere Phasen

Der User soll sich wie ein Regisseur fuehlen, der jeden Schritt abnimmt — nicht wie jemand, der auf ein fertiges Paket wartet.
