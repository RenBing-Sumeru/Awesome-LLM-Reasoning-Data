# Novelty: What is new compared with prior work?

- Benchmark size: 164 道手写 Python 函数补全题。
- Prior-work baseline: earlier broad NLU, QA, math, code, retrieval, or domain benchmark suites.
- What changes: this work adds a benchmark surface centered on code-generation, unit-test-benchmark, program-synthesis.
- Direction signal: it is a useful coordinate for reasoning-data curation because it exposes task objects and scoring assumptions.
- Quality signal: arXiv / OpenAI and official artifacts make it traceable enough for local review.
- What is not new: a benchmark score alone is not a training recipe, verifier proof, or general reasoning guarantee.
- Reuse checks: license, contamination, answer normalization, hidden/public split, and scorer implementation.
