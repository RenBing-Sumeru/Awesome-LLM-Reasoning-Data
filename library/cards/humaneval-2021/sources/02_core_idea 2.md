# Core Idea: What is the paper main contribution?

- Benchmark size: 164 道手写 Python 函数补全题。
- One-sentence contribution: HumanEval introduced a compact Python function-synthesis benchmark scored by hidden unit tests and pass@k.
- Core mechanism: collect a controlled task surface and pair it with a scorer or evaluation protocol.
- Data object / evaluation surface: function signature, docstring prompt, canonical solution, and unit tests.
- Feedback contract: program execution against unit tests with pass@k aggregation.
- Category rationale: belongs to benchmark/evaluation surfaces because its main reusable object is a scoring task suite.
- Closest comparisons: compare with MMLU, BIG-bench/BBH, LiveBench, GPQA, MMMU, SWE-bench, or domain-specific benchmark Cards depending on domain.
