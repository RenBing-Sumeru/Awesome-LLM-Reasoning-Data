For each prompt, PODS generates n complete rollouts but updates GRPO on only m<n. It selects the size-m subset with maximum reward variance. An O(n log n) algorithm sorts rewards and chooses items from low and high extremes; under binary verifiable rewards, this retains contrasting failed and successful episodes.

