# 证据

**主张：**相较对相同原始 instruction 输出只增加检索，reflection-token 增强还带来额外贡献。**受控设置：**图 3a 使用相同 7B 模型家族和 5 万条训练样本，对比 Self-RAG、No Retriever 目标（普通 instruction pair）以及 No Critic 目标（始终前置首篇文档但没有 reflection token）。**结果：**PopQA 上 Self-RAG 为 45.5，两个对照分别为 43.6 和 42.6；抽样 ASQA 上 exact match 为 32.1，对照分别为 31.0 和 18.1。**边界：**该实验在 5 万条规模下隔离了训练目标设计，但 critic 标签蒸馏自 GPT-4，ASQA 也只评估了 150 条抽样实例。
