1. **Generate factual answers.** Collect questions, corpora, and multi-sentence model answers.
2. **Decompose claims.** Split sentences into atomic claims while preserving answer position and prefix.
3. **Retrieve evidence.** Store corpus passages, document IDs, and retrieval scores for each claim.
4. **Compute labels.** Use entailment, contradiction, and rules to assign supported, unsupported, or uncertain rewards.
5. **Clean and release.** Remove leakage, duplicates, and parse failures to create claim–evidence–reward records.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain questions, atomic claims, retrieved evidence, entailment results, and sentence-level rewards and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
