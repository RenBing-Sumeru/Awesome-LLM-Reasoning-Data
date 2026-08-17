Prior SWE-agent work commonly used SWE-bench as an evaluation target, but training environments with rigorous repository-level execution feedback were scarce. SWE-Gym changes the object from a static benchmark to a reusable environment for producing supervision and verifier data.

What changes is the linkage between executable tasks, sampled trajectories, fine-tuning, and verifier-based inference-time scaling. The paper's results suggest that performance can improve through both training-time trajectory data and inference-time verifier selection.

The quality signal is that SWE-Gym reports gains on external SWE-bench Verified and Lite splits, not only on its own environment. The release also includes public data/models and scaffold-specific reproduction instructions, which makes the claim more auditable than a score-only report.

What is not new: the terminal correctness predicate still rests on repository tests, and downstream evaluation still inherits SWE-bench's public-task and environment-drift risks. Reuse checks should separate environment construction, agent training, verifier training, and evaluation split.
