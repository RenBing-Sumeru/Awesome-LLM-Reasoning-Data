ReST-MCTS* combines process-reward-guided tree search with reinforced self-training. The important data object is not just a final correct answer, but a searched reasoning trace with inferred per-step value targets that can train both a policy model and a process reward model.

It matters for Track 05 because it makes the search budget, PRM guidance, accepted traces, and per-step value targets part of the reusable record.

- Year / venue: 2024 · NeurIPS.
- Author affiliations: The Knowledge Engineering Group (KEG), Tsinghua University; California Institute of Technology.
- Atlas role: process_supervision, construction_recipe, scaling_study.
- Domains: math, scientific reasoning, search-based self-training.
- Current status: verified.
- Why it belongs: ReST-MCTS* is a direct example of MCTS/search traces becoming policy-training data and PRM value targets.
