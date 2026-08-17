# Problem: What question is this paper trying to answer?

- Benchmark size: 164 道手写 Python 函数补全题。
- Primary source: https://arxiv.org/abs/2107.03374
- Venue/date: arXiv / OpenAI (2021).
- Decision boundary: include this Card as a benchmark or evaluation surface, not as a model-improvement recipe unless the paper explicitly trains on it.
- Concrete problem: HumanEval introduced a compact Python function-synthesis benchmark scored by hidden unit tests and pass@k.
- Atlas relevance: it clarifies how reasoning systems are scored, audited, or compared.
- Data object / evaluation surface: function signature, docstring prompt, canonical solution, and unit tests.
- L4 collection note: metadata, source links, local header, institutions, and bilingual section stubs are complete enough for human review.
