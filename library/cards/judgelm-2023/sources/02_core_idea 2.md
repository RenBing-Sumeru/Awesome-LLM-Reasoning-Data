One-sentence contribution: JudgeLM turns fine-tuned judge benchmark with bias mitigation into a reusable evaluation surface. Its core mechanism is the pairing of a task schema with a scoring, judging, verification, or environment predicate.

The data object is: benchmark records expose fine-tuned judge benchmark with bias mitigation, prompt/task metadata, a model output surface, and a score or success target. The feedback contract is: the official evaluator, answer key, judge, hidden test, metric, or environment predicate determines success. Direction label: judge_reward_meta_evaluation for open-ended LLM eval.

For comparison, use benchmarks with similar verifier type, hidden/live policy, scaffold budget, and artifact release model. The Card keeps evaluation use separate from training use because the current evidence says: evaluation and audit; no post-training reward use is recorded unless official artifacts explicitly support it.
