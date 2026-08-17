# 07 Usefulness

Use PRM800K as a reference schema for step-level reasoning supervision. A reusable record should keep the problem, subject/source split, ground truth, generated solution steps, per-step completions, human rating, flags, chosen continuation, final answer, answer-grader result, PRM score if present, generator provenance, and data split.

For the atlas, the paper is useful because it separates process feedback from outcome feedback. It can guide reward-model training data, verifier evaluation, annotation-interface design, and audits of chain-of-thought datasets. The main operational rule is to keep human step labels, final-answer correctness, and model-selection scores as different fields.
