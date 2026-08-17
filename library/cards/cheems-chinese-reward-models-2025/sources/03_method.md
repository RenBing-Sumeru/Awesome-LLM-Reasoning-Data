1. CheemsBench samples 1,146 open prompts and 1,346 human instructions, generates five responses per prompt, collects five rounds of triple-wise human comparisons, resolves graph cycles, and outputs partial rankings.

2. CheemsPreference collects 27,861 human instructions, samples more than five responses, and combines a small human-labeled subset with GPT-4o comparisons. A human-trained RM filters inconsistent GPT edges; length balancing reduces length bias.

3. CheemsRM trains a Qwen2.5 reward model with Bradley-Terry pairwise loss over partial rankings plus score regularization. The released repository is required to verify data format, license, and training configuration.
