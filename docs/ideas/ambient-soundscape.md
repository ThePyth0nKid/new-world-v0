# Ambient Soundscape — Hafen & Schiff Atmosphäre

## Idee

Ein kontinuierlicher Ambient-Loop, der im Hintergrund läuft und nie ganz aufhört. Erzeugt die Atmosphäre eines lebendigen Weltraumhafens / Schiffs.

## Soundelemente

### Hafen-Atmosphäre
- Entferntes Stimmengewirr (Schmuggler, Händler, Crews)
- Metallisches Knarzen von Ladebrücken
- Container-Geräusche (Klirren, Rollen)
- Dampf / Hydraulik-Zischen
- Schwere Schritte auf Metallgittern
- Gelegentliche Durchsagen (verzerrt, unverständlich)

### Schiff-Atmosphäre
- Tiefes Brummen der Antriebe
- Leises Summen der Lebenserhaltung
- Gelegentliches Piepen von Konsolen
- Knarzen der Schiffshülle
- Entferntes Echo von Schritten in Korridoren

### Weltraum-Elemente
- Tieffrequentes Pulsieren
- Subtile kosmische Drones
- Gelegentliches Funkrauschen

## Technische Umsetzung

```
Option A: Suno v4.5 generierter Loop
- 3-5 Minuten seamless Loop
- Komprimiert auf ~500KB
- Web Audio API für nahtloses Loopen

Option B: Mehrere Layer
- Base Drone (konstant)
- Mid Layer (zyklisch)
- Random Events (gelegentlich)
- Ermöglicht Variation ohne Wiederholung
```

## Integration

- Startet nach dem Preloader "Click to Enter"
- Lautstärke sehr niedrig (10-20%)
- Bleibt beim Navigieren aktiv
- Optional: Mute-Button in der Ecke
- Pausiert bei Tabs im Hintergrund

## Referenzen

- Cowboy Bebop Raumschiff-Szenen
- Blade Runner Stadtgeräusche
- Alien Nostromo Atmosphäre
- Star Wars Cantina (subtiler)

## Status

🟡 Idee — noch nicht implementiert
