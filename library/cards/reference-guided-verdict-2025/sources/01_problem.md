Exact match and F1 do not capture semantic adequacy in free-form QA, while a single LLM judge can be prompt-sensitive and unreliable. This leaves open-ended answers without a scalable evaluator that is visibly tied to a gold answer and human judgment.

The paper proposes reference-guided verdicts: several LLM judges receive the input, candidate response, and reference answer, return binary decisions, and aggregate them by majority vote. It evaluates this judgment surface against majority human labels; it does not release a new dataset or train a judge.
