SFT 数量只是聚合值；各阶段来源清单、样本数、专有边界、许可、split ID、teacher、prompt 模板、mixture weight 与去污染结果均缺失。Long-CoT 难度启发式可能选择冗长、歧义或只对特定模型困难的问题；Qwen 系 filter 与 judge 还可能和被训练模型家族共享错误。

Reasoning-RL 选择受 policy 条件约束。删除 0/16 query 会排除超出初期模型能力的问题，删除 pass rate>90% 项会排除 easy item，通过 pilot RL 删除来源又会按观察到的改进潜力筛选。被拒 query、来源 yield 与各任务 pass-rate 分布均未发布。

General-RL judge prompt、模型 revision、校准、reward 权重与对抗测试为 unknown。公开 Apache-2.0 代码/checkpoint 不能建立未披露训练数据或 teacher output 的权利。Rollout ledger、reward service、阶段 manifest、语义去污染报告与逐条 checkpoint lineage 均未公开。

