Most reward-model benchmarks use pairwise preferences from general question answering and do not test whether a model can judge the actual correctness of advanced reasoning-model outputs on difficult mathematics. Rule rewards also depend on reference answers and constrained output formats, limiting scaling to unlabeled reasoning data.

The paper converts verifiable reasoning into verifiable judging through its V2V strategy to build Libra Bench, then uses related data with rejection sampling, SFT, and rule-reward RL to train thinking-capable Libra-RM models.
