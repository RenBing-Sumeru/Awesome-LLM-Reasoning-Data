# 核心思想：这篇论文的主要贡献是什么？

- 一句话贡献：HumanEval 用小而精的函数合成任务和单元测试定义代码生成能力，是代码 benchmark 的基础坐标。
- 核心机制：把一组可复用任务实例和明确的 scoring contract 绑定起来，让模型能力可以在同一评测面上比较。
- 数据量：164 道手写 Python 函数补全题。
- 数据对象 / 评测面：一条样本包含函数签名、docstring prompt、参考实现和隐藏/公开测试。
- 反馈契约：执行生成代码并跑单元测试，常用 pass@k 汇总。
- 分类理由：它的主要价值是提供可复用的 benchmark 坐标，帮助判断新 reasoning-data 工作到底改善了哪类能力。
- 应该对比：同领域的 MMLU、BIG-bench/BBH、LiveBench、GPQA、MMMU、SWE-bench、WebArena 或其他 domain benchmark。
