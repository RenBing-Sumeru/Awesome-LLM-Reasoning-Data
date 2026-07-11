ReST-MCTS* combines process-reward-guided tree search with reinforced self-training. The important data object is not just a final correct answer, but a searched reasoning trace with inferred per-step value targets that can train both a policy model and a process reward model.

It matters for Track 05 because it makes the search budget, PRM guidance, accepted traces, and per-step value targets part of the reusable record.
