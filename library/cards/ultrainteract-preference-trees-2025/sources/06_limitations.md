# Limitations

- **Correct answer is not a proof of a correct rationale.** Most acceptance signals check the final answer, tests, or execution, so a trace with invalid intermediate claims can still survive; before reuse, sample each task family and audit step-level faithfulness rather than treating `response` as verified reasoning.
- **The central ablation does not equalize all data budgets.** Removing UltraInteract or the general mixture changes both composition and row count, so the 53.6 versus 37.0 or 47.7 gaps cannot be attributed to one tree component; reproduce with fixed sample and token budgets before claiming a per-record advantage.
- **Release lineage needs reconciliation.** The current SFT file has 288,579 rows versus 286,979 correct answers in Table 1, while the pair file has 219,522 rows versus 219,819 reported pairs, and aggregate MIT tags do not settle all upstream terms; pin revisions, explain count deltas, and audit each source license before redistribution.
