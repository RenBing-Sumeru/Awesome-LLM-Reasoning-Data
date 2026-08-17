Use LAB-Bench as a schema reference for domain-expert benchmarks where each sample carries a research artifact, a target answer, category metadata, and a versioned scoring contract. It is useful for evaluating retrieval, multimodal document use, scientific tool use, and long-context sequence reasoning in one biology-centered surface.

Reusable fields include category, subtask, prompt, choices, answer, source artifact, public/private split, dataset revision, human coverage when available, evaluator version, and model scaffold. The atlas value is the explicit bridge from biology workflow objects to answer-level feedback.

For downstream recipes, keep evaluation and training separate. If examples are used for instruction tuning, mark them as contaminated relative to LAB-Bench scores and keep the canary/filtering note with the data lineage.
