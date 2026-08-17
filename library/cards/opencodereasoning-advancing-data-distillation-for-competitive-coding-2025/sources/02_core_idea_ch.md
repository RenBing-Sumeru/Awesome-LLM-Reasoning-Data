核心配方是用广泛的问题覆盖替代规模较小的“正确性认证解答集”：对公开竞赛编程问题做精确匹配去重，从 DeepSeek-R1 采样大量推理与代码响应，保留格式和语法合格的输出，再测量语料规模与基于执行的选择如何改变下游 SFT。

| 契约要素 | 保留或可观测内容 |
|---|---|
| Prompt | 来自 TACO、APPS、CodeContests 或 OpenR1 CodeForces 的问题文本，或用于重建问题的来源索引 |
| 教师行为 | DeepSeek-R1 的 `output`，其中含带标签的推理轨迹和最终代码块 |
| 产物 | 提取后的 Python `solution`；C++ 用于消融实验 |
| 元数据 | `id`、`dataset`、`split`、`source`、`license`、`difficulty`，以及必要时的 `index` |
| 主接收信号 | 推理/代码格式与语法可解析性 |
| 未覆盖整个发布集的信号 | 单元测试结果、标量 reward、步骤标签或校准后的正确概率 |

benchmark 重叠筛查提供另一层反馈：余弦检索先标出候选对，Llama-3.3-70B-Instruct 与 Qwen2.5-32B-Instruct 判断语义相似度，再由人工检查剩余候选。单元测试只用于 CodeContests 消融和 benchmark 评测。因此，尽管答案含长轨迹，监督粒度仍是 answer-level。

论文列出的最近比较对象是 KODCODE：它含 447K 条 DeepSeek-R1 代码推理样本，但只在经过 LLM 测试验证的较小子集上微调。OpenCodeReasoning 改变的是规模、来源混合和消融界面，而不是发明教师、SFT 目标、语法解析器或新的 verifier。
