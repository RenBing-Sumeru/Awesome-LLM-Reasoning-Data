1. **Large-scale pretraining data:** Approximately 5.33M synthetic evaluation examples are generated from controlled QA and model outputs to learn basic correctness patterns.
2. **Judge distillation:** Roughly 449K LLM-judge ratings expand coverage of open responses, paraphrases, and error types.
3. **Human annotation:** Multiple reviewers score 3,580 responses from 15 audio models, producing 11,721 high-quality judgments.
4. **Distribution modeling:** Human ratings are treated as samples from a Beta distribution, and the model predicts distribution parameters rather than a point estimate.
5. **Comprehensive evaluation:** Correlation, calibration, and uncertainty are compared across models, question types, and disputed examples.
