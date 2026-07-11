Recorded training/evaluation use: process_supervision, reward_modeling, test_time_compute.

The searched traces can enter policy SFT or self-training as accepted reasoning trajectories. The inferred per-step values can enter PRM training. For evaluation, the same method is a test-time search baseline against best-of-N, self-consistency, and Tree-of-Thought style methods.

ReST-MCTS* is a compact case where rollout/search records become both a data-construction mechanism and a supervision source. It helps readers separate the policy, verifier, tree-search budget, accepted trace, and PRM target instead of treating "self-training" as one opaque improvement.
