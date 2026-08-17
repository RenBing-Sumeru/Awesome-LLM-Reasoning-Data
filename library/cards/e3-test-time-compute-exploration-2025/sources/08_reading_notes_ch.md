
- 将 e3-math-easy 与 e3-math-medhard 视为提示级静态发布，而不是 grouped on-policy rollout 语料。
- 审计准确的 8k 配置，因为 rollout 数、entropy coefficient 和 mini-batch size 在论文与脚本间不一致。
- 在依赖二元奖励前，复现对 think 结束标签 与 boxed answer 的 MathD/SymPy scorer。
- 记录失败轨迹及其归一化 advantage，因为它们是论文所称探索机制的核心。
- 将 curriculum、rollout 数、off-policy 复用和推理预算与数据质量主张分开。
