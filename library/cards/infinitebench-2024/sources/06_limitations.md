Correctness is relative to task-specific metrics. Accuracy is only as good as answer parsing and target construction; ROUGE-style metrics reward lexical overlap and may miss semantically correct paraphrases or unsupported fluent answers.

The benchmark is public and therefore vulnerable to training contamination. Scores can change with tokenizer length accounting, context truncation, prompt wrapping, API model revisions, decoding budgets, and evaluator library versions.

It should not be read as a full agent benchmark, retrieval-augmented generation benchmark, or proof of reliable long-context reasoning. Some tasks are synthetic by design, and realistic-source licenses or redistribution terms require artifact-level review.
