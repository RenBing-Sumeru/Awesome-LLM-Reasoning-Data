长程 Lean 定理证明要求 agent 动态决定何时推理、编译代码、搜索 Mathlib、运行 Python、缓存已证 lemma、总结失败或重新开始。Seed-Prover 1.5 研究如何把这些环境交互变成终止奖励的经验，以及如何将自然语言证明转换为递归形式证明树。

审计上的关键是：“learning from experience”描述了数据对象，却不是开放数据集。论文披露字段、工具、奖励、过滤和推理预算，但没有发布 SFT/RL 轨迹、失败摘要、模型权重、LooKeng、搜索索引、Python sandbox 或调度系统。
