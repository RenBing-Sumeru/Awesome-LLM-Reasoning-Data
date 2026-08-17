1. **Decision.** The paper asks how much verifier error RLVR can tolerate and answers: moderate noise can still support learning, but the answer is configuration-specific.

2. **Mechanism.** Build clean unit-test rewards first, corrupt the pass/fail matrix or replace it with a model judge, then keep the oracle only for diagnosis; the reward path is the quality-critical component.

3. **Artifacts.** MBPP and GPQA are reused benchmarks, not a newly released dataset. An appendix links a reproduction script, but there is no complete official codebase or downloadable training set.

4. **Evidence.** With Qwen3-8B on MBPP, clean reward scores 0.901 and 10% group-level noise scores 0.886; the claimed tolerance only covers independently resampled symmetric noise.

5. **Reuse decision.** Use this as a verifier-audit recipe for code tasks with trusted tests; before deployment, separately measure false positives and false negatives and rerun multiple seeds.
