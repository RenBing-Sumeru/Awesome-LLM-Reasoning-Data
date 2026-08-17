# 新意：相比已有工作新在哪里？

- 既有工作基线：更早的 NLU、QA、math、code、retrieval、database 或 domain benchmark。
- 新变化：这项工作围绕 code-generation、unit-test-benchmark、program-synthesis 提供了更清晰或更常用的评测面。
- 数据量：164 道手写 Python 函数补全题。
- 方向信号：它让我们能把“能力提升”落到具体 task object 和 scorer 上，而不是只看笼统模型印象。
- 哪些部分并不新：benchmark 分数本身不是训练 recipe，也不是通用 reasoning 证明。
- 复用前检查：版本、split、license、answer normalization、scorer 实现和 contamination 风险。
