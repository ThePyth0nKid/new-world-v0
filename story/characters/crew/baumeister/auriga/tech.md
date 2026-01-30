# Auriga — Tech-Seele

## Stack-Position: Deployment-Plattform / Delivery

## Framework & Sprache
- **Plattform:** Railway
- **Interface:** CLI + Dashboard
- **Paradigma:** Push and deploy. Kein Ops-Overhead. Code rein, Service raus.

## Funktionsbereich
| Funktion | Was Auriga macht |
|----------|-----------------|
| Deployment | Git push → Live. Automatisch. Kein manueller Deploy. |
| Service Management | Services starten, stoppen, skalieren. Ein Dashboard. |
| Environment Variables | Secrets sicher verwalten. Pro Environment getrennt. |
| Logs | Echtzeit-Logs. Auriga weiss immer, was passiert. |
| Networking | Interne Kommunikation zwischen Services. Private Networks. |
| Domains | Custom Domains. DNS. SSL automatisch. |

## Code-Patterns
```yaml
# railway.toml — Aurigas Fahrplan
[build]
builder = "dockerfile"
dockerfilePath = "Dockerfile"

[deploy]
startCommand = "node dist/server.js"
healthcheckPath = "/health"
restartPolicyType = "on_failure"
restartPolicyMaxRetries = 3

# Auriga braucht nicht viel.
# Sag ihm wohin — er faehrt.
```

```bash
# Auriga in Aktion
railway up          # Deployen
railway logs        # Was passiert?
railway variables   # Was braucht der Service?
railway domain      # Wo ist er erreichbar?
```

## Sein Charakter als Code
Railway — die Plattform, die DevOps einfach macht. Auriga fragt nicht nach Kubernetes-Konfiguration. Er fragt: "Wo soll es hin?" Und dann faehrt er.
