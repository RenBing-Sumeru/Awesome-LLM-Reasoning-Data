1. **Prepare sources:** Collect mathematical problems and candidate reasoning trajectories while retaining reference answers and trajectory provenance.
2. **Generate records:** Split trajectories into prefixes of different lengths and ask lightweight student models to continue both with and without each prefix.
3. **Verify and filter:** Compute prefix gain from the difference in verified solve rates, pair prefixes from the same problem, and remove unstable or weak comparisons.
4. **Organize and use:** Organize 282,346 preference pairs as PUM-MATH; model training is summarized only as validation for selection, search, and RL.
