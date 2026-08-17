1. **Evaluate text-to-PDDL:** Report parseability, solvability, and semantic equivalence together rather than planner success alone.

2. **Train verifiable generators:** Use PDDL-equivalence outcomes for SFT filtering or binary RLVR rewards.

3. **Build new planning domains:** Reuse the four-description, programmatic-generation, and object-mapping-equivalence pipeline for other STRIPS domains. Full PDDL, continuous variables, or interactive environments require a new verifier rather than direct reuse.
