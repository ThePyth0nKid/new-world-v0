# Draco — Tech-Seele

## Stack-Position: Authentication / Identitaetsnachweis

## Framework & Sprache
- **Frameworks:** NextAuth.js / Auth.js, Clerk, Supabase Auth
- **Standards:** OAuth 2.0, OpenID Connect, JWT, Session Tokens
- **Paradigma:** Identitaet beweisen. Kein Zugang ohne Nachweis.

## Funktionsbereich
| Funktion | Was Draco macht |
|----------|----------------|
| Login / Signup | "Wer bist du? Erstell ein Konto oder beweis, dass du eins hast." |
| OAuth Providers | Google, GitHub, Apple Sign-In. Draco akzeptiert Buergschaften. |
| JWT Tokens | Signierte Tokens. Faelschungssicher. Zeitlich begrenzt. |
| Session Management | Wer ist eingeloggt? Wie lange noch? Wann raus? |
| Password Hashing | bcrypt, argon2. Passwoerter werden nie im Klartext gespeichert. |
| Multi-Factor Auth | Passwort allein reicht nicht. Zweiter Faktor. Draco vertraut doppelt. |

## Code-Patterns
```typescript
// Draco am Tor
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const session = await auth()

  // Dracos Frage: Wer bist du?
  if (!session?.user) {
    redirect('/login')  // Kein Zugang. Punkt.
  }

  // Bewiesen. Du darfst rein.
  return <Dashboard user={session.user} />
}
```

```typescript
// Dracos Middleware — steht zwischen jedem Request
export function middleware(request: NextRequest) {
  const token = request.cookies.get('session-token')

  if (!token) {
    // "Wer bist du? Beweise es."
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Token gueltig? Draco prueft.
  if (isExpired(token)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()  // Passiere.
}
```

## Sein Charakter als Code
Authentication. Die erste Frage, die jede App stellen muss: Wer bist du? Draco stellt sie bei jedem Request. Ohne Ausnahme. Ohne Verhandlung.
