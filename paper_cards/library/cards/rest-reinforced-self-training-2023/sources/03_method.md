Starting from an initial policy, the method samples a batch of completions and scores them. It can select high-reward samples or use reward-weighted updates, then applies an offline RL improvement algorithm to the collected batch.

The paper frames the process as growing-batch RL and studies it for language modeling and alignment. It compares different batch and update choices to show how the policy, reward, and offline learner interact.
