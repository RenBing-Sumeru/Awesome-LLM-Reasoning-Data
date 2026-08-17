建议先读 benchmark overview 与 component sections，它们定义 oracles、grammars、system tests、unit tests 和 usage。再读 use-case section，理解 benchmark 如何支持 test-generation evaluation、grammar mining、automatic program repair 和 automated debugging。

论文要和 README 配对阅读。论文解释 benchmark 为什么存在；README 解释下游 evaluator 或 agent 实际会调用的命令契约。

审计问题：使用哪个 subject 和 bug id？checkout 的是 repaired 还是 buggy version？构建的是哪个 Python 版本和依赖？生成测试是否 verified？oracle 是直接调用，还是通过 test wrapper 调用？
