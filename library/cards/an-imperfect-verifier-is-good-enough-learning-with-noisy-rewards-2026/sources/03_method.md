1. **Build oracle rewards.** For each MBPP prompt, sample code rollouts and run each program against ground-truth unit tests; the passed-test fraction is the clean reward.

2. **Inject controlled error.** Flip pass/fail outcomes with probability *p* at cell, rollout, test, or whole-group granularity and recompute reward. Training receives the corrupted decision, not the oracle.

3. **Substitute a model judge.** A language model reads generated code and an assertion, emits pass or fail, and its pass fraction becomes reward; retained oracle tests compute its accuracy, precision, and recall.

4. **Optimise reasoning models.** Train Qwen3-8B and GLM4-9B with GRPO on MBPP; use Qwen3-8B and GSPO for the GPQA transfer setting. Clean and imperfect conditions share the task configuration.

5. **Evaluate the policy.** Held-out unit-test pass rate is the MBPP outcome. Noise sweeps, judge-size comparisons, and GPQA test whether the conclusion survives changed feedback sources and domains.

6. **Set reproduction boundaries.** The appendix gives a script and selected hyperparameters, but no complete official code or dataset. Most noisy conditions have one seed; fix the reported template, sampling settings, model versions, and tests, then audit false positives and negatives separately.
