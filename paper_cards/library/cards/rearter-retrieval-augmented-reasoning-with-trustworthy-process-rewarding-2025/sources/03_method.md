- Verification contract: mixed. PRM scalar scores guide search, while PEM explanations help refine steps and expose reasoning quality.
- Recorded verifier/reward/environment: Process Reward Model, Process Explanation Model, retrieval context, and MCTS-guided search.
- Supervision granularity: step_level and process_reward.

- Base model: unknown in the atlas entry.
- Teacher: PRM/PEM feedback and benchmark supervision.
- Generator: retrieval-augmented rollouts expanded by MCTS.
- Filtering rule: trustworthy process rewarding plus iterative preference optimization.
- Sampling protocol: tree search over retrieval-augmented reasoning steps; look-ahead search is used to reduce early-step bias.
- Optimizer/scaffold: off-policy preference learning and iterative preference optimization.
