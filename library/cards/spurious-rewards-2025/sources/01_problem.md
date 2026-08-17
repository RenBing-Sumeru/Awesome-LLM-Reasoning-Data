RLVR gains on mathematical reasoning are often attributed to correct verifiable rewards, yet this leaves open whether the reward itself teaches the capability. If random or wrong feedback can produce the same score increase, a Qwen-only evaluation can misidentify optimizer- or prior-driven behavior as a new reasoning method.

The paper performs a controlled reward-signal audit: it holds the GRPO training setup fixed while replacing answer correctness with majority-vote, format, random, and deliberately incorrect rewards. It then tests whether the resulting gain transfers across Qwen2.5, Llama3, and OLMo2 families.

The target is an interpretation failure in post-training evaluation, not merely a weaker-label recipe: an apparent improvement must be separated from behavior already present before RL.

The practical output is an audit protocol for causal claims about reward quality.
