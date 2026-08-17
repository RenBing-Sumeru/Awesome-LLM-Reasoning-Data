Use TensorBench as an evaluation and audit reference, not as a verified training corpus.

For benchmark builders, it provides a concrete episode schema: pinned task record, frozen repository state, agent actions, final diff, before/after test evidence, binary terminal predicate, and verifier-audit labels. The fresh-checkout grading pattern is reusable whenever live-agent state must be separated from final artifact verification.

For verifier researchers, the benchmark is a useful negative case as well as a design example. The inherited suite catches regressions, but self-authored feature tests create an oracle-collusion channel. Reproductions should add independent tests to a stratified subset, estimate false-positive and false-negative rates, and report how many passes survive the stronger oracle.

For agent analysis, the 1,393 episodes support comparisons of regressions, near misses, patch size, file edits, tool-call profiles, and complementarity across scaffolds—provided the claimed trajectory files become accessible and are pinned. Failed episodes are especially valuable because they distinguish partial new-test success from regression-only and no-test failures.

For post-training use, the current safe class is evaluation/audit only. Do not use tasks, successful patches, or trajectories for SFT, reward modeling, or RL without verifying files, licenses, record-level lineage, contamination policy, environment replay, and retention of failures. A useful follow-up dataset would pair each task with independent maintainer tests, immutable environment hashes, all successful and failed trajectories, and separate labels for regression preservation, feature completeness, and adversarial-test behavior.

