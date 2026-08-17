Critic-free RL methods reduce PPO's memory and compute cost, but GRPO can be unstable when its reward model supplies noisy numeric scores. This is especially problematic for RLHF, where humans can often compare outputs more reliably than assign absolute rewards.

GPRS reframes the optimization signal as a within-group preference comparison. It aims to preserve critic-free training while making reward shaping less sensitive to reward-model size and quality in preference alignment and reasoning tasks.
