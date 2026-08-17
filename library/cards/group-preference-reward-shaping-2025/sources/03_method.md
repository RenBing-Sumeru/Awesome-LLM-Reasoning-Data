1. Sample multiple completions from the old policy used for the current training batch, for each prompt.

2. Obtain reward-model scores, but use them only to establish preference comparisons among completions.

3. Shape each completion's reward by its within-group preference relation, then optimize the policy with a KL-regularized critic-free objective.

4. Compare GPRS with GRPO and Reinforce++ on RLHF and reasoning, varying reward-model size. The check is stable win rate or task performance under weaker reward models; verify exact group size, KL settings, datasets, and sampling parameters from the release.
