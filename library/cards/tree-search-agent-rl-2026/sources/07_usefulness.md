For **Rollout, Search, and Test-Time Trace Data**, Tree-GRPO is a concrete recipe for studying how rollout topology changes the amount and granularity of supervision obtained from a fixed training-time budget. A controlled follow-up can hold the prompt pool, current policy, terminal reward, and expected token/tool budget fixed while changing \(M\), \(N\), \(L\), \(K\), expansion-node sampling, and whether intra-tree and inter-tree advantages are combined.

Evidence-backed uses include:

- implementing shared-prefix ReAct rollout generation for online RLVR or agent training and comparing it against independent chain sampling at matched generated-token, tool-call, and wall-clock budgets;
- treating complete thought-action-observation interactions as candidate process units, then testing whether outcome-derived branch comparisons agree with explicit step annotations or causal interventions;
- auditing the contribution of intra-tree and inter-tree normalization, including small-tree variance, all-equal-reward groups, and collapse conditions;
- measuring the difference among nominal leaf count, independent-root count, marginal suffix generation, selected-leaf count, and truly distinct trajectories;
- constructing a release format with stable prompt/tree/node IDs, parent-child links, expansion choices, every selected and rejected leaf, programmatic score details, group statistics, advantage values, policy version, and checkpoint linkage;
- testing replay under pinned Wikipedia/E5 and web-search snapshots, rather than treating live retrieval as a stationary environment.

The appropriate reuse class is **strong construction and audit reference; conditional implementation/reproduction; direct training-data reuse unavailable**. The official code can guide a new implementation under its Apache-2.0 license, but the paper-run trace data, processed QA bundle, selected/rejected leaves, reward ledger, and environment snapshots are not released. Rights for upstream datasets, retrieval observations, and generated trajectories also remain unknown.

This Card can serve as an evaluation-design warning. The six-leaf default should be compared with about four independent trajectories at matched expected generation cost, not with six independent chains as though ancestry were irrelevant. Studies should report realized tokens, tool calls, distinct roots, expanded suffixes, selected/unselected leaves, reward variance, and wall-clock cost separately.

It can also serve as a release checklist for the assigned track. A tree-search paper becomes auditable reasoning data only when the runtime topology, feedback decisions, rejection boundary, environment state, and lineage survive beyond the optimizer step. Benchmark EM/F1 improvements alone do not establish that those missing objects are reusable, licensed, decontaminated, or high quality.
