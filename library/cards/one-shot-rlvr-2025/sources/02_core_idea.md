The core claim is empirical: a single selected mathematical problem can produce useful RLVR learning signals when the policy repeatedly explores solutions and receives a binary reward for matching its ground-truth final answer. The authors rank the DSR-sub instance pool by the historical variance of training accuracy, then use the selected prompt alone or with a few companions.

The feedback contract remains answer-level rather than process-level. GRPO is the default optimizer, with policy-gradient, KL-divergence, and entropy terms; PPO is also tested. The data release exposes prompt, source, reward-model, and metadata fields, while the author repository provides training and evaluation code.

