已有基线是 code-generation and executable-program benchmarks with unit-test or 裁判 feedback。SciCode: A Research Coding Benchmark Curated by Scientists 的变化点是它给出的特定任务对象和反馈契约：scientific problem, required function/code, generated solution, tests, and pass/fail score.，并由 unit tests or official scientific-code 裁判. 验收。方向信号是这个对象-反馈组合，而不是泛泛说模型能力提升或下降。

质量信号是官方产物（paper: https://arxiv.org/abs/2407.13168）、来源 元数据，以及 split、license、lineage、failure modes 等审计字段。并不新的部分是 benchmark 或 裁判 本身。复用前要检查 artifact version、license、split、evaluator/裁判 实现、data lineage、prompt/scaffold 设置和 contamination risk。
