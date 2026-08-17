RLHF commonly separates supervised fine-tuning, reward-model training, and PPO. That pipeline needs multiple models and can be sensitive to optimization settings, even when the feedback already says which sampled responses are better.

RRHF asks whether a policy can learn directly from an ordered candidate set. The intended training record is a prompt with responses from people or models and a ranking that the policy should reproduce in probability space.
