对于“前沿报告与数据披露账本”，Llama 4 的价值在于它不仅列出优化阶段，还披露了部分筛选逻辑。报告把难度标签连接到两个具体操作：删除 Maverick 超过一半的简单 SFT 数据，以及在 online RL 中反复把提示过滤到中等至困难区间。它还通过描述预训练阶段的 Behemoth-to-Maverick codistillation，把教师目标构造与后训练区分开来。

这里需要做的是内部证据比较，而不是宣传。已发布的 Scout/Maverick 权重、仍未发布的 Behemoth 教师、模型级预训练 token 总量、家族级混合说明、后训练阶段和评测结果属于不同证据类型。本 Card 的新意是可审计地拆开这些层，并区分 Maverick 与 Behemoth 的工作流；它并不声称 Llama 4 首创了 SFT、RL、DPO、蒸馏、model-as-judge 过滤或多模态训练。
