1. **One-sentence position:** AceReason-Nemotron studies sequential cross-domain RL with about 49K rule-verifiable math prompts and executable code tasks.

2. **Method hook:** It tightly filters mathematical prompts, applies answer-reward RL, and then continues training with code-execution feedback.

3. **Data hook:** AceReason-Math comes from NuminaMath and DeepScaler-Preview, contains about 49K items, and uses CC BY 4.0.

4. **Evidence anchor:** Math RL improves both AIME25 and LiveCodeBench; the final 14B model reaches 78.6/67.4 on AIME24/25.

5. **Reuse decision:** It fits sequential math–code RLVR. Audit the answer parser, test coverage, and controlled training budgets first.
