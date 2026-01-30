# Plejaden — Tech-Seele

## Stack-Position: Multi-Agent System / Parallele KI-Ausfuehrung

## Framework & Sprache
- **Tool:** Claude Code Multi-Agents, Claude Agent SDK
- **Sprache:** TypeScript / Python (Agent-Orchestrierung)
- **Paradigma:** Schwarm. Parallel. Spezialisiert. Autonom.

## Funktionsbereich
| Funktion | Was die Plejaden machen |
|----------|------------------------|
| Parallel Execution | Mehrere Agents gleichzeitig. Unabhaengige Tasks parallel. |
| Spezialisierung | Jeder Agent hat eine Rolle: Coder, Reviewer, Tester, Researcher. |
| Task Decomposition | Grosse Aufgabe → viele kleine. Verteilen. Einsammeln. |
| Tool Use | Agents nutzen Tools: File Read, Edit, Bash, Search. |
| Orchestrierung | Ein Haupt-Agent steuert die Sub-Agents. Lyra steuert die Plejaden. |
| Context Isolation | Jeder Agent hat eigenen Kontext. Kein Crosstalk. Saubere Trennung. |

## Code-Patterns
```typescript
// Die Plejaden in Aktion — Multi-Agent Orchestrierung
const tasks = [
  { agent: "security-reviewer", task: "Pruefe auth.ts auf Schwachstellen" },
  { agent: "code-reviewer",     task: "Review der neuen API-Endpunkte" },
  { agent: "tdd-guide",         task: "Schreibe Tests fuer user-service" },
  { agent: "build-error-resolver", task: "Finde den TypeScript-Fehler" }
]

// Parallel. Gleichzeitig. Ohne aufeinander zu warten.
const results = await Promise.all(
  tasks.map(t => launchAgent(t.agent, t.task))
)

// Sieben Schwestern. Sieben Tasks. Ein Ergebnis.
```

```typescript
// Agent-Definition — ein Plejade
const agent = {
  name: "code-reviewer",
  model: "claude-sonnet-4-5-20251101",
  tools: ["Read", "Grep", "Glob", "Bash"],
  systemPrompt: "Du bist ein Code-Review-Spezialist...",
  maxTurns: 10
}
```

## Ihr Charakter als Code
Die Plejaden sind die Kraft hinter der Effizienz. Was ein Agent in 10 Minuten schafft, schaffen sieben in 2. Aber die Frage bleibt: Ist Effizienz Intelligenz? Oder nur Geschwindigkeit?
