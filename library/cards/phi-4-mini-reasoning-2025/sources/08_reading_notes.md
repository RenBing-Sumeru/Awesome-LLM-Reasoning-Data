- Read Sections 3.1-3.4 as four different data contracts: packed accepted traces, a harder SFT subset, correct/incorrect DPO pairs, and fresh answer-rewarded RL groups.
- Use Section 4 and Table 2 to record the eight named public resources, in-house seeds, approximately eight generated rollouts per missing-trace question, and the 10M-rollout/1.6M-sample aggregate.
- Inspect the verifier boundary: a math tool performs the first check, GPT-4o-mini rechecks initial negatives, and neither implementation nor error analysis is released.
- Read the RL stability discussion with the training settings; prompt-length filtering, positive/negative rebalancing, and temperature annealing change the sampling distribution as well as optimization.
- Compare the paper with the official model card and Data Summary. Preserve their source-provenance mismatch, and count released weights separately from unreleased training data and verifier assets.

