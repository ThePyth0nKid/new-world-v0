# SCORE PROMPTS -- Pilot "Licht am Arm 7"

> **Version:** 1.0
> **Tool:** Suno v4.5
> **Cross-Referenz:** `drehbuch.md` (Beat Sheet), `03-elevenlabs/sfx-prompts.md` (Audio-Layer-Matrix)
> **Ziel:** Drei Score-Bloecke + zwei Uebergangs-Cues fuer die Pilotszene

---

## SCORE BLOCK A: Spannung (Beat 1-3)

### Meta

| Parameter | Wert |
|-----------|------|
| **Beats abgedeckt** | Beat 1 (Stille), Beat 2 (Jagd), Beat 3 (Flucht) |
| **Zeitraum** | 0:00 - 1:50 |
| **Dauer** | ~90 Sekunden |
| **Shots** | 01-14 |
| **Emotion** | Desorientierung → Angst → Ueberlebenskampf |
| **Referenzen** | Cowboy Bebop (Tank! intro tension), Blade Runner 2049 (Wallfisch/Zimmer industrial) |

### Suno v4.5 Prompt (English)

```
Dark ambient electronic score, minimal jazz piano playing
sparse dissonant single notes, industrial metal textures
and distortion, deep sub-bass drones building slowly,
mechanical rhythmic clicking at 70 BPM accelerating
gradually to 120 BPM over 90 seconds, no vocals,
no melody, pure atmosphere and tension, distant reverb
on piano notes, granular synthesis textures, metallic
scraping sounds layered underneath, building from
near-silence to overwhelming industrial chaos,
Cowboy Bebop meets Blade Runner 2049, dark science
fiction, claustrophobic then explosive, 90 seconds
```

### Suno-Einstellungen

| Parameter | Wert |
|-----------|------|
| **Modus** | Instrumental |
| **Dauer** | 90 Sekunden |
| **Vocals** | Keine |
| **Style Tags** | dark ambient, electronic, industrial, minimal jazz, cinematic |
| **Negative Tags** | vocals, singing, pop, happy, major key, drums |

### BPM-Progression

```
0:00 - 0:30  (Beat 1):  70 BPM   — Minimal, nur Textur. Piano: 1 Note alle 8 Takte.
0:30 - 1:00  (Beat 2):  70 → 90  — Rhythmus beginnt. Piano: dissonante Intervalle.
1:00 - 1:50  (Beat 3):  90 → 120 — Eskalation. Industrial Textures dominant. Kein Piano mehr.
```

### Instrumentation pro Beat

| Beat | Elemente | Dynamik |
|------|----------|---------|
| Beat 1 | Sub-Bass Drone, einzelne Piano-Noten (Moll), metallische Textur | pp → p |
| Beat 2 | Piano-Dissonanz, mechanisches Klicken, Spannung-Pad | p → mf |
| Beat 3 | Industrial Noise, granulare Synthese, Sub-Bass-Peaks, kein Piano | mf → ff |

### Persona-Erstellung (Suno)

> **Hinweis:** Fuer konsistente Ergebnisse eine Suno-Persona erstellen:
> - Name: "Neue Welt Score"
> - Genre: Dark Ambient / Industrial Electronic / Minimal Jazz
> - Referenzen: Yoko Kanno (Cowboy Bebop), Hans Zimmer (Blade Runner 2049), Trent Reznor (Social Network)
> - Regeln: Keine Vocals, keine Pop-Strukturen, kein Happy Sound
> - Diese Persona fuer alle Score-Generierungen der Serie verwenden

---

## SCORE BLOCK B: Hoffnung (Beat 4-6)

### Meta

| Parameter | Wert |
|-----------|------|
| **Beats abgedeckt** | Beat 4 (Licht), Beat 5 (Entscheidung), Beat 6 (Schwelle) |
| **Zeitraum** | 1:50 - 3:10 |
| **Dauer** | ~60 Sekunden |
| **Shots** | 14a-27 |
| **Emotion** | Staunen → Mut → Ankunft |
| **Referenzen** | Cowboy Bebop "Rain" (Stille, Melancholie), Interstellar quiet moments (Zimmer organ → piano) |

### Suno v4.5 Prompt (English)

```
Ambient electronic score with warm analog piano, hopeful
undertone building slowly, warm synthesizer pads layered
with gentle harmonic movement, simple 4-note piano melody
repeating with subtle variations, tempo slowing from
100 BPM to 60 BPM over 60 seconds, no drums, no
percussion, pure harmonic space, wide stereo reverb,
soft Rhodes-like electric piano warmth, the feeling of
arriving somewhere safe after running, Cowboy Bebop
Rain meets Interstellar quiet organ moments, tender
and restrained, not sentimental, 60 seconds
```

### Suno-Einstellungen

| Parameter | Wert |
|-----------|------|
| **Modus** | Instrumental |
| **Dauer** | 60 Sekunden |
| **Vocals** | Keine |
| **Style Tags** | ambient, warm electronic, piano, hopeful, cinematic, minimal |
| **Negative Tags** | vocals, drums, percussion, aggressive, fast, major pop |

### BPM-Progression

```
1:50 - 2:20  (Beat 4):  100 BPM  — Piano-Melodie beginnt. Synth-Pads oeffnen sich.
2:20 - 2:50  (Beat 5):  100 → 80 — Melodie wiederholt. Waermer, voller. Ruhig.
2:50 - 3:10  (Beat 6):   80 → 60 — Ausklingend. Letzte Noten. Stille.
```

### Das 4-Noten-Motiv

```
Tonart: D-Moll (Grundton der Serie)
Motiv:  D4 — F4 — A4 — G4
Dauer:  Halbe — Halbe — Ganze — Ganze

Charakter: Einfach, wiedererkennbar, nicht sentimental.
           Wie ein Versprechen, das noch nicht formuliert ist.
           Wird zum Hauptthema der Serie (wiederkehrend in jeder Episode).
```

### Instrumentation pro Beat

| Beat | Elemente | Dynamik |
|------|----------|---------|
| Beat 4 | Warm Synth Pad, Piano-Motiv (erste Andeutung), weiter Raum | p → mp |
| Beat 5 | Piano-Motiv klar, Rhodes-Waerme, harmonische Schichten | mp → mf |
| Beat 6 | Piano-Motiv letzte Wiederholung, Fade-Out, Synth-Pad ausklingend | mf → pp |

---

## SCORE BLOCK C: Nova-Code-Motiv (Optional)

### Meta

| Parameter | Wert |
|-----------|------|
| **Beat** | Innerhalb Beat 6 (Shot 22) |
| **Zeitraum** | ~2:55 - 3:05 (abhaengig von Shot-Laenge) |
| **Dauer** | ~20 Sekunden |
| **Shots** | 22 (Coding-Visual: Bildschirme), optional 26 (Code-Baum) |
| **Emotion** | Staunen, Fremdheit, digitale Lebendigkeit |

### Suno v4.5 Prompt (English)

```
Electronic pulsing motif, digital but warm, subtle electronic
heartbeat rhythm at 80 BPM, data-processing texture with
organic warmth, green phosphor screen ambience, binary-like
rhythmic pattern with human feel, synth arpeggios in D minor
very quiet and background, blending seamlessly into warm
ambient piano, transitional piece from digital to analog
warmth, science fiction computer consciousness, not cold
or threatening but curious and alive, 20 seconds
```

### Suno-Einstellungen

| Parameter | Wert |
|-----------|------|
| **Modus** | Instrumental |
| **Dauer** | 20 Sekunden |
| **Vocals** | Keine |
| **Style Tags** | electronic, digital, warm ambient, pulsing, minimal, sci-fi |
| **Negative Tags** | vocals, drums, aggressive, 8-bit, chiptune, retro |

### Integration mit Block B

Block C muss nahtlos in Block B eingebettet werden koennen:

```
Block B Zeitlinie:
... [Beat 5 Piano] ──→ [Block C einsetzt, 20 Sek] ──→ [Block B Fade-Out] ...

Ueberblendung:
- Block B Piano fadet auf -18dB waehrend Block C
- Block C laeuft bei -9dB (Vordergrund fuer Shot 22)
- Block C fadet, Block B Piano kehrt zurueck fuer Beat 6
```

---

## UEBERGANGS-CUES

Zwei kurze Cues fuer die kritischen Beat-Uebergaenge.
Diese verbinden die Score-Bloecke und markieren emotionale Wendepunkte.

---

### Cue 1: Beat 3 → Beat 4 (Spannung loest sich)

**Zeitpunkt:** 1:48 - 1:52 (~4 Sekunden)
**Shots:** Ende Shot 14 → Anfang Shot 14a

**Suno v4.5 Prompt (English):**
```
Tension dissolving transition cue, industrial chaos fading
into warm silence over 4 seconds, descending sub-bass from
120 Hz to 40 Hz, metallic textures evaporating, single
sustained piano note emerging from noise (D4), like stepping
from a storm into a quiet room, 4 seconds, cinematic
transition
```

**Funktion:**
- Verbindet Block A (Ende, ff) mit Block B (Anfang, p)
- Der kritischste Moment der gesamten Szene (drehbuch.md: Beat 3 → 4)
- Dock-Laerm fadet gleichzeitig (sfx-prompts.md: Layer-Uebergaenge)
- NW-Summen beginnt gleichzeitig (sfx-prompts.md: NW-Summen)
- Dateiname: `pilot_score_cue_beat3-4_v01.wav`

---

### Cue 2: Beat 5 → Beat 6 (Entscheidung zu Aufbruch)

**Zeitpunkt:** 2:48 - 2:52 (~4 Sekunden)
**Shots:** Ende Shot 20 → Anfang Shot 21

**Suno v4.5 Prompt (English):**
```
Decision to departure transition cue, warm piano chord
resolving from tension to openness, D minor to D major
subtle shift, the moment of walking through a door,
ascending warmth, synth pad opening up like a breath,
gentle and inevitable, 4 seconds, cinematic transition
```

**Funktion:**
- Verbindet Block B Mitte (Entscheidung) mit Block B Ende (Schwelle)
- Io dreht sich um und geht ins Licht (Shot 20) → Erster Blick ins Schiff (Shot 21)
- Stift-Klick (Shot 19) resoniert in diesem Cue
- Dateiname: `pilot_score_cue_beat5-6_v01.wav`

---

## SCORE-ZUORDNUNG PRO SHOT

| Shot | Score Block | Einsatz | Intensitaet |
|------|-------------|---------|-------------|
| 01 | --- | Kein Score | Nur SFX (Summen, Atem) |
| 02 | --- | Kein Score | Nur Foley |
| 03 | --- | Kein Score | Nur Foley |
| 04 | --- | Kein Score | Nur Foley |
| 05 | --- | Kein Score | Nur Foley |
| 06 | Block A | Beginnt als Subfrequenz | pp (kaum hoerbar) |
| 07 | Block A | Spannung steigt | p |
| 08 | Block A | Herzschlag-Akzent | p → mp |
| 09 | Block A | Rhythmus beschleunigt | mp |
| 10 | Block A | Eskalation | mp → mf |
| 10a | Block A | Kurz leiser (Cross-Cut Kontrast) | p (Dip) |
| 11 | Block A | Kontrast-Schock | mf → f |
| 12 | Block A | Panorama-Weite | f |
| 12a | Block A | Cross-Cut — leiser, Andeutung NW-Summen | mf |
| 13 | Block A | Peak Tension | f → ff |
| 14 | Block A → Cue 1 | Spannung loest sich | ff → p |
| 14a | Cue 1 → Block B | Ma-Moment, Stille | pp |
| 15 | Block B | Piano-Motiv Andeutung | p |
| 16 | Block B | Piano-Motiv klar | p → mp |
| 17 | Block B | Waerme | mp |
| 18 | Block B | Abschied | mp |
| 19 | Block B | Entscheidung | mp → mf |
| 20 | Block B → Cue 2 | Aufbruch | mf → p |
| 21 | Block B | Ankunft | p → mp |
| 22 | Block C | Code-Motiv | mp (Vordergrund) |
| 23 | Block B | Ma-Stille | pp |
| 24 | Block B | Dialog — Score minimal | pp (unter Dialog) |
| 25 | Block B | Reaktion | p |
| 26 | Block B | Einladung, Code-Baum | p (Block C Echo) |
| 27 | Block B | Titel-Card, Fade-Out | p → Stille |

---

## EXPORT-STANDARDS

| Parameter | Wert |
|-----------|------|
| **Format** | WAV |
| **Sample Rate** | 48kHz |
| **Bit Depth** | 24-bit |
| **Channels** | Stereo |
| **Namenskonvention** | `pilot_score_[block]_v[XX].wav` |
| **Beispiele** | `pilot_score_blockA_v01.wav`, `pilot_score_blockB_v01.wav` |

---

> **Cross-Referenz:**
> - Beat Sheet: `drehbuch.md` (Zeilen 48-57)
> - Shot-Details: `drehbuch.md` (Shots 01-27)
> - Audio-Layer-Matrix: `03-elevenlabs/sfx-prompts.md`
> - Voice Prompts: `03-elevenlabs/voice-prompts.md`
> - Timeline-Position: `05-resolve/assembly-guide.md`
