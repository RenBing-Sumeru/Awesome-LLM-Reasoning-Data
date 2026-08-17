InfiniteBench is an ACL 2024 long paper and arXiv preprint released in 2024 for evaluating LLMs on contexts beyond 100K tokens. The problem is that earlier public long-context benchmarks often stayed near 10K-token inputs, while new model context windows made 100K+ evaluation necessary.

The evaluation surface is a set of 12 tasks over very long contexts from retrieval, code, math, novels, and dialogue. Official artifacts expose JSONL-style records with context, input, answer, and sometimes options; the repository table reports task-specific example counts and average input/output token lengths.

The decision boundary: this is an evaluation benchmark for long-context processing, not a training corpus, memory architecture, or retrieval system by itself. It matters to the atlas because it forces scoring to be tied to a versioned long input object and a task-specific metric rather than a generic "long context" claim.
