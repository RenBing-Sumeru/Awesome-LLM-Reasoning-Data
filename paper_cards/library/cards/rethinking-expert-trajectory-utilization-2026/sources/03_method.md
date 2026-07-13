SFT validation loss marks stable or mild-overfitting regimes, while later RL rollouts and task correctness reveal how much improvement each trajectory subset still permits.

A reusable implementation should log the source task, generator and checkpoint, sampling budget, complete candidate trajectory, feedback values, selection reason, and terminal outcome for every candidate.
