1. Define candidate and evaluator roles, then implant the same trigger in candidate outputs and evaluator training examples with target scores.
2. Instantiate minimal web, partial malicious-annotator, and full weight-poisoning access according to whether inputs, labels, and poisoned subsets are controlled.
3. Fine-tune the candidate and evaluator; activate the chain by sending triggered candidate outputs to the judge.
4. Measure attack success rate, score shift, and clean agreement with GPT-4o-mini on MT-Bench and Feedback-Collection settings.
5. Test triggers, poison rates, architectures, pairwise scoring, toxicity guardrails, and RAG reranking; compare ICL, continued fine-tuning, and 0.5 linear model merging. Code, configurations, and tools are official; data licenses and complete release contents must be checked in the repository.

The acceptance check is whether the desired triggered verdict rises while clean behavior remains close to the clean evaluator; randomness, training budgets, and data versions should be fixed for replication.
