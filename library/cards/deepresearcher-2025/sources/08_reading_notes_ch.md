- 区分 80,000 条过滤后 prompt 记录与 on-policy rollout 流。
- 每个报告训练步使用 256 个 prompt × 16 条 rollout，每条最多 10 次工具调用。
- 工具观察是环境输出，并被 loss mask 排除。
- 终局反馈是格式 -1 或词级 F1，不是引文或步骤核验。
- 代码、prompt Parquet 和 checkpoint 已发布；原始训练 episode 未核验为已发布。

