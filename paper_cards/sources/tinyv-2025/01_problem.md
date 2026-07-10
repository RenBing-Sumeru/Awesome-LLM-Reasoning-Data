TinyV studies a practical failure mode in verifier-based reinforcement learning for math reasoning: rule-based verifiers can reject correct answers when parsing, formatting, or equivalence checks are too brittle. Those false negatives turn usable rollouts into negative reward, which can slow or distort RL training.

The problem matters because RLVR pipelines often treat the verifier as ground truth. If the verifier misses correct reasoning outputs, the policy may learn to satisfy verifier quirks instead of improving mathematical problem solving.
