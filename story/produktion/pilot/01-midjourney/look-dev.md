# LOOK-DEV -- Neue Welt Pilot

Tool: Midjourney Niji 7
Ziel: Visuelle Entwicklung fuer Pilot-Szene "Licht am Arm 7"

---

## Referenz-Parameter

**Base (16:9 Szenen):**
```
--niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw
```

**Portrait (2:3):**
```
--niji 7 --sref 205189384 --ar 2:3 --s 250 --style raw
```

**Universal Negative:**
```
--no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## 1. SREF-EXPLORATION

Ziel: 3-5 Style-Codes testen, um den Neue-Welt-Stil zu finden.
Workflow: Jeden Prompt mit --sref random ausfuehren, Ergebnis bewerten, Code notieren.

### SREF-EXPLORE 01 -- Charakter in Umgebung

```
semi-realistic anime style, industrial sci-fi aesthetic, a lean young man in an oversized dark gray pullover standing in a narrow corridor with exposed pipes and scratched metal walls, hard artificial fluorescent lighting casting sharp shadows, worn textures, muted color palette, red emergency light pulse, recycled materials aesthetic, gritty lived-in space station, Cowboy Bebop meets industrial realism --niji 7 --sref random --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### SREF-EXPLORE 02 -- Portrait Emotion

```
semi-realistic anime style, close-up portrait of a tired young man with olive-brown skin and dark circles under dark brown almond eyes, messy black mid-length hair, oversized gray pullover collar pulled up, red emergency light illuminating left side of face, deep shadows on right, sharp cheekbones, crooked nose, industrial sci-fi mood, hard artificial lighting, worn fabric texture, character-focused emotional portrait --niji 7 --sref random --ar 2:3 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### SREF-EXPLORE 03 -- Umgebung Dunkel

```
semi-realistic anime style, industrial sci-fi interior, dark space station docks with spiral arms extending into void, stacked containers like mountain ranges, automated crane systems on ceiling, welding flashes punctuating darkness, steam from valves, harsh white floodlights, orange warning lights, scratched metal surfaces, grated floors, rust patina, recycled materials, no characters, cinematic wide shot composition --niji 7 --sref random --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### SREF-EXPLORE 04 -- Umgebung Warm

```
semi-realistic anime style, industrial sci-fi ship interior, warm white lighting on mixed metal walls showing different alloys and repair seams, embedded flat screens with cyan glow and green code on black background, bundled labeled pipes on ceiling, handmade quality with intentional design, not sterile but purposeful, warm atmosphere contrasting cold space station, cinematic composition --niji 7 --sref random --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### SREF-EXPLORE 05 -- Silhouette Kontrast

```
semi-realistic anime style, wide shot silhouette of a lean young figure standing before a large scratched observation window, starfield beyond, industrial sci-fi space station, dark interior with minimal ambient light, the figure slightly leaning forward with a pen in hand, negative space dominant, muted palette, Miyazaki stillness meets Cowboy Bebop mood, cinematic composition --niji 7 --sref random --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## 2. IO CHARACTER SHEET

5 Posen: Front, 3/4, Seite, Ruecken, Action
Weisser Referenz-Hintergrund

```
semi-realistic anime character reference sheet, five poses arranged left to right: front view, three-quarter view, side profile, back view, running action pose, young male 17 years old, lean wiry build, olive-brown skin, sharp cheekbones, crooked nose, dark brown almond-shaped eyes with prominent dark circles underneath, messy black mid-length hair falling past ears, wearing oversized dark gray pullover with stretched collar, faded khaki cargo pants with multiple pockets, heavy dark boots with worn soles, ballpoint pen visible clipped to right cargo pocket with grip facing up, thin horizontal scar on left wrist, tired but alert expression, slightly forward-leaning posture, white reference background, clean turnaround sheet, full body proportions visible, consistent character design across all poses, industrial sci-fi anime aesthetic --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## 3. KID CHARACTER SHEET

3 Posen: Front, 3/4, Full Body
Warm-weisse Beleuchtung

```
semi-realistic anime character reference sheet, three poses arranged left to right: front view, three-quarter view, full body standing, broad massive male early 40s, imposing powerful build with wide shoulders like a foundation, deep-set dark gray-green eyes with prominent crow's feet like dry riverbeds, weathered face with hard lines, silver-gray hair at temples fading into dark hair, wearing dark anthracite heavy clothing with dense fabric, black titanium ring on right hand, heavy scarred hands hanging at sides, upright commanding posture with squared shoulders, warm white studio lighting, clean reference background, consistent character design across all poses, industrial sci-fi anime aesthetic --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## 4. ENVIRONMENTS

### ENV-01 -- Schlafkapsel F-14

```
semi-realistic anime style, industrial sci-fi interior, extreme close view inside a cramped sleeping pod capsule, barely wider than a human body, red emergency light pulsing weakly from outside the pod casting rhythmic crimson shadows, minimal interior with thin mattress pad and scratched metal walls, synthetic recycled air atmosphere, condensation on cold surfaces, darkness dominant with red pulse as only illumination, claustrophobic framing, lived-in worn textures, space station sleeping quarters --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-02 -- Korridor Hafen 31

```
semi-realistic anime style, industrial sci-fi corridor, narrow space station hallway with exposed sweating pipes on ceiling, scratched walls covered in graffiti including initials and anarchist symbols and illegible alien script, yellow-gray fluorescent tube lighting with one tube flickering near burnout, sleeping pods on both sides like empty drawers, grated metal floor, condensation dripping, recycled air atmosphere, oppressive low ceiling, worn textures throughout, muted rust-brown-gray palette --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-03 -- Aussichtsplattform Arm 12

```
semi-realistic anime style, industrial sci-fi observation deck, large three-meter scratched window with a crack in the left corner repaired with industrial epoxy, beyond the glass endless starfield in deep black void, interior dark with minimal ambient light from distant corridor, cold metal floor and walls, negative space dominant, sense of vastness beyond glass contrasting cramped station interior, faint starlight reflections on scratched glass surface, contemplative atmosphere --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-04 -- Docks Hafen 31

```
semi-realistic anime style, industrial sci-fi space station docks, massive interior with spiral docking arms extending like skeleton bones into vacuum, containers stacked like mountain ranges, automated crane systems moving slowly on ceiling tracks, welding flashes punctuating the darkness like fireflies, steam erupting from pressure valves, rust freighters with identification plates in three different scripts, harsh white floodlights creating sharp shadows, orange warning lights, grated metal floors vibrating with industrial hammering, overwhelming scale --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-05 -- Gassen Hafen 31

```
semi-realistic anime style, industrial sci-fi narrow alley, extremely tight passage between stacked gray numbered cargo crates, exposed pipes running along walls and ceiling, near-total darkness with only faint light from pipe junction seams, claustrophobic vertical framing, maintenance shaft entrance visible, rust and wet metal smell atmosphere, dust particles in thin light beams, scratched surfaces with decades of wear, oppressive industrial space station backstreet --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-06 -- New World Aussen

```
semi-realistic anime style, industrial sci-fi exterior, a dark spacecraft docked at arm 7 of a space station, the ship is not beautiful but purposeful with a hull showing repair seams from different eras and alloys in four different gray tones, visible handwork in every weld seam, among rusty freighters like a foreign word among profanity, illegible ancient script on the bow barely visible in dock lighting, the ramp half open with warm white light spilling onto rusty dock floor like a crack in darkness, single warm light behind a round window, dock darkness surrounding --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-07 -- New World Innen

```
semi-realistic anime style, industrial sci-fi ship interior corridor, warm white lighting throughout, walls made of mixed metal alloys creating a collage of different tones and repair histories, pipes on ceiling bundled and labeled with intentional routing, embedded flat screens in metal walls showing cyan-glowing interface elements and green code on black backgrounds, not sterile but handmade with purpose, warm atmosphere compared to cold station exterior, different alloys visible in walls like a history of hundred ports, lived-in but organized --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### ENV-08 -- New World Rampe

```
semi-realistic anime style, industrial sci-fi transition zone, ship ramp opening viewed from outside on rusty dock floor, warm white light pouring out from ship interior onto rust-colored dock ground creating maximum contrast, hydraulic ramp mechanism visible at edges, the boundary between cold dark dock and warm bright ship interior, white light spilling like milk on earth, threshold between two worlds, metal ramp surface that looks warmer than station metal, atmospheric transition zone --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## 5. KEY OBJECTS

### OBJ-01 -- Kugelschreiber

```
semi-realistic anime style, extreme close-up product shot of an old analog ballpoint pen, scratched chrome body with visible wear marks, a dent on the metal clip, any engraving long since worn away, warm white light reflecting off the chrome surface highlighting the dent, the pen rests on dark worn fabric, industrial sci-fi aesthetic, analog object in a digital world, sharp focus on every scratch and imperfection, the only possession that matters --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### OBJ-02 -- Coding Terminal

```
semi-realistic anime style, extreme close-up of an embedded flat screen built into a metal wall, green monospace code text on pure black background, phosphor-green characters scrolling vertically, a tree structure diagram with branching nodes visible on screen, the word NOVA appearing repeatedly in the code, cyan accent glow from screen edges reflecting on surrounding brushed metal wall, not floating or holographic but physically inset into the wall surface, industrial sci-fi aesthetic, warm ship interior ambient light --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## 6. CODING-VISUAL REFS

### CODE-01 -- Terminal Aesthetic

```
semi-realistic anime style, detail shot of multiple embedded screens in a metal corridor wall, each screen showing green monospace code on black background, the screens are flat and physically built into brushed metal panels like windows into another world, cyan edge glow from active screens casting subtle light on surrounding metal surface, numbers symbols and structures flowing downward, industrial sci-fi ship interior with warm white ambient lighting, the code is alive and moving, not static text but a living system --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

### CODE-02 -- Nova Code Tree

```
semi-realistic anime style, detail shot of a single embedded screen showing a branching tree structure diagram, the tree grows from bottom to top with nodes splitting into branches, phosphor-green lines on black background with cyan accent highlights on active nodes, the word NOVA visible at the root node, a new branch is just appearing at the edge growing in real time, the screen is physically inset into dark metal wall, warm ambient ship lighting reflected on screen glass, the code tree looks organic like a living organism, industrial sci-fi aesthetic --niji 7 --sref 205189384 --ar 16:9 --s 250 --style raw --no photorealistic, hyperrealistic, chibi, oversized eyes, clean new clothing, fantasy, magic, glowing aura, holographic displays, floating UI, 3D render, CGI, bright saturated colors, pristine surfaces, sunlight
```

---

## Workflow-Notiz

1. SREF-Exploration: Alle 5 Prompts mit --sref random ausfuehren
2. Besten Style-Code auswaehlen und als 205189384 in allen weiteren Prompts einsetzen
3. Character Sheets generieren und als Referenz sichern
4. Environments fuer Konsistenz-Check generieren
5. Key Objects und Coding-Visuals als Detail-Referenz
6. Erst danach zu keyframes.md wechseln
