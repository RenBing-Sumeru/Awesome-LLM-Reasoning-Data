# 03 Method

Inputs are MATH problems, model-generated solutions split into steps, reference/final-answer grading rules, and human step annotations. The official release exposes JSONL records with problem text, ground truth, generated steps, model answers, per-step completion alternatives, ratings, flags, and metadata.

The pipeline is:

1. Generate many step-by-step solutions for MATH problems.
2. Present partial solutions and candidate next steps to human annotators.
3. Collect step ratings as positive, neutral, or negative, with flags and chosen completions where applicable.
4. Use active learning to focus labeling on solutions that are plausible but likely to contain mistakes.
5. Train a process reward model to estimate step correctness and score a full solution from its step scores.
6. Compare PRM-based best-of-N selection with outcome reward models and majority vote.

Reproducibility requires pinning the PRM800K GitHub release or commit, Git LFS data files, MATH split policy, answer grader, annotation instructions, generator model family, sampling count, PRM scoring rule, and whether released labels or unreleased internal model weights are being used.
