The 64,689-to-2,438 environment funnel lacks a released rejection ledger. Lite count drifts between 230 in the venue-final paper/HF card and 234 in the README. Other surfaces disagree on 868 versus 875 on-policy successes and 5,557 versus the current 5,564 failures.

Lineage fragments across repositories. Main task rows preserve instance IDs and commits, but success-only SFT and reformatted verifier data drop explicit task/run columns. No release-wide manifest binds tasks to trajectories, tests, scaffold commits, checkpoints, or exact training subsets.

Reproduction depends on mutable infrastructure. Checked repositories have no tags/releases; documentation uses branch URLs; images use `latest` without a complete digest or SBOM list. One current digest is not a 2,438-image manifest. The repository-bundled paper is an older 18-page file, whereas PMLR and arXiv v2 provide the 21-page final paper and must control claims.

Licenses vary: paper CC BY 4.0, main code Apache-2.0, main data and OpenHands SFT MIT, while Lite, Raw, sampled/verifier/Moatless trajectories, checked models, and Docker images lack license metadata. No per-record ledger reconciles rights for upstream repositories, issues, patches, tests, and container layers.

Success-only SFT biases toward solvable tasks, unit tests can be gamed, and learned verifiers can misrank patches. Repository disjointness from SWE-Bench does not rule out semantic duplicates, code clones, or teacher memorization. Several released model repositories also lack cards, base-model/license declarations, and self-contained loading files.
