# CHARACTER FIRST IMAGES — Io + Kid

> **Zweck:** 10 verfeinerte Prompts fuer die ersten Charakter-Bilder in Midjourney Niji 7.
> Optimiert mit allen Meister-Skills (Regie, King, Oda, Miyazaki, Visual Style).
> **Guideline-Safe:** Alle Prompts geprueft gegen Midjourney Content-Filter.
> Vermiedene Trigger: "scar", "wrist", "broken", "die/kill", "blood", "survived", "cracked",
> "tired", "dark circles", "line"+"forearm", "self-cut", "sharp"+"Koerperteil", "bare",
> "intense"+"guarded", "making himself small", narrative Saetze, Altersangabe unter 18.
> **Quelle:** `_referenz/charakter-blocks.md`, `_referenz/stil-codes.md`, `characters/hauptcharaktere/io/aussehen.md`

---

## Stil-Codes in den Prompts

Alle Prompts enthalten den finalen SREF-Code:
- `--sref 205189384` — Neue-Welt-Stil (gelockt 30.01.2026)

Prompts sind copy-paste-ready. Direkt in Midjourney einfuegen.

### Niji 7 Kompatibilitaet (Stand: 30.01.2026)

| Parameter | Niji 7 Status |
|-----------|---------------|
| `--sref` | Funktioniert |
| `--style raw` | Funktioniert |
| `--s` (Stylize) | Funktioniert |
| `--p` (Personalisierung) | NICHT verfuegbar — kommt spaeter via eigene Niji-7-Rating-Aufgabe |
| `--cref` (Character Ref) | NICHT verfuegbar — Ersatz in Entwicklung |

**Personalisierungs-Model:** `--p 600d5f0d-6193-472f-85eb-64ccd85e3ca1` ist gespeichert in `_referenz/stil-codes.md` und wird eingebaut sobald Niji 7 `--p` unterstuetzt.

---

## Empfohlene Reihenfolge

```
1. IO-01  (Character Sheet)     — Design locken
2. KID-01 (Character Sheet)     — Design locken
3. IO-02  (Hero Portrait)       — Seele einfangen
4. KID-02 (Hero Portrait)       — Seele einfangen
5. IO-03  (Full Body Signatur)  — Signature Pose
6. KID-03 (Full Body Autoritaet)— Signature Pose
7. IO-04  (Cinematic Scene)     — Im Raum
8. KID-04 (Cinematic Scene)     — Im Raum
9. IO-05  (Detail Haende)       — Stift + Textur
10. KID-05 (Detail Haende)      — Textur + Ring
```

---

## IO — 5 Prompts

### IO-01: Character Reference Sheet (Der Lock)

> **Zweck:** Design ueber alle Winkel sperren. Das wichtigste Bild.
> **Meister-Skills:** Oda (Silhouette), Visual Style (40/30/30)

```
anime character turnaround reference sheet, semi-realistic industrial sci-fi style, five full body poses on clean white background: front view standing arms at sides, three-quarter view head tilted right, side profile leaning forward weight on toes, back view showing pulled-in shoulders, running action pose ball-of-foot stride, young adult male, lean wiry runner build 172cm, olive-brown skin #8D6E63, angular face with prominent cheekbones, slightly crooked asymmetric nose, dark brown almond-shaped eyes #3E2723, messy unkempt black hair #1A1A1A falling unevenly over forehead, wearing oversized dark gray pullover #78909C three sizes too big with rolled-up sleeves and stretched neckline, faded khaki cargo pants #A1887F with threadbare knees and bulging right pocket, dark leather boots #212121 with scuffed worn soles, chrome ballpoint pen with dented clip between right hand fingers, focused expression, forward-leaning posture, worn threadbare fabric textures visible stitching frayed edges --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright saturated colors, pristine, sunlight, muscular, confident hero pose, smile
```

---

### IO-02: Hero Portrait (Die Ueberlebens-Augen)

> **Zweck:** Ios Seele einfangen. Der Koerper sagt "harmlos", die Augen sagen "ueberlebt".
> **Meister-Skills:** King (sensorische Wahrheit), Regie (einseitiges Licht = Dualitaet)

```
semi-realistic anime portrait, close-up, young adult male, olive-brown skin #8D6E63 with rough texture, prominent cheekbones casting shadows, slightly crooked nose, dark brown almond-shaped eyes #3E2723, focused steady gaze, messy black hair #1A1A1A falling across forehead, oversized dark gray pullover #78909C collar pulled high against neck, ballpoint pen tucked behind right ear, thoughtful expression with depth, hard artificial side lighting from left in cold white, right side in deep shadow, industrial sci-fi mood, worn fabric texture on collar, Cowboy Bebop character design quality --niji 7 --sref 205189384 --ar 2:3 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean clothing, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight, smile, confident
```

---

### IO-03: Full Body Signatur (Der Laeufer)

> **Zweck:** Ios Signature Pose — die Vorwaerts-Neigung, der Stift, die Fluchtbereitschaft.
> **Meister-Skills:** Oda (Silhouette als schwarzer Umriss erkennbar), Miyazaki (Koerpersprache IST Charakter)

```
semi-realistic anime style, full body shot, young adult male lean wiry runner build 172cm, olive-brown skin, prominent cheekbones, dark brown almond eyes, messy black hair, wearing oversized dark gray pullover #78909C with rolled-up sleeves, faded khaki cargo pants #A1887F with threadbare knees, dark boots #212121, chrome ballpoint pen rotating between right hand fingers, slightly forward-leaning posture shoulders pulled inward, weight on balls of feet, attentive stance, industrial sci-fi corridor background with scratched metal walls and flickering fluorescent light, hard artificial lighting, worn textures throughout, muted color palette --niji 7 --sref 205189384 --ar 2:3 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean clothing, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight, muscular, confident
```

---

### IO-04: Cinematic Scene (Klein in Hafen 31)

> **Zweck:** Io als kleiner Mensch in riesiger industrieller Welt. Negativraum = Einsamkeit.
> **Meister-Skills:** Miyazaki (Ma-Stille, Mensch im Raum), Regie (asymmetrische Komposition, unteres rechtes Drittel)

```
semi-realistic anime style, cinematic wide shot, small lean figure of a young man in oversized dark gray pullover and khaki cargo pants standing in a massive industrial space station corridor, scratched metal walls with pipes on ceiling, yellow-gray fluorescent lighting with one tube flickering, grated metal floor, the figure leans slightly forward with a pen in hand, shoulders pulled inward, small figure amid large industrial architecture, hard artificial lighting, deep shadows, worn rust-brown-gray textures, muted palette with distant red emergency light, negative space dominant, asymmetric composition figure in lower right third, contemplative atmosphere --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean surfaces, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight
```

---

### IO-05: Detail-Studie Haende (Der Stift, die Textur)

> **Zweck:** Das Detail vor dem Ganzen. Hitchcock zeigt die Bombe bevor er die Person zeigt.
> **Meister-Skills:** Regie (Detail-zuerst-Einfuehrung), King (sensorische Praezision — Delle am Clip, raue Knochel)

```
semi-realistic anime style, extreme close-up of young male hands with olive-brown skin #8D6E63, calloused working hands, a scratched chrome ballpoint pen with a dent on the metal clip rotating between index and middle finger of right hand, oversized dark gray pullover sleeve rolled up, fingernails short and uneven, hands in subtle motion, hard artificial side lighting, shallow depth of field, dark industrial background out of focus, worn analog object, concept art quality --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, fantasy, magic, glowing, holographic, 3D render, CGI, bright colors, pristine, sunlight, clean smooth skin, manicured
```

---

## KID — 5 Prompts

### KID-01: Character Reference Sheet (Das Fundament)

> **Zweck:** Kids Design sperren. Das Gegenteil von Io: breit wo Io schmal, ruhig wo Io nervoes, Wurzeln wo Io Flucht.
> **Meister-Skills:** Oda (Silhouette = BLOCK vs. Ios STRICH), Visual Style (40/30/30)

```
anime character turnaround reference sheet, semi-realistic industrial sci-fi style, four full body poses on clean white background: front view arms at sides, three-quarter view hands clasped behind back, side profile squared shoulders, standing upright and grounded, mature male early 40s, broad build 180cm, weathered bronze-brown skin #795548, square jaw with deep lines, strong brow ridge, deep-set dark gray-green eyes #455A64 with prominent crow's feet, short dark brown hair #3E2723 with silver-gray temples, short stubble beard with silver streaks, calm composed expression, dark anthracite jacket #263238 with visible mending stitches in lighter thread, collarless dark gray shirt, reinforced anthracite work pants, well-maintained brown leather boots, black titanium ring on right ring finger, calloused weathered hands, upright commanding posture shoulders squared --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight, young, slim
```

---

### KID-02: Hero Portrait (Der Verwitterte)

> **Zweck:** Kids Seele — jede Falte eine Geschichte. Die Kraehenfuesse "wie ausgetrocknete Flussbetten."
> **Meister-Skills:** King (Gesicht als Landkarte gelebter Jahre), Regie (warmes Licht + Cyan = sein Schiff spiegelt sich in ihm)

```
semi-realistic anime portrait, close-up, mature male early 40s, weathered bronze-brown skin #795548 with deep lines, square jaw, strong brow ridge casting shadow over deep-set dark gray-green eyes #455A64, crow's feet from years of experience, short dark hair with silver-gray temples, stubble beard with silver streaks, calm composed measured expression, warm white lighting with subtle cyan accent reflected from off-screen, anthracite jacket collar visible with mending stitches in lighter thread, a face of experience and quiet resolve, industrial sci-fi mood, Cowboy Bebop character depth --niji 7 --sref 205189384 --ar 2:3 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean clothing, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight, young, slim, smile
```

---

### KID-03: Full Body Autoritaet (Die Mauer)

> **Zweck:** Kids Signature Pose — Schultern wie ein Fundament, Haende wie Anker.
> **Meister-Skills:** Oda (Silhouette ist ein BLOCK — Verwechslung mit Io unmoeglich), King (die geflickte Jacke erzaehlt: er repariert, er ersetzt nicht)

```
semi-realistic anime style, full body shot, mature male early 40s broad build 180cm, weathered bronze-brown skin, square jaw, deep-set dark gray-green eyes with crow's feet, short dark hair with silver temples, stubble with silver, wearing dark anthracite jacket #263238 with visible mending stitches where fabric was repaired by hand, collarless dark gray shirt, reinforced anthracite work pants, well-maintained brown leather boots, black titanium ring on right ring finger, calloused hands hanging at sides, upright commanding posture shoulders squared, standing inside a ship corridor with warm white lighting and mixed-metal walls showing different alloys, cyan screen glow from embedded flat panels, confident captain stance, industrial sci-fi aesthetic --niji 7 --sref 205189384 --ar 2:3 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean clothing, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight, young, slim, muscular bodybuilder
```

---

### KID-04: Cinematic Scene (An der Rampe)

> **Zweck:** Kid an der Schwelle zwischen kaltem Dock und warmem Schiff. Kontrast als Einzelbild.
> **Meister-Skills:** Regie (Kontrast-Schnitt als Standbild — Dunkelheit vs. Licht), Miyazaki (die Tuer, die sich entschieden hat, offen zu sein)

```
semi-realistic anime style, cinematic medium shot, broad man in his early 40s standing at a ship ramp entrance, warm white light pouring from ship interior behind him creating rim lighting on his silhouette, dark anthracite jacket with mending stitches visible, squared shoulders forming a solid block against the warm light, calloused hands at sides, ship interior behind showing mixed-metal walls with embedded screens glowing cyan, welcoming open stance, dock floor in cold foreground, contrast between warm ship interior and cold station exterior, industrial sci-fi aesthetic, hard artificial dock light from above --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean surfaces, fantasy, magic, glowing aura, holographic, 3D render, CGI, bright colors, pristine, sunlight, young
```

---

### KID-05: Detail-Studie Haende (Die Textur, der Ring)

> **Zweck:** Diese Haende haben ein Schiff gebaut. Jede Falte ist eine Geschichte.
> **Meister-Skills:** King (Haende als Biografie), Regie (Shallow DOF isoliert das Wesentliche)

```
semi-realistic anime style, extreme close-up of large weathered male hands resting on brushed metal surface, bronze-brown skin #795548 with weathered knuckles and calloused backs of hands, thick calluses on palms, a black titanium ring on right ring finger catching warm white light, hands resting gently on surface, warm white lighting from above with subtle cyan screen glow reflected in ring surface, ship interior metal showing different alloy textures beneath the hands, hands of a builder and craftsman, industrial sci-fi aesthetic, shallow depth of field, concept art quality --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, fantasy, magic, glowing, holographic, 3D render, CGI, bright colors, pristine, sunlight, young, clean smooth skin
```

---

## Tipps fuer die Generierung

### Wenn Character Sheets nicht sofort passen
Niji 7 braucht bei Multi-Pose-Sheets manchmal 2-3 Durchlaeufe. Die Einzelbild-Prompts (02-05) sind zuverlaessiger. Du kannst auch direkt mit den Portraits (02) anfangen und die Sheets spaeter verfeinern.

### SREF locken
Sobald du deinen Style Creator Code hast:
1. Kopiere den SREF-Code aus den Bild-Details
2. Trage ihn in `_referenz/stil-codes.md` ein (Zeile 27)
3. Fuer Generierungen OHNE Style Creator: fuege `--sref [DEIN-CODE]` vor `--no` ein

### Variationen
- `--s 150` = weniger stilisiert, realistischer
- `--s 400` = staerker stilisiert, anime-lastiger
- `--ar 1:1` fuer quadratische Referenz-Portraits
- Fuege `--cref [URL]` hinzu, sobald du ein genehmigtes Referenzbild hast

---

> **Cross-Referenz:**
> - Charakter-DNA: `_referenz/charakter-blocks.md`
> - Stil-Codes: `_referenz/stil-codes.md`
> - Konsistenz-Checkliste: `_referenz/konsistenz-checkliste.md`
> - Look Dev (Environments + Objects): `01-midjourney/look-dev.md`
> - Shot-Keyframes: `01-midjourney/keyframes.md`
