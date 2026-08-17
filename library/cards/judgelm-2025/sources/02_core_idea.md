JudgeLM is a family of 7B, 13B, and 33B instruction-tuned judges that score two answers before optionally producing a rationale. Its core data object is a seed task, an answer pair, optional reference, GPT-4 scores, and a textual justification. The paper releases code and models; it publicly releases 100K GPT-4-generated judge samples, while the validation set is author re-annotated.

The contribution is not merely a larger judge: swap augmentation targets position bias, reference support supplies external evidence, and reference drop trains one model to handle both reference conditions.
