# Neue Welt V0 -- Komplettes Asset-Paket fuer Landing Page

Alle Assets die erzeugt werden muessen, um die GTA VI Referenz-Seite
in die Neue Welt V0 Landing Page zu transformieren.

**Vorbereitung:** Zuerst SREF-Code finden (siehe Abschnitt 0).

---

## 0. SREF-Code finden (ZUERST)

Bevor irgendein Asset produziert wird: Den Neue-Welt-Stil-Code fuer
Midjourney Niji 7 etablieren. Dieser Code sichert visuelle Konsistenz
ueber ALLE Bilder hinweg.

### Exploration-Prompt (8x generieren mit --sref random)

```
anime screenshot, semi-realistic style, industrial space station interior,
worn metal textures, hard artificial neon lighting, muted color palette,
detailed character with sharp cheekbones and dark circles under eyes,
oversized gray pullover, scratched metal walls, cable pipes on ceiling,
Cowboy Bebop meets industrial sci-fi, cinematic composition,
--niji 7 --sref random --ar 16:9 --s 250 --style raw
```

**Prozess:**
1. 8 Varianten generieren
2. Die 2-3 besten auswaehlen (40% Realismus, 30% Anime, 30% Industrial)
3. SREF-Codes notieren
4. Mit verschiedenen Szenen testen (Hafen, Schiff, Charakter)
5. Besten Code als `NEUE-WELT-SREF` dokumentieren

**Validierung:**
- [ ] Materialien sehen getragen aus
- [ ] Licht ist hart und kuenstlich
- [ ] Anime-Expressivitaet in Gesichtern vorhanden
- [ ] Keine Fantasy-Elemente
- [ ] Farbpalette gedaempft mit Neon-Akzenten

> Im gesamten Dokument steht `[SREF]` als Platzhalter.
> Ersetze nach dem Finden mit dem echten Code.

---

## 1. HERO SECTION

### Asset 1.1: Hero-Hintergrund (Schiff-Silhouette im Weltraum)

**Verwendung:** Hinter der CSS-Mask, wird beim Scrollen enthuellt
**Format:** WebP, 2560x1440px
**Mapping:** Ersetzt `hero-bg.webp` aus GTA VI Referenz

```
anime screenshot, cinematic wide shot, deep space vista,
dark spaceship silhouette seen from below at docking arm,
the ship has a coherent dark hull made of different alloy panels,
visible repair seams and welding scars across the hull,
warm white light spilling from a half-open boarding ramp,
creating a cone of golden light in the darkness,
industrial dock structures framing the ship on both sides,
rusty crane arms and docking clamps in foreground,
deep space with distant stars in background,
hard artificial lighting from dock spotlights above,
neon-cyan (#00E5FF) accent lights on dock infrastructure,
dramatic scale: ship massive, dock structures even larger,
coal black (#0D0D0D) deep shadows, oxidized silver (#6B6B6B) metals,
no sunlight, no holographic displays, no clean surfaces,
atmospheric industrial haze, welding sparks in distance,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, fantasy, holographic, clean sci-fi,
bright saturated colors, sunlight, glowing aura, 3D render,
pristine surfaces, military ship, sleek design
```

### Asset 1.2: Overlay-Logo "NEUE WELT"

**Verwendung:** Ueberlagert die Mask-Animation waehrend Scroll
**Format:** SVG (Vektor), alternativ WebP mit Transparenz
**Mapping:** Ersetzt `logo.webp` aus GTA VI Referenz

**Anweisung:** Dieses Asset manuell in Figma/Illustrator erstellen.

```
Design-Brief:
- Text: "NEUE WELT" in zwei Zeilen
- Font: Schwer, industrial, kantig -- aehnlich Eurostile oder Bank Gothic
- Farbe: Gradient von Neon-Cyan (#00E5FF) zu Glow-Amber (#FF8F00)
- Textur: Leichte Metall-Kratzer, abgenutzte Kanten
- Darunter klein: "V0" in oxidiertem Silber (#6B6B6B)
- Transparenter Hintergrund
- Kein Glow, kein Fantasy -- industrial, gehaemmert, gepraegt
```

### Asset 1.3: Nav-Logo (klein)

**Verwendung:** Oben links in der NavBar
**Format:** SVG, ca. 40x40px
**Mapping:** Ersetzt `nav-logo.svg` aus GTA VI Referenz

```
Design-Brief:
- Kompaktes "NW" Monogramm oder stilisiertes Schiff-Icon
- Farbe: Neon-Cyan (#00E5FF) oder Weiss (#FAFAFA)
- Minimalistisch, keine Details unter 40px
- Industrial-Aesthetic: kantig, nicht rund
```

---

## 2. PILOT-TEASER VIDEO

### Asset 2.1: Pilot-Teaser Video (Scroll-Scrubbing)

**Verwendung:** Ersetzt `output1.mp4` -- Video scrubt mit ScrollTrigger
**Format:** MP4, H.264, 1920x1080, Keyframe every frame
**Dauer:** 30-45 Sekunden
**Encoding:** `ffmpeg -i input.mp4 -g 1 -bf 0 -c:v libx264 -crf 23 -preset slow output.mp4`
**Max. Groesse:** 15MB

**Produktion: 7 Beats, je ein Keyframe + Video-Clip**

#### Beat 1: Stille (0:00-0:04)

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, extreme close-up, locked frame,
young male face in profile, 17 years old,
olive-brown skin, sharp cheekbones, dark circles under eyes,
messy black mid-length hair falling over forehead,
red pulse lighting cycling slowly on left side of face,
deep shadows on right side, single dim neon light source,
industrial sleeping capsule interior, narrow metal walls,
condensation on cold metal surface nearby,
contemplative expression, eyes half-closed,
hard artificial lighting, claustrophobic framing,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, bright colors, sunlight, smile,
clean surfaces, fantasy, holographic
```

**Video (Veo 3.1 + Flow):**
```
Modus: Image-to-Video
Input: Beat 1 Keyframe
Prompt: "locked camera, extreme close-up,
         subtle breathing motion visible in chest,
         red neon light pulsing slowly from left,
         hair strand moving slightly from ventilation,
         no camera movement, contemplative stillness,
         4 seconds"
```

#### Beat 2: Entdeckung (0:04-0:09)

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, wide establishing shot,
massive cylindrical space station interior, industrial dock area,
spiral docking arms extending into darkness,
rusty freighters and stacked containers,
fog and industrial haze filling the dock space,
in the distance: a dark ship barely visible through haze,
warm white light faintly glowing from its direction,
harsh overhead dock spotlights creating cone-shaped light beams,
rust-brown gray palette (#2A2420), scratched metal everywhere,
cable pipes on ceiling, grated metal walkways,
small silhouette of a lean teenager on a walkway, looking toward the light,
messy black hair, oversized gray pullover, heavy boots,
scale: character tiny against massive dock architecture,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, fantasy, clean surfaces,
bright colors, sunlight, holographic, pristine
```

**Video (Veo 3.1 + Flow):**
```
Modus: Image-to-Video
Input: Beat 2 Keyframe
Prompt: "wide shot, camera slowly panning right,
         fog drifting through industrial dock space,
         distant warm light growing slightly brighter,
         small figure turning head toward the light,
         industrial haze particles visible in spotlight beams,
         5 seconds"
```

#### Beat 3: Annaeherung (0:09-0:14)

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, cinematic medium shot,
young male walking alone on industrial metal walkway,
lean wiry build, 17 years old, olive-brown skin,
messy black hair, oversized dark gray pullover (#78909C),
faded khaki cargo pants (#A1887F), heavy dark boots,
ballpoint pen visible in cargo pocket,
walking toward warm white light source ahead,
face half-illuminated: left side in cold dock light,
right side catching first warm glow from ahead,
expression shifting from wariness to curiosity,
industrial corridor with cable pipes overhead,
grated metal floor reflecting warm and cold light,
dramatic lighting contrast: cold behind, warm ahead,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, fantasy, bright colors,
clean surfaces, sunlight, holographic, smile
```

**Video (Veo 3.1 + Flow):**
```
Modus: Image-to-Video
Input: Beat 3 Keyframe
Prompt: "50mm lens, tracking shot from right side,
         teenage boy walking forward on metal walkway,
         oversized clothing swaying gently with movement,
         warm light growing on his face as he approaches,
         5 seconds, steady walking pace"
```

#### Beat 4: Das Schiff (0:14-0:22) -- HERO SHOT

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, cinematic wide establishing shot,
dark-hulled spaceship docked at industrial station arm,
the ship stands out among rusty battered freighters,
hull made of different alloy panels with visible repair seams,
welding scars and antenna arrays across dark surface,
handcrafted quality: intentional design, not sleek or military,
warm white light spilling from half-open boarding ramp,
creating a cone of golden warmth in the industrial darkness,
a small figure of a teen boy in oversized gray pullover
standing 20 meters from the ramp, looking up in awe,
lean wiry build, messy black hair, heavy boots on grated floor,
harsh industrial dock spotlights above creating hard shadows,
neon-cyan (#00E5FF) accent lights on nearby infrastructure,
dramatic contrast: dark cold dock vs warm inviting ship light,
the ship as a question in a world of rust,
scale: the ship is massive but not overwhelming, purposeful,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, fantasy, holographic,
clean surfaces, bright colors, sunlight, glowing aura,
military ship, sleek design, pristine, new
```

**Video (Veo 3.1 + Flow) -- Hero Shot, 4K Upscale:**
```
Modus: Image-to-Video + Ingredients to Video
Ingredients:
  1. Io-Charakter-Referenz (Look Dev)
  2. New-World-Schiff-Referenz (Look Dev)
  3. Neue-Welt-Stil-Referenz

Prompt: "35mm lens, shallow depth of field,
         slow dolly-in toward dark spaceship at docking arm,
         warm white light growing brighter from open ramp,
         small figure standing still in foreground,
         subtle steam wisps rising from grated dock floor,
         harsh overhead spotlights contrasting warm ship glow,
         8 seconds, cinematic pacing"

Aufloesung: 1080p → 4K Upscale
Dauer: 8 Sekunden (4s + 1x Extend)
```

#### Beat 5: Betreten (0:22-0:27)

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, low angle close-up,
young male hand reaching toward metal boarding ramp,
olive-brown skin, rough cracked fingers, thin scar on left wrist,
ballpoint pen gripped between index and middle finger,
the ramp surface is dark metal with warmth radiating from inside,
warm white light (#FAFAFA) flooding from ship interior above,
character silhouette from behind and below,
lean wiry build, messy black hair backlit by warm glow,
industrial dock floor beneath: cold grated metal,
the contrast between cold dock and warm ship is maximum,
this is the threshold moment: darkness to light,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, fantasy, clean surfaces,
bright colors, holographic, 3D render
```

**Video (Veo 3.1 + Flow):**
```
Modus: Image-to-Video
Prompt: "low angle, locked camera,
         hand slowly reaching toward metal ramp surface,
         fingers with pen touching warm metal,
         warm light intensifying as hand makes contact,
         5 seconds, slow deliberate movement"
```

#### Beat 6: Erwachen (0:27-0:32)

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, interior wide shot,
spaceship corridor from entrance looking inward,
mixed metal alloy walls -- each panel different shade,
visible repair seams creating a patchwork of history,
embedded flat screens with neon-cyan (#00E5FF) glow,
warm white lighting throughout, not sterile but inviting,
cable runs organized on ceiling, handrails with grip marks,
the corridor feels alive: warm, purposeful, maintained with care,
silhouette of the lean teenager at the entrance,
messy black hair, oversized pullover, looking inward with wonder,
backlit by even warmer light from deeper in the ship,
handmade aesthetic: this ship was BUILT, not manufactured,
no holographic displays, screens embedded in walls,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, chibi, fantasy, holographic, floating UI,
clean surfaces, sterile, clinical, bright colors
```

**Video (Veo 3.1 + Flow):**
```
Modus: Image-to-Video
Prompt: "slow push-in through spaceship corridor,
         embedded screens flickering to life one by one,
         cyan light pulses traveling along walls,
         warm white overhead lights brightening gradually,
         the ship is waking up, systems activating,
         5 seconds, gentle forward dolly"
```

#### Beat 7: Titel (0:32-0:37)

**Keyframe (Midjourney Niji 7):**
```
anime screenshot, extreme wide shot,
the spaceship New World seen from outside the station,
ship departing from dock, moving into open space,
dark hull against infinite starfield,
warm white engine glow trailing behind,
neon-cyan (#00E5FF) navigation lights along hull edges,
the industrial station receding in background,
dramatic scale: ship small against vast cosmos,
deep black space (#0D0D0D) with scattered stars,
the feeling of beginning, of departure, of V0,
cinematic composition: ship in lower third, stars fill upper two-thirds,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, fantasy, holographic, bright colors,
sunlight, explosion, military, fleet
```

**Video (Veo 3.1 + Flow):**
```
Modus: Image-to-Video
Prompt: "locked wide shot, ship slowly moving away from station,
         engine glow trailing warm light,
         stars twinkling subtly in deep space,
         5 seconds, minimal movement, vast scale,
         contemplative ending"
```

**Post-Production:**
- Titel "NEUE WELT" + "V0" als Text-Overlay in DaVinci Resolve
- Gradient: Cyan (#00E5FF) zu Amber (#FF8F00)
- Fade-In ueber 2 Sekunden

### Asset 2.2: Pilot-Teaser Poster (Mobile Fallback)

**Verwendung:** Mobile Geraete zeigen Poster statt Video-Scrubbing
**Format:** WebP, 1920x1080

Verwende den besten Frame aus Beat 4 (Hero Shot: Schiff am Dock mit Io).

---

## 3. CHARACTER SECTION: IO

### Asset 3.1: Io Portrait 1 (Frontal/3/4)

**Verwendung:** Ersetzt `jason-1.webp` -- erstes Charakter-Bild, Parallax
**Format:** WebP, 1200x1600px (Portrait)

```
anime screenshot, portrait shot, three-quarter view,
young male, 17 years old, lean wiry runner build, 172cm,
olive-brown skin (#8D6E63), sharp cheekbones, slightly crooked nose,
dark brown almond-shaped eyes (#3E2723) with visible dark circles,
messy black mid-length hair (#1A1A1A) falling over forehead,
expression: guarded but curious, mouth slightly tense,
wearing oversized dark gray pullover (#78909C) with rolled-up sleeves,
revealing rough forearms and thin pale scar on left wrist,
faded indigo undershirt (#37474F) visible at collar,
ballpoint pen tucked behind right ear,
background: blurred industrial space station corridor,
hard artificial lighting from upper left, neon-cyan accent,
deep shadows on right side of face,
worn fabric textures, visible seams on pullover,
character-focused composition, negative space on right,
--niji 7 --sref [SREF] --ar 2:3 --s 250 --style raw
--no photorealistic, chibi, oversized eyes, clean clothing,
fantasy, glowing, muscular, smile, bright colors, sunlight
```

### Asset 3.2: Io Action 2 (Bewegung/Rennen)

**Verwendung:** Ersetzt `jason-2.webp` -- zweites Bild, staerkerer Parallax
**Format:** WebP, 1200x1600px

```
anime screenshot, dynamic medium shot, side view,
young male running through narrow industrial corridor,
lean wiry build, ball-of-foot silent running technique,
olive-brown skin, messy black hair streaming back,
oversized dark gray pullover fluttering with movement,
faded khaki cargo pants (#A1887F) with worn knees,
heavy dark leather boots (#212121) mid-stride,
ballpoint pen visible bouncing in cargo pocket,
expression: focused, alert, survival instinct,
alternating light and shadow from overhead tube lighting,
motion blur on industrial background: pipes, grated walls,
sharp focus on character, dynamic diagonal composition,
scratched metal walls, steam vents, cable bundles,
hard white spotlight from behind creating rim light on hair,
--niji 7 --sref [SREF] --ar 2:3 --s 250 --style raw
--no photorealistic, chibi, clean clothing, fantasy,
bright colors, standing still, relaxed pose, sunlight
```

### Asset 3.3: Io Detail 3 (Haende/Stift)

**Verwendung:** Ersetzt `jason-3.webp` -- drittes Bild, Detail-Shot
**Format:** WebP, 1200x1600px

```
anime screenshot, close-up detail shot,
young male hands holding ballpoint pen between fingers,
olive-brown skin (#8D6E63), rough cracked knuckles from dock work,
thin pale horizontal scar on left wrist visible,
scratched chrome pen body, click mechanism visible, worn grip area,
the pen is old, dented, but clearly treasured,
oversized dark gray pullover sleeve (#78909C) pushed up to elbow,
industrial background blurred: warm spaceship corridor,
warm white lighting from ship interior,
embedded flat screen with cyan glow (#00E5FF) in background,
shallow depth of field, pen and hands sharp, rest soft,
the pen as the analog heart of a digital world,
scratched metal surfaces, recycled materials aesthetic,
--niji 7 --sref [SREF] --ar 2:3 --s 250 --style raw
--no photorealistic, chibi, fantasy, new pen, digital pen,
clean hands, smooth skin, bright colors, glowing
```

---

## 4. CHARACTER SECTION: CAPTAIN KID

### Asset 4.1: Kid Portrait 1 (Kommandierend)

**Verwendung:** Ersetzt `lucia-1.webp` -- erstes Charakter-Bild, Parallax
**Format:** WebP, 1200x1600px

```
anime screenshot, portrait shot, three-quarter view,
broad massive male, early 40s, compact muscular build, 180cm,
weathered bronze-brown skin (#795548), strong angular jaw,
deep-set dark gray-green eyes (#455A64) with crow's feet,
short dark brown hair (#3E2723) with silver-gray temples,
expression: calm authority, measuring gaze, weight of experience,
prominent forehead, faint soldering burn scar on right forearm,
wearing heavy dark jacket almost black with visible repair stitches,
high collar partially upturned,
collarless dark gray shirt (#263238) beneath, top buttons open,
black titanium ring on right ring finger -- simple, unexplained,
heavy hands at sides, not in pockets -- always visible,
background: ship bridge with embedded cyan screens,
hard artificial lighting from bridge displays,
warm white light mixing with cold screen glow,
upright commanding posture -- he IS the foundation,
--niji 7 --sref [SREF] --ar 2:3 --s 250 --style raw
--no photorealistic, chibi, young, smile, clean clothing,
fantasy, bright colors, sunlight, muscular bodybuilder
```

### Asset 4.2: Kid Command 2 (Bruecke/Arbeit)

**Verwendung:** Ersetzt `lucia-2.webp` -- zweites Bild
**Format:** WebP, 1200x1600px

```
anime screenshot, medium shot from slightly below,
broad imposing male standing at ship's navigation table,
early 40s, weathered face, silver temples catching cyan light,
heavy hands spread on physical map surface -- like sea charts,
dark anthracite clothing, reinforced work pants with knee patches,
titanium-buckle belt, multitool on left hip,
small notebook visible on right hip -- never opened publicly,
ship bridge environment: embedded screens with data,
physical map table with navigation markers,
mixed lighting: warm white overhead, cyan (#00E5FF) from screens,
amber (#FF8F00) from a warning indicator in background,
the bridge feels like a workshop not a command center,
worn leather chair, scratched console surfaces,
his presence fills the frame -- authority without volume,
--niji 7 --sref [SREF] --ar 2:3 --s 250 --style raw
--no photorealistic, chibi, fantasy, holographic displays,
floating UI, clean surfaces, military uniform, young
```

### Asset 4.3: Kid Detail 3 (Haende/Ring)

**Verwendung:** Ersetzt `lucia-3.webp` -- drittes Bild
**Format:** WebP, 1200x1600px

```
anime screenshot, close-up detail shot,
massive weathered male hands resting on worn metal railing,
bronze-brown skin, work scars on both hand backs,
soldering burn visible on right forearm,
black titanium ring on right ring finger -- simple, worn, significant,
heavy knuckles, strong fingers that have built ships,
dark jacket sleeve with visible repair stitches,
background: blurred ship corridor with warm white lighting,
shallow depth of field, hands and ring sharp,
the hands tell a story of building, repairing, protecting,
oxidized metal railing under the hands,
warm lighting from ship interior, subtle cyan accent,
--niji 7 --sref [SREF] --ar 2:3 --s 250 --style raw
--no photorealistic, chibi, fantasy, clean hands, young hands,
jewelry, gemstone, ornate ring, bright colors
```

---

## 5. SECOND VIDEO (Schiff-Reveal)

### Asset 5.1: Schiff Interior Video

**Verwendung:** Ersetzt `output2.mp4` -- zweites Scroll-Video
**Format:** MP4, H.264, 1920x1080, keyframe every frame
**Dauer:** 20-30 Sekunden
**Max. Groesse:** 10MB

**Produktion: 4 Clips, je ein Keyframe + Video**

#### Clip 1: Korridor (0:00-0:07)

**Keyframe:**
```
anime screenshot, interior wide shot, spaceship corridor,
warm white lighting throughout (#FAFAFA on #0D0D0D structure),
mixed metal alloy walls: each panel different shade and texture,
visible repair seams, recycled materials, patchwork of ship history,
embedded flat screens with cyan glow (#00E5FF),
cable runs organized on ceiling, handrails with grip marks,
worn but clean floors, boot prints in metal patina,
the corridor feels alive: warm, purposeful, handmade,
no holographic displays, no floating UI, screens in walls,
slight steam from a ventilation grate,
perspective vanishing point draws eye deeper into ship,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no fantasy, holographic, floating displays, sterile, clean sci-fi
```

**Video (Veo 3.1):**
```
"slow steady forward dolly through spaceship corridor,
 warm white lights passing overhead,
 embedded screens flickering with cyan data as camera passes,
 slight steam wisps from ventilation, 7 seconds"
```

#### Clip 2: Maschinenraum (0:07-0:14)

**Keyframe:**
```
anime screenshot, low angle wide shot,
ship engine room, massive machinery in warm amber lighting,
dark teal (#004D40) and obsidian black (#1A1A2E) machinery,
phosphor-green (#00E676) status indicators on panels,
spinning turbine visible behind reinforced glass,
steam and heat haze rising from machinery,
cable bundles thick as arms running along ceiling,
maintenance catwalks crossing above at different heights,
organized chaos: everything has a purpose, nothing is decorative,
the heart of the ship -- pure function made beautiful,
hard shadows from directional amber work lights,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no fantasy, clean, sterile, holographic, bright colors
```

**Video (Veo 3.1):**
```
"low angle, slow pan left to right across engine room,
 turbine spinning behind glass, amber light pulsing,
 steam rising, green indicators blinking,
 7 seconds, industrial grandeur"
```

#### Clip 3: Navigationskammer (0:14-0:21)

**Keyframe:**
```
anime screenshot, medium wide shot,
ship navigation chamber, dark room with cyan-dominated lighting,
central console with physical star maps and embedded screens,
neon-cyan (#00E5FF) light reflecting off every surface,
nebel-indigo (#1A237E) walls absorbing most light,
holographic-free zone: all data on flat embedded screens,
star chart projected on a flat table surface (not floating),
the room feels like a cathedral of information,
puls-cyan (#00BCD4) interface band glowing on empty console,
indicating the navigator is not present,
vast negative space above: the ceiling disappears into darkness,
contemplative atmosphere, the ship's brain,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no holographic, floating UI, fantasy, bright colors, sunlight
```

**Video (Veo 3.1):**
```
"locked camera with slight push-in,
 cyan data scrolling across embedded screens,
 interface band pulsing softly on console,
 star chart data updating on flat table surface,
 7 seconds, contemplative and precise"
```

#### Clip 4: Kueche (0:21-0:28)

**Keyframe:**
```
anime screenshot, warm interior medium shot,
ship kitchen, the most human room on the ship,
NO technology visible: wooden table, ceramic bowls, herb bundles,
warm amber lighting (#FF8F00) from overhead pendant lights,
a wooden spoon resting on the table edge -- polished by decades of use,
dried herbs hanging from hooks on the wall,
worn but clean surfaces: this room is LOVED,
heavy dark brown apron with burn marks hanging on a hook,
steam rising from a pot on a simple stove,
earth tones: dark red (#4E342E), warm gray, copper (#BF6A30),
the table has settled more conflicts than any weapon,
cozy, lived-in, the heart of the crew,
contrast: analog warmth in a digital ship,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no fantasy, technology, screens, holographic, cold lighting,
sterile, modern kitchen, bright white, clean
```

**Video (Veo 3.1):**
```
"locked frame, warm amber lighting,
 steam rising gently from pot on stove,
 herbs swaying slightly from ventilation,
 warm light flickering subtly, 7 seconds,
 contemplative Ma-moment, pure warmth"
```

---

## 6. POSTCARD SECTION (Schiff-Karte)

### Asset 6.1: PostCard Video (Schiff Exterior Rotation)

**Verwendung:** Ersetzt `postcard-vd.mp4` -- Video im Rahmen
**Format:** MP4, 1280x720, keyframe every frame
**Dauer:** 15-20 Sekunden
**Max. Groesse:** 8MB

**Keyframe:**
```
anime screenshot, cinematic three-quarter view,
spaceship New World in open space, slight rotation visible,
dark coherent hull made of different alloy panels,
welding scars, antenna arrays, sensor clusters,
warm white light from interior visible through windows,
neon-cyan (#00E5FF) navigation lights along hull edges,
engine section with subtle warm glow,
deep space background with distant nebula and stars,
the ship has personality: worn, maintained, alive,
dramatic lighting from a distant star creating rim light on hull,
oxidized silver (#6B6B6B) and coal black (#0D0D0D) hull tones,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no military, sleek, clean, fantasy, holographic, new
```

**Video (Veo 3.1):**
```
"slow orbital camera movement around spaceship,
 ship rotating gently in space,
 navigation lights pulsing cyan,
 interior lights warm through windows,
 stars moving slowly in background,
 15 seconds, majestic and contemplative"
```

### Asset 6.2: PostCard Overlay (industrieller Rahmen)

**Verwendung:** Ersetzt `overlay.webp` -- Rahmen ueber dem Video
**Format:** WebP mit Transparenz, 1280x720px

```
anime screenshot, flat design element, industrial metal frame,
weathered brushed steel border with rivets at corners,
scratched oxidized surface, slight rust at edges,
rectangular frame shape with rounded internal corners,
central area completely transparent (for video behind),
thin neon-cyan (#00E5FF) accent line running along inner edge,
the frame looks like a viewport window on a space station,
industrial aesthetic: bolts, weld marks, patina,
no text, no symbols, pure industrial border design,
dark metal tones: oxidized silver (#6B6B6B), coal (#0D0D0D),
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no fantasy, ornate, decorative, clean, new, bright
```

---

## 7. FINAL VIDEO / OUTRO

### Asset 7.1: Final Video (Abschluss-Sequenz)

**Verwendung:** Ersetzt Final.jsx Video -- Abschluss vor Outro
**Format:** MP4, 1920x1080, keyframe every frame
**Dauer:** 10-15 Sekunden

**Keyframe:**
```
anime screenshot, extreme wide shot,
spaceship New World departing into deep space,
seen from behind, engine glow trailing warm amber light,
the industrial station growing smaller in background,
infinite starfield ahead: deep black with scattered stars,
the ship is small against the cosmos but determined,
thin trail of warm light against cold darkness,
neon-cyan navigation lights as tiny dots on hull,
the feeling of beginning: everything ahead, nothing certain,
coal black (#0D0D0D) space, oxidized silver hull catching starlight,
cinematic composition: ship in center, stars everywhere,
--niji 7 --sref [SREF] --ar 16:9 --s 250 --style raw
--no photorealistic, fantasy, fleet, military, explosion,
bright colors, sunlight, planet surface
```

**Video (Veo 3.1):**
```
"locked wide shot, spaceship slowly receding into distance,
 engine glow leaving warm trail,
 stars twinkling in deep space,
 station lights dimming in background,
 10 seconds, sense of departure and beginning"
```

---

## 8. AUDIO ASSETS

### Asset 8.1: Pilot-Teaser Score

**Tool:** Suno v4.5
**Dauer:** 45 Sekunden (passend zum Video)

```
Style: dark ambient electronic, minimal jazz piano, industrial textures
Prompt: "atmospheric sci-fi anime score,
         opens with deep industrial hum and distant metallic echoes,
         solo piano note enters at 5 seconds -- single, reverberating,
         electronic textures build slowly beneath,
         tension rising through synthesizer layers,
         at 15 seconds: transition to warm synthesizer pads,
         piano melody emerges -- simple 4-note motif, hopeful,
         strings-like synth entering softly at 25 seconds,
         builds to quiet emotional peak at 35 seconds,
         fades to single sustained warm tone,
         no vocals, no drums until 20 seconds (then sparse, mechanical),
         influenced by Cowboy Bebop soundtrack and Interstellar,
         tempo: starts at 70 BPM, peaks at 100 BPM, settles at 60 BPM"
```

### Asset 8.2: New World Ship Hum (Ambient Loop)

**Tool:** ElevenLabs Sound Effects
**Dauer:** 60 Sekunden, loopbar

```
"warm deep humming of a living spaceship engine,
 organic resonance between 80-120Hz,
 low frequency vibration that feels alive not mechanical,
 subtle tonal shifts as if the ship is breathing,
 warm and inviting, contrast to cold station sounds,
 occasional very quiet harmonic overtone,
 loopable ambient texture, no clicks or pops at loop point"
```

### Asset 8.3: Industrial Station Ambient

**Tool:** ElevenLabs Sound Effects
**Dauer:** 60 Sekunden, loopbar

```
"industrial space station ambient atmosphere,
 low frequency hum of gravity generators,
 distant metal hammering echoing through corridors,
 hydraulic hiss and pneumatic valve releases,
 ventilation system constant drone,
 occasional welding spark echo in distance,
 muffled voices far away, indistinct,
 claustrophobic enclosed metal space reverb,
 dark industrial atmosphere, no music"
```

---

## 9. FAVICON & SOCIAL

### Asset 9.1: Favicon

**Format:** PNG, 32x32 + 180x180 (Apple Touch)

```
Design-Brief:
- Stilisiertes "NW" oder Mini-Schiff-Silhouette
- Neon-Cyan (#00E5FF) auf Coal Black (#0D0D0D)
- Erkennbar bei 16x16px
- Kein Detail, reine Form
```

### Asset 9.2: OpenGraph Bild (Social Share)

**Format:** WebP/PNG, 1200x630px

```
anime screenshot, cinematic composition,
split screen effect: left side dark industrial dock,
right side warm spaceship interior with cyan accents,
"NEUE WELT" text centered in gradient cyan-to-amber,
"V0" below in smaller oxidized silver text,
"Das Coding-Playbook fuer die KI-Aera" as subtitle,
dark industrial aesthetic, worn textures,
the image tells the story: from darkness to warmth,
coal black (#0D0D0D) to warm white (#FAFAFA) gradient,
neon-cyan (#00E5FF) and amber (#FF8F00) accents,
--niji 7 --sref [SREF] --ar 1200:630 --s 250 --style raw
--no photorealistic, fantasy, bright colors, clean
```

---

## ASSET CHECKLISTE

### Bilder (12 Assets)

| # | Asset | Abmessung | Format | Status |
|---|-------|-----------|--------|--------|
| 1.1 | Hero-Hintergrund (Schiff im Dock) | 2560x1440 | WebP | [ ] |
| 1.2 | Logo "NEUE WELT" | Vektor | SVG | [ ] |
| 1.3 | Nav-Logo "NW" | 40x40 | SVG | [ ] |
| 2.2 | Pilot-Poster (Mobile Fallback) | 1920x1080 | WebP | [ ] |
| 3.1 | Io Portrait (3/4 Ansicht) | 1200x1600 | WebP | [ ] |
| 3.2 | Io Action (Rennen) | 1200x1600 | WebP | [ ] |
| 3.3 | Io Detail (Haende/Stift) | 1200x1600 | WebP | [ ] |
| 4.1 | Kid Portrait (Kommandierend) | 1200x1600 | WebP | [ ] |
| 4.2 | Kid Command (Bruecke) | 1200x1600 | WebP | [ ] |
| 4.3 | Kid Detail (Haende/Ring) | 1200x1600 | WebP | [ ] |
| 6.2 | PostCard Overlay (Rahmen) | 1280x720 | WebP+Alpha | [ ] |
| 9.2 | OpenGraph Social Bild | 1200x630 | WebP | [ ] |

### Videos (4 Assets)

| # | Asset | Aufloesung | Dauer | Max. MB | Status |
|---|-------|-----------|-------|---------|--------|
| 2.1 | Pilot-Teaser (Scroll-Video) | 1920x1080 | 35-40s | 15MB | [ ] |
| 5.1 | Schiff-Interior (Scroll-Video) | 1920x1080 | 25-30s | 10MB | [ ] |
| 6.1 | Schiff Exterior (PostCard-Video) | 1280x720 | 15-20s | 8MB | [ ] |
| 7.1 | Abflug/Outro (Final-Video) | 1920x1080 | 10-15s | 6MB | [ ] |

### Audio (3 Assets)

| # | Asset | Dauer | Format | Status |
|---|-------|-------|--------|--------|
| 8.1 | Pilot-Score (Musik) | 45s | MP3/WAV | [ ] |
| 8.2 | Ship Hum (Ambient Loop) | 60s Loop | WAV | [ ] |
| 8.3 | Station Ambient (Loop) | 60s Loop | WAV | [ ] |

### Design (2 Assets)

| # | Asset | Format | Status |
|---|-------|--------|--------|
| 9.1 | Favicon | PNG 32+180 | [ ] |
| 1.2 | NEUE WELT Logo | SVG | [ ] |

### TOTAL: 21 Assets

---

## PRODUKTIONS-REIHENFOLGE

1. **SREF-Code finden** (Midjourney, 20-30 Minuten)
2. **Io Charakter-Shots** (3.1, 3.2, 3.3) -- sichert Charakter-Konsistenz
3. **Kid Charakter-Shots** (4.1, 4.2, 4.3) -- mit gleichem SREF
4. **Hero-Hintergrund** (1.1) -- groesstes visuelles Impact
5. **Pilot-Teaser Keyframes** (Beat 1-7) -- 7 Keyframes fuer Video
6. **Pilot-Teaser Video** (2.1) -- Veo Clips + DaVinci Assembly
7. **Schiff-Interior Keyframes + Video** (5.1) -- 4 Keyframes + Clips
8. **PostCard Assets** (6.1, 6.2) -- Schiff Exterior + Rahmen
9. **Final Video** (7.1) -- Abflug-Sequenz
10. **Audio** (8.1, 8.2, 8.3) -- Score + Ambients
11. **Design** (1.2, 1.3, 9.1, 9.2) -- Logo, Favicon, Social
12. **Video-Encoding** -- FFmpeg keyint=1 fuer alle Scroll-Videos
13. **Mobile Poster** (2.2) -- Bester Frame aus Pilot-Teaser

---

## ENCODING-BEFEHLE

Nach der Video-Produktion alle Videos fuer Scroll-Scrubbing optimieren:

```bash
# Pilot-Teaser
ffmpeg -i pilot-teaser-raw.mp4 -g 1 -bf 0 -c:v libx264 -crf 23 -preset slow -an pilot-scrub.mp4

# Schiff-Interior
ffmpeg -i ship-interior-raw.mp4 -g 1 -bf 0 -c:v libx264 -crf 23 -preset slow -an ship-scrub.mp4

# PostCard Schiff
ffmpeg -i ship-exterior-raw.mp4 -g 1 -bf 0 -c:v libx264 -crf 25 -preset slow -an postcard-vd.mp4

# Final/Outro
ffmpeg -i departure-raw.mp4 -g 1 -bf 0 -c:v libx264 -crf 23 -preset slow -an final.mp4
```

**Flags erklaert:**
- `-g 1` = Keyframe bei jedem Frame (kritisch fuer Scroll-Scrubbing)
- `-bf 0` = Keine B-Frames (verhindert Dekodierungs-Ruckler)
- `-crf 23` = Gute Qualitaet bei vernuenftiger Dateigrösse
- `-an` = Kein Audio (Audio wird separat geladen)
- `-preset slow` = Bessere Kompression, laengeres Encoding
