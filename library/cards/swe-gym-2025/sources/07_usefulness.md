For the Data Construction & Open Release Recipes track, SWE-Gym is a worked pipeline from issue sourcing through executable environments, trajectory sampling, success/failure retention, SFT, outcome-verifier training, and Best@k. Its separate success-only and failure-preserving releases are useful for studying how packaging changes the available learning signal.

Reuse should pin repo/base commits, harness and scaffold revisions, dependency locks, test bundles, image digests, dataset revisions, exact instance/trajectory IDs, and model checkpoints. A signed manifest should map each derived SFT/verifier row back to its sampled rollout and executable result.

Unit tests should be audited for flakiness, incompleteness, and exploitability; learned verifiers should report calibration and false selection rates. Failed environment builds and Moatless rejections should be retained with reason codes. Semantic issue/patch overlap and code-clone checks should supplement repository disjointness.

The task environments, sampled failures, and balanced verifier data are valuable for agent training and test-time selection within the accepted `training_use` scope. They are not license-complete or immutable by default, and reported benchmark gains do not certify task quality, model loadability, runtime reproducibility, or rights.
