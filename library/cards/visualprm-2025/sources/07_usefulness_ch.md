对 `rollout_search_test_time_trace_data` 而言，VisualPRM 是一个有用的两阶段案例：训练标签汇总从每个前缀出发的 16 次 rollout search，推理阶段则在 N 个完整回答中选择。因此，这张 Card 应同时审计标签生成预算和测试时候选预算，而不能把最终 `+/-` token 或被选答案当成完整数据对象。

公开的原始数据可用于多模态 PRM 训练、二元步骤分类、类别不平衡研究、聚合方法消融和跨 policy family 迁移测试。VisualPRM-8B 可以给候选回答打分，VisualProcessBench 可以评估正/负步骤检测。使用者应固定原始发布 revision，因为 v1.1 增加了来源与输入指令，v1.1-Raw schema 对应的是已经变化的数据集。

更强的可复现记录应保留上游 source ID 与版本、图像 hash、问题和答案、solution generator checkpoint、初始解答随机种子、精确步骤边界与 merge map、全部 16 条 continuation 文本、抽取答案、checker 模式/结果、mc_i、二元标签以及代码/环境 revision。对 Best-of-N，还应保留 N、policy checkpoint、温度、所有候选、逐步分数、聚合分、被选 ID、并列情况和被拒候选。

独立 benchmark 对比较学得 PRM 与 prompted judge 很有价值，因为它覆盖所有步骤并包含 neutral 标签。复用者应报告分类别 F1、按来源结果与校准，而不只给一个 overall 数字；还应检查训练提示重叠，并保留 benchmark 的 policy_model 和 data_source 字段。

这套发布不能证明任一 Monte Carlo 标签都是已经验证的局部证明步骤。更准确的理解是：它估计某前缀在一套未完整披露的生成/验证栈下的未来可解性。下游 Best-of-N 提升可以说明 scorer 值得研究，却不能单独证明训练数据干净、无偏、许可链完整，或对另一 generator 仍最优。
