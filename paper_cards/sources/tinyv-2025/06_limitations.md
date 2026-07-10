Key limitations and audit risks:

- A learned verifier can introduce its own false positives.
- The approach depends on how disagreement cases are sampled.
- Extra verifier compute may change the cost profile of RL training.
- If calibration details are hidden, reproducing the reward surface is difficult.
- The method may work best for domains where rule verifiers are already strong but brittle.
