SuperGLUE is useful as a benchmark-design recipe for replacing a saturated evaluation suite without losing comparability. It shows how to retain a single headline metric while preserving per-task metrics, diagnostics, private test labels, and usage rules.

For reuse, preserve at least these fields: task name, original dataset lineage, split, input fields, answer format, reference label, scorer metric, task-level score, aggregation rule, diagnostic category if any, submission date, and data-use policy. For modern LLM prompting studies, also store prompt template, decoding settings, answer parser, and contamination evidence.

It is also useful as an audit checklist: do not compare aggregate scores without checking task-level failures, do not mix diagnostic scores into the main metric unless the official scorer does so, and do not treat evaluation labels as a reward model without separate licensing and feedback-contract review.
