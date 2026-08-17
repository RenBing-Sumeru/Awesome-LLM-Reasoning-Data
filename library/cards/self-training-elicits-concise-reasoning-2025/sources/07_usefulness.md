For the rollout-search track, this recipe shows how training-time best-of-N can create answer-verified concise traces and amortize search into later greedy decoding. It is suitable for studying candidate budget, per-question retention, length objectives, and the boundary between programmatic and model-based feedback.

A reusable release should preserve source dataset/revision and row ID; target checkpoint, tokenizer, chat template and prompt; every candidate text and token count; parser version, normalized answer and decision; selected candidate ID; dropped-question reason; optional few-shot exemplar set; GPT-4o/manual decision records; generation seed/settings; SFT membership; and file hashes.

Evaluation should report retention by difficulty/category, parser false accepts/rejects, step-validity audits, training-data length distributions, generation and training compute, greedy accuracy/length, latency, and the break-even number of deployments. This prevents shorter outputs from being interpreted without construction cost.

The released code can support reproduction from original GSM8K/MATH sources, but reusers should not treat paper-linked fine-tuned models as a substitute for the missing training-trace corpus. Changing the target model requires regenerating candidates because self-training and selection are checkpoint-conditioned.

