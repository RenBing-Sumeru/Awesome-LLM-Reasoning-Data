1. **Filter mathematical prompts:** Merge problems and answers from two public sources and remove duplicates, contamination, unparseable, proof-oriented, figure-dependent, and multi-part items to form about 49K AceReason-Math prompts.

2. **Define mathematical rewards:** Normalize the model’s final answer and compare it numerically or symbolically with the reference; parsing failures and incorrect answers receive zero reward.

3. **Apply sequential RL:** First run RL on mathematics to learn long-chain computation and answer formatting, then continue on coding tasks with compilation or unit-test execution rewards.

4. **Evaluate cross-domain retention:** Compare math-only, code-only, mixed, and sequential training on AIME, MATH, LiveCodeBench, and related benchmarks to measure transfer and forgetting.
