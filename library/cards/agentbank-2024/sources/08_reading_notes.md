1. Treat 51,287 as the paper count and 53,205 as the current hosted observation; never silently merge them.
2. Read Table 2 before judging diversity because task counts and average turns vary sharply.
3. Separate action-sequence correctness from post-hoc rationale quality.
4. Inspect the masked-loss equation when reproducing SFT; observations are context, not prediction targets.
5. Use held-out tasks as the main generalization check and do not infer causality from scale alone.
