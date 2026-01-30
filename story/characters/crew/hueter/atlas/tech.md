# Atlas — Tech-Seele

## Stack-Position: Relationale Datenbank / Persistent Storage

## Framework & Sprache
- **Datenbank:** PostgreSQL 16+
- **Sprache:** SQL (PL/pgSQL fuer Stored Procedures)
- **ORM:** Prisma / Drizzle (TypeScript-seitig), SQLAlchemy (Python-seitig)
- **Paradigma:** Relational. ACID. Konsistent. Zuverlaessig.

## Funktionsbereich
| Funktion | Was Atlas macht |
|----------|----------------|
| Tables & Relations | Schema-Design. Jede Tabelle eine Wahrheit. Foreign Keys = Beziehungen. |
| ACID Transactions | Atomicity, Consistency, Isolation, Durability. Kein halber Zustand. |
| Indexes | Schneller Zugriff. Atlas vergisst nichts UND findet alles. |
| Migrations | Schema-Evolution. Die Datenbank waechst — kontrolliert. |
| Constraints | CHECK, UNIQUE, NOT NULL. Regeln, die nicht gebrochen werden koennen. |
| Backups | Point-in-Time Recovery. Selbst wenn alles brennt — Atlas hat eine Kopie. |

## Code-Patterns
```sql
-- Atlas denkt in Strukturen, die halten
CREATE TABLE crew_members (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT NOT NULL UNIQUE,
    role        TEXT NOT NULL,
    group_name  TEXT NOT NULL,
    joined_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    is_active   BOOLEAN NOT NULL DEFAULT true,

    -- Atlas vergisst nicht, wann sich etwas aendert
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Beziehungen sind fuer Atlas keine Metapher. Sie sind Schema.
CREATE TABLE crew_relationships (
    from_member UUID REFERENCES crew_members(id),
    to_member   UUID REFERENCES crew_members(id),
    type        TEXT NOT NULL, -- 'partner', 'mentor', 'rival'
    PRIMARY KEY (from_member, to_member)
);

-- Wenn Atlas faellt, faellt alles.
```

## Sein Charakter als Code
PostgreSQL. Die Datenbank, der du dein Leben anvertraust. Atlas ist nicht glamouroes — er ist zuverlaessig. Und in einer Welt voller Hypes ist Zuverlaessigkeit die seltenste Eigenschaft.
