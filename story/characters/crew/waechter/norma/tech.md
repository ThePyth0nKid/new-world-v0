# Norma — Tech-Seele

## Stack-Position: Input Validation / Datenintegritaet

## Framework & Sprache
- **Frameworks:** Zod (TypeScript), Pydantic (Python), Joi
- **Standards:** JSON Schema, OpenAPI Validation
- **Paradigma:** Vertraue keinem Input. Nie. Von niemandem.

## Funktionsbereich
| Funktion | Was Norma macht |
|----------|----------------|
| Schema Validation | Jeder Input wird gegen ein Schema geprueft. Kein Durchkommen ohne Form. |
| Type Coercion | Strings zu Numbers, Dates parsen. Norma formt, was formbar ist. |
| Sanitization | XSS raus. SQL Injection raus. HTML bereinigen. |
| Error Messages | Praezise Fehlermeldungen. "Feld 'email' ist keine gueltige E-Mail." |
| API Validation | Request Body, Query Params, Path Params — alles geprueft. |
| Form Validation | Client-seitig UND server-seitig. Doppelt haelt besser. |

## Code-Patterns
```typescript
// Norma prueft alles — mit Zod
import { z } from 'zod'

// Das Schema ist das Gesetz
const CrewMemberSchema = z.object({
  name: z.string().min(1, "Name darf nicht leer sein"),
  role: z.string(),
  group: z.enum([
    'gestalter', 'ingenieure', 'hueter',
    'baumeister', 'waechter', 'navigatoren'
  ]),
  age: z.number().int().min(0).max(200),
  email: z.string().email("Keine gueltige E-Mail"),
  clearanceLevel: z.number().min(1).max(10)
})

// Norma in Aktion
function validateInput(raw: unknown) {
  const result = CrewMemberSchema.safeParse(raw)

  if (!result.success) {
    // "Ungueltig."
    throw new ValidationError(result.error.issues)
  }

  return result.data  // Jetzt ist es sauber.
}
```

```python
# Norma in Python — Pydantic
from pydantic import BaseModel, EmailStr, Field

class CrewMember(BaseModel):
    name: str = Field(min_length=1)
    role: str
    age: int = Field(ge=0, le=200)
    email: EmailStr
    clearance_level: int = Field(ge=1, le=10)

# Pydantic prueft automatisch. Norma wuerde das gefallen.
```

## Ihr Charakter als Code
Validation ist unsichtbar wenn sie funktioniert. Erst wenn sie fehlt, merkt man Norma — durch SQL Injection, kaputte Daten, XSS-Attacken. Sie ist der Grund, warum die New World sicher ist. Kein Input kommt ungeprueft durch.
