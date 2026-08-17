Inputs are a short factual question, its reference answer, optional metadata, and a model answer. The public CSV exposes `metadata`, `problem`, and `answer`; metadata records topic, answer type, and supporting URLs.

The dataset pipeline is:

1. AI trainers write knowledge-seeking questions, reference answers, and supporting evidence links.
2. Each question must target objective knowledge, specify answer scope, avoid time-changing answers, and be answerable as of December 31, 2023.
3. Candidate questions are screened for difficulty by requiring at least one of four reference model completions to be wrong.
4. An independent trainer answers each question without seeing the original answer.
5. Items are kept only when trainer answers agree and when source/domain and single-answer checks pass.

The evaluation pipeline is:

1. A model receives the `problem` field and returns a free-form answer.
2. The released grader prompt compares `problem`, `answer`, and the predicted answer.
3. The grader returns A, B, or C, mapped to CORRECT, INCORRECT, or NOT_ATTEMPTED.
4. The harness aggregates correct, incorrect, not attempted, correct-given-attempted, and F-score.

Reuse requires pinning the CSV snapshot, evaluator commit, grader model, grader prompt, answer parsing rule, model prompt/scaffold, and whether calibration experiments use repeated sampling.
