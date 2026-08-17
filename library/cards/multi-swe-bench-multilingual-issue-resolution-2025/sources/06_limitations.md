1. **Language imbalance:** The seven languages differ in repository counts, task volume, build difficulty, and issue types. Cross-language averages mix task complexity with ecosystem effects. Results should be stratified by language, repository, and complexity.

2. **Incomplete test oracle:** F2P and P2P tests cover only executable behavior represented in the pull request. A passing patch may still violate the textual requirement or introduce untested regressions. Human review, full suites, and security or static checks remain necessary.

3. **Environment and contamination:** Multilingual images are version-fragile, and public issues or pull requests may be in pretraining data. The 1,632 benchmark and 4,723 RL records also require strict deduplication. Reuse should pin Docker digests, use time splits, and audit commit and patch overlap.
