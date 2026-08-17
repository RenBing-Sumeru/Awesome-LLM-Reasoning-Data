Traditional fact-verification benchmarks provide short textual evidence that a model can read directly. Real data-analysis claims may depend on aggregation, joins, and comparisons across multiple tables and millions of rows, where long-context reading is infeasible. Models must also abstain when evidence is insufficient rather than force support or refutation.

ClaimDB defines verification as executable reasoning over real databases: a system generates queries or analysis programs for a claim and maps execution results to entailment, contradiction, or insufficient evidence.
