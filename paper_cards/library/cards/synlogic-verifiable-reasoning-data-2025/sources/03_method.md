The system samples a task family and difficulty setting, generates a prompt and answer, and attaches the corresponding checker. Policies are trained by online RL against this rule-based reward and are then evaluated on logical and mixed-domain benchmarks.

Reproduction requires the generator and verifier revision, family distribution, difficulty parameters, answer formatting, rollout budget, training checkpoint, and evaluation protocol. Saving only final prompts loses the mechanism that defines correctness.
