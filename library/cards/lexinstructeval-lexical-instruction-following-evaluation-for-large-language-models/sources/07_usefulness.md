1. **Deterministic instruction rewards:** Use triplets and the verifier for RL or rejection sampling, while retaining rule-level failures rather than only an aggregate score.

2. **Verifier audit:** Vary tokenization, Markdown normalization, and loose transformations, then compare human agreement to locate false positives and negatives.

3. **Multilingual extension:** Reuse the grammar and conflict filters for new languages, but localize sentence, word, and character parsers and repeat expert review.
