1. **One-sentence position:** MathConstruct uses programmatic checkers to evaluate open mathematical constructions, giving deterministic rewards for non-unique answers.
2. **Method takeaway:** Select construction problems, define output schemas, implement and stress-test verifiers, generate parameter variants, and execute candidate answers.
3. **Data takeaway:** The final ICML version contains 127 tasks, while early versions contained 126; the snapshot must be fixed.
4. **Evidence anchor:** The strongest models solve about 41% of the final version, and variants expose memorization and brittle templates.
5. **Reuse decision:** It is suitable for mathematical RLVR; checker and parser defects are the largest risk and require independent testing.
