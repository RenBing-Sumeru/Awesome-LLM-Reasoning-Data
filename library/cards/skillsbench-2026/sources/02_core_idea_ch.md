一句话贡献：SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks 提供了一个命名评测面，它的价值来自可固定的数据对象和反馈契约，而不是 leaderboard 数字本身。

核心机制是用一组任务连接评分面：混合的 checker 或 judge 评分。数据对象是任务、模型输出、技能标签、checker/judge 结果与分数。方向标签是 benchmark / evaluation surface；下游用途应保守理解为 evaluation, audit。最接近的对照是已有 skill-evaluation、model-capabilities 评测，但题源、scorer 或发布策略不同。
