# Charakter-Blocks -- Single Source of Truth

> **Zweck:** Kompakte englische DNA-Injektionen fuer AI-Prompts.
> Alle tool-spezifischen Prompt-Dateien referenzieren dieses Dokument.
> Quelle: `characters/hauptcharaktere/io/aussehen.md` und `characters/hauptcharaktere/kid/aussehen.md`

---

## Verwendung

1. Kopiere den gewuenschten DNA-Block.
2. Fuege ihn an der Stelle `[CHARACTER]` in deinem Prompt ein.
3. Waehle bei Io die passende Shot-Variante (ECU, CU, MS, FB, WS).
4. Kombiniere mit Stil-Codes aus `stil-codes.md`.
5. Pruefe das Ergebnis gegen `konsistenz-checkliste.md`.

---

## IO-DNA-INJECTION

Kompakter Block -- in jeden Prompt an Position `[CHARACTER]` einsetzen:

```
young male, 17 years old, lean wiry runner build, 172cm,
olive-brown skin #8D6E63, sharp cheekbones, slightly crooked nose,
dark brown almond-shaped eyes #3E2723 with dark circles underneath,
messy black mid-length hair #1A1A1A falling over forehead,
wearing oversized dark gray pullover #78909C with rolled-up sleeves,
faded khaki cargo pants #A1887F with worn knees,
heavy dark leather boots #212121,
ballpoint pen between fingers,
thin scar on left wrist, restless hands
```

---

## IO-DNA-INJECTION-VARIANTS

### ECU (Extreme Close-Up) -- Augen / Haende / Detail

```
young male, 17 years old,
dark brown almond-shaped eyes #3E2723 with heavy dark circles,
sharp cheekbones, slightly crooked nose,
olive-brown skin #8D6E63 with rough texture,
thin scar on left wrist,
ballpoint pen held between index and middle finger,
extreme close-up, shallow depth of field, hard artificial lighting
```

### CU (Close-Up) -- Portrait / Gesicht

```
young male, 17 years old, lean face,
olive-brown skin #8D6E63, sharp cheekbones, slightly crooked nose,
dark brown almond-shaped eyes #3E2723 with dark circles,
messy black mid-length hair #1A1A1A falling over forehead,
oversized dark gray pullover #78909C collar pulled up,
ballpoint pen tucked behind right ear,
intense guarded expression, head slightly tilted,
close-up portrait, hard artificial side lighting
```

### MS (Medium Shot) -- Oberkoerper / Interaktion

```
young male, 17 years old, lean wiry build, 172cm,
olive-brown skin #8D6E63, sharp cheekbones,
dark brown almond-shaped eyes #3E2723 with dark circles,
messy black mid-length hair #1A1A1A,
wearing oversized dark gray pullover #78909C with rolled-up sleeves,
faded khaki cargo pants #A1887F,
ballpoint pen in right hand rotating between fingers,
thin scar on left wrist visible,
slightly forward-leaning posture, restless hands,
medium shot, hard artificial lighting
```

### FB (Full Body) -- Ganzer Koerper / Silhouette

```
young male, 17 years old, lean wiry runner build, 172cm,
olive-brown skin #8D6E63, sharp cheekbones, slightly crooked nose,
dark brown almond-shaped eyes #3E2723 with dark circles,
messy black mid-length hair #1A1A1A falling over forehead,
wearing oversized dark gray pullover #78909C with rolled-up sleeves,
faded khaki cargo pants #A1887F with worn knees,
heavy dark leather boots #212121,
ballpoint pen in right cargo pocket grip visible,
thin scar on left wrist,
slightly forward-leaning posture, shoulders pulled inward,
full body shot, hard artificial lighting
```

### WS (Wide Shot) -- Umgebung / Kontext

```
young male, 17 years old, lean wiry silhouette, 172cm,
oversized dark gray pullover #78909C, faded khaki cargo pants #A1887F,
heavy dark leather boots #212121,
messy black hair, forward-leaning posture,
small figure against industrial environment,
wide shot, hard artificial lighting, cinematic composition
```

---

## KID-DNA-INJECTION

Kompakter Block -- in jeden Prompt an Position `[CHARACTER]` einsetzen:

```
mature male, early 40s, broad imposing build, 180cm,
weathered bronze-brown skin #795548, square jaw, strong brow,
deep-set dark gray-green eyes #455A64 with crow's feet,
short dark brown hair #3E2723 with silver-gray temples,
short stubble beard with silver streaks,
calm composed expression,
wearing heavy dark anthracite jacket #263238 with visible mending stitches,
collarless dark gray shirt, reinforced anthracite work pants,
brown leather boots well-maintained,
black titanium ring on right ring finger,
work scars on both hands,
heavy hands at sides, upright commanding posture
```

---

## KID-DNA-INJECTION-VARIANTS

### ECU (Extreme Close-Up)

```
mature male, early 40s,
deep-set dark gray-green eyes #455A64 with crow's feet,
weathered bronze-brown skin #795548,
short stubble beard with silver streaks,
work scars on hands visible,
black titanium ring on right ring finger,
extreme close-up, shallow depth of field, warm white lighting
```

### CU (Close-Up)

```
mature male, early 40s, square jaw, strong brow,
weathered bronze-brown skin #795548,
deep-set dark gray-green eyes #455A64 with crow's feet,
short dark brown hair #3E2723 with silver-gray temples,
short stubble beard with silver streaks,
calm composed expression,
close-up portrait, warm artificial lighting with cyan accents
```

### MS (Medium Shot)

```
mature male, early 40s, broad imposing build, 180cm,
weathered bronze-brown skin #795548, square jaw,
deep-set dark gray-green eyes #455A64 with crow's feet,
short dark brown hair #3E2723 with silver-gray temples,
wearing heavy dark anthracite jacket #263238 with visible mending stitches,
collarless dark gray shirt,
black titanium ring on right ring finger,
heavy hands at sides, upright commanding posture,
medium shot, warm white lighting
```

### FB (Full Body)

```
mature male, early 40s, broad imposing build, 180cm,
weathered bronze-brown skin #795548, square jaw, strong brow,
deep-set dark gray-green eyes #455A64 with crow's feet,
short dark brown hair #3E2723 with silver-gray temples,
wearing heavy dark anthracite jacket #263238 with visible mending stitches,
collarless dark gray shirt, reinforced anthracite work pants,
brown leather boots well-maintained,
black titanium ring on right ring finger,
work scars on both hands, heavy hands at sides,
upright commanding posture like a foundation,
full body shot, warm white lighting with cyan screen accents
```

---

## Hinweise zur Verwendung

### Prompt-Integration

```
[QUALITY-TAGS], [STYLE-TAGS],
[CHARACTER] <-- Hier DNA-Block einsetzen
[SCENE-CONTEXT],
[LIGHTING],
[ATMOSPHERE-TAGS]
--no [NEGATIVE-TAGS]
```

### Io Outfit-Varianten (Story-Abhaengig)

| Situation | Aenderung gegenueber Standard |
|-----------|-------------------------------|
| Arbeit/Einsatz | Pullover aus, nur dunkles T-Shirt, Stift hinterm Ohr |
| Kueche bei Pyxis | Barfuss, entspannte Schultern |
| Akt 3 (spaet) | Traegt Kids Jacke statt Pullover |

### Kid Outfit-Varianten (Story-Abhaengig)

| Situation | Aenderung gegenueber Standard |
|-----------|-------------------------------|
| Maschinenraum | Jacke aus, Aermel hochgekrempelt, Oel an Haenden |
| Bruecke (formal) | Jacke geschlossen, Kragen hoch |
| Kueche bei Pyxis | Jacke ueber Stuhl, Haende um Tasse, Schultern gesenkt |
| Akt 3 (Versoehnung) | Ohne Jacke, nur Hemd, duennerer Koerper sichtbar |

---

> **Cross-Referenz:**
> - Stil-Codes: `_referenz/stil-codes.md`
> - Konsistenz-Checkliste: `_referenz/konsistenz-checkliste.md`
> - Io Quell-Datei: `characters/hauptcharaktere/io/aussehen.md`
> - Kid Quell-Datei: `characters/hauptcharaktere/kid/aussehen.md`
