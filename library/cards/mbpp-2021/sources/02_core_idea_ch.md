核心贡献是在 code-generation, program-synthesis, unit-tests 上提供 About 974 Python programming tasks in the full MBPP collection; common sanitized/test-only variants must be pinned separately.，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：program execution against provided tests。

数据对象或环境是：natural-language programming problem, reference code, and test cases; Benchmark size: 约 974 道 Python 编程题；常见 sanitized 子集规模更小，需 pin 版本。最接近的对比对象是 code-generation and executable-program benchmarks with unit-test or 裁判 feedback。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 程序化。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
