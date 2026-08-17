1. **Static security analysis is incomplete:** Slither can produce false positives and negatives and does not cover economic attacks, protocol composition, or runtime state. Vul@k cannot replace audits and should be supplemented with fuzzing, symbolic execution, and human review.

2. **Gas comparisons are sensitive:** Compiler optimization, EVM version, test paths, and inputs affect gas. Gas@k values from different configurations are not directly comparable, so toolchains and call distributions must be frozen.

3. **Dataset-version differences:** The early 1,125-sample/nine-repository release and final 1,507-sample/28-repository version are different snapshots. Open contracts may also appear in pretraining, requiring repository-level separation and contamination records.
