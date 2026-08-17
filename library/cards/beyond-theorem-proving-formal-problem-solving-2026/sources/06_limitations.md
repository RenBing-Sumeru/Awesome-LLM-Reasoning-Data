1. **Formalization cost:** Converting natural-language problems into FPS propositions requires expert work, leaving the three benchmarks relatively small.

2. **Expressiveness limits:** Not every open-ended, approximate, or empirical problem fits a deterministic Lean MDP; the framework assumes satisfiable problems with formally representable answers.

3. **Search budget:** Success depends strongly on tactic sets, depth, and Mathlib, so comparisons must freeze environments. RPE can also produce false negatives when automation is insufficient.
