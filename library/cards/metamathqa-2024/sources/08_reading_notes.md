# Reading notes

- **Positioning:** fixed-question answer augmentation saturates; MetaMath also transforms questions into new reasoning views.
- **Method handle:** the four buckets are answer augmentation, rephrasing, self-verification, and FOBAR, with known-answer constraints deciding retention.
- **Data/artifact handle:** MetaMathQA publishes 395k records, split into 240k GSM8K-derived and 155k MATH-derived examples with lineage fields.
- **Evidence anchor:** question-transformation mixtures outperform answer augmentation in the LLaMA-2-7B GSM8K ablation; token and mixture changes limit attribution.
- **Reuse decision:** use for solved math seeds; first audit semantic duplicates and answer leakage separately for each transformation type.

