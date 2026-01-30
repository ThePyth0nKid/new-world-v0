# ASSEMBLY GUIDE -- Pilot "Licht am Arm 7"

> **Version:** 1.0
> **Tool:** DaVinci Resolve
> **Cross-Referenz:** `drehbuch.md` (27 Shots), `03-elevenlabs/` (Voice + SFX), `04-suno/score-prompts.md`
> **Dauer:** 2:50 - 3:10 Minuten (27 Shots, 6 Beats)

---

## TIMELINE-STRUKTUR

### Video-Tracks

| Track | Funktion | Inhalt |
|-------|----------|--------|
| **V1** | Haupt-Video | Finaler Clip pro Shot (aus `02-veo/`) |
| **V2** | Ueberblendungen / Titel | Crossfades, Schwarzblenden, Titel-Card (Shot 27) |
| **V3** | Effekte | Color Grade Adjustments, Vignetten, Lens Flares (sparsam) |

### Audio-Tracks

| Track | Funktion | Inhalt |
|-------|----------|--------|
| **A1** | Dialog / Voice | Kids Dialog (Shot 24), Syndikat-Stimme (Shot 07) |
| **A2** | Foley | Schritte, Stift-Klicken, Kapsel, Metall-Beruehrung, Atem |
| **A3** | Ambient | Hafen-Summen, Korridor-Atmo, Dock-Laerm, NW-Summen |
| **A4** | Score | Block A (Spannung), Block B (Hoffnung), Block C (Code-Motiv) |
| **A5** | SFX (Risers, Brams, Transitions) | Herzschlag-Akzente, Code-Pulsieren, Uebergangs-Cues |

---

## SHOT-FUER-SHOT ASSEMBLY

### BEAT 1: STILLE VOR DEM STURM [0:00 - 0:30]

---

#### Shot 01 -- Flash-Forward-Fragment
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:00:00 - 00:00:03:00 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot01_flash-forward_final.mp4` |
| **V2** | Schwarzblende am Anfang (1s Fade-In aus Schwarz) |
| **V3** | Ueberbelichtung Warm (+30% Exposure, 7500K) |
| **A1** | --- |
| **A2** | Metall-Beruehrung, Atem (schwer) |
| **A3** | NW-Summen (leise Andeutung, -30dB) |
| **A4** | --- |
| **A5** | --- |
| **Transition In** | Fade from Black (1s) |
| **Transition Out** | Hard Cut to Black (0.5s Schwarzbild) |

#### Shot 02 -- Schlafkapsel F-14
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:03:12 - 00:00:08:12 |
| **Dauer** | 5 Sekunden |
| **V1** | `shot02_schlafkapsel_final.mp4` |
| **V2** | --- |
| **V3** | Cold Grade (4500K, -20% Sat) |
| **A1** | --- |
| **A2** | Stift-Klicken (Rotation), Atem (ruhig) |
| **A3** | Hafen-Summen (-24dB) |
| **A4** | --- |
| **A5** | --- |
| **Transition In** | Hard Cut (aus Schwarzbild) |
| **Transition Out** | Hard Cut |

#### Shot 03 -- Ios Gesicht
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:08:12 - 00:00:12:12 |
| **Dauer** | 4 Sekunden |
| **V1** | `shot03_io-gesicht_final.mp4` |
| **V2** | --- |
| **V3** | Cold Grade (4500K, -20% Sat), Vignette leicht |
| **A1** | --- |
| **A2** | Atem (flacher), Stift-Rotation stoppt, Metall-Knarzen (1x) |
| **A3** | Hafen-Summen (-24dB) |
| **A4** | --- |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 04 -- Kapsel oeffnet sich
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:12:12 - 00:00:15:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot04_kapsel-oeffnet_final.mp4` |
| **V2** | --- |
| **V3** | Cold Grade (4500K, -20% Sat) |
| **A1** | --- |
| **A2** | Kapsel-Oeffnen, Schritte Gitterrost (1x Aufprall), Stift-Stoff (Einstecken) |
| **A3** | Korridor-Atmo (-18dB) |
| **A4** | --- |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 05 -- Der Korridor
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:15:12 - 00:00:19:12 |
| **Dauer** | 4 Sekunden |
| **V1** | `shot05_korridor_final.mp4` |
| **V2** | --- |
| **V3** | Cold Grade (4500K, -20% Sat, Fluor-Flicker auf V3) |
| **A1** | --- |
| **A2** | Schritte Gitterrost (Walking, 4-5 Schritte) |
| **A3** | Korridor-Atmo (-15dB, Haemmern entfernt) |
| **A4** | --- |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 06 -- Aussichtsplattform (Ma-Moment)
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:19:12 - 00:00:29:12 |
| **Dauer** | 10 Sekunden |
| **V1** | `shot06_aussichtsplattform_final.mp4` |
| **V2** | --- |
| **V3** | Minimal Color (4500K, -25% Sat, Sternenlicht-Akzent) |
| **A1** | --- |
| **A2** | Atem (ruhig), Atem-Beschlag (Glas), Stift in Hand |
| **A3** | Hafen-Summen (-30dB, fast Stille) |
| **A4** | Block A beginnt bei ~0:24 als Subfrequenz (-30dB) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Sound Bridge (Stimmen beginnen vor Schnitt) |

---

### BEAT 2: DIE JAGD BEGINNT [0:30 - 1:00]

---

#### Shot 07 -- Stimmen im Korridor
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:29:12 - 00:00:32:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot07_stimmen-korridor_final.mp4` |
| **V2** | --- |
| **V3** | Neutral-Cold (5000K, -10% Sat, +20% Contrast) |
| **A1** | Syndikat-Stimme: "Der Junge mit dem Stift." (-12dB, Low-Pass, Hall) |
| **A2** | Schritte (entfernt, Syndikat), Ios Atem stoppt |
| **A3** | Korridor-Atmo (-15dB) |
| **A4** | Block A (-24dB, Spannung steigend) |
| **A5** | --- |
| **Transition In** | Sound Bridge (Stimmen aus Shot 06) |
| **Transition Out** | Hard Cut |

#### Shot 08 -- Ios Reaktion
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:32:12 - 00:00:34:12 |
| **Dauer** | 2 Sekunden |
| **V1** | `shot08_io-reaktion_final.mp4` |
| **V2** | --- |
| **V3** | Neutral-Cold (5000K, -10% Sat, +20% Contrast), Rot-Schimmer Iris |
| **A1** | --- |
| **A2** | --- |
| **A3** | --- |
| **A4** | Block A (-18dB) |
| **A5** | Herzschlag (1x laut, akzentuiert) |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 09 -- Io rennt
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:34:12 - 00:00:37:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot09_io-rennt_final.mp4` |
| **V2** | --- |
| **V3** | Neutral-Cold (5000K, -10% Sat, +20% Contrast), Stroboskop-Effekt |
| **A1** | --- |
| **A2** | Schritte Gitterrost (Sneaking, leise), Atem (kontrolliert) |
| **A3** | Korridor-Atmo (-12dB) |
| **A4** | Block A (-15dB, Rhythmus beschleunigt) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

---

### BEAT 3: DIE FLUCHT [1:00 - 1:50]

---

#### Shot 10 -- Die Gassen (Sequenz)
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:37:12 - 00:00:49:12 |
| **Dauer** | 12 Sekunden (4x 3s Teilschnitte) |
| **V1** | `shot10a_kisten_final.mp4` → `shot10b_pov_final.mp4` → `shot10c_wand_final.mp4` → `shot10d_schacht_final.mp4` |
| **V2** | Schnelle Hard Cuts zwischen Teilschnitten |
| **V3** | Shifting (5500K, +10% Sat, +30% Contrast), dunkler werdend |
| **A1** | --- |
| **A2** | 10a: Schritte (Running), 10b: Atem, 10c: Atem angehalten, 10d: Schacht-Klettern |
| **A3** | Korridor-Atmo (-12dB) |
| **A4** | Block A (-9dB, Eskalation) |
| **A5** | Herzschlag (beschleunigend, 90→120 BPM) |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 10a -- Cross-Cut: New World am Dock
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:49:12 - 00:00:52:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot10a_crosscut-nw-dock_final.mp4` |
| **V2** | --- |
| **V3** | Kalt mit einem warmen Punkt (Fenster-Licht) |
| **A1** | --- |
| **A2** | --- |
| **A3** | Dock-Laerm (-18dB, leise), NW-Summen (-30dB, Andeutung) |
| **A4** | Block A (-18dB, Dip fuer Kontrast) |
| **A5** | --- |
| **Transition In** | Kontrast-Schnitt (eng→weit, dunkel→Lichtpunkt) |
| **Transition Out** | Hard Cut |

#### Shot 11 -- Io faellt aus dem Schacht
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:52:12 - 00:00:55:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot11_io-faellt_final.mp4` |
| **V2** | --- |
| **V3** | Shifting (5500K, +10% Sat, +30% Contrast), Grell-Weiss Kontrast |
| **A1** | --- |
| **A2** | Aufprall, Staub-Abklopfen, Atem (schwer) |
| **A3** | Dock-Laerm (-9dB, Kontrast-Schock, laut) |
| **A4** | Block A (-6dB, Kontrast-Schock) |
| **A5** | --- |
| **Transition In** | Hard Cut (Kontrast: dunkel→grell) |
| **Transition Out** | Hard Cut |

#### Shot 12 -- Die Docks (Panorama)
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:00:55:12 - 00:01:00:12 |
| **Dauer** | 5 Sekunden |
| **V1** | `shot12_docks-panorama_final.mp4` |
| **V2** | --- |
| **V3** | Shifting (5500K, +10% Sat, +30% Contrast), Schweissblitz-Akzente |
| **A1** | --- |
| **A2** | Schritte (Walking, entfernt) |
| **A3** | Dock-Laerm (-6dB, voll) |
| **A4** | Block A (-9dB, Panorama-Weite) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 12a -- Cross-Cut: Rampe oeffnet sich
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:00:12 - 00:01:03:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot12a_crosscut-rampe_final.mp4` |
| **V2** | --- |
| **V3** | Kontrastmaximum (Rost-Dunkel + warmes Weiss aus Rampe) |
| **A1** | --- |
| **A2** | Rampen-Hydraulik |
| **A3** | Dock-Laerm (-15dB, leiser), NW-Summen (-24dB, lauter als in 10a) |
| **A4** | Block A (-12dB) |
| **A5** | --- |
| **Transition In** | Kontrast-Schnitt |
| **Transition Out** | Hard Cut |

#### Shot 13 -- Syndikat auf den Docks
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:03:12 - 00:01:07:12 |
| **Dauer** | 4 Sekunden |
| **V1** | `shot13_syndikat-docks_final.mp4` |
| **V2** | --- |
| **V3** | Shifting (5500K, +10% Sat, +30% Contrast), Neon von oben |
| **A1** | --- |
| **A2** | Atem (kontrolliert), Container-Klirren |
| **A3** | Dock-Laerm (-12dB) |
| **A4** | Block A (-6dB, Peak Tension) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 14 -- Ios Blick wandert
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:07:12 - 00:01:14:12 |
| **Dauer** | 7 Sekunden |
| **V1** | `shot14_blick-wandert_final.mp4` |
| **V2** | --- |
| **V3** | Shifting → Warm (5500K→6500K ueber 7s, Uebergang) |
| **A1** | --- |
| **A2** | Atem (wird ruhiger) |
| **A3** | Dock-Laerm fadet (-6dB→-24dB), NW-Summen steigt (-24dB→-12dB) |
| **A4** | Block A → Cue 1 (Spannung loest sich) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Sound Bridge (NW-Summen traegt ueber) |

---

### BEAT 4: DAS LICHT [1:50 - 2:20]

---

#### Shot 14a -- Ma-Moment: Ios Atem
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:14:12 - 00:01:18:12 |
| **Dauer** | 4 Sekunden |
| **V1** | `shot14a_ma-atem_final.mp4` |
| **V2** | --- |
| **V3** | Warm Shift (6500K, -5% Sat, +15% Contrast) |
| **A1** | --- |
| **A2** | Atem (tief, einmal) |
| **A3** | NW-Summen (-12dB), Dock-Laerm weg |
| **A4** | Cue 1 → Block B (pp, Stille) |
| **A5** | --- |
| **Transition In** | Sound Bridge |
| **Transition Out** | Hard Cut |

#### Shot 15 -- New World am Dock (Hero Shot)
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:18:12 - 00:01:26:12 |
| **Dauer** | 8 Sekunden |
| **V1** | `shot15_nw-hero_final.mp4` |
| **V2** | --- |
| **V3** | Warm Shift (6500K, -5% Sat, +15% Contrast), Rampen-Licht Akzent |
| **A1** | --- |
| **A2** | Atem (langsam) |
| **A3** | NW-Summen (-9dB, klar) |
| **A4** | Block B (-18dB, Piano-Andeutung) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 16 -- Ios Gesicht im Licht
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:26:12 - 00:01:32:12 |
| **Dauer** | 6 Sekunden |
| **V1** | `shot16_io-im-licht_final.mp4` |
| **V2** | --- |
| **V3** | Warm Shift (6500K→7000K, Haut erstmals warm) |
| **A1** | --- |
| **A2** | --- |
| **A3** | NW-Summen (-9dB, waermer) |
| **A4** | Block B (-12dB, Piano-Motiv klar) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 17 -- Hand an der Rampenwand
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:32:12 - 00:01:36:12 |
| **Dauer** | 4 Sekunden |
| **V1** | `shot17_hand-rampe_final.mp4` |
| **V2** | --- |
| **V3** | Warm Soft (7000K, 0% Sat, +5% Contrast), Narbe im Fokus |
| **A1** | --- |
| **A2** | Metall-Beruehrung (Hum reagiert) |
| **A3** | NW-Summen (-6dB, reagiert auf Beruehrung — Ton steigt) |
| **A4** | Block B (-12dB) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

---

### BEAT 5: DIE ENTSCHEIDUNG [2:20 - 2:50]

---

#### Shot 18 -- Blick zurueck
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:36:12 - 00:01:42:12 |
| **Dauer** | 6 Sekunden |
| **V1** | `shot18_blick-zurueck_final.mp4` |
| **V2** | --- |
| **V3** | Zwei Welten: Hafen kalt (5000K, links), Rampe warm (7000K, rechts) |
| **A1** | --- |
| **A2** | Stift-Rotation (langsam) |
| **A3** | Hafen-Summen (fern, -24dB), NW-Summen (nah, -9dB) |
| **A4** | Block B (-9dB, warm) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 19 -- Der Kugelschreiber
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:42:12 - 00:01:46:12 |
| **Dauer** | 4 Sekunden |
| **V1** | `shot19_kugelschreiber_final.mp4` |
| **V2** | --- |
| **V3** | Warm Soft (7000K, 0% Sat, +5% Contrast), Stift-Chrom-Glanz |
| **A1** | --- |
| **A2** | Stift-Klick (final, Delle glaenzt), Stift-Stoff (Brusttasche) |
| **A3** | NW-Summen (-9dB) |
| **A4** | Block B (-9dB, Entscheidung) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 20 -- Io dreht sich um und geht
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:46:12 - 00:01:51:12 |
| **Dauer** | 5 Sekunden |
| **V1** | `shot20_io-geht_final.mp4` |
| **V2** | Ueberbelichtung steigend (Io wird Silhouette im Weiss) |
| **V3** | Warm → Overexposed (7000K→7500K, -15% Sat, -10% Contrast) |
| **A1** | --- |
| **A2** | Schritte Rampe (Walking, warm), Atem (langsam) |
| **A3** | NW-Summen (-6dB, lauter), Hafen verstummt |
| **A4** | Block B → Cue 2 (-6dB) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Match Cut (Silhouette im Weiss → Korridor-Licht) |

---

### BEAT 6: DIE SCHWELLE [2:50 - 3:10]

---

#### Shot 21 -- Innen (Erster Blick)
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:51:12 - 00:01:56:12 |
| **Dauer** | 5 Sekunden |
| **V1** | `shot21_innen-erster-blick_final.mp4` |
| **V2** | --- |
| **V3** | Overexposed Warm (7500K, -15% Sat, -10% Contrast), Cyan-Akzente |
| **A1** | --- |
| **A2** | Schritte Rampe (Walking, warm, leise) |
| **A3** | NW-Summen (-6dB, umgebend, lebendig) |
| **A4** | Cue 2 → Block B (-12dB) |
| **A5** | --- |
| **Transition In** | Match Cut |
| **Transition Out** | Hard Cut |

#### Shot 22 -- Coding-Visual: Bildschirme
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:56:12 - 00:01:59:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot22_coding-visual_final.mp4` (3 schnelle Schnitte) |
| **V2** | --- |
| **V3** | Cyan-Glow (#00E5FF), Phosphor-Gruen (#00E676) |
| **A1** | --- |
| **A2** | --- |
| **A3** | NW-Summen (-9dB) |
| **A4** | Block C (-9dB, Code-Motiv) |
| **A5** | Code-Pulsieren (-12dB) |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 23 -- Ma-Moment: Stille vor Dialog
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:01:59:12 - 00:02:02:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot23_ma-stille_final.mp4` |
| **V2** | --- |
| **V3** | Overexposed Warm (7500K, -15% Sat), symmetrisch |
| **A1** | --- |
| **A2** | Zwei Atemzuege (Io: jung/schnell, Kid: tief/langsam) |
| **A3** | NW-Summen (-9dB) |
| **A4** | Block B (-24dB, fast Stille) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Hard Cut |

#### Shot 24 -- Kids Augen (Dialog)
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:02:02:12 - 00:02:05:12 |
| **Dauer** | 3 Sekunden (+ Audio overlap in Shot 25) |
| **V1** | `shot24_kids-augen_final.mp4` |
| **V2** | --- |
| **V3** | Overexposed Warm (7500K), Cyan-Schimmer links |
| **A1** | Kids Dialog: "Du bist zu frueh. Oder zu spaet. Egal. Willkommen an Bord." |
| **A2** | --- |
| **A3** | NW-Summen (-12dB, unter Dialog) |
| **A4** | Block B (-24dB, unter Dialog, minimal) |
| **A5** | --- |
| **Transition In** | Hard Cut |
| **Transition Out** | Sound Bridge (Dialog-Ende ueberlappt Shot 25) |

#### Shot 25 -- Ios Reaktion
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:02:05:12 - 00:02:08:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot25_io-reaktion_final.mp4` |
| **V2** | --- |
| **V3** | Overexposed Warm (7500K, weich) |
| **A1** | --- |
| **A2** | Atem (langsamer, entspannter) |
| **A3** | NW-Summen (-9dB) |
| **A4** | Block B (-15dB) |
| **A5** | --- |
| **Transition In** | Sound Bridge (Dialog-Ende aus Shot 24) |
| **Transition Out** | Hard Cut |

#### Shot 26 -- Kid dreht sich um
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:02:08:12 - 00:02:11:12 |
| **Dauer** | 3 Sekunden |
| **V1** | `shot26_kid-dreht-um_final.mp4` |
| **V2** | --- |
| **V3** | Overexposed Warm (7500K), Cyan-Akzente, Titanring-Blitz |
| **A1** | --- |
| **A2** | Schritte (Kids schwere Schritte auf Schiffsboden) |
| **A3** | NW-Summen (-6dB) |
| **A4** | Block B (-15dB, Block C Echo auf Code-Baum Bildschirm) |
| **A5** | Code-Pulsieren (-18dB, kurz, Code-Baum verzweigt) |
| **Transition In** | Hard Cut |
| **Transition Out** | Schwarzblende (2s Fade to Black) |

#### Shot 27 -- Schwarzblende / Titel
| Parameter | Wert |
|-----------|------|
| **Timeline** | 00:02:11:12 - 00:02:18:12 |
| **Dauer** | 7 Sekunden |
| **V1** | --- (Schwarz) |
| **V2** | Titel-Card: "N E U E  W E L T" + "Playbook V0" |
| **V3** | Schwarz (#0D0D0D), Titel Weiss (#FAFAFA), Cyan-Akzente (#00E5FF) |
| **A1** | --- |
| **A2** | --- |
| **A3** | NW-Summen (Fade-Out, -6dB → Stille ueber 5s) |
| **A4** | Block B (letzter Ton, -12dB → Stille) |
| **A5** | --- |
| **Transition In** | Schwarzblende (aus Shot 26) |
| **Transition Out** | Hold Black (2s Stille nach Titel) |

---

## COLOR GRADE PRO BEAT

Emotionale Farbsprache ueber die gesamte Szene. Jeder Beat hat eine eigene Temperatur.

| Beat | Farbtemperatur | Saettigung | Kontrast | Charakter |
|------|---------------|------------|----------|-----------|
| **Beat 1** -- Stille | 4500K (Kalt) | -20% | +10% | Cold, desaturated -- Einsamkeit, Routine, Nachtschicht |
| **Beat 2** -- Jagd | 5000K (Neutral-Kalt) | -10% | +20% | Hart, kontrastreich -- Bedrohung, Schaerfe |
| **Beat 3** -- Flucht | 5500K (Shifting) | +10% | +30% | Rot-Akzente beginnen, dynamisch -- Adrenalin, Chaos |
| **Beat 4** -- Licht | 6500K (Warm Shift) | -5% | +15% | Erster Warmton, sanft -- Staunen, Uebergang |
| **Beat 5** -- Entscheidung | 7000K (Warm Soft) | 0% | +5% | Neutral-warm, weich -- Mut, Ruhe |
| **Beat 6** -- Schwelle | 7500K (Overexposed Warm) | -15% | -10% | Ueberbelichtet, traumhaft -- Ankunft, Versprechen |

### Color Grade Uebergaenge

```
Beat 1 → 2:  Abrupt (Hard Cut, Temperatur springt)
Beat 2 → 3:  Schnell (2s Uebergang, Saettigung steigt)
Beat 3 → 4:  Langsam (Shot 14, 7 Sekunden Uebergang -- KRITISCH)
Beat 4 → 5:  Fliessend (kaum merkbar)
Beat 5 → 6:  Fliessend (Ueberbelichtung steigt sanft)
```

---

## SCHNITT-TEMPO PRO BEAT

| Beat | Shots | Durchschn. Shot-Laenge | Tempo | Uebergangs-Typ |
|------|-------|------------------------|-------|----------------|
| **Beat 1** | 01-06 (6 Shots) | 4.8 Sek | Langsam, atmend | Hard Cuts, 1x Sound Bridge |
| **Beat 2** | 07-09 (3 Shots) | 2.7 Sek | Schnell, praezise | Hard Cuts |
| **Beat 3** | 10-14 (6 Shots, inkl. Cross-Cuts) | 4.5 Sek (Teilschnitte in 10: 3s) | Schnell, eskalierend | Hard Cuts, 2x Kontrast-Schnitt |
| **Beat 4** | 14a-17 (4 Shots) | 5.5 Sek | Langsam, staunend | Hard Cuts, 1x Sound Bridge |
| **Beat 5** | 18-20 (3 Shots) | 5.0 Sek | Mittel, bewusst | Hard Cuts, 1x Match Cut |
| **Beat 6** | 21-27 (7 Shots) | 3.6 Sek | Schnell-poetisch | Hard Cuts, 1x Sound Bridge, 1x Schwarzblende |

### Schnitt-Kurve

```
Tempo:  Langsam ──→ Schnell ──→ PEAK ──→ Langsam ──→ Mittel ──→ Schnell-Poetisch
Beat:      1    ──→    2    ──→   3   ──→    4    ──→    5   ──→       6
```

---

## UEBERGANGS-TECHNIKEN

### Harter Schnitt (Standard)

- **Verwendung:** ~70% aller Schnitte
- **Technik:** Frame-genauer Schnitt, kein Uebergang
- **Wann:** Innerhalb eines Beats, gleiche Umgebung, gleiche Intensitaet

### Sound Bridge

- **Verwendung:** Beat-Uebergaenge, emotionale Verbindungen
- **Technik:** Audio des naechsten Shots beginnt 0.5-1s vor dem Bildschnitt
- **Stellen:**
  - Shot 06 → 07: Syndikat-Stimmen beginnen ueber Aussichtsplattform
  - Shot 14 → 14a: NW-Summen traegt ueber Dock-Laerm
  - Shot 24 → 25: Dialog-Ende klingt in Ios Reaktion nach

### Match Cut

- **Verwendung:** Visuell-poetische Verbindungen
- **Technik:** Objekt/Form verbindet zwei Szenen
- **Stellen:**
  - Shot 20 → 21: Ios Silhouette im Weiss → Korridor-Licht der New World

### Schwarzblende

- **Verwendung:** Sequenz-Ende, Abschluss
- **Technik:** 1.5-2s Fade to Black
- **Stellen:**
  - Shot 01 Ende: Flash-Forward → Schwarz (0.5s, schnell)
  - Shot 26 → 27: Letzte Szene → Titel-Card (2s, langsam)

### Kontrast-Schnitt

- **Verwendung:** Perspektivwechsel, Cross-Cuts
- **Technik:** Hart, aber mit maximalem visuellem Kontrast (eng→weit, dunkel→hell)
- **Stellen:**
  - Shot 10 (Schacht, eng) → Shot 10a (Dock, weit)
  - Shot 12 (Dock-Panorama) → Shot 12a (Rampe, Nahaufnahme)

---

## EXPORT-SETTINGS

### Projekt-Einstellungen

| Parameter | Wert |
|-----------|------|
| **Timeline Framerate** | 24 fps |
| **Timeline Resolution** | 1920 x 1080 (Full HD) |
| **Color Science** | DaVinci YRGB |
| **Color Space** | sRGB |
| **Timeline Pixel Aspect Ratio** | Square (1.0) |

### Master Export (Delivery)

| Parameter | Wert |
|-----------|------|
| **Codec** | H.264 (Web) / ProRes 422 (Archiv) |
| **Resolution** | 1920 x 1080 |
| **4K Upscale** | Optional: Super Scale 2x → 3840 x 2160 |
| **Framerate** | 24 fps |
| **Audio** | 48kHz, 16-bit, Stereo |
| **Audio Channels** | Stereo Mix (alle Tracks) |
| **Dateiname** | `neue-welt_pilot_licht-am-arm7_v[XX].mp4` (H.264) |
| **Dateiname** | `neue-welt_pilot_licht-am-arm7_v[XX].mov` (ProRes) |

### Separate Audio-Exporte (Optional)

| Export | Tracks | Format |
|--------|--------|--------|
| Dialog-Stem | A1 | WAV 48kHz 24-bit Mono |
| Foley-Stem | A2 | WAV 48kHz 24-bit Stereo |
| Ambient-Stem | A3 | WAV 48kHz 24-bit Stereo |
| Score-Stem | A4 | WAV 48kHz 24-bit Stereo |
| SFX-Stem | A5 | WAV 48kHz 24-bit Stereo |
| Full Mix | A1-A5 | WAV 48kHz 16-bit Stereo |

---

## RESOLVE-WORKFLOW CHECKLISTE

### Pre-Assembly
- [ ] Alle 27 Video-Clips aus `02-veo/` importiert
- [ ] Alle Voice-Dateien aus `03-elevenlabs/` importiert
- [ ] Alle SFX-Dateien aus `03-elevenlabs/` importiert
- [ ] Alle Score-Dateien aus `04-suno/` importiert
- [ ] Timeline erstellt: 24fps, 1920x1080, 5 Video + 5 Audio Tracks
- [ ] Bins organisiert: Video / Voice / Foley / Ambient / Score / SFX

### Assembly
- [ ] V1: Alle 27 Clips in Reihenfolge platziert
- [ ] V2: Ueberblendungen und Titel-Card eingefuegt
- [ ] A1: Dialog (Shot 24) und Syndikat-Stimme (Shot 07) platziert
- [ ] A2: Foley pro Shot platziert (gemaess Shot-fuer-Shot oben)
- [ ] A3: Ambient-Loops pro Beat zugeordnet und crossfaded
- [ ] A4: Score-Bloecke A, B, C platziert
- [ ] A5: Herzschlag, Code-Pulsieren, Uebergangs-Cues platziert

### Color Grade
- [ ] Beat 1 Nodes: 4500K, -20% Sat, +10% Contrast
- [ ] Beat 2 Nodes: 5000K, -10% Sat, +20% Contrast
- [ ] Beat 3 Nodes: 5500K, +10% Sat, +30% Contrast
- [ ] Beat 4 Nodes: 6500K, -5% Sat, +15% Contrast
- [ ] Beat 5 Nodes: 7000K, 0% Sat, +5% Contrast
- [ ] Beat 6 Nodes: 7500K, -15% Sat, -10% Contrast
- [ ] Uebergaenge zwischen Beats geprueft (besonders Beat 3→4)

### Audio Mix
- [ ] Lautstaerke-Verhaeltnisse pro Beat gesetzt (gemaess sfx-prompts.md Matrix)
- [ ] Sound Bridges an 3 Stellen geprueft
- [ ] Dialog (A1) klar ueber allen anderen Tracks
- [ ] Ambient-Crossfades smooth
- [ ] Score-Uebergaenge (Block A→B, Cue 1, Cue 2) geprueft
- [ ] Gesamt-Limiter auf -1dBFS

### Final Check
- [ ] Gesamtdauer: 2:50 - 3:10
- [ ] Flash-Forward Payoff: Shot 01 → Shot 17 (visuell + audio)
- [ ] Einziger Dialog (Shot 24) klar und verstaendlich
- [ ] Titel-Card (Shot 27) korrekt: Schrift, Farben, Timing
- [ ] Schwarzblende am Ende: 2s Stille nach Titel
- [ ] Export: H.264 + ProRes 422

---

> **Cross-Referenz:**
> - Drehbuch: `drehbuch.md` (27 Shots, 6 Beats)
> - Voice Prompts: `03-elevenlabs/voice-prompts.md`
> - SFX Prompts: `03-elevenlabs/sfx-prompts.md`
> - Score Prompts: `04-suno/score-prompts.md`
> - Keyframes: `01-midjourney/keyframes.md`
> - Video Prompts: `02-veo/video-prompts.md`
