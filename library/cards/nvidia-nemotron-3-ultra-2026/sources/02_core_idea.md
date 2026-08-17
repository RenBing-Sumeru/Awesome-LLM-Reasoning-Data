Nemotron 3 Ultra is a 550B-total / 55B-active hybrid Mamba-Attention mixture-of-experts model. NVIDIA reports 20T-token pretraining, a 1M-context extension, then SFT, unified multi-environment RLVR, and two asynchronous MOPD iterations with dense specialist-teacher signals. The released BF16 checkpoint, official data collection, NVIDIA-NeMo repository, and project page make several layers of this pipeline inspectable.

The feedback surface is mixed rather than fully specified. The report gives asynchronous GRPO, a global RL batch of 8,192, 16 rollouts per sample, and stage-specific generation limits. It also gives a concrete SWE example: hidden tests yield a binary GRPO reward, unfinished trajectories are masked, and malformed reasoning or tool calls receive negative advantage. It does not publish every environment's reward function, calibration, weights, error rate, or configuration.

For Track 12, the contribution is a disclosure ledger: distinguish public release artifacts and named construction mechanisms from the private inputs, incomplete provenance, and unresolved feedback-audit boundaries that those artifacts do not remove.

