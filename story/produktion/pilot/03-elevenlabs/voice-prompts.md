# VOICE PROMPTS -- Pilot "Licht am Arm 7"

> **Version:** 1.0
> **Tool:** ElevenLabs
> **Cross-Referenz:** `drehbuch.md` (Shot-Nummern), `_referenz/charakter-blocks.md` (Stimmprofil-Basis)
> **Sprache:** Deutsch (de-DE) -- alle Dialoge werden auf Deutsch aufgenommen

---

## KID-DIALOG -- Shot 24 (Einziger Dialog der Pilotszene)

### Kontext

Shot 24 ist der einzige gesprochene Dialog in der gesamten Pilotszene (~3 Minuten).
Kid steht am Ende des Korridors der New World. Io ist gerade an Bord gekommen.
Die Stille davor (Shot 23, Ma-Moment) gibt dem Dialog sein Gewicht.
Jedes Wort muss sitzen. Weniger ist alles.

### Volltext mit Pausen-Markierungen

```
"Du bist zu frueh."
[PAUSE — 1.2 Sekunden, Atem hoerbar]
"Oder zu spaet."
[PAUSE — 0.8 Sekunden, leiser, tiefer]
"Egal."
[PAUSE — 1.5 Sekunden, fast weggeworfen, minimal]
"Willkommen an Bord."
```

### Performance-Anweisungen pro Phrase

| Phrase | Tonfall | Lautstaerke | Tempo | Emotion |
|--------|---------|-------------|-------|---------|
| "Du bist zu frueh." | Sachlich, trocken | Mittel | Normal | Feststellung, nicht Vorwurf. Wie jemand, der die Uhrzeit abliest. |
| "Oder zu spaet." | Leiser, tiefer | Unter Mittel | Langsamer | Nachgedanke. Gewicht. Zehn Jahre stecken in diesem Satz. |
| "Egal." | Fast weggeworfen | Leise | Schnell, beilaeufig | Abschluss. Er entscheidet, dass die Zeit keine Rolle spielt. Kontrolle. |
| "Willkommen an Bord." | Normal, ruhig | Mittel | Gleichmaessig | Wie eine Tuer, die aufgeht. Keine Waerme, keine Kaelte -- Neutralitaet mit Tiefe. |

### Timing-Aufschluesselung

```
Gesamt-Dauer:  ~7.5 Sekunden (innerhalb Shot 24, 3 Sek Bild + Audio overlap)

00.0 - 01.2s   "Du bist zu frueh."
01.2 - 02.4s   [Pause -- Atem, Stille]
02.4 - 03.4s   "Oder zu spaet."
03.4 - 04.2s   [Pause -- leiser Atem]
04.2 - 04.6s   "Egal."
04.6 - 06.1s   [Pause -- laengste Stille, Entscheidung]
06.1 - 07.5s   "Willkommen an Bord."
```

### ElevenLabs-Einstellungen

| Parameter | Wert |
|-----------|------|
| **Modell** | Eleven v3 (alpha) |
| **Stimmprofil** | Male, deep, calm, authoritative |
| **Alter** | Anfang 40 |
| **Sprache** | German (de-DE) |
| **Stability** | 0.7 |
| **Clarity + Similarity Enhancement** | 0.8 |
| **Style Exaggeration** | 0.3 |

### Reversed Audio Workflow

Der Dialog klingt wie "drei Uhr morgens" (King-Notiz, drehbuch.md Shot 24).
Um diesen Effekt zu erreichen:

1. **Pilot Track aufnehmen** -- Standardaufnahme mit obigen Settings
2. **Transformieren** -- Post-Processing:
   - Leichter Hall (Room, Small, 10-15% Wet)
   - Minimale Kompression (Ratio 2:1, Threshold -18dB)
   - Leichtes Low-Pass-Filter bei 8kHz (Waerme, Naehe-Effekt)
   - KEIN Reverb -- das Schiffsinnere ist trocken, warm, nah

### Voice-to-Voice Protokoll

Falls die reine Text-to-Speech nicht den richtigen Ton trifft:

1. **Referenz-Aufnahme erstellen** -- Selbst einsprechen (beliebige Stimme), exaktes Timing und Pausen wie oben
2. **Upload als Voice-to-Voice Source** -- ElevenLabs Voice-to-Voice verwenden
3. **Target Voice anwenden** -- Kid-Stimmprofil als Zielstimme
4. **Feinabstimmung** -- Stability auf 0.65 reduzieren fuer natuerlichere Variation
5. **A/B-Vergleich** -- Text-to-Speech vs. Voice-to-Voice, bessere Version waehlen
6. **Finaler Export** -- WAV 48kHz, 24-bit, Mono

### German Language Setting

- ElevenLabs Spracheinstellung: **German (de-DE)**
- Aussprache-Hinweise:
  - "frueh" -- langes ue, nicht gehetzt
  - "Egal" -- Betonung auf zweiter Silbe, fast genuschelt
  - "Willkommen" -- kein uebertriebenes Willkommen, eher sachlich
  - "an Bord" -- kurz, praegnant, Endpunkt

---

## IO-STIMMPROFIL (Fuer zukuenftige Episoden)

### Platzhalter -- Keine Sprechrolle im Pilot

Io spricht im Pilot nicht. Sein erster Dialog kommt in Episode 1 (nach dem Pilot-Opening).
Dieses Profil dient als Referenz fuer die spaetere Stimmsuche.

### Stimmprofil

| Parameter | Wert |
|-----------|------|
| **Typ** | Young male |
| **Alter** | 17 Jahre |
| **Charakter** | Leicht rau, unsicher, gebrochen-ehrlich |
| **Tonhoehe** | Mittel-hoch, bricht gelegentlich |
| **Textur** | Leicht kratzig, duenn, nicht voll -- wie eine Stimme, die noch nicht fertig ist |

### ElevenLabs-Einstellungen (Vorschlag)

| Parameter | Wert |
|-----------|------|
| **Modell** | Eleven v3 (alpha) |
| **Stimmprofil** | Young male, slightly rough, insecure |
| **Alter** | 17 |
| **Sprache** | German (de-DE) |
| **Stability** | 0.5 (niedriger -- Io ist instabil, seine Stimme schwankt) |
| **Clarity + Similarity Enhancement** | 0.7 |
| **Style Exaggeration** | 0.4 (hoeher -- Io ist expressiver als Kid) |

### Performance-Notizen

- **Unter Stress:** Leichtes Stottern, abgebrochene Saetze, Wiederholungen
- **Nervoes:** Schnelleres Sprechtempo, Woerter verschluckt, Atem hoerbar
- **Fokussiert:** Ruhiger, langsamer, klarere Artikulation -- der Kontrast ist der Charakter
- **Emotional:** Stimme wird duenner, hoeher, bricht fast
- **Hafen-Slang:** Io spricht Hafen-Deutsch -- verkuerzt, rau, Grammatik-Abkuerzungen.
  Beispiel: "Hab ich" statt "Das habe ich", "Klar." statt "Ja, verstanden."
  Der Slang reduziert sich im Laufe der Serie, je laenger er auf der New World ist.

---

## SYNDIKAT-STIMME -- Shot 07 (Hintergrund)

### Kontext

Shot 07: Io dreht sich um, sieht Schatten im Korridor. Drei bis vier Gestalten.
Der Satz kommt aus der Ferne, gedaempft, durch Korridorwaende gefiltert.
Es ist kein direkter Dialog -- es ist eine Bedrohung, die Io hoert.

### Text

```
"Der Junge mit dem Stift."
```

### Performance-Anweisungen

| Aspekt | Beschreibung |
|--------|-------------|
| **Tonfall** | Deep male, rough, dismissive -- abfaellig, wie ueber ein Objekt sprechend |
| **Lautstaerke** | Gedaempft -- der Satz kommt aus Entfernung (Korridor-Ende) |
| **Tempo** | Langsam, schwer, jedes Wort betont |
| **Emotion** | Kein Interesse an Io als Person -- nur als Ziel. Beilaeufige Bedrohung. |
| **Qualitaet** | Absichtlich niedriger -- simuliert Distanz und Muffigkeit |

### ElevenLabs-Einstellungen

| Parameter | Wert |
|-----------|------|
| **Modell** | Eleven v3 (alpha) |
| **Stimmprofil** | Deep male, rough, threatening |
| **Alter** | 30-50 (unbestimmt -- Anonymitaet) |
| **Sprache** | German (de-DE) |
| **Stability** | 0.8 (kontrolliert -- das Syndikat ist praezise) |
| **Clarity + Similarity Enhancement** | 0.5 (NIEDRIG -- absichtlich unklar, simuliert Distanz) |
| **Style Exaggeration** | 0.2 (minimal -- keine Theatralik, nur Gefahr) |

### Post-Processing

1. **Low-Pass-Filter** bei 4kHz (Entfernung simulieren)
2. **Leichter Hall** (Corridor, Medium, 25% Wet)
3. **Lautstaerke** auf -12dB unter Hauptmix (Hintergrund-Element)
4. **Panning** leicht links (Korridor-Ende ist hinter Io)

### Timing im Shot

```
Shot 07 Dauer: 3 Sekunden
00.0 - 01.0s   [Ios Kopfdrehen, Schatten sichtbar]
01.0 - 02.5s   "Der Junge mit dem Stift." (gedaempft, aus Entfernung)
02.5 - 03.0s   [Ios Reaktion -- Stille, Atem stoppt]
```

---

## EXPORT-STANDARDS

| Parameter | Wert |
|-----------|------|
| **Format** | WAV |
| **Sample Rate** | 48kHz |
| **Bit Depth** | 24-bit |
| **Channels** | Mono (Dialog) |
| **Namenskonvention** | `pilot_shot[XX]_voice_[charakter]_v[XX].wav` |
| **Beispiel** | `pilot_shot24_voice_kid_v01.wav` |

---

> **Cross-Referenz:**
> - Shot 24 Dialog: `drehbuch.md` Shot 24
> - Shot 07 Syndikat: `drehbuch.md` Shot 07
> - Kid Charakter-Referenz: `_referenz/charakter-blocks.md` (KID-DNA-INJECTION)
> - Io Charakter-Referenz: `_referenz/charakter-blocks.md` (IO-DNA-INJECTION)
> - SFX Prompts: `03-elevenlabs/sfx-prompts.md`
> - Score-Zuordnung: `04-suno/score-prompts.md`
> - Timeline-Position: `05-resolve/assembly-guide.md`
