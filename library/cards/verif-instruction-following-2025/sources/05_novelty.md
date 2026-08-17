Instruction-tuning work often writes requirements into a prompt or evaluates them only after generation. VerIF treats the verification implementation as a first-class training artifact, and separates deterministic and model-based checks according to what each can justify.

The novelty lies in engineering a reusable instruction-to-verifier-to-reward path. It changes the reward record that the policy sees, rather than merely changing the reinforcement-learning optimizer or adding a generic preference label.
