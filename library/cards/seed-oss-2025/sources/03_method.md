The 36B causal architecture uses 64 layers, RoPE, GQA, RMSNorm, SwiGLU, 80/8/8 QKV heads, hidden size 5,120, vocabulary 155K, and native 512K context. Training hardware, optimizer, schedule, sequence curriculum, compute, and immutable checkpoint lineage are not disclosed.

The 12T-token pretraining mixture consists of public Internet, purchased vendor, and in-house-generated data with a July 2024 cutoff. Preprocessing includes deduplication, desensitization, quality filtering, CSAM filtering, toxic-content filtering, and algorithmic plus manual PII removal. Rules, models, thresholds, yields, benchmark exclusions, and source rights remain unknown.

Synthetic instruction augmentation is the treatment separating Base from Base-woSyn. The release does not identify the teacher, prompt template, generated answer type, language/domain mix, filtering, acceptance rate, token proportion, replacement policy, random seed, or whether total tokens, steps, compute, and checkpoint selection were matched.

For the Instruct checkpoint, no general construction recipe is released. The model card says safety fine-tuning occurs during SFT and RLHF/PPO. It does not disclose ordinary instruction data, preference schema, annotators, reward model, reward values, PPO objective, KL control, rollout count, optimizer, or stage sizes.

Budgeted reasoning has a published inference format. No budget means unlimited thinking by default; budget 0 requests a direct answer; positive budgets are recommended at 512-token multiples such as 512, 1K, 2K, 4K, 8K, and 16K. The model emits thinking and periodic consumed/remaining-budget reflections before its final answer. These visible traces are process metadata, not proof of faithful internal computation.

Reasoning and agent evaluation spans math, code, instruction following, TAU1 Retail/Airline, SWE-bench Verified under OpenHands and AgentLess, Multi-SWE-bench, multilingual tasks, long-context RULER, and safety. The harnesses and benchmark scores are evaluation objects, not disclosed training rewards or trajectories.
