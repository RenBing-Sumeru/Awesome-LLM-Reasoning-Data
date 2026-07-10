Primary source: https://arxiv.org/abs/2408.03314

Venue/date: arXiv, 2024.

Decision boundary: Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters belongs in Scaling / RLVR / TTC because it defines inference budget as the object being scaled and asks when extra samples or verifier-guided search beat a larger model. It is not mainly a general benchmark survey; the useful object for this atlas is the budget, verifier, rollout, or reward contract exposed by the paper.

Concrete problem: how to allocate finite inference compute across prompts instead of reporting a single best-of-N curve.

Atlas relevance: this card records the data object, verifier surface, inference budget, and attribution risk so later papers can be compared without mixing data scale, model scale, optimizer changes, and test-time compute.

Data object / evaluation surface: Prompt, generated candidate traces, verifier scores, selected answer, and compute budget.

L4 collection note: the official arXiv source was checked on 2026-07-10. The card is complete enough for Chinese review, while artifact and license details remain review items where noted.
