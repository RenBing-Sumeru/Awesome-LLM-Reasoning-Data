1. **Build the source pool:** Run GRPO with Qwen3-8B-Base on executable DeepCoder problems and collect on-policy candidate code throughout training.

2. **Generate or reorganize feedback:** Execute candidates in the original test environment; mark all-pass code positive and any-fail code negative, then pair responses from the same problem.

3. **Verify and filter:** Train 1.7B, 4B, and 8B CodeScaler models with syntax-aware extraction and validity-preserving reward shaping so formatting noise does not dominate scores.

4. **Train and evaluate:** Use CodeScaler instead of test execution for rollout rewards during RL and batch-score multiple candidates for test-time selection.
