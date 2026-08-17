Open-Reasoner-Zero（ORZ）研究的是：当推理强化学习直接从预训练 base model 启动，而不是从经过 SFT 或蒸馏的 policy 启动时，能够扩展到什么程度。权威来源是 NeurIPS 2025 Main Conference 论文及其附加 supplement；官方仓库、prompt 数据、policy checkpoint 和 critic checkpoint 构成公开工件表面。

“Zero”只有狭义含义。主要 Qwen2.5 Base 运行在 PPO 前没有 SFT 或蒸馏阶段。它并非从未训练模型开始，也不是零数据：base model 的预训练仍在上游，RL 还会消耗数万条来自公开和合成来源的 prompt/参考答案对。人类也设计了 prompt、过滤器、答案提取、奖励规则、PPO 和评测。

必须区分两种数据对象。公开对象是两条 message 组成的 prompt/参考答案记录；真正的训练对象则是在线完整响应轨迹，包含 prompt、生成 token、停止状态、一个终局正确性奖励、token-level critic value、token-level advantage、policy probability 和 PPO ratio。ORZ 每个 prompt 采样 64 条响应，但论文运行的轨迹没有发布。

公开文件分别含 56,878 条 original、72,444 条 extended 和 13,451 条 hard 记录。按空白归一化后的精确字符串审计分别发现 2,503、24,025 和 611 条重复记录，对应 54,375、48,419 和 12,840 个唯一 prompt。逐行缺少源记录 ID、许可证、split、筛选决定、难度分数、rollout 数据和 checkpoint/run 绑定。

本工作属于 **Data Construction & Open Release Recipes**，因为 ORZ 提供了具体的 base-model RLVR stack 和可复用的 prompt/checkpoint 工件，同时说明：开放代码和权重不能替代报告 RL 运行所依赖的精确在线数据、反馈、失败与血缘账本。
