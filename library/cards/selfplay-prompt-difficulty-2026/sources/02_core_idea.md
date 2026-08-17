For each prompt, the policy samples several responses and a reward model scores them. Their mean reward ranks prompt difficulty: lower means harder for the present model.

The central result is that hard prompts do not help the reported self-play DPO setting. Pruning them and retaining the easiest subset produces better final alignment than using the full pool.
