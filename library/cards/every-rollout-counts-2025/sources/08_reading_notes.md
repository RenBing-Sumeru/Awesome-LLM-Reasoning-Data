- DORA allocates across soft reasoning directions by multiplying PRM quality with BGE-M3-derived diagonal affinity.
- Main settings are T_b=0.1, T_s=0.01, generation temperature 0.8, top-p 1.0, 256 tokens per step, and 2,048 per solution.
- Evaluated total budgets are 16-256; final answers use PRM-weighted majority voting.
- The optimality claim is conditional on independence, meaningful directions, and equal within-direction PRM scores.
- Official Apache-2.0 code exists, but raw trajectories, matrices, allocation logs, votes, and immutable experimental snapshots are not released.

