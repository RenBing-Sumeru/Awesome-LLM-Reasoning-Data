- 训练 prompt 来自 MATH；论文报告约 40K 条保留记录，并不等于开放数据集。
- 每次 expansion 采样 K=3 个 action；Wolfram Alpha 提供步骤标签，ground-truth 比较提供终局 F。
- Hybrid reward 在回传前组合折扣后的未来步骤检查与 beta 加权终局正确性。
- GroundedPRM 是 Qwen2.5-7B-Instruct 生成式 PRM，输出判断与 rationale。
- Reward-guided decoding 以温度 1 每步采样 N=8 个候选；构造 rollout 数与温度仍为 unknown。
- “工具验证”不意味着完整语义证明、已发布 lineage、无污染或产物可复现。

