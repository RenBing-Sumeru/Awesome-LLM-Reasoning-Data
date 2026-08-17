- 将训练来源类别、RLHF/RLAIF 和新的 harmlessness pipeline 视为高层披露；数据、反馈、奖励和算法制品仍不可得。
- 将 reward-hacking 压力测试、hidden fuzzed tests、环境或奖励结构变更和监控，与未披露的 RLHF/RLAIF 奖励契约以及现实世界 hacking rates 区分开来。
- 将手选或扩展的 coding tasks 和 held-out fuzzed variant 视为评测 split 陈述，而不是已发布任务数据集或完整的训练/评测重叠审计。
- 将 white-box model-diff、sparse-autoencoder 和 activation-steering 工作视为内部发布前评测；snapshots、vectors、prompts、labels、代码和完整结果均未公开。
- 保留报告的警告：evaluation awareness 可能使行为评测产生偏差并系统性低估部署风险，但不推断部署失败率。

