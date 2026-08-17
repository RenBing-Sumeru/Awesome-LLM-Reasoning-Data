R1-Zero applies GRPO directly to DeepSeek-V3-Base with rule-based accuracy and format rewards. The report then adds a cold-start SFT stage to improve readability, followed by reasoning RL. It generates later reasoning data through rejection sampling, combines this with non-reasoning SFT material, and performs a final all-scenarios alignment RL stage.

The released R1 checkpoint also serves as a teacher for dense distillation. The report describes about 600K rejection-sampled reasoning entries, 200K non-reasoning entries partly reused or generated with DeepSeek-V3, and 800K R1 distillation rows. These are stage-level counts and descriptions, not a release of the corresponding records.

For this disclosure ledger, the key contribution is a visible post-training sequence with mixed feedback: rules, format/language constraints, DeepSeek-V3 judgment, and general reward models. The paper does not provide the artifacts needed to reconstruct their exact contracts or mixture.
