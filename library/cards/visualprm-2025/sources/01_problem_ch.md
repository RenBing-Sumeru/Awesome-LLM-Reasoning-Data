多模态 Best-of-N 需要一个能够同时依据图像和持续展开的解题过程区分候选答案的 critic。Outcome score 把整段回答压缩为一次终局判断，而 process reward model 对中间步骤逐步评分。因此，实际瓶颈不仅是模型架构，还包括一种能够关联图像、问题、解答前缀、当前步骤与有证据支撑的步骤目标的数据对象。

VisualPRM 公开了三个必须区分的对象：VisualPRM400K 是自动构造的训练数据；VisualPRM-8B 是学得的过程奖励模型；VisualProcessBench 是独立的人工步骤错误检测测试集。训练标签来自 Monte Carlo 估计后再离散为二元目标，benchmark 标签则由人工专家给出。VisualProcessBench 或下游 Best-of-N 的表现不能证明 VisualPRM400K 的每个标签都正确。

该工作属于 `rollout_search_test_time_trace_data`，因为重复采样在两个阶段出现。构造数据时，每个解答前缀扩展 16 条 continuation，以估计后续成功概率；推理时，policy 采样 N 个完整候选，再由 VisualPRM 根据聚合步骤分选择其中一个。原始发布提供了派生后的训练 conversation，却没有发布底层 continuation rollout、被拒候选或 Best-of-N 决策日志，因此使用者可以运行 selector，但无法完整审计 trace lineage。
