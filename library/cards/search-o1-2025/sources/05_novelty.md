The useful direction signal is the explicit interleaving schema plus an intermediate evidence-rewrite boundary. Standard RAG retrieves once for the original question; the agentic baseline retrieves during reasoning; Search-o1 additionally transforms pages into reasoning-specific knowledge before reinsertion. This makes it possible to audit what the model searched, what it saw, and what another model pass chose to expose.

Agentic RAG, document compression, and long-chain reasoning are not individually new. The contribution is their orchestration for an o1-style inference loop and the batch execution recipe. It should be catalogued as a construction recipe and test-time environment, not promoted to an open trace dataset.

