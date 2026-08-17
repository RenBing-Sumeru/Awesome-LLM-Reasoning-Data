Claude Opus 4.1 addendum 研究的是：当完整的模型家族训练说明已经存在于另一份报告时，如何记录一次前沿模型增量更新。其重点是变更后的政策评测、agentic safety、自动行为审计、prompt-injection defense、reward-hacking monitor 和危险能力 rule-out testing。

这不是独立的 Opus 4.1 数据配方。Addendum 要求读者参考 2025 年 5 月 Claude 4 System Card 获取完整方法与 threat-model 背景，却没有说明 Opus 4→4.1 的精确训练数据和 checkpoint delta。家族级背景只是 lineage context，不能证明所有来源、比例或 reward 都保持不变。

对 reasoning-data atlas 而言，这份增量卡的价值在于披露了具体评测对象：human/synthetic safety prompt、长模拟 transcript、模型审计分数、coding/computer-use 环境与 reward-hacking terminal state，同时还提供了少量明确训练干预。
