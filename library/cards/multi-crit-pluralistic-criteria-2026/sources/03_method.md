1. **Select tasks:** Open-ended generation and visually grounded reasoning with verifiable answers are both included, preventing the benchmark from measuring only subjective preference.
2. **Generate response pairs:** Outputs from different LMMs are collected, and difficult pairs with similar overall quality but different error profiles are retained.
3. **Human multi-annotation:** Annotators judge each pair separately under criteria such as visual grounding, correctness, and presentation, recording both holistic preference and criterion conflicts.
4. **Construct tests:** Criteria are switched or combined for the same response pair to create pluralistic, switching, and conflict settings.
5. **Compute metrics:** Criterion-level predictions are compared with human labels, followed by analyses of reasoning tuning, test-time scaling, and model type. Data is released on the official Hugging Face page.
