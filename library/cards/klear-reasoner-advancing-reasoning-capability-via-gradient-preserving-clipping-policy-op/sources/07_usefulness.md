1. **Hard-prompt RLVR:** Bucket MathSub-30K by difficulty without strict accuracy prefiltering and compare standard GRPO with GPPO on use of failed trajectories.

2. **Source-selection studies:** Fix problem and token budgets and compare a few high-quality sources against a large multi-source mixture, reporting duplicates, answer errors, and gains.

3. **Optimizer auditing:** Track clipped-token ratios, failed-trajectory gradients, and reward-parser errors. Do not preserve all negative signal blindly when verifier noise is high.
