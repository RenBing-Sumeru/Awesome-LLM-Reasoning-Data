- The search tree is used during RL training; inference is ordinary single-chain sampling.
- Selection expands the shortest complete path whose extracted answer matches the ground truth.
- Reported experiments use three expansions, but per-question rollout count and training temperature remain unknown.
- Leaf correctness and length rewards are propagated into internal node values and branch-local advantages; no PRM judges partial reasoning.
- The official repository is still a placeholder, so benchmark gains are method evidence, not proof of rollout-data quality or release completeness.

