# Reading notes

- **Positioning:** general alignment data did not combine hard reasoning, tools, feedback, and objective correctness, so UltraInteract serializes those signals into one preference-tree corpus.
- **Method handle:** challenge selection, 20-action retries, ground-truth-assisted fallback, failed-branch critique, and a five-turn cap determine which actions survive.
- **Data/artifact handle:** the non-gated MIT releases currently expose 288,579 SFT rows and 219,522 pair rows in Parquet; an actual SFT row contains `task`, `dataset`, `instruction`, `response`, `id`, and `parent_id`.
- **Evidence anchor:** Table 5's full Eurus-7B-SFT recipe averages 53.6 versus 44.0 with source ground truth, 37.0 without UltraInteract, and 47.7 with UltraInteract alone, but removal budgets are not matched.
- **Reuse decision:** use the SFT release for checkable reasoning demonstrations after pinning revisions, reconciling source terms, explaining count deltas, and measuring step-level checker false positives.
