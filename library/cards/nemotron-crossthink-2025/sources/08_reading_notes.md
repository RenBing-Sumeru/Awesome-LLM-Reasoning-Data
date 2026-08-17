- Separate the paper mixture (588,645 prompts) from the public synthetic release (287,376 rows: 187,496 QA plus 99,880 Math).
- Released rows are prompts and rule ground truths; online policy reasoning and reward traces are absent.
- GRPO uses eight rollouts, temperature/top-p 1.0, context 5,000, learning rate 1e-6, KL 0.001, and 650 steps.
- Positive reward requires both exact answer correctness and required formatting; this is brittle for open-ended semantics.
- Pin HF revision a4ce9a3b9434c5f231e2cbe30696d9a721c11d69 and audit blend IDs, decontamination, majority-vote labels, upstream rights, and Qwen-license conditions.

