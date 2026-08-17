Standard PPO or GRPO sets token gradients to zero once policy ratios cross clipping bounds, discarding much of the signal in long, incorrect, or low-reward trajectories. On the data side, retaining only prompts the current model can solve creates an easy-task bias. RLVR may remain stable but underuse hard prompts and negative samples.

Klear-Reasoner constructs a harder MathSub corpus without aggressive accuracy filtering, uses long-CoT SFT for initialization, and applies Gradient-Preserving Clipping Policy Optimization so clipped tokens retain gentle gradients.
