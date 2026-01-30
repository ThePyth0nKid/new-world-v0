# Crux — Tech-Seele

## Stack-Position: Geodaten & Raeumliche Intelligenz

## Framework & Sprache
- **Datenbank:** PostGIS (PostgreSQL-Erweiterung)
- **Sprache:** SQL + GeoSQL
- **Libraries:** GeoPandas (Python), Turf.js (Frontend), Leaflet/Mapbox
- **Paradigma:** Raeumlich. Alles hat eine Position. Position hat Bedeutung.

## Funktionsbereich
| Funktion | Was Crux macht |
|----------|----------------|
| Geometry Types | POINT, LINESTRING, POLYGON. Die Welt als Geometrie. |
| Spatial Queries | ST_Distance, ST_Contains, ST_Intersects. Wo ist was? Was ist nah? |
| Coordinate Systems | SRID, WGS84, UTM. Die Sprache der Karten. |
| Geofencing | Grenzen ziehen. Was ist drinnen, was ist draussen? |
| Route Calculation | Kuerzester Weg. Optimale Route. Crux findet sie. |
| Tile Serving | Karten rendern. Die Welt sichtbar machen. |

## Code-Patterns
```sql
-- Crux verortet alles
SELECT
    w.name AS welt_name,
    ST_Distance(
        w.position,
        ST_SetSRID(ST_MakePoint(current_lon, current_lat), 4326)
    ) AS distanz_km,
    ST_Azimuth(
        ST_SetSRID(ST_MakePoint(current_lon, current_lat), 4326),
        w.position
    ) AS richtung_rad
FROM welten w
WHERE ST_DWithin(
    w.position,
    ST_SetSRID(ST_MakePoint(current_lon, current_lat), 4326),
    1000000  -- 1000km Radius
)
ORDER BY distanz_km;

-- "Wir sind hier. Das ist dort. Die Distanz betraegt..."
```

## Sein Charakter als Code
Crux macht unsichtbare Beziehungen sichtbar — durch Raum. Was nah ist, gehoert zusammen. Was fern ist, braucht eine Reise. PostGIS ist die stille Kraft hinter jeder Karte, jeder Navigation, jeder Entfernungsberechnung.
