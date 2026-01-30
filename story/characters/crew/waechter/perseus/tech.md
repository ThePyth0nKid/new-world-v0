# Perseus — Tech-Seele

## Stack-Position: Secret & Key Management

## Framework & Sprache
- **Tools:** .env, dotenv, Railway Variables, Vault (HashiCorp)
- **Konzept:** Secrets Rotation, Key Hierarchie, Zero-Trust
- **Paradigma:** Kein Secret im Code. Nie. Nirgendwo. Niemals.

## Funktionsbereich
| Funktion | Was Perseus macht |
|----------|-------------------|
| API Keys | Verwaltet alle externen Schluessel. OpenAI, Stripe, Maps. |
| Environment Variables | .env.local, .env.staging, .env.production — jede Stufe eigene Keys |
| Key Rotation | Regelmaessig neue Schluessel. Alte werden ungueltig. |
| Access Tokens | JWT, Session Tokens, Refresh Tokens. Wer darf was, wie lange? |
| Encryption Keys | Daten verschluesseln. At rest und in transit. |
| Secret Scanning | Prueft, ob jemand einen Key committet hat. Alarm wenn ja. |

## Code-Patterns
```typescript
// Perseus lässt keine Secrets im Code
// NIEMALS:
const apiKey = "sk-proj-xxxxx"  // Perseus wuerde dich umbringen

// IMMER:
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  throw new Error('OPENAI_API_KEY nicht konfiguriert. Frag Perseus.')
}
```

```bash
# Perseus bei der Arbeit — Schluesselwechsel zwischen Stufen
# Lokal:
echo "OPENAI_API_KEY=sk-dev-xxx" >> .env.local

# Staging (Railway):
railway variables set OPENAI_API_KEY=sk-staging-xxx --environment staging

# Production (Railway):
railway variables set OPENAI_API_KEY=sk-prod-xxx --environment production

# Drei Stufen. Drei Schluessel. Kein Schluessel ueberlebt den Wechsel.
```

## Sein Charakter als Code
Perseus ist der Grund, warum dein API-Key nicht auf GitHub landet. Er ist unsichtbar, undankbar, unverzichtbar. Wenn er seinen Job gut macht, merkt niemand, dass er da ist.
