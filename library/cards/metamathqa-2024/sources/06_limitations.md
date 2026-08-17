# Limitations

- **Author-stated boundary:** experiments concentrate on GSM8K and MATH; a transformation that improves these domains may not preserve constraints elsewhere, so validate transformations on a held-out domain before reuse.
- **Curator audit risk:** answer matching can accept locally invalid rationales and backward prompts can leak target structure; sample intermediate steps and measure answer leakage by transformation type.
- **Curator audit risk:** proprietary GPT-3.5-Turbo and unreported call/token totals prevent exact regeneration; freeze released records and report dataset revision instead of claiming recipe-level reproducibility.

