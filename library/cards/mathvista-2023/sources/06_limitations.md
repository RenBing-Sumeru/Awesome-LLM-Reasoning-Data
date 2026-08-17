Correctness is answer-level correctness after output extraction, not proof that the model used the intended visual evidence. A model can answer from language priors, OCR leakage, or dataset artifacts on some items.

Because MathVista aggregates many source datasets, license terms, image provenance, annotation conventions, and split semantics are heterogeneous. Leaderboard numbers can change with prompt, OCR/caption pipeline, answer-extraction model, and subset choice.

The benchmark should not be reused as training reward without auditing whether generated model outputs are normalized consistently and whether visual grounding is actually required for each instance.
