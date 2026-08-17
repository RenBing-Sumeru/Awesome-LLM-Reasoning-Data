1. Inputs: a question or target key, the gold answer/value, a context budget, and a desired evidence position.
2. Pipeline: build multi-document QA prompts by inserting the gold-bearing document among distractors, or build synthetic key-value prompts with the target pair at a controlled location.
3. Outputs: model answer, normalized correctness, and accuracy curves over position and context length.
4. Verifier: the official scripts score final answers against known targets; no process trace or reward model is produced.
5. Reproducibility notes: pin the GitHub commit, generated QA/KV files, model prompt template, context length, key count or document count, answer normalization, and random seed before comparing scores.
