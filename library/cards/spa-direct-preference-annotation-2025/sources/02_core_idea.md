SPA first aligns a policy on a small seed, samples two responses for new prompts, and labels the pair with the policy's direct preference probability relative to its reference model.

It then identifies low-confidence generated labels and softens their training effect. A linearly extrapolated prediction is used to decouple noise detection from the model being updated.
