1. **One-sentence position:** CodeScaler builds pairwise preferences from on-policy code generations verified by real tests and trains a code reward model that scores a problem and solution without executing tests, using the model for both RL training and test-time selection.

2. **Method takeaway:** Execute candidates in the original test environment; mark all-pass code positive and any-fail code negative, then pair responses from the same problem. Train 1.7B, 4B, and 8B CodeScaler models with syntax-aware extraction and validity-preserving reward shaping so formatting noise does not dominate scores.

3. **Data takeaway:** The official CodeScalerPair-51K release contains 51,107 English code-preference pairs from Qwen3-8B-Base on-policy GRPO rollouts over DeepCoder problems.

4. **Evidence anchor:** CodeScaler improves Qwen3-8B-Base by an average of 11.72 points across five coding benchmarks and exceeds binary execution-reward RL by 1.82 points.

5. **Reuse decision:** Train a code ORM directly from question_content, code_pos, and code_neg with Bradley–Terry loss, calibrating it on a held-out executable set. The main risk is that the rm is only a proxy for test outcomes and may assign false positives on out-of-distribution languages, libraries, or repository tasks; it is not a proof of correctness.
