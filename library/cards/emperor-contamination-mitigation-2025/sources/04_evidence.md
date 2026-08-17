Claim — existing update strategies do not reliably achieve both preservation and contamination resistance.

Controlled setup — across 10 LLMs, five benchmarks, 20 strategies, and mild/intensive contamination, each strategy is compared with the unmodified benchmark using the same question-level metrics. The main contrast is the update rule, while the study explicitly constructs and checks contamination.

Result — small edits usually retain fidelity above 0.9 but do not significantly beat vanilla resistance across all benchmarks. More aggressive MPA reaches only 0.686 fidelity on MMLU; semantic-altering extensions reach about 0.97 resistance but lose roughly 0.15 fidelity on average. No method reaches the desired high-high region (Table 3–4, Figure 4).

Boundary — this supports a trade-off under the selected models, benchmarks, contamination recipes, and automated updates; it does not establish that all future mitigations fail.
