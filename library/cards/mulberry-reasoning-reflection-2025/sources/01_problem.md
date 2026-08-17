Direct-prediction multimodal LLMs often give a short answer without explicit intermediate states, and single-model tree search can remain trapped in homogeneous low-quality reasoning nodes. This makes complex image-grounded reasoning hard to supervise and gives curators little evidence about where a solution first failed.

Mulberry uses four-model Collective Monte Carlo Tree Search (CoMCTS) to expand, score, prune, and select reasoning nodes, then turns effective paths and sampled error-to-correction paths into 260K multimodal SFT demonstrations.

**L4 facts:** Primary source: arXiv:2412.18319; venue/date: NeurIPS 2025, official proceedings; decision boundary: searchable rationale demonstrations rather than an inference-only MCTS method; atlas object/evaluation: image, question, image description, rationale steps, reflection transition, and final answer, evaluated through SFT on eight benchmarks; collection note: `L4_carded`, one Track 01 category.
