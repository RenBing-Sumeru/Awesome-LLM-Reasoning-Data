HIR-16K 来自 MulDimIF、VerIF、IFTrain、Chatbot Arena 和额外程序化约束合成。论文报告约 16K 个 query，每条包含五个以上可分解约束。公开数据行暴露 prompt、criteria、checker metadata、source 与标识。已核查卡片没有披露精确上游版本、分来源数量、跨来源去重或污染检查。

RL 中，策略采样候选回答并获得逐约束结果。稠密满足度恰为 0 或 1 的候选不进入 hindsight 选择；部分失败按 entropy 与已满足约束比例的调度组合排序。选中回答原样复制，prompt 删除未满足约束，并用 replay indicator 标记重标样本。

原始与 replay 样本共同进入 Reinforce++ 风格更新，但成功判据不同：原始样本要求完整约束集，replay 样本只要求保留子集。公开 HIR-16K 是 prompt 与约束发布，不包含策略 rollout、接受/拒绝 replay 候选、改写 prompt、entropy、训练步奖励或 checkpoint 对应 replay buffer。
