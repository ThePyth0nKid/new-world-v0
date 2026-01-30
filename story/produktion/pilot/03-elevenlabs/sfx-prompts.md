# SFX PROMPTS -- Pilot "Licht am Arm 7"

> **Version:** 1.0
> **Tool:** ElevenLabs Sound Effects / Eigenaufnahme
> **Cross-Referenz:** `drehbuch.md` (Shot-Nummern), `04-suno/score-prompts.md` (Score-Zuordnung)
> **Format:** WAV 48kHz, Stereo (Ambient) / Mono (Foley)

---

## AMBIENT LOOPS

Vier Ambient-Loops, jeweils 60 Sekunden, seamless loopbar.
Bilden die klangliche Grundlage jeder Szene.

---

### 1. Hafen-Summen

**Verwendung:** Beat 1 (Hintergrund), Beat 2 (Hintergrund), generelle Hafen-Atmosphaere
**Shots:** 02, 03, 04, 05, 06, 07, 08

**ElevenLabs Prompt (English):**
```
Continuous low-frequency gravity generator hum in a space station,
deep ventilation drone cycling every 8 seconds, distant metallic
hammering echoing through corridors, faint muffled human voices
far away, occasional fluorescent light buzzing, recycled air
system whirring, industrial space habitat ambience, dark and
oppressive, no music, 60 seconds seamless loop
```

**Technische Vorgaben:**
- Dauer: 60 Sekunden (seamless loop)
- Format: WAV 48kHz, 24-bit, Stereo
- Lautstaerke: -24dB (Hintergrund-Element)
- Frequenzbereich: Schwerpunkt 40-400Hz (tiefes Brummen)
- Dateiname: `pilot_amb_hafen-summen_v01.wav`

---

### 2. Dock-Laerm

**Verwendung:** Beat 3 (Hauptambient), Dock-Szenen
**Shots:** 11, 12, 13, 14

**ElevenLabs Prompt (English):**
```
Industrial space dock ambience, loud welding sparks crackling
intermittently, hydraulic hiss and pressure release every 10
seconds, heavy crane motors groaning overhead, distorted radio
chatter in multiple languages, metallic banging and hammering
at various distances, steam venting from pipes, forklift-like
machinery moving, chaotic industrial workspace, overwhelming
and loud, no music, 60 seconds seamless loop
```

**Technische Vorgaben:**
- Dauer: 60 Sekunden (seamless loop)
- Format: WAV 48kHz, 24-bit, Stereo
- Lautstaerke: -12dB (Vordergrund in Beat 3)
- Frequenzbereich: Breit (100Hz-12kHz), dynamisch
- Dateiname: `pilot_amb_dock-laerm_v01.wav`

---

### 3. Korridor-Atmo

**Verwendung:** Beat 1-2 (Hauptambient fuer enge Raeume)
**Shots:** 05, 07, 09, 10

**ElevenLabs Prompt (English):**
```
Enclosed narrow corridor in a space station, life support system
humming steadily, distant metallic hammering transmitted through
walls, fluorescent tube buzzing on the verge of burning out,
occasional condensation drip from ceiling pipes, faint air
recycler breathing rhythm, claustrophobic confined space
atmosphere, slightly reverberant metal walls, dark and tense,
no music, 60 seconds seamless loop
```

**Technische Vorgaben:**
- Dauer: 60 Sekunden (seamless loop)
- Format: WAV 48kHz, 24-bit, Stereo
- Lautstaerke: -18dB (mittleres Hintergrund-Element)
- Frequenzbereich: 80-2kHz (eingeschlossener Klang)
- Dateiname: `pilot_amb_korridor-atmo_v01.wav`

---

### 4. NW-Summen (New World Hum)

**Verwendung:** Beat 4-6 (Hauptambient im Schiff)
**Shots:** 10a (angedeutet), 12a (lauter), 14 (hoerbar), 14a-27

**ElevenLabs Prompt (English):**
```
Warm deep spaceship humming, organic resonance like a living
vessel, gentle vibration with tonal shifts like slow breathing,
alive and responsive ship ambience, low frequency warmth with
subtle harmonic overtones shifting every 15 seconds, not
mechanical but biological feeling, almost comforting, like
being inside a whale, warm white noise undertone, no music,
no percussion, pure harmonic space, 60 seconds seamless loop
```

**Technische Vorgaben:**
- Dauer: 60 Sekunden (seamless loop)
- Format: WAV 48kHz, 24-bit, Stereo
- Lautstaerke: Variabel (-24dB bis -12dB, steigt ueber Beat 4-6)
- Frequenzbereich: 30-800Hz (warm, tief, umhuellend)
- Dateiname: `pilot_amb_nw-summen_v01.wav`

---

## FOLEY-ELEMENTE

Individuelle Sound-Effekte mit Varianten.
Jedes Element hat eine Hauptvariante und optionale Zusatzvarianten.

---

### 1. Schritte Gitterrost

**Verwendung:** Hafen-Szenen -- Korridore, Gassen, Docks
**Shots:** 04, 05, 07, 09, 10, 11, 13

**Variante A -- Walking (Standard)**

ElevenLabs Prompt (English):
```
Single footstep on industrial metal grate, heavy leather boot,
sharp metallic ring with slight echo, space station corridor
floor, rhythmic walking pace, clear and present, close
microphone perspective
```

**Variante B -- Running (Flucht)**

ElevenLabs Prompt (English):
```
Fast running footsteps on industrial metal grate, heavy boots
hitting metal rapidly, urgent pace, metallic clanging with
reverb in narrow corridor, desperate sprint, slightly
irregular rhythm, close perspective
```

**Variante C -- Sneaking (Schleichen)**

ElevenLabs Prompt (English):
```
Careful quiet footstep on industrial metal grate, ball of foot
placement, minimal heel contact, trying to be silent on metal
surface, soft metallic touch with suppressed resonance, tense
and deliberate, close perspective
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Varianten: Jeweils 5-8 Einzelschritte fuer Variation
- Dateinamen: `pilot_fol_schritte-gitter_walk_v01.wav`, `_run_v01.wav`, `_sneak_v01.wav`

---

### 2. Schritte Rampe

**Verwendung:** New World Rampe -- waermerer Klang als Gitterrost
**Shots:** 17, 20, 21

**Variante A -- Walking (einzige Variante)**

ElevenLabs Prompt (English):
```
Footstep on warm spaceship metal ramp, softer than industrial
grate, slight resonance from ship hull, heavy boot on smooth
alloy surface, warm metallic tone, not harsh, almost welcoming
sound, the floor wants to carry this weight, close perspective
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Varianten: 5-8 Einzelschritte
- Klangfarbe: Deutlich waermer und weicher als Gitterrost
- Dateiname: `pilot_fol_schritte-rampe_walk_v01.wav`

---

### 3. Stift-Klicken

**Verwendung:** Ios Kugelschreiber -- Signatur-Sound der Serie
**Shots:** 02, 06, 14a, 19

> **Empfehlung: Eigenaufnahme.** Der Stift-Klick ist der wichtigste
> wiederkehrende Foley-Sound der gesamten Serie. Er muss einzigartig
> und wiedererkennbar sein. Einen echten Kugelschreiber (verchromt,
> mit Delle) aufnehmen liefert bessere Ergebnisse als AI-Generierung.

**Variante A -- Klicken (Standard)**

ElevenLabs Prompt (English):
```
Single ballpoint pen click, chrome metal body, sharp mechanical
click with slight metallic ring, close microphone recording,
intimate detail sound, no reverb, clean and precise
```

**Variante B -- Rotation (Finger-Drehen)**

ElevenLabs Prompt (English):
```
Ballpoint pen rotating between fingers, chrome metal sliding
on skin, subtle friction sound, continuous gentle metallic
movement for 3 seconds, pen spinning and catching, intimate
close perspective
```

**Variante C -- Chrom auf Stoff (Einstecken)**

ElevenLabs Prompt (English):
```
Chrome pen being tucked into fabric pocket, metal clip sliding
on cloth, soft click of clip engaging, fabric rustling briefly,
close intimate perspective
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Eigenaufnahme-Setup: Kontaktmikrofon oder Nahfeld-Kondensator (<10cm)
- Dateinamen: `pilot_fol_stift-klick_v01.wav`, `_rotation_v01.wav`, `_stoff_v01.wav`

---

### 4. Kapsel-Oeffnen

**Verwendung:** Schlafkapsel F-14 oeffnet sich
**Shots:** 04

**ElevenLabs Prompt (English):**
```
Hydraulic sleeping capsule opening with mechanical resistance,
pressurized air release hiss lasting 1.5 seconds, metal sliding
on metal guides with friction, old mechanism that has opened
hundreds of times, not smooth but functional, slight groan of
worn hydraulics, space station sleeping pod, close perspective
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Dauer: ~2 Sekunden
- Dateiname: `pilot_fol_kapsel-oeffnen_v01.wav`

---

### 5. Metall-Beruehrung

**Verwendung:** Hand auf warmem Schiffsmetall
**Shots:** 01, 17

**ElevenLabs Prompt (English):**
```
Human hand touching warm spaceship metal surface, skin on smooth
warm alloy, slight resonance vibration from the hull, intimate
tactile sound, the metal responds with a faint hum that rises
slightly, like touching something alive, close perspective,
no reverb
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Dauer: ~2 Sekunden
- Wichtig: Der Hum-Anstieg muss subtil sein (drehbuch.md Shot 17: "Fast unmerklich. Fast.")
- Dateiname: `pilot_fol_metall-beruehrung_v01.wav`

---

### 6. Schacht-Klettern

**Verwendung:** Wartungsschacht-Sequenz
**Shots:** 10 (Schnitt 10d)

**ElevenLabs Prompt (English):**
```
Body crawling through tight metal maintenance shaft, fabric
scraping against metal walls and ceiling, elbows and knees
on metal surface, heavy breathing in confined space, dust
particles disturbed, claustrophobic movement sounds, close
perspective with slight reverb from metal walls
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Dauer: ~3 Sekunden
- Dateiname: `pilot_fol_schacht-klettern_v01.wav`

---

### 7. Container-Klirren

**Verwendung:** Dock-Szenen, Io hinter Container
**Shots:** 13

**ElevenLabs Prompt (English):**
```
Heavy industrial metal container shifting slightly, deep metallic
resonance, large hollow metal object vibrating from impact or
movement nearby, low frequency clang with long decay, space dock
container, massive and heavy, close perspective
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Dauer: ~1.5 Sekunden
- Dateiname: `pilot_fol_container-klirren_v01.wav`

---

### 8. Rampen-Hydraulik

**Verwendung:** New World Rampe oeffnet sich
**Shots:** 12a

**ElevenLabs Prompt (English):**
```
Spaceship boarding ramp opening hydraulically, slow mechanical
movement, pressurized hydraulic system engaging, metal ramp
lowering with controlled descent, white light spilling out as
gap widens, warm air escaping, smooth and intentional mechanism,
not old or broken but well-maintained, 3 second duration
```

**Technische Vorgaben:**
- Format: WAV 48kHz, 24-bit, Mono
- Dauer: ~3 Sekunden
- Dateiname: `pilot_fol_rampen-hydraulik_v01.wav`

---

## AUDIO-LAYER-MATRIX

Zuordnung von Ambient, Foley und Score pro Beat.
Cross-Referenz: `drehbuch.md` Beat Sheet, `04-suno/score-prompts.md`

| Beat | Zeitraum | Ambient Layer | Foley Layer | Score Layer | Dominanz |
|------|----------|---------------|-------------|-------------|----------|
| **Beat 1** -- Stille | 0:00 - 0:30 | Korridor-Atmo | Stift-Klicken, Atem, Kapsel-Oeffnen | Kein Score | **Foley dominant** |
| **Beat 2** -- Jagd | 0:30 - 1:00 | Korridor-Atmo | Schritte (Gitter), Stimmen (Syndikat) | Spannung steigt (Block A) | **Foley + Score** |
| **Beat 3** -- Flucht | 1:00 - 1:50 | Dock-Laerm | Rennen (Gitter), Klettern, Atem | Spannung Peak (Block A) | **Score dominant** |
| **Beat 4** -- Licht | 1:50 - 2:20 | NW-Summen beginnt | Schritte (Rampe), Metall-Beruehrung | Wechsel zu Waerme (Block B) | **Ambient dominant** |
| **Beat 5** -- Entscheidung | 2:20 - 2:50 | NW-Summen klar | Stift-Klick (final, Shot 19) | Ruhig, warm (Block B) | **Score** |
| **Beat 6** -- Schwelle | 2:50 - 3:10 | NW-Summen voll | Schritte (warm), Code-Pulsieren | Ausklingend (Block B → Ende) | **Ambient** |

### Lautstaerke-Verhaeltnisse pro Beat

```
Beat 1:  Foley -6dB  |  Ambient -18dB  |  Score ---
Beat 2:  Foley -9dB  |  Ambient -15dB  |  Score -18dB (einschleichend)
Beat 3:  Foley -12dB |  Ambient -9dB   |  Score -6dB  (dominant)
Beat 4:  Foley -15dB |  Ambient -9dB   |  Score -12dB (uebergang)
Beat 5:  Foley -18dB |  Ambient -12dB  |  Score -9dB  (warm, klar)
Beat 6:  Foley -15dB |  Ambient -6dB   |  Score -15dB (ausklingend)
```

### Layer-Uebergaenge

| Uebergang | Zeitpunkt | Beschreibung |
|-----------|-----------|-------------|
| Beat 1 → 2 | 0:28 - 0:32 | Syndikat-Stimmen mischen sich in Korridor-Atmo. Score beginnt als Subfrequenz. |
| Beat 2 → 3 | 0:58 - 1:02 | Korridor-Atmo crossfadet zu Dock-Laerm. Score eskaliert. Herzschlag-Foley beginnt. |
| Beat 3 → 4 | 1:48 - 1:52 | Dock-Laerm fadet, NW-Summen beginnt (Shot 14). Score wechselt Block A → B. Kritischster Uebergang. |
| Beat 4 → 5 | 2:18 - 2:22 | NW-Summen stabilisiert sich. Score wird ruhiger. Foley reduziert auf Essentielles. |
| Beat 5 → 6 | 2:48 - 2:52 | Letzter Stift-Klick (Shot 19). NW-Summen wird voll. Score klingt aus. |

---

## ZUSAETZLICHE SFX-ELEMENTE

### Atem-Varianten (durchgehend)

| Variante | Verwendung | Shots |
|----------|-----------|-------|
| Atem ruhig | Beat 1 Schlafkapsel | 01, 02, 03 |
| Atem kontrolliert | Flucht, Schleichen | 09, 10 |
| Atem schwer | Nach Anstrengung | 11, 14a |
| Atem angehalten | Verstecken | 10c |
| Atem langsam | Ankunft, Staunen | 16, 20, 25 |

### Herzschlag (Score-Element)

| Variante | BPM | Verwendung |
|----------|-----|-----------|
| Ruhepuls | 60 BPM | Beat 1, Beat 4-6 |
| Erhoeht | 90 BPM | Beat 2 |
| Maximal | 120 BPM | Beat 3 |
| Einzel-Schlag | 1x laut | Shot 08 (Reaktion auf Syndikat) |

### Code-Pulsieren (Shot 22, 26)

ElevenLabs Prompt (English):
```
Subtle electronic pulsing like a digital heartbeat, warm data
processing texture, green phosphor screen ambience, gentle
rhythmic electronic pulse every 2 seconds, not harsh or cold
but organic and alive, like a computer breathing, close
perspective, 10 seconds
```

- Dateiname: `pilot_sfx_code-pulsieren_v01.wav`
- Verwendung: Shot 22 (Bildschirme), Shot 26 (Code-Baum)

---

## EXPORT-STANDARDS

| Parameter | Wert |
|-----------|------|
| **Format** | WAV |
| **Sample Rate** | 48kHz |
| **Bit Depth** | 24-bit |
| **Channels** | Stereo (Ambient Loops), Mono (Foley) |
| **Namenskonvention** | `pilot_[typ]_[name]_v[XX].wav` |
| **Typen** | `amb` (Ambient), `fol` (Foley), `sfx` (Effekte) |

---

> **Cross-Referenz:**
> - Beat Sheet: `drehbuch.md` (Zeilen 48-57)
> - Shot-Details: `drehbuch.md` (Shots 01-27)
> - Voice Prompts: `03-elevenlabs/voice-prompts.md`
> - Score-Zuordnung: `04-suno/score-prompts.md`
> - Timeline-Position: `05-resolve/assembly-guide.md`
