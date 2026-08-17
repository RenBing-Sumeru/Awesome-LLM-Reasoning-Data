1. **Build the base corpus.** Normalize labeled mathematical trajectories into problems, prefixes, steps, and labels.
2. **Construct two indexes.** Encode questions and steps separately with provenance and labels.
3. **Run two-stage retrieval.** Retrieve similar questions first and then similar labeled steps within those candidates.
4. **Create augmented records.** Store target examples with retrieved cases and remove cross-split duplicates or conflicting evidence.
5. **Train and use.** Fine-tune a PRM on the augmented records and reuse the same retrieval pipeline at inference.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain target steps, problem-level cases, step-level cases, and retrieval sources and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
