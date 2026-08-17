PaRS 研究如何为 QD-LED 配方到最大 EQE 的预测构造 SFT 监督。内部 11k 器件配方数据按 10k/1k 划分；教师为每份配方产生 rationale 和 JSON EQE 预测。论文只将数值接近未发布湿实验目标、并遵守简单物理约束的轨迹视为可用。

它属于 Rollout/Search/Test-Time Trace，因为每个 prompt 都有候选序列、接受契约、早停以及选中或丢弃的结果。实际记录未发布：无法检查 prompts、配方、候选/拒绝轨迹或 gate outputs。因此该工作是构造 recipe 与审计参考，而不是可复用材料数据集。
