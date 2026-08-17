Inputs include the task specification, repository or environment state, released context fields, and the model or human action/answer surface.

1. Provide a bug-fix task and repository state.
2. Generate unit tests or reproduction scripts.
3. Run tests against original and patched code.
4. Score fail-to-pass behavior and coverage.

Outputs are official README lists Full 2,294, Lite 276, and Verified 433 instances, with HF variants for benchmark subsets. The verifier, reward, judge, or environment is: In unit-test mode, generated tests must fail on the original code and pass after the fix, with no failing tests after the fix; metrics include success rate and changed-line coverage. Reproduction requires pinning artifact release, split, evaluator version, environment image, prompt/scaffold, budget, and redistribution terms.
