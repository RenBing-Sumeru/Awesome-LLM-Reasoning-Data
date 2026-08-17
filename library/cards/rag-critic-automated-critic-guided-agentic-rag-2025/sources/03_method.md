1. **Sample RAG runs:** A common retriever obtains passages for nine datasets, and fifteen models produce answers with reasoning.

2. **Generate critiques and tags:** Qwen2.5-72B analyses error causes, and open tags are normalised, deduplicated, and clustered into a hierarchy.

3. **Consolidate labels:** GPT-4o and humans name and review high-level error clusters, producing 100K SFT records.

4. **Train critic and agent:** RAG-Critic-3B predicts judgments and tags, and the agent retrieves again or revises; retriever, corpus snapshot, and taxonomy version must be fixed.
