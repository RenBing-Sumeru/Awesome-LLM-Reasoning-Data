For **Rollout, Search, and Test-Time Trace Data**, LATR is a concrete recipe for separating rollout count from rollout topology. A follow-up study can hold the prompt pool, policy, terminal reward, optimizer, and nominal \(k=8\) group size fixed, then vary probability gates, lookahead length, similarity metric, pruning policy, hybrid schedule, and failure retention. This makes search-generated group composition an experimentally controllable data variable.

Practical uses include:

- implementing a branch–lookahead–prune rollout worker for GRPO or DAPO and comparing it with stochastic sampling at matched response, generated-token, and wall-clock budgets;
- recording raw parent/birth links, lookahead segments, prune reasons, terminal rewards, and group membership to build an auditable search-trace dataset that the official release does not provide;
- testing whether edit distance, suffix match, or ROUGE-L predicts semantic trajectory diversity, including false-prune and false-retain audits;
- measuring how duplicate padding, all-same-reward groups, low-probability branches, and the LATR/stochastic mixing schedule affect policy gradients;
- using the paper–script discrepancy as a reproducibility case study in configuration lineage and version-pinned recipe reporting.

The appropriate reuse class is **strong recipe/audit reference; conditional evaluation and reproduction; training-data reuse blocked pending rights and lineage checks**. The public Parquet rows can provide processed task and reward inputs for a research rerun, but they are not reusable LATR trajectories. Code and data licenses are unknown, exact source snapshots and decontamination are missing, and the math scripts do not unambiguously implement the paper’s main configuration. Redistribution or production training should wait for explicit licenses and upstream-rights review.

Evaluation reuse should preserve the separation among the 1,024-item DAPO-Math validation partition, MATH-500, AMC-2023, Olympiad-Bench, and any adapted training pool. Report response count, unique surviving trajectories, generated tokens, branch attempts, pruned/rejected branches, per-step latency, peak memory, and final wall-clock budget separately. Pass@1 improvement alone cannot attribute gains to better data rather than extra sequential work or selection effects.

The Card is also useful as a release checklist: processed prompts are not enough to audit a search-data paper. A reusable release needs serialized trees, all failures, verifier decisions, immutable source and transformation manifests, paper-matching configurations, and explicit licenses.
