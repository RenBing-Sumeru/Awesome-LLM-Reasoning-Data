Reward models are often selected by offline pairwise accuracy, yet an RM that classifies static preference pairs well may not provide an optimizable, gaming-resistant signal that improves human satisfaction during RLHF. The relationship between proxy metrics and final policy quality therefore lacks empirical validation.

The work compares twelve offline metrics across twelve domains, performs full RLHF with candidate reward models, and conducts crowd-sourced human evaluation, building PPE to identify which proxies best predict downstream win rates.
