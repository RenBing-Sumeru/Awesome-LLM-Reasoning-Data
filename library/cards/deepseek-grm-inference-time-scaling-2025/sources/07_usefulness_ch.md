在 Rollout, Search, and Test-Time Trace Data 分类中，DeepSeek-GRM 是 verifier 侧的 scaling study。它可用于分析额外计算如何分配给重复判断而非解题生成，以及第二个 verifier 如何筛选这些判断。这一区分对 post-training pipeline 很重要：被归因于“更好数据”的 policy 改善，实际可能来自更大的奖励采样预算或 Meta RM。

可复用记录应保存来源条目与许可证、query、有序候选 response、ground-truth preference 或正确性标签、打乱后的顺序、hinted/non-hinted 标记、每条生成原则与 critique、提取的 pointwise score、拒绝原因、GRPO reward、checkpoint、temperature、样本数、Meta RM 概率、被选样本、聚合分数与 benchmark 结果。奖励模型训练记录和推理时判断轨迹应分开。已发布 model collection 支持评测使用，但原始 lineage 缺失，因此不能把该工作表述为开放反馈数据发布。
