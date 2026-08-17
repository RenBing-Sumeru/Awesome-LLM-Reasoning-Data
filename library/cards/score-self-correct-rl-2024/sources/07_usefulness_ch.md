对于 Rollout, Search, and Test-Time Trace Data 方向，SCoRe 提供了顺序纠错记录的具体 schema：任务和 split 标识、policy checkpoint、训练阶段、第一次作答、纠错指令、第二次作答、抽取答案、`r1`、`r2`、progress bonus、KL reference、采样参数和终局 checker 结果。如果只保留第二次回答，就会丢失目标函数真正奖励的跨轮转移。

作为构造参考，它有助于区分离线 repair pair 与 on-policy episode，并指出策略漂移从哪里进入 lineage。作为 RLVR 参考，它展示程序化结果奖励如何监督多轮 episode，而不被误写成过程标签。作为测试时计算参考，它要求在相同总采样预算下比较顺序纠错与并行采样。

审计应检查不修改式纠错、错误到正确和正确到错误的转移、答案抽取错误、测试覆盖、checkpoint 选择偏差、split 重叠，以及存储轨迹是否来自声明的策略版本。由于未确认原始轨迹 artifact 发布，这些是未来发布应满足的要求，而不是对现有公开数据集的声称。
