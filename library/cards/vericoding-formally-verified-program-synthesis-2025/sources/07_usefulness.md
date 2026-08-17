1. **Cross-verifier evaluation:** Run one model with fixed prompts, sample counts, and timeouts on Dafny, Verus, and Lean and report compilation and verification success stratified by language and source rather than one overall average.

2. **RLVR data:** Use file assembly and native verifier output as rewards, separating syntax, typing, verification, and resource limits while scanning for `assume false`, `sorry`, or weak-specification exploits.

3. **Specification repair and transfer:** Train repair models on non-compiling `issues` and study transfer through source IDs. Claims about intrinsic language differences require functionally parallel tasks and cannot rely directly on the current 3,029, 2,334, and 7,141 subsets.
