The [official Qwen release](https://qwen.ai/blog?id=qwen3-next) describes Qwen3-Next-80B-A3B as an 80B-total-parameter model with about 3B activated parameters. It reports hybrid Gated DeltaNet and Gated Attention layers, a highly sparse MoE, stability-oriented normalization and routing changes, and Multi-Token Prediction. It also announces post-trained Instruct and Thinking variants.

For post-training, the release says GSPO addressed RL stability and efficiency problems associated with the hybrid-attention, high-sparsity MoE architecture. The separately linked GSPO source defines Group Sequence Policy Optimization through sequence-likelihood importance ratios and sequence-level clipping, rewarding, and optimization over response groups. That generic algorithm description does not identify the Qwen3-Next prompts, rewards, verifiers, group size, rollouts, filters, or retained process records.

The category rationale is therefore disclosure auditing, not a claim that Qwen3-Next releases a reasoning dataset or reusable RLVR recipe.

