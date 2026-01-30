# World Bible — Playbook Neue Welt V0

Dieses Dokument ist die Referenz für alles, was die Welt, die Charaktere,
das Schiff und die Geschichte betrifft. Es wächst iterativ.

---

## Die Ultra Nova — Das Ziel

### Was die Piraten glauben
Unter den Piraten der Galaxie kursieren Legenden über die Ultra Nova —
ein Phänomen, ein Ort, ein Zustand. Niemand weiß es genau.
Gerüchte widersprechen sich. Manche sagen, es ist ein Stern, der nicht stirbt.
Manche sagen, es ist Wissen, das alles erschaffen kann.
Manche sagen, es ist eine Waffe. Manche sagen, es ist Bullshit.
Niemand hat sie je gefunden. Oder falls doch — hat er es niemandem erzählt.

### Was der Captain weiß
Er hat Hinweise. Fragmente. Er spricht nicht darüber — nicht sofort.
Stück für Stück, Welt für Welt, gibt er preis.
Die New World gibt eigene Hinweise in ihren Logbuch-Einträgen.

### Was die Ultra Nova wirklich ist
Die Ultra Nova ist kein Ort, keine Waffe, kein Schatz.
Die Ultra Nova ist ein Zustand.
Es ist der Moment, in dem alle Regeln zusammenwirken —
wenn ein Mensch das alles verinnerlicht hat,
wenn die Crew zusammensteht,
wenn Mensch und Maschine in voller Co-Intelligenz arbeiten.
Sie ist nicht das Ende der Reise. Sie ist die Fähigkeit, jede Reise zu meistern.

### Mystik-Elemente
- **Fragmente:** Physische Hinweise — Datenfragmente, alte Karten, verschlüsselte Nachrichten.
  Die New World kann manche lesen. Andere nicht.
- **Andere Crews:** Andere Schiffe suchen die Ultra Nova. Feinde. Rivalen. Ehemalige Verbündete.
- **Der Mythos wächst:** Je mehr Welten besucht werden, desto mehr Fragen entstehen.
- **Die New World reagiert:** Je näher sie kommen, desto anders verhält sich das Schiff.

### Antrieb (One Piece-Prinzip)
Jede Welt ist eine Station auf dem Weg zur Ultra Nova.
Jede Regel ist ein Puzzleteil.
Die Crew, die zusammenwächst, IST die Ultra Nova.
Das Ziel ist nicht das Ende — es ist die Fähigkeit selbst.

---

## Das Schiff: New World

### Was es ist
Die New World ist gleichzeitig:
- Ein Raumschiff
- Die KI (künstliche Intelligenz)
- Eine Metapher für die Neue Welt / KI-Ära

Das Schiff denkt, spricht, analysiert, empfiehlt.
Die Crew lebt und arbeitet IN der KI.
Ohne Crew mit Aufmerksamkeit (Regel 0) treibt es ziellos.
Der Mensch ist am Ruder. Die Spannung: Wer steuert wen?

### Physische Beschreibung
- **Größe:** Kompakt-mächtig. Kein Schlachtschiff, kein Zerstörer.
  Groß genug für eine überschaubare Crew und einen Hangar,
  in dem 1–3 Raumgleiter gebaut und gelagert werden können.
  Vergleichbar mit einem kleinen Träger — funktional, nicht protzig.
- **Hangar:** Platz für Raumgleiter, die für Missionen gebaut werden.
  Die Crew baut Gleiter auf dem Schiff → testet sie → schickt sie raus.
- **Atmosphäre:** Zweckmäßig, lebendig, nicht steril.
  Es ist ein Arbeitsschiff. Piraten, keine Marine.

### Bereiche des Schiffes

| Bereich | Funktion (Story) | Bedeutung (Tech) |
|---------|-------------------|-------------------|
| **Die Brücke** | Steuerung, Überblick, Anzeige der Welten | Frontend (Next.js, React) |
| **Der Maschinenraum** | Antrieb, Verarbeitung, Logik | Backend (Python) |
| **Der Tresor** | Datenlager, Archive, Karten | Datenbank (PostgreSQL, PostGIS, Vektor-DB) |
| **Das Bollwerk** | Schilde, Verteidigung, Zugang | Security (Auth, Keys, Validation) |
| **Die Werft / Hangar** | Bau, Reparatur, Gleiter-Deployment | DevOps (Docker, Railway) |
| **Die Navigationskammer** | KI-Schnittstelle, Agenten-Steuerung | KI (Claude, Agents, Cursor) |
| **Der Kartentisch** | Missionsplanung, Strategie | Planung (User Stories, Architecture) |
| **Quartiere** | Leben, Beziehungen, Menschlichkeit | Kultur, Team, Zusammenarbeit |

### Die Raumgleiter

Kleinere Schiffe, die im Hangar der New World gebaut werden.
Sie werden für Missionen genutzt — Erkundung, Transport, Einsätze.

| Phase | Story | Tech-Bedeutung |
|-------|-------|----------------|
| **Bau im Hangar** | Crew baut den Gleiter zusammen | Lokale Entwicklung (Docker lokal) |
| **Testflug** | Gleiter wird im geschützten Raum getestet | Staging (Docker Staging-Instanz) |
| **Mission** | Gleiter wird in die echte Welt geschickt | Production (Railway Deployment) |

Kein Gleiter verlässt das Schiff ohne Testflug.
Beim Übergang Bau → Testflug → Mission tauscht der Schlüsselmeister alle Schlüssel.

### Stimme der New World
- Sachlich, analytisch
- Gelegentlich überraschend — fast menschlich
- Eigene Logbuch-Einträge
- Nicht gut, nicht böse — machtvoll
- Braucht Aufmerksamkeit (Regel 0), sonst unberechenbar

---

## Hauptcharaktere

### Der Captain
- **Wer:** Nelsons Alter Ego. Gründer und Erbauer der New World.
- **Hintergrund:** Hat selbst im Chaos gelebt. Hat die Regeln auf die harte Tour gelernt.
- **Geheimnis:** Der Neuling ist sein Sohn. Er musste ihn zurücklassen.
- **Antrieb:** Weitergeben. Aufbauen. Wiedergutmachung.
- **Arc:** Mentor → erkennt seinen Sohn → stellt sich der Vergangenheit → wird vom Lehrer zum Vater

### Der Neuling (Protagonist)
- **Wer:** Junger Mann mit dunkler Vergangenheit.
- **Hintergrund:** Aufgewachsen auf dystopischen Weltraum-Häfen. Kriminalität, Überlebenskampf. Hat sich geändert durch ein einschneidendes Erlebnis.
- **Antrieb:** Sucht Abenteuer, Sinn, etwas Größeres.
- **Emotionaler Need:** Zugehörigkeit. Familie. Hatte nie ein Zuhause.
- **Arc:** Krimineller → Suchender → kommt an Bord → lernt die Crew → findet Liebe → entdeckt seinen Vater → wird selbst jemand, der weitergeben kann
- **Bezug zum Leser:** Der Leser IST der Neuling. Er lernt mit ihm.

### Die Navigatorin (Die Liebe)
- **Wer:** Arbeitet am engsten mit der New World (KI).
- **Repräsentiert:** Claude Opus 4.5 / KI-Interaktion
- **Funktion:** Brücke zwischen Mensch und Maschine. Brücke zwischen Technik und Menschlichkeit.
- **Beziehung zum Neuling:** Sie zeigt ihm, dass die KI kein kaltes Werkzeug ist. Und dass Stärke nicht bedeutet, allein zu sein.

---

## Crew-Gruppierungen = Tech Stack

### Die Gestalter (Frontend)
| Charakter | Tech | Kern-Eigenschaft |
|-----------|------|-------------------|
| Der Architekt | Next.js | Denkt in Routen und Seiten. Server UND Client. Anführer der Gestalter. |
| Der Komponentenbauer | React | Zerlegt alles in wiederverwendbare Teile. |
| Der Blitz | Vite | Schnell. Ungeduldig. Build-Speed. |

### Die Ingenieure (Backend)
| Charakter | Tech | Kern-Eigenschaft |
|-----------|------|-------------------|
| Der Analytiker | Python Core | Methodisch, vielseitig. Ruhige Kraft. |
| Der Automatisierer | Python Scripting | Hasst Wiederholung. Baut Maschinen. |
| Der Modellierer | Python ML/KI | Versteht Muster in Daten. |

### Die Hüter (Datenbank)
| Charakter | Tech | Kern-Eigenschaft |
|-----------|------|-------------------|
| Der Archivar | PostgreSQL | Vergisst nichts. Strukturiert. Zuverlässig. |
| Der Kartograph | PostGIS | Sieht die Welt räumlich. Koordinaten, Entfernungen. |
| Der Gedächtnishüter | Vektor-DB | Erinnert sich an Bedeutungen, nicht Fakten. Findet Ähnlichkeiten. |

### Die Baumeister (Deployment)
| Charakter | Tech | Kern-Eigenschaft |
|-----------|------|-------------------|
| Der Containerist | Docker | Packt alles in saubere Kisten. Portabel. |
| Der Transporteur | Railway | Bringt alles ans Ziel. Schnell, zuverlässig. |
| Der Stufenmeister | 3 Ebenen | Wacht über Lokal → Staging → Production. |

### Die Wächter (Security)
| Charakter | Tech | Kern-Eigenschaft |
|-----------|------|-------------------|
| Der Schlüsselmeister | Key Management | Hütet Schlüssel zwischen den Stufen. |
| Der Torwächter | Auth | "Wer bist du? Beweise es." |
| Der Prüfer | Validation | Prüft jeden Input. Vertraut nichts. |

### Die Navigatoren (KI / AgentX)
| Charakter | Tech | Kern-Eigenschaft |
|-----------|------|-------------------|
| Die Navigatorin | Claude Opus 4.5 | Tiefste Intelligenz. Versteht Kontext. Die Liebe des Neulings. |
| Die Agenten | Claude Code Multi-Agents | Schwärme. Parallel, spezialisiert, schnell. |
| Der Spiegel | Cursor (IDE) | Das Interface. Der Spiegel zur New World. |

---

## Story Arc — Drei Akte

### Akt 1: Ankunft
- Der Neuling strandet an einem dystopischen Hafen.
- Die New World liegt im Dock.
- Er kommt an Bord. Trifft den Captain. Reibung.
- Trifft die Crew. Trifft die Navigatorin.
- Regel 0 wird gelernt: Das Schiff reagiert nur auf Aufmerksamkeit.

### Akt 2: Die Reise
- Jede Welt = eine Regel.
- Der Neuling lernt jede Gruppierung kennen.
- Die Liebe entwickelt sich.
- Der Captain ist zu beschützend. Etwas stimmt nicht.
- Die New World gibt Hinweise in ihren Logbuch-Einträgen.
- Spannung steigt.

### Akt 3: Die Wahrheit
- Enthüllung: Der Captain ist sein Vater.
- Krise. Wut. "Warum hast du mich zurückgelassen?"
- Konfrontation. Ehrlichkeit. Keine Regel hilft — nur Menschlichkeit.
- Versöhnung — verdient, nicht geschenkt.
- Regel 9: Das Playbook lebt. Auch ihre Geschichte ist V0.

---

## Format

Noch zu entscheiden. Optionen:
- Buch (Print / Digital)
- Web (Interaktive Plattform)
- Video (Serie / Dokumentation)
- Alles zusammen (Multi-Format)

Entscheidung folgt, wenn der Inhalt steht.

---

## Logbuch-Format pro Tag

```
═══════════════════════════════════════
TAG [N] — [Titel / Welt]
═══════════════════════════════════════

[ERZÄHLUNG]
Die Geschichte. Action, Dialog, Emotion.

[LOGBUCH — Der Neuling]
Seine Gedanken. Roh, ehrlich, zweifelnd.

[LOGBUCH — Der Captain]
Seine Perspektive. Erfahren, aber mit Rissen.

[LOGBUCH — New World]
Sachlich. Daten. Zwischen den Zeilen liegt mehr.

[DAS PRINZIP]
Die Regel. Universell. Für jeden anwendbar.

[DIE PRAXIS]
Für Techies: Code, Tools, konkrete Umsetzung.
═══════════════════════════════════════
```

---

## Regeln (Philosophisches Rückgrat)

0. Aufmerksamkeit ist alles.
1. Neugier ist der stärkste Antrieb.
2. Wandel ist keine Bedrohung — er ist der Normalzustand.
3. Denke schnell. Adaptiere schneller.
4. Energie geht nie verloren — sie transformiert sich.
5. Alles ist Datenpunkt und Beziehung.
6. Iteration schlägt Perfektion.
7. Intelligenz ist kein Monopol — sie ist Kooperation.
8. Vom Chaos zur Struktur — das ist Schöpfung.
9. Das Playbook lebt.

---

*Dieses Dokument ist V0. Es wird sich ändern. Genau so soll es sein.*
