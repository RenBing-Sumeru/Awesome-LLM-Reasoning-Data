DAPO treats the training interface—not a fixed collection of teacher traces—as the central artifact. Its DAPO-Math-17k prompts, integer-answer verifier, online rollouts, dynamic sampling, and policy updates work together to determine which behavior receives reward.

This framing makes the data useful for studying reproducible RL rather than only for imitating solutions. The published result is meaningful only with its reward parser, rollout policy, model initialization, and compute budget; none of those details should be silently collapsed into a generic prompt-answer dataset.
