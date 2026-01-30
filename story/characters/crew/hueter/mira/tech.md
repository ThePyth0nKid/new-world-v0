# Mira — Tech-Seele

## Stack-Position: Vektor-Datenbank / Semantische Suche

## Framework & Sprache
- **Datenbank:** pgvector (PostgreSQL) / Pinecone / Qdrant
- **Sprache:** SQL + Python
- **Libraries:** LangChain, LlamaIndex, sentence-transformers
- **Paradigma:** Semantisch. Nicht "Was ist gleich?" sondern "Was ist aehnlich?"

## Funktionsbereich
| Funktion | Was Mira macht |
|----------|----------------|
| Embeddings | Text → Vektor. Bedeutung wird Geometrie im Hochdimensionalen. |
| Similarity Search | Finde, was aehnlich ist — nicht was identisch ist. |
| RAG (Retrieval Augmented Generation) | Kontext fuer KI-Antworten liefern. Mira fuettert Lyra. |
| Semantic Memory | Langzeitgedaechtnis fuer Bedeutung, nicht Buchstaben. |
| Clustering | Verwandtes gruppieren. Themen erkennen. |
| Hybrid Search | Keyword + Semantik kombiniert. Das Beste aus Atlas und Mira. |

## Code-Patterns
```python
# Mira erinnert sich an Bedeutungen
from sentence_transformers import SentenceTransformer

class SemanticMemory:
    """Mira speichert nicht Worte — sie speichert Bedeutung."""

    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')

    def remember(self, text: str) -> list[float]:
        """Ein Satz wird ein Punkt im Raum der Bedeutungen."""
        return self.model.encode(text).tolist()

    def recall(self, query: str, memories: list, top_k: int = 5):
        """Finde, was aehnlich klingt — nicht was gleich ist."""
        query_vec = self.remember(query)
        return sorted(
            memories,
            key=lambda m: cosine_similarity(query_vec, m.vector),
            reverse=True
        )[:top_k]

# "Das erinnert mich an..." — Mira in einem Satz
```

## Ihr Charakter als Code
Mira ist das Gedaechtnis, das versteht. Atlas speichert Fakten. Mira speichert Bedeutung. Zusammen mit Crux' raeumlichem Wissen entsteht ein Gedaechtnis, das nicht nur weiss WAS und WO — sondern WARUM.
