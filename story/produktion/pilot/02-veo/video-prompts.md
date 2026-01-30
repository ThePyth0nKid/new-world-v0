# Video-Prompts: Pilot-Szene V2 -- "Licht am Arm 7"

## Meta

- **Quelle:** `story/produktion/pilot/drehbuch.md` (V2, 27 Shots)
- **Tool:** Google Veo 3.1 via Flow (Google AI Ultra, 25k Credits/Monat)
- **Backup:** Kling 2.6 Pro ($0.07/Sek) fuer Anime-Micro-Mimicry
- **Basis-Clip:** 4 Sekunden max, erweiterbar via Flow Extend (bis 148 Sek)
- **Aufloesung:** 1080p Standard, 4K Upscale fuer HERO-Shots
- **Audio:** Pro Shot ON/OFF (SFX separat in ElevenLabs)
- **Prompt-Prinzip:** Einfache Prompts = stabile Ergebnisse (Deadlink-Prinzip)
- **Veo versteht:** Objektivtypen, Schaerfentiefe, Kamerabewegungen, Beleuchtung
- **Flow-Features:** Ingredients to Video (bis 3 Ref-Bilder), Frames to Video (Start+End Frame), Extend
- **Charakter-Referenz:** `_referenz/charakter-blocks.md`

### Bewegungs-Kategorien

| Kategorie | Bewegung | Kamera | Einsatz |
|-----------|----------|--------|---------|
| STATISCH | Minimal (Atem, Haar) | Locked | Ma-Momente |
| SUBTIL | Blinzeln, Kopfneigung, Stift-Rotation | Locked/Minimal | Close-Ups |
| KAMERA | Push-In, Dolly, Pan, Schwenk | Bewegt | Establishing Shots |
| AKTION | Rennen, Springen, Klettern | Tracking/Handheld | Verfolgung |
| HERO | Max Qualitaet + 4K Upscale | Langsam/Statisch | Schluesselmomente |
| UEBERGANG | Start+End Frame definiert | Beat Transition | Uebergaenge |
| CHARAKTER-LOCK | 3 Ingredients | Variabel | Identitaets-Erhaltung |

### Credits-Kalkulation (geschaetzt)

| Kategorie | Shots | Credits/Shot | Gesamt |
|-----------|-------|-------------|--------|
| STATISCH | 4 | ~200 | ~800 |
| SUBTIL | 9 | ~200 | ~1800 |
| KAMERA | 7 | ~300 | ~2100 |
| AKTION | 4 | ~400 | ~1600 |
| HERO | 4 | ~600 (inkl. 4K) | ~2400 |
| UEBERGANG | 1 | ~300 | ~300 |
| **Gesamt** | **29** (inkl. Sub-Clips) | | **~9000** |

> Spielraum fuer 2-3 Iterationen pro Shot bei 25k Credits/Monat.

---

## Referenz-Bilder Inventar

> Alle Ingredient-Bilder stammen aus Phase 1 (01-midjourney/keyframes.md).
> Flow: Ingredients to Video akzeptiert bis zu 3 Referenzbilder pro Generation.

### Io-Referenzen (aus Look Dev)

| ID | Beschreibung | Verwendung |
|----|-------------|------------|
| IO-ECU-01 | Ios Hand auf Metall, Narbe sichtbar, Stift zwischen Fingern | Shot 01, 17, 19 |
| IO-CU-01 | Ios Gesicht im Rot-Licht, Augenringe, wacher Blick | Shot 03, 08, 25 |
| IO-CU-02 | Ios Gesicht im warmen Weiss-Licht, staunender Ausdruck | Shot 16 |
| IO-MS-01 | Io in Schlafkapsel, Stift rotierend, Rot-Puls | Shot 02 |
| IO-FB-01 | Io Silhouette vor Sternenfenster | Shot 06 |
| IO-FB-02 | Io stehend zwischen Containern, Blick auf Rampe | Shot 14a |
| IO-FB-03 | Io von hinten, geht ins weisse Licht | Shot 20 |
| IO-WS-01 | Io klein gegen Dock-Maschinen | Shot 12, 14 |

### Kid-Referenzen (aus Look Dev)

| ID | Beschreibung | Verwendung |
|----|-------------|------------|
| KID-FB-01 | Kid Silhouette in Rampen-Licht | Shot 12a |
| KID-FB-02 | Kid stehend im Schiffskorridor, warmes Licht | Shot 21, 23, 26 |
| KID-ECU-01 | Kids Augen, Kraehenfuesse, feuchter Blick | Shot 24 |

### Environment-Referenzen (aus Look Dev)

| ID | Beschreibung | Verwendung |
|----|-------------|------------|
| ENV-KAPSEL-01 | Schlafkapsel F-14, Rot-Puls, enger Raum | Shot 02, 03, 04 |
| ENV-KORRIDOR-01 | Hafen-31-Korridor, Gitterrost, Rohre, Graffiti | Shot 05, 07, 09 |
| ENV-FENSTER-01 | Aussichtsplattform Arm 12, Sterne hinter Glas | Shot 06 |
| ENV-GASSEN-01 | Enge Gassen, Kisten, Wartungsschacht | Shot 10 |
| ENV-DOCK-01 | Docks Hafen 31, Container, Kraene, Schweissblitze | Shot 11, 12, 13 |
| ENV-NW-AUSSEN-01 | New World am Dock, dunkle Huelle, offene Rampe, Licht | Shot 10a, 15 |
| ENV-NW-INNEN-01 | New World Korridor, warmes Licht, Legierungs-Waende | Shot 21, 22, 23 |
| ENV-NW-RAMPE-01 | Rampe der New World, weisses Licht auf Rost-Boden | Shot 12a, 17 |

---

## Prompts nach Kategorie

---

### STATISCH

> Minimale Bewegung. Locked Camera. Atem, Haar, Lichtpuls.
> Ideal fuer Ma-Momente und ruhige Atmosphaere-Shots.

---

#### SHOT 06 -- Aussichtsplattform (Ma-Moment)

Quelle: drehbuch.md -> Beat 1 -> Shot 06
Timeline: 0:20 - 0:30
Emotion: Ma -- Einsamkeit, Weite, Sehnsucht
Kategorie: STATISCH / HERO

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-FENSTER-01
**Ingredients:** IO-FB-01, ENV-FENSTER-01

**Prompt:**
"Wide shot, locked camera, symmetrical composition. A lean young man in an oversized gray pullover stands as a dark silhouette before a massive scratched observation window. Beyond the glass: black void, distant stars. His messy black hair moves slightly. His breath fogs the glass, a small circle that fades instantly. He leans his forehead against the cold glass. Minimal movement. Only breathing. Starlight reflects faintly in his eyes. Cinematic 85mm lens, deep depth of field, backlit by faint starlight, dark industrial interior. Silence made visible."

**Dauer:** 4 Sekunden + Flow Extend auf 10 Sekunden (3 Extensions)
**Aufloesung:** 1080p -> 4K Upscale (HERO)
**Audio:** OFF (SFX via ElevenLabs: Schwerkraft-Generatoren, Atem)
**Notiz:** Laengster Einzelshot der Szene. Ma-Moment. Geduld beim Extend -- jede Extension muss die Stille halten. 4K Upscale nach finaler Auswahl. Miyazaki-Prinzip: Nichts passiert, und doch alles.

---

#### SHOT 10a -- Cross-Cut: New World am Dock

Quelle: drehbuch.md -> Beat 3 -> Shot 10a
Timeline: 1:12 - 1:15
Emotion: Kuleshov -- Rettung?, Geheimnis
Kategorie: STATISCH

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-NW-AUSSEN-01
**Ingredients:** ENV-NW-AUSSEN-01

**Prompt:**
"Wide shot, locked camera, slight high angle. A dark angular spacecraft sits at a rusted docking arm. Surrounding ships are corroded industrial freighters. This ship is different -- dark but coherent, built with purpose. The loading ramp is closed. A single warm light glows behind a round window near the top. The dock is empty, silent. Faint steam rises from a nearby vent. No movement except subtle atmospheric haze. 35mm anamorphic lens, deep focus, cold dock lighting with one warm point of light."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Dock-Atmo, fernes Summen)
**Notiz:** Erster Cross-Cut. Statisch, ruhig. Kontrastiert mit der Hektik von Shot 10. Das einzelne Licht im Fenster ist der emotionale Anker.

---

#### SHOT 14a -- Ma-Moment: Ios Atem vor der Rampe

Quelle: drehbuch.md -> Beat 4 -> Shot 14a
Timeline: 1:50 - 1:54
Emotion: Schwelle, letztes Zuegern, Gewicht des Moments
Kategorie: STATISCH

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-FB-02
**Ingredients:** IO-FB-02, ENV-NW-AUSSEN-01

**Prompt:**
"Full body shot, locked camera, symmetrical composition. A lean young man in an oversized gray pullover stands alone between dark industrial containers. Before him, thirty meters away: a spacecraft with an open ramp, warm white light spilling out. Artificial wind from dock ventilators moves his messy black hair. A pen clip glints on his cargo pocket. He breathes deeply once. Still. Waiting. The warm light from the ramp in the distance contrasts with the cold dock light around him. 50mm lens, deep focus, industrial dock lighting, one warm light source in the distance."

**Dauer:** 4 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Atem, fernes Summen, Ventilator-Wind)
**Notiz:** Miyazaki-Uebergang von Beat 3 (Chaos) zu Beat 4 (Licht). Io ist mittig im Frame. Symmetrie = innere Balance vor der Entscheidung.

---

#### SHOT 23 -- Stille: Io und Kid

Quelle: drehbuch.md -> Beat 6 -> Shot 23
Timeline: 2:58 - 3:01
Emotion: Ma -- Erkennung, Spannung, zwei Welten treffen sich
Kategorie: STATISCH

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-NW-INNEN-01
**Ingredients:** IO-FB-01, KID-FB-02, ENV-NW-INNEN-01

**Prompt:**
"Medium shot, locked camera, symmetrical composition. Two figures stand in a warm-lit spacecraft corridor. On the left: a lean young man in an oversized gray pullover, tense posture, hands slightly raised. On the right, ten meters away: a broad older man in dark anthracite clothing, standing upright, hands at his sides. Warm white light fills the corridor. Subtle cyan glow from wall-mounted screens. Neither moves. Neither speaks. Only their breathing is visible -- one fast and shallow, one slow and deep. 50mm lens, shallow depth of field on the space between them, warm white interior lighting with cyan accents."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Schiffs-Summen, zwei Atemrhythmen)
**Notiz:** Ma-Moment. Der Kern der Szene. Zwei Menschen, die sich nicht kennen. Die Stille ZWISCHEN ihnen ist der eigentliche Shot. CHARAKTER-LOCK fuer beide Figuren.

---

### SUBTIL

> Minimale Charakterbewegung. Blinzeln, Stift-Rotation, Mikro-Mimik.
> Camera locked oder minimal. Ideal fuer Close-Ups und Portraits.

---

#### SHOT 01 -- Flash-Forward: Hand auf Metall

Quelle: drehbuch.md -> Beat 1 -> Shot 01
Timeline: 0:00 - 0:03
Emotion: Desorientierung, Neugier, Mysterium
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe IO-ECU-01
**Ingredients:** IO-ECU-01

**Prompt:**
"Extreme close-up, locked camera with slight handheld shake. A scarred hand with cracked fingers lies flat on warm humming metal. The metal surface is smooth, not industrial -- something different, warmer. White light glows from below the metal, overexposed and dreamlike. The fingers twitch slightly. Subtle breathing movement. The hand presses down and the metal seems to respond with a faint vibration. 100mm macro lens, very shallow depth of field, warm white underlight, overexposed bloom."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Summen, schwerer Atem, dann Stille)
**Notiz:** In-Medias-Res-Hook. Payoff in Shot 17. Ueberbelichtung bewusst -- traumhaft, nicht realistisch. Harter Schnitt zu Schwarz am Ende.

---

#### SHOT 02 -- Schlafkapsel F-14

Quelle: drehbuch.md -> Beat 1 -> Shot 02
Timeline: 0:03 - 0:08
Emotion: Ritual, Einsamkeit, Routine
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-MS-01
**Ingredients:** IO-MS-01, ENV-KAPSEL-01

**Prompt:**
"Extreme close-up on hands in a dark confined space. Fingers rotate a scratched chrome ballpoint pen between index and middle finger, over the thumb, back again. Automatic, rhythmic. A thin scar visible on the left wrist. Rough calloused skin on fingertips. Red emergency light pulses slowly from outside the sleeping capsule. The rest is darkness. Subtle breathing movement in the chest area. The pen has a dent on its clip. 100mm macro lens, very shallow depth of field, minimal red pulse lighting from the left, dark ambient."

**Dauer:** 4 Sekunden + Flow Extend auf 5 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Atem, Stift-Klicken, Schwerkraft-Generatoren)
**Notiz:** Slow-Burn-Eroeffnung. Die Stift-Rotation muss natuerlich wirken -- SUBTIL Kategorie. Falls Rotation instabil: Kling 2.6 Pro als Backup fuer die Mikro-Mimicry.

---

#### SHOT 03 -- Ios Gesicht

Quelle: drehbuch.md -> Beat 1 -> Shot 03
Timeline: 0:08 - 0:12
Emotion: Entscheidung, Bereitschaft, Wachheit
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-CU-01
**Ingredients:** IO-CU-01, ENV-KAPSEL-01

**Prompt:**
"Close-up from slightly above, looking down into a sleeping capsule. A young man's face lit by red pulsing light from the left. Dark circles under almond-shaped dark brown eyes. Messy black hair on a thin pillow. Gray pullover collar pulled up to the chin. His eyes stare at the ceiling, calculating -- not empty. Pupils move subtly left, then right, scanning. His breathing is shallow. The pen rotation stops. A single metallic creak from outside. 85mm lens, shallow depth of field, red pulse lighting from left, deep shadows on right half of face."

**Dauer:** 4 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: flacher Atem, Stift stoppt, Metall-Knarzen)
**Notiz:** Augen-Bewegung ist der Schluessel -- Pupillen muessen RECHNEN, nicht traeumen. Leichter Aufsicht-Winkel verstaerkt die Verletzlichkeit.

---

#### SHOT 08 -- Ios Reaktion: Pupillen

Quelle: drehbuch.md -> Beat 2 -> Shot 08
Timeline: 0:33 - 0:35
Emotion: Schalter kippt, Fluchtmodus aktiviert
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe IO-CU-01
**Ingredients:** IO-CU-01

**Prompt:**
"Extreme close-up on eyes only. Dark brown almond-shaped irises reflecting a red pulse. The pupils dilate visibly -- widening in a fraction of a second. Then: focus. The eyes sharpen. Decision made. The breathing rhythm changes -- becomes flat, controlled. No blinking. Absolute stillness except for the pupil dilation. 100mm macro lens, extremely shallow depth of field, red shimmer on the iris, dark background."

**Dauer:** 2 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: ein einzelner lauter Herzschlag, dann Stille)
**Notiz:** Kuerzester Shot der Szene. Pupillen-Erweiterung ist der einzige Bewegungs-Marker. Falls Veo die Pupillen-Aenderung nicht liefert: Kling 2.6 Pro Backup.

---

#### SHOT 13 -- Syndikat auf den Docks

Quelle: drehbuch.md -> Beat 3 -> Shot 13
Timeline: 1:24 - 1:28
Emotion: Knapp entkommen, Angst, Kontrolle
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-MS-01
**Ingredients:** IO-MS-01, ENV-DOCK-01

**Prompt:**
"Medium shot, locked camera, shallow depth of field. In sharp focus foreground: a young man in an oversized gray pullover crouches behind a dark industrial container, hands flat on cold metal. His breathing is controlled, visible as slight chest movement. In the blurred background: three dark figures with red accents on their collars stand under neon light, questioning a dock worker. The young man's eyes track them carefully. A pen presses against the inside of his cargo pocket. 85mm lens, strong bokeh on background, neon top-light, half the face in shadow."

**Dauer:** 4 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: gedaempfte Stimmen, kontrollierter Atem, Container-Klirren)
**Notiz:** Bokeh-Effekt ist essentiell -- Vordergrund scharf, Hintergrund weich. Io im Fokus, Bedrohung als Masse. Stift "drueckt von innen" -- subtile Andeutung.

---

#### SHOT 17 -- Hand an der Rampenwand

Quelle: drehbuch.md -> Beat 4 -> Shot 17
Timeline: 2:08 - 2:12
Emotion: Erste Beruehrung, Antwort, Verbindung
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe IO-ECU-01
**Ingredients:** IO-ECU-01, ENV-NW-RAMPE-01

**Prompt:**
"Extreme close-up on a hand touching a smooth metal wall. Cracked fingers with rough skin, a thin scar on the wrist. The metal is warm, not cold -- different from industrial surfaces. White light illuminates the hand from above. The fingers first touch hesitantly, then pull back slightly, then press flat against the surface. The metal seems to respond -- a faint vibration visible as a subtle ripple of light beneath the hand. 100mm macro lens, very shallow depth of field, warm white overhead light, the scar in sharp focus."

**Dauer:** 4 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Haut auf Metall, Summen reagiert -- wird einen Ton hoeher)
**Notiz:** PAYOFF von Shot 01. Der Zuschauer erkennt das Bild wieder. Identische Perspektive, aber jetzt im Kontext. Animismus -- das Schiff antwortet. Die Licht-Vibration unter der Hand muss SUBTIL sein.

---

#### SHOT 19 -- Kugelschreiber (Symbolshot)

Quelle: drehbuch.md -> Beat 5 -> Shot 19
Timeline: 2:26 - 2:30
Emotion: Entscheidung, Identitaet, Abschluss
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe IO-ECU-01
**Ingredients:** IO-ECU-01

**Prompt:**
"Extreme close-up on a scratched chrome ballpoint pen held in a young hand. The pen rotates once between the fingers -- slow, deliberate, final. A dent on the clip catches the light. The fingers grip the pen firmly, then move it from the cargo pocket to the breast pocket -- closer to the heart. A decisive click as the pen locks into place. White light on the chrome surface, the dent glints. 100mm macro lens, shallow depth of field, warm white directional light from the left."

**Dauer:** 4 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: letzte Stift-Rotation, finaler Klick)
**Notiz:** Symbolischer Wechsel: Cargo-Tasche -> Brusttasche. Der Stift kommt mit. Also kommt Io mit. Der Klick ist das finale Geraeusch. Stift-Rotation einmal, dann STOPP.

---

#### SHOT 22 -- Coding Visual: Bildschirme

Quelle: drehbuch.md -> Beat 6 -> Shot 22
Timeline: 2:55 - 2:58
Emotion: Staunen, Fremdheit, lebendiges System
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-NW-INNEN-01
**Ingredients:** ENV-NW-INNEN-01

**Prompt:**
"Close-up montage of flat screens embedded in metal corridor walls. Green code scrolls on black backgrounds -- numbers, symbols, branching structures. One screen shows a tree diagram with growing branches. Another shows lines of code running top to bottom. A third displays the word NOVA appearing repeatedly. The screens pulse with cyan glow. The code is alive, moving, breathing. Phosphor green characters on matte black. 50mm lens, shallow depth of field shifting between screens, cyan ambient glow #00E5FF, phosphor green #00E676."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: leises elektronisches Pulsieren)
**Notiz:** Schnelle Detail-Schnitte: 3 Bildschirme in 3 Sekunden = 1 Sek pro Bildschirm. Kann als 3 separate 1-Sek-Clips generiert und in Resolve geschnitten werden. NOVA-Wort muss lesbar sein. Code-Didaktik Phase 1: "Was IST das?"

---

#### SHOT 24 -- Kids Augen (Erkennung)

Quelle: drehbuch.md -> Beat 6 -> Shot 24
Timeline: 3:01 - 3:04
Emotion: Geheimnis, zehn Jahre in einem Blick
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe KID-ECU-01
**Ingredients:** KID-ECU-01

**Prompt:**
"Extreme close-up on deep-set dark gray-green eyes with pronounced crow's feet. The eyes focus on something specific -- a pen clip visible as a faint reflection in the iris. A micro-twitch in the brow -- barely visible. The eyes become wet for one millisecond, then control returns. The face reveals nothing. But the eyes hold ten years of history. Warm white lighting with a faint cyan shimmer from a screen to the left. 100mm macro lens, extremely shallow depth of field, warm interior light."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Stille, dann Kids Stimme -- separat in Voice-Track)
**Notiz:** Mikro-Mimik ist KRITISCH. Das Mikro-Zucken und die feuchten Augen muessen FAST unsichtbar sein. Falls Veo die Nuance nicht liefert: Kling 2.6 Pro als primaeres Tool fuer diesen Shot. Kids Stimme kommt aus ElevenLabs, nicht aus Veo Audio.

---

#### SHOT 25 -- Ios Reaktion auf Kid

Quelle: drehbuch.md -> Beat 6 -> Shot 25
Timeline: 3:04 - 3:07
Emotion: Annahme, vorsichtig, zerbrechlich
Kategorie: SUBTIL

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-CU-02
**Ingredients:** IO-CU-02

**Prompt:**
"Close-up on a young man's face in warm white light. For the first time, his expression is not guarded -- his eyes relax one degree. Like a fist opening one millimeter. A small nod, almost invisible. The dark circles remain but the tension in the jaw softens slightly. Messy black hair, olive-brown skin warm-toned for the first time in the scene. His breathing slows. Soft warm light from the front. 85mm lens, shallow depth of field, warm white frontal lighting, soft quality."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: langsamerer Atem)
**Notiz:** Die Entspannung muss MINIMAL sein. Nicht laecheln, nicht weinen. Ein Grad. Eine Nuance. Kontrast zu Shot 03 und 08 -- selbes Gesicht, andere Haltung.

---

### KAMERA

> Definierte Kamerabewegung. Dolly, Pan, Push-In, Steadicam.
> Veo versteht cinematische Kamerasprache direkt im Prompt.

---

#### SHOT 05 -- Der Korridor

Quelle: drehbuch.md -> Beat 1 -> Shot 05
Timeline: 0:16 - 0:20
Emotion: Welt zeigen, Enge, das reicht nicht
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-KORRIDOR-01
**Ingredients:** IO-FB-01, ENV-KORRIDOR-01

**Prompt:**
"Wide shot from behind, slow dolly following a lean young figure walking through a narrow industrial corridor. Pipes on the ceiling drip condensation. Scratched walls covered in graffiti, initials, stick figures. Sleeping capsules line both sides like empty drawers. Flickering yellow-gray tube lights, one buzzing near burnout. The figure wears an oversized gray pullover and heavy dark boots on metal grating floor. Gritty, confined, lived-in. Slow dolly forward matching walking pace. 35mm lens, deep focus, industrial fluorescent lighting, corridor perspective vanishing point."

**Dauer:** 4 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Gitterrost-Schritte, fernes Haemmern, Luft-Recycler)
**Notiz:** Dolly-Geschwindigkeit = Ios Gehgeschwindigkeit. Nicht schneller. Die Enge des Korridors muss spuerbar sein. Decke niedrig, Waende nah.

---

#### SHOT 07 -- Stimmen im Korridor

Quelle: drehbuch.md -> Beat 2 -> Shot 07
Timeline: 0:30 - 0:33
Emotion: Gefahr, Umschwung, Sofort
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-KORRIDOR-01
**Ingredients:** IO-MS-01, ENV-KORRIDOR-01

**Prompt:**
"Over-shoulder shot, handheld camera with slight shake. A young man turns around in a narrow corridor. At the far end: three or four dark silhouettes approaching. Broad shoulders, heavy builds. Backlit from the corridor behind them -- faces invisible, only mass and threat. The young man's body language shifts in half a second -- nervous becomes alert. His hand stops fidgeting and drops to his side. Handheld camera, slight dutch angle, 35mm lens, backlit corridor, figures silhouetted against harsh artificial light."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: gedaempfte Stimmen "der Junge mit dem Stift", metallische Schritte)
**Notiz:** Handheld-Wackeln muss subtil sein -- Nervositaet, nicht Seekrankheit. Gegenlicht laesst die Verfolger als reine Masse wirken. Koerpersprache-Wechsel ist der Schluesselpunkt.

---

#### SHOT 12 -- Die Docks (Panorama)

Quelle: drehbuch.md -> Beat 3 -> Shot 12
Timeline: 1:18 - 1:23
Emotion: Ueberwaeltigung, Suche, Orientierung
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-DOCK-01
**Ingredients:** ENV-DOCK-01

**Prompt:**
"Wide shot, slow pan left to right revealing massive industrial docks. Spiral docking arms stretch into the void like skeleton bones. Containers stacked like mountain ranges. Ceiling crane systems move automatically. Welding sparks punctuate the darkness. Steam from valves. Rust freighters with number plates in three different scripts. Harsh white floodlights, orange warning lights, welding flashes. A small lean figure stands at the edge, dwarfed by the machinery. 24mm wide angle lens, slow horizontal pan, deep focus, industrial floodlight lighting."

**Dauer:** 4 Sekunden + Flow Extend auf 5 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Industrielaerm, Haemmern, Zischen, Funksprueche)
**Notiz:** Langsamster Schwenk der Szene. Die Docks muessen MASSIV wirken. Io ist am Rand, klein. Weltenbau-Shot: hier sieht man, wo er herkommt.

---

#### SHOT 12a -- Cross-Cut: Rampe oeffnet sich

Quelle: drehbuch.md -> Beat 3 -> Shot 12a
Timeline: 1:23 - 1:26
Emotion: Wer war das? Spannung, Einladung oder Falle
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-NW-RAMPE-01
**Ingredients:** ENV-NW-RAMPE-01, KID-FB-01

**Prompt:**
"Medium shot, locked camera with slow push-in, frontal. A spacecraft loading ramp opens slowly, hydraulically. White light pours out onto the rusty dock floor like milk on earth. In the opening: a broad silhouette stands briefly -- upright, hands at sides. The figure steps back into the ship's interior. The ramp remains open. An invitation. Or a trap. Slow push-in toward the light. 50mm lens, contrast maximum between warm white ramp light and cold dock darkness."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: hydraulisches Zischen, Summen wird lauter)
**Notiz:** Zweiter Cross-Cut. Kid wird nur als Silhouette angedeutet. Payoff in Shot 24. Licht-auf-Rost-Kontrast ist der visuelle Hoehepunkt.

---

#### SHOT 14 -- Ios Blick wandert

Quelle: drehbuch.md -> Beat 3/4 -> Shot 14
Timeline: 1:43 - 1:50
Emotion: DER Moment -- Neugier, "Was ist das?", "Das kennt mich"
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-CU-01
**Ingredients:** IO-CU-01, ENV-NW-AUSSEN-01, ENV-DOCK-01

**Prompt:**
"Close-up on a young man's face looking across industrial docks, then slow pan following his gaze to reveal: docking arms with rusted freighters, a military transport, an empty arm, then -- arm 7. Something different. A dark ship with coherent lines, not rusted. Different from everything else. The camera pushes in slowly toward the ship. At its ramp: warm white light, steady, calm. The light is unlike anything else on this dock. 85mm starting on face, transitioning to 50mm as camera pans and pushes toward the ship, dock floodlights fading as warm ramp light grows."

**Dauer:** 4 Sekunden + Flow Extend auf 7 Sekunden (1 Extension)
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Dock-Laerm fadet, Summen der New World beginnt)
**Notiz:** Komplexer Kamera-Move: Gesicht -> Schwenk -> Push-In. Moeglicherweise als 2 Clips generieren und in Resolve verbinden. Teil 1: Ios Gesicht mit Pan-Beginn (4s). Teil 2: Push-In auf das Schiff (3s).

---

#### SHOT 18 -- Blick zurueck

Quelle: drehbuch.md -> Beat 5 -> Shot 18
Timeline: 2:20 - 2:26
Emotion: Abschied, letzter Blick, zwei Welten
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-FB-01
**Ingredients:** IO-FB-01, ENV-DOCK-01

**Prompt:**
"Over-shoulder shot, the young man in silhouette foreground turns to look back. Behind him: the industrial docks of the harbor -- containers, cranes, dark alleys he knows by heart. Far in the distance: moving shadows, the syndicate still searching. His back is lit by warm white light from the ramp behind him. He reaches into his cargo pocket, pulls out a chrome pen, rotates it once slowly. Two worlds split the frame -- cold harsh dock light behind, warm ramp light on his back. Slow camera drift. 50mm lens, deep focus, split lighting -- cold blue-gray left, warm white right."

**Dauer:** 4 Sekunden + Flow Extend auf 6 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: fernes Hafengeraeusch, Summen hinter ihm, Ios Atem)
**Notiz:** Split-Lighting ist der visuelle Schluessel: zwei Welten, ein Koerper dazwischen. Die Stift-Rotation ist LANGSAM, BEWUSST -- nicht nervoes wie in Shot 02.

---

#### SHOT 21 -- Innen New World (POV)

Quelle: drehbuch.md -> Beat 6 -> Shot 21
Timeline: 2:50 - 2:55
Emotion: Ankunft, Waerme, "Wer bist du?"
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-NW-INNEN-01
**Ingredients:** ENV-NW-INNEN-01, KID-FB-02

**Prompt:**
"POV steadicam shot moving slowly forward through a warm-lit spacecraft corridor. Walls made of different metal alloys -- a collage of repairs and histories. Pipes on the ceiling are bundled neatly, labeled, laid with intention. Warm white lighting throughout. Cyan-glowing flat screens embedded in walls. At the end of the corridor: a broad figure in dark anthracite clothing stands waiting, upright, hands at sides, silver-gray temples visible. The figure has been waiting. Slow steadicam forward. 35mm lens, warm white interior light, cyan screen accents #00E5FF, first warm environment in the entire scene."

**Dauer:** 4 Sekunden + Flow Extend auf 5 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Schiffs-Summen -- klar, umgebend, lebendig)
**Notiz:** POV = Io sieht. Der Zuschauer IST Io. Steadicam leicht schwankend -- er ist nervoes. Kid am Ende des Korridors muss erkennbar aber nicht detailliert sein. CHARAKTER-LOCK fuer Kid.

---

#### SHOT 26 -- Kid dreht sich um

Quelle: drehbuch.md -> Beat 6 -> Shot 26
Timeline: 3:07 - 3:10
Emotion: Vertrauen, Folgen, das Schiff weiss es
Kategorie: KAMERA

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe KID-FB-02
**Ingredients:** KID-FB-02, ENV-NW-INNEN-01

**Prompt:**
"Full body shot from behind, locked camera. A broad older man in dark anthracite clothing turns without a word and walks down a warm-lit corridor. A black titanium ring on his right hand catches the cyan light from a wall screen briefly. His steps are heavy, sure, rhythmic. He does not look back. He expects to be followed. As he passes a wall screen, a code tree diagram briefly shows a new branch growing. Warm white corridor light, cyan screen accents. 50mm lens, medium depth of field, warm interior lighting."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: schwere sichere Schritte, Summen traegt sie)
**Notiz:** Kid laeuft WEG von der Kamera. Ring-Blitz im Cyan-Licht = 1 Frame Detail. Code-Baum auf dem Bildschirm verzweigt sich -- neues Branch im Moment von Ios Ankunft. Foreshadowing Nova-Code-System.

---

### AKTION

> Schnelle Bewegung. Rennen, Springen, Fallen, Klettern.
> Tracking, Handheld, dynamische Kamera. Hoechster Bewegungsgrad.

---

#### SHOT 04 -- Kapsel oeffnet sich

Quelle: drehbuch.md -> Beat 1 -> Shot 04
Timeline: 0:12 - 0:15
Emotion: Aufbruch, letzte Nacht, Entschlossenheit
Kategorie: AKTION

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-KAPSEL-01
**Ingredients:** IO-MS-01, ENV-KAPSEL-01

**Prompt:**
"Medium shot, frontal at capsule height. A sleeping capsule slides open with a resistant hiss -- not smooth, worn from hundreds of openings. A lean young figure swings his legs out. Heavy dark boots hit the metal grating with a sharp metallic clang that echoes through the corridor. He stands. Oversized gray pullover hangs loose. He pockets a chrome pen in his right cargo pocket -- grip up, habitual. His eyes scan left, right -- doorway check. Red emergency lighting in the corridor. No main lights -- night shift. 50mm lens, eye-level with capsule, red corridor lighting, metallic industrial environment."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Kapsel-Zisch, Stiefel-Aufprall, Lebenserhaltungs-Summen)
**Notiz:** Der Aufprall der Stiefel auf dem Gitterrost ist der Sound-Anker. Io bewegt sich leicht federnd -- 0.85g Schwerkraft. Stift in Cargo-Tasche = bewusste Geste.

---

#### SHOT 09 -- Io rennt

Quelle: drehbuch.md -> Beat 2 -> Shot 09
Timeline: 0:35 - 0:38
Emotion: Geschwindigkeit, Instinkt, das kann er
Kategorie: AKTION

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-FB-01
**Ingredients:** IO-FB-01, ENV-KORRIDOR-01

**Prompt:**
"Medium shot, parallel tracking from the side. A lean young figure runs fast and silent through a narrow industrial corridor -- ball-of-foot running, heavy boots somehow quiet. Oversized clothing flutters behind him. He glides through the corridor like water through a pipe. Alternating light and shadow strobe across his face as he passes under flickering lights. He turns sharply into a gap in the wall -- an opening not on any map. Tracking shot matching his speed. 35mm lens, strobing industrial light, motion blur on background, sharp on subject."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: gedaempfte Schritte, entferntes Rufen, Puls als Metronom)
**Notiz:** Bewegungsunschaerfe im Hintergrund, Io SCHARF. Der Licht-Stroboskop-Effekt (hell-dunkel-Neon-Schatten) verstaerkt die Geschwindigkeit. Io ist SCHNELL und LEISE.

---

#### SHOT 10 -- Die Gassen (4 Sub-Clips)

Quelle: drehbuch.md -> Beat 3 -> Shot 10
Timeline: 1:00 - 1:12
Emotion: Klaustrophobie, Naehe, Ueberlebensinstinkt
Kategorie: AKTION

> 4 separate Clips, je 3 Sekunden. In Resolve als Schnittfolge montiert.

**--- Sub-Clip 10a ---**

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-GASSEN-01

**Prompt:**
"Top-down shot looking straight down. A lean figure jumps over stacked gray numbered crates in a narrow industrial alley. The crates are standard harbor containers, some broken open. Dark confined space, pipes overhead. The figure lands and keeps moving. Bird's eye perspective, 24mm wide angle, dark industrial lighting, confined vertical composition."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF

**--- Sub-Clip 10b ---**

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-GASSEN-01

**Prompt:**
"POV shot -- first person perspective at a corridor junction. Left path is dark, smelling of rust. Right path has voices and ozone glow. The camera commits left into darkness without hesitation. Moving forward through narrow dark passage. Handheld POV, 24mm wide angle, dark ambient, minimal light sources from wall seams."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF

**--- Sub-Clip 10c ---**

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-GASSEN-01

**Prompt:**
"Close-up side angle. A lean figure presses flat against a dark metal wall. Absolute stillness. A large dark figure walks past -- centimeters away. The hidden figure holds his breath. Only eyes move, tracking the passing threat. The dark figure passes and continues. The hidden figure exhales. Locked camera, 85mm lens, very shallow depth of field, dark ambient with single overhead neon strip."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF

**--- Sub-Clip 10d ---**

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-GASSEN-01

**Prompt:**
"Side angle shot inside a horizontal maintenance shaft. A lean figure crawls through a tight space, shoulder against ceiling. Light only from seam cracks. Dust particles float in thin light beams. The figure moves methodically forward through darkness. Claustrophobic framing, 35mm lens, minimal light from shaft seams, dust particles visible in light beams."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF
**Notiz (alle Sub-Clips):** 4 Clips mit eskalierender Enge: Gasse -> Abzweigung -> Wand -> Schacht. Jeder Schnitt wird enger. SFX in ElevenLabs: Schritte, Atem, Herzschlag (beschleunigend), Staub-Rieseln. Montage in Resolve.

---

#### SHOT 11 -- Io faellt aus dem Schacht

Quelle: drehbuch.md -> Beat 3 -> Shot 11
Timeline: 1:15 - 1:18
Emotion: Kontrast-Schock, Enge zu Weite, Dunkel zu Grell
Kategorie: AKTION

**Tool:** Veo 3.1 via Flow
**Modus:** Image to Video
**Input:** Keyframe ENV-DOCK-01

**Prompt:**
"Low angle shot looking up. A lean figure drops out of a maintenance shaft opening above, landing hard on an industrial floor. Blinding white floodlights from all directions -- stark contrast after darkness. The figure blinks, pupils contracting. His hands shake briefly, then stop. He stands, wipes shaft dust from his pants, looks around to orient himself. Shaky camera on impact, then stabilizes. 35mm lens, harsh white floodlight exposure, contrast shock from darkness to brightness."

**Dauer:** 3 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: LAERM-Schock -- Haemmern, Zischen, Funksprueche, dann Atem normalisiert)
**Notiz:** Der Kontrast-Schock ist der Punkt: von Schacht-Dunkelheit zu Dock-Grelle. Pupillen-Kontraktion sichtbar. Kamera wackelt beim Aufprall, dann stabilisiert.

---

### HERO

> Hoechste Qualitaet. 4K Upscale. Schluesselmomente der Szene.
> Langsame oder statische Kamera. Maximale visuelle Wirkung.

---

#### SHOT 06 -- Aussichtsplattform

> Siehe STATISCH-Sektion oben. Doppelt gelistet als STATISCH/HERO.
> 4K Upscale nach finaler Auswahl.

---

#### SHOT 15 -- Die New World (Hero Shot)

Quelle: drehbuch.md -> Beat 4 -> Shot 15
Timeline: 1:54 - 2:02
Emotion: Ehrfurcht, erste Begegnung, das Schiff als Frage
Kategorie: HERO

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe ENV-NW-AUSSEN-01
**Ingredients:** ENV-NW-AUSSEN-01, IO-WS-01

**Prompt:**
"Wide shot, slow push-in. A dark angular spacecraft sits at docking arm 7 between corroded industrial freighters. It is different -- not beautiful, but built with purpose. The hull is dark, coherent. Every plate tells a story -- repair seams from different eras, alloys in four shades of gray, visible handwork. At the bow: faint markings in an unknown script. The loading ramp is half open, warm white light falling out like a crack in the darkness. A small lean figure stands before it, breathing heavily. Slow push-in toward the ship. 35mm anamorphic lens, deep focus, dock darkness with the warm white ramp light as the only bright point, growing warmer as camera approaches."

**Dauer:** 4 Sekunden + Flow Extend auf 8 Sekunden (2 Extensions)
**Aufloesung:** 1080p -> 4K Upscale
**Audio:** OFF (SFX via ElevenLabs: Summen der New World -- klar, lebendig; Ios Atem)
**Notiz:** DER Hero-Shot der Szene. Slow Push-In ueber 8 Sekunden -- jede Extension muss die Bewegung fortsetzen. 4K Upscale NACH finaler Auswahl. Das warme Licht WAECHST waehrend des Push-In. Die Schrift am Bug muss sichtbar aber nicht lesbar sein.

---

#### SHOT 16 -- Gesicht im Licht (Verwandlung)

Quelle: drehbuch.md -> Beat 4 -> Shot 16
Timeline: 2:02 - 2:08
Emotion: Transformation -- von Ueberleben zu Staunen
Kategorie: HERO

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-CU-02
**Ingredients:** IO-CU-02, ENV-NW-RAMPE-01

**Prompt:**
"Close-up, locked camera as the subject walks toward camera into light. A young man's face gradually illuminated by warm white light from a spacecraft ramp. For the first time fully lit: dark circles, crooked nose, sharp cheekbones all visible. No hiding. His eyes shift from watchful to curious. The survivor gives way to the seeker. His mouth opens slightly -- not fear, wonder. The first emotion that is not about survival. Olive-brown skin appears warm-toned for the first time, not red or gray. 85mm lens, shallow depth of field, warm white frontal light from ramp growing brighter, first warm skin tone in the scene."

**Dauer:** 4 Sekunden + Flow Extend auf 6 Sekunden
**Aufloesung:** 1080p -> 4K Upscale
**Audio:** OFF (SFX via ElevenLabs: Summen wird waermer, Dock-Laerm verschwindet)
**Notiz:** Die Licht-Transition auf Ios Gesicht ist der emotionale Kern. Von ROT/GRAU (Hafen) zu WARM WEISS (New World). Erste warme Hauttoene der gesamten Szene. 4K Upscale fuer Details. CHARAKTER-LOCK fuer Io.

---

#### SHOT 20 -- Ins Licht (Die Schwelle)

Quelle: drehbuch.md -> Beat 5 -> Shot 20
Timeline: 2:30 - 2:35
Emotion: Aufbruch, Schwellenuebergang, Altes endet, Neues beginnt
Kategorie: HERO

**Tool:** Veo 3.1 via Flow
**Modus:** Ingredients to Video
**Input:** Keyframe IO-FB-03
**Ingredients:** IO-FB-03, ENV-NW-RAMPE-01

**Prompt:**
"Full body shot from behind. A lean figure in an oversized gray pullover and heavy boots walks away from camera up a spacecraft loading ramp. Not running -- walking. Slow, deliberate, conscious. Each step on the ramp sounds different from the harbor grating -- warmer, softer. The warm white light from inside grows with each step. The figure becomes a dark silhouette consumed by white. Progressive overexposure toward the end -- the figure dissolves into pure white light. 50mm lens, deep focus transitioning to overexposed bloom, warm white light growing to full overexposure."

**Dauer:** 4 Sekunden + Flow Extend auf 5 Sekunden
**Aufloesung:** 1080p -> 4K Upscale
**Audio:** OFF (SFX via ElevenLabs: Rampen-Schritte metallisch-warm, Summen wird lauter, Hafen verstummt)
**Notiz:** Ueberbelichtung ist ABSICHT -- Io wird vom Licht geschluckt. Silhouette im Weiss. Der Kontrast zur Dunkelheit der gesamten bisherigen Szene ist maximal. 4K fuer die Silhouetten-Aufloesung. Letzter Shot vor Beat 6.

---

### UEBERGANG

> Start- und End-Frame definiert. Frames to Video Modus.
> Fuer praezise Uebergaenge zwischen Beats.

---

#### SHOT 27 -- Titel: NEUE WELT

Quelle: drehbuch.md -> Beat 6 -> Shot 27
Timeline: 3:10 - 3:17
Emotion: Die Reise beginnt
Kategorie: UEBERGANG

**Tool:** Veo 3.1 via Flow
**Modus:** Frames to Video (Start: letzter Frame von Shot 26, End: Titel auf Schwarz)
**Input:** Start-Frame aus Shot 26 (Kids Ruecken, warmer Korridor), End-Frame (Schwarz mit Titel)
**Ingredients:** --

**Prompt:**
"Slow fade from a warm-lit spacecraft corridor to black. The warm light gradually dims. Complete darkness. Then, letter by letter, white text appears from the darkness: N E U E W E L T. Below it, half a second later, smaller: Playbook V0. The letters are white #FAFAFA on black #0D0D0D with minimal cyan accents #00E5FF. The font style matches the alien script seen on the ship's bow. Clean, spaced, deliberate. Slow fade, then text reveal letter by letter, static camera, pure black background."

**Dauer:** 4 Sekunden + Flow Extend auf 7 Sekunden
**Aufloesung:** 1080p
**Audio:** OFF (SFX via ElevenLabs: Summen fadet langsam, ein letzter tiefer warmer Ton, dann Stille)
**Notiz:** Frames to Video: definiere Start-Frame (letzter Frame Shot 26) und End-Frame (Titel auf Schwarz). Alternativ: Titel als Motion-Graphics in Resolve erstellen und nur die Fade-Transition in Veo generieren. Die Schrift muss die GLEICHE sein wie am Bug des Schiffs. Oda-Meta-Twist: Zuschauer liest, was Io nicht lesen kann.

---

### CHARAKTER-LOCK

> Shots, die Identitaets-Erhaltung ueber Szenen hinweg erfordern.
> Flow Ingredients to Video mit 3 Referenzbildern pro Charakter.
> Mehrere Shots hier verwenden identische Ingredient-Sets.

---

#### CHARAKTER-LOCK: Io

**Ingredient-Set IO-LOCK:**
1. IO-CU-01 (Gesicht, 3/4 Ansicht, Rot-Licht)
2. IO-FB-01 (Ganzkoerper-Silhouette)
3. IO-ECU-01 (Hand-Detail mit Stift und Narbe)

**Anwenden auf Shots:** 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 13, 14, 14a, 16, 17, 18, 19, 20, 25

**Konsistenz-Checkliste pro Shot:**
- [ ] Uebergrosser grauer Pullover #78909C
- [ ] Cargo-Hose verwaschenes Khaki #A1887F
- [ ] Schwere dunkle Stiefel #212121
- [ ] Kugelschreiber sichtbar (Position wechselt: Hand/Cargo/Brust ab Shot 19)
- [ ] Narbe am linken Handgelenk (in ECU/CU)
- [ ] Schwarzes unordentliches Haar #1A1A1A
- [ ] Olivbraune Haut #8D6E63
- [ ] Augenringe
- [ ] Schlanker, drahtiger Bau

---

#### CHARAKTER-LOCK: Kid

**Ingredient-Set KID-LOCK:**
1. KID-CU-01 (Gesicht, frontal, warmes Licht)
2. KID-FB-02 (Ganzkoerper im Schiffs-Korridor)
3. KID-ECU-01 (Augen-Detail mit Kraehenfuessen)

**Anwenden auf Shots:** 12a (Silhouette), 21, 23, 24, 26

**Konsistenz-Checkliste pro Shot:**
- [ ] Breiter, massiver Bau
- [ ] Dunkle Kleidung -- Anthrazit #263238
- [ ] Silbergraue Schlafen
- [ ] Schwere Haende sichtbar
- [ ] Kraehenfuesse um die Augen
- [ ] Schwarzer Titanring rechte Hand

---

## Vollstaendige Shot-Liste (chronologisch)

> Alle 27 Shots + Sub-Clips in Timeline-Reihenfolge.
> Copy-Paste-Referenz fuer die Resolve-Assembly.

| # | Shot | Timeline | Dauer | Kategorie | Kamera | Modus | 4K | Sektion |
|---|------|----------|-------|-----------|--------|-------|----|---------|
| 1 | 01 Flash-Forward | 0:00-0:03 | 3s | SUBTIL | Locked+Shake | Image to Video | -- | SUBTIL |
| 2 | 02 Schlafkapsel | 0:03-0:08 | 5s | SUBTIL | Locked | Ingredients | -- | SUBTIL |
| 3 | 03 Ios Gesicht | 0:08-0:12 | 4s | SUBTIL | Locked | Ingredients | -- | SUBTIL |
| 4 | 04 Kapsel oeffnet | 0:12-0:15 | 3s | AKTION | Locked | Ingredients | -- | AKTION |
| 5 | 05 Korridor | 0:16-0:20 | 4s | KAMERA | Dolly | Ingredients | -- | KAMERA |
| 6 | 06 Aussichtsplattform | 0:20-0:30 | 10s | STATISCH/HERO | Locked | Ingredients | 4K | STATISCH |
| 7 | 07 Stimmen | 0:30-0:33 | 3s | KAMERA | Handheld | Ingredients | -- | KAMERA |
| 8 | 08 Ios Reaktion | 0:33-0:35 | 2s | SUBTIL | Locked | Image to Video | -- | SUBTIL |
| 9 | 09 Io rennt | 0:35-0:38 | 3s | AKTION | Tracking | Ingredients | -- | AKTION |
| 10 | 10a Gassen: Kisten | 1:00-1:03 | 3s | AKTION | Top-Down | Image to Video | -- | AKTION |
| 11 | 10b Gassen: Abzweigung | 1:03-1:06 | 3s | AKTION | POV | Image to Video | -- | AKTION |
| 12 | 10c Gassen: Wand | 1:06-1:09 | 3s | AKTION | Locked | Image to Video | -- | AKTION |
| 13 | 10d Gassen: Schacht | 1:09-1:12 | 3s | AKTION | Side | Image to Video | -- | AKTION |
| 14 | 10a Cross-Cut NW | 1:12-1:15 | 3s | STATISCH | Locked | Ingredients | -- | STATISCH |
| 15 | 11 Aus Schacht | 1:15-1:18 | 3s | AKTION | Low Angle | Image to Video | -- | AKTION |
| 16 | 12 Docks Panorama | 1:18-1:23 | 5s | KAMERA | Pan L-R | Image to Video | -- | KAMERA |
| 17 | 12a Cross-Cut Rampe | 1:23-1:26 | 3s | KAMERA | Push-In | Ingredients | -- | KAMERA |
| 18 | 13 Syndikat | 1:24-1:28 | 4s | SUBTIL | Locked | Ingredients | -- | SUBTIL |
| 19 | 14 Blick wandert | 1:43-1:50 | 7s | KAMERA | Pan+Push | Ingredients | -- | KAMERA |
| 20 | 14a Ma-Moment | 1:50-1:54 | 4s | STATISCH | Locked | Ingredients | -- | STATISCH |
| 21 | 15 NW Hero | 1:54-2:02 | 8s | HERO | Push-In | Ingredients | 4K | HERO |
| 22 | 16 Gesicht im Licht | 2:02-2:08 | 6s | HERO | Locked | Ingredients | 4K | HERO |
| 23 | 17 Hand Rampe | 2:08-2:12 | 4s | SUBTIL | Locked | Image to Video | -- | SUBTIL |
| 24 | 18 Blick zurueck | 2:20-2:26 | 6s | KAMERA | Drift | Ingredients | -- | KAMERA |
| 25 | 19 Kugelschreiber | 2:26-2:30 | 4s | SUBTIL | Locked | Image to Video | -- | SUBTIL |
| 26 | 20 Ins Licht | 2:30-2:35 | 5s | HERO | Locked | Ingredients | 4K | HERO |
| 27 | 21 Innen NW | 2:50-2:55 | 5s | KAMERA | Steadicam | Ingredients | -- | KAMERA |
| 28 | 22 Coding Visual | 2:55-2:58 | 3s | SUBTIL | Detail-Cuts | Image to Video | -- | SUBTIL |
| 29 | 23 Stille | 2:58-3:01 | 3s | STATISCH | Locked | Ingredients | -- | STATISCH |
| 30 | 24 Kids Augen | 3:01-3:04 | 3s | SUBTIL | Locked | Image to Video | -- | SUBTIL |
| 31 | 25 Ios Reaktion | 3:04-3:07 | 3s | SUBTIL | Locked | Ingredients | -- | SUBTIL |
| 32 | 26 Kid dreht um | 3:07-3:10 | 3s | KAMERA | Locked | Ingredients | -- | KAMERA |
| 33 | 27 Titel | 3:10-3:17 | 7s | UEBERGANG | Locked | Frames to Video | -- | UEBERGANG |

### Zusammenfassung

| Metrik | Wert |
|--------|------|
| Gesamt-Shots | 27 (+ 4 Sub-Clips = 31 Clips) |
| Gesamt-Dauer (roh) | ~148 Sekunden |
| Gesamt-Dauer (Szene) | ~3:17 Minuten |
| 4K Upscale Shots | 4 (Shot 06, 15, 16, 20) |
| Flow Extend noetig | 9 Shots (02, 06, 12, 14, 15, 16, 18, 20, 27) |
| Kling 2.6 Backup | 3 Shots (02 Stift-Rotation, 08 Pupillen, 24 Mikro-Mimik) |
| CHARAKTER-LOCK Io | 20 Shots |
| CHARAKTER-LOCK Kid | 5 Shots |
| Frames to Video | 1 Shot (27 Titel) |

---

## Produktions-Reihenfolge (empfohlen)

> Nicht chronologisch, sondern nach Abhaengigkeiten und Effizienz.

### Phase A: Statische Shots (Geringste Fehlerquote)
1. Shot 10a (Cross-Cut NW) -- Environment only, kein Charakter
2. Shot 14a (Ma-Moment) -- Io statisch, Environment
3. Shot 06 (Aussichtsplattform) -- Ma-Moment, HERO
4. Shot 23 (Stille) -- Beide Charaktere, statisch

### Phase B: Subtile Shots (Charakter-Etablierung)
5. Shot 01 (Flash-Forward) -- Hand-Detail
6. Shot 03 (Ios Gesicht) -- Portrait
7. Shot 08 (Pupillen) -- Augen-Detail
8. Shot 02 (Schlafkapsel) -- Stift-Rotation
9. Shot 17 (Hand Rampe) -- Payoff Shot 01
10. Shot 19 (Kugelschreiber) -- Symbol
11. Shot 13 (Syndikat) -- Bokeh-Komposition
12. Shot 22 (Coding) -- Screens
13. Shot 24 (Kids Augen) -- Mikro-Mimik
14. Shot 25 (Ios Reaktion) -- Nuance

### Phase C: Kamera-Shots (Bewegung)
15. Shot 05 (Korridor) -- Dolly
16. Shot 07 (Stimmen) -- Handheld
17. Shot 12 (Docks) -- Pan
18. Shot 12a (Rampe) -- Push-In
19. Shot 14 (Blick wandert) -- Pan + Push
20. Shot 18 (Blick zurueck) -- Drift
21. Shot 21 (Innen NW) -- Steadicam
22. Shot 26 (Kid dreht um) -- Locked

### Phase D: Aktions-Shots (Hoechste Fehlerquote)
23. Shot 04 (Kapsel oeffnet) -- Aktion + Detail
24. Shot 09 (Io rennt) -- Tracking
25. Shot 10a-d (Gassen) -- 4 Sub-Clips
26. Shot 11 (Aus Schacht) -- Kontrast-Schock

### Phase E: Hero-Shots (4K + Finalisierung)
27. Shot 15 (NW Hero) -- 4K
28. Shot 16 (Gesicht im Licht) -- 4K
29. Shot 20 (Ins Licht) -- 4K

### Phase F: Uebergang
30. Shot 27 (Titel) -- Abhaengig von Shot 26 End-Frame

---

## Kling 2.6 Pro Backup-Protokoll

> Fuer Shots mit Mikro-Mimik, die Veo moeglicherweise nicht liefert.

| Shot | Grund fuer Backup | Kling-Modus | Kosten (geschaetzt) |
|------|-------------------|-------------|---------------------|
| 02 | Stift-Rotation zwischen Fingern | Video Gen | ~$0.35 (5s) |
| 08 | Pupillen-Erweiterung | Video Gen | ~$0.14 (2s) |
| 24 | Mikro-Zucken, feuchte Augen | Video Gen | ~$0.21 (3s) |
| **Gesamt** | | | **~$0.70** |

> Erst Veo testen. Nur bei Qualitaetsproblemen auf Kling wechseln.

---

## Cross-Referenz

| Pipeline-Phase | Datei | Status |
|---------------|-------|--------|
| Phase 1: Keyframes | `01-midjourney/keyframes.md` | Abhaengigkeit |
| Phase 2: Video (diese Datei) | `02-veo/video-prompts.md` | Aktuell |
| Phase 3: Voice + SFX | `03-elevenlabs/` | Naechster Schritt |
| Phase 4: Score | `04-suno/score-prompts.md` | Nach Phase 3 |
| Phase 5: Assembly | `05-resolve/assembly-guide.md` | Nach Phase 4 |
| Charakter-Referenz | `_referenz/charakter-blocks.md` | Quelle |
| Drehbuch | `drehbuch.md` | Quelle |
