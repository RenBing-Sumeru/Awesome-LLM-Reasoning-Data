Generalization suite 包含 85 个任务：20% 为 in-distribution，28% 为 visual generalization，28% 为 instruction generalization，24% 为 action generalization。物理世界 trial 会重复执行，配对模型按随机顺序 back-to-back 运行，并使用 pairwise t-test。该协议可减轻顺序和环境偏差，但没有发布 trial videos、scorer identity、inter-rater agreement 或每项结果的 confidence interval。

在 6 个长时程 specialization 任务上，每个任务使用 2,000–5,000 条 demonstration，作者报告的平均 success 为 79%。Lunch-box packing 达到 100% success，持续时间超过 2 分钟；spelling 任务在 6 个未见手绘 sketch 中正确完成 4 个。仅用同一 specialization dataset 从头初始化的 specialist 在这些任务上均为 0%。这些结果支持 generalist initialization 的价值，但不能隔离 backbone、distillation、generalist mixture 与 specialization data 的作用。

Reasoning specialization 在 8 个任务上进行 100 次 trial，每次使用唯一 initial scene，任务分为 one-step reasoning、semantic generalization 和 spatial understanding。报告可视化了预测的未来机械臂轨迹，但没有发布重新标注记录、坐标 schema、label generator 或验证流程，因此无法独立复现该 intermediate。

Fast adaptation 在 8 个任务上比较 5、20 和 100 条 demonstration。每个 task/data point 运行 10 次物理 trial。使用不超过 100 条 demonstration 时，8 个任务中有 7 个超过 70%，其中 2 个达到 100%；100 个 episode 约对应 15–60 分钟示范。这些是与任务相关的 success 结果，不是训练 reward，而且部分 baseline 在较简单任务上仍更强。

ERQA 以 CC BY 4.0 开放 400 条图像/文本多项选择题，覆盖 spatial、trajectory、action、state、pointing、multi-view 和 task reasoning，其中 28% 使用多张图像。其 answer key 与 harness 支持 answer-level evaluation。该许可覆盖 ERQA 和论文，不覆盖专有 ALOHA 2 demonstrations、reasoning relabels、Gemini weights 或 training code。
