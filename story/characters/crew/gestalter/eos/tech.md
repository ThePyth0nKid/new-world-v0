# Eos — Tech-Seele

## Stack-Position: Build-Tooling & Development Speed

## Framework & Sprache
- **Tool:** Vite
- **Sprache:** TypeScript / JavaScript (transpiliert blitzschnell)
- **Engine:** esbuild (Go-basiert) + Rollup (Production)

## Funktionsbereich
| Funktion | Was Eos macht |
|----------|--------------|
| Dev Server | Instant Start. Kein Warten. Sofort da. |
| HMR (Hot Module Replacement) | Aenderung im Code → sofort im Browser. Keine Sekundenverzoegerung. |
| Build | Production-Bundles. Rollup unter der Haube. Optimiert. |
| Plugin System | Erweiterbar. Eos passt sich an — schnell. |
| TypeScript Support | Out of the box. Kein Setup. Einfach schreiben. |

## Code-Patterns
```typescript
// vite.config.ts — Eos' Bauplan
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Eos wartet nicht
    hmr: true,
    open: true
  },
  build: {
    // Aber wenn es zaehlt: gruendlich
    minify: 'terser',
    sourcemap: true
  }
})
```

## Sein Charakter als Code
Eos ist der Grund, warum Entwicklung sich gut anfuehlt. Kein Laden, kein Warten. Sofortiges Feedback. Seine Schwaeche: Verwechselt manchmal "schnell gebaut" mit "gut gebaut".
