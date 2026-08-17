1. Inputs: competition-math problems, subject/difficulty metadata, worked solutions, and boxed final answers.
2. Pipeline: curate problems into train/test splits, preserve solution text and answer fields, run models with fixed prompts, extract final answers, and grade against references.
3. Outputs: dataset records and model-level accuracy by split, subject, and difficulty.
4. Verifier: final-answer checking by normalization and symbolic/equivalence logic where available; ambiguous equivalence can require manual review.
5. Reproducibility notes: pin the dataset release, train/test split, answer parser, grader implementation, prompt format, decoding budget, and any filtering such as MATH-500.
