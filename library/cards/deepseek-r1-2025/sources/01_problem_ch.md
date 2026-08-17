推理模型发布可能披露一系列 SFT 与 RL 阶段，却不公开 prompt、轨迹、rollout、verifier 实现、reward 权重和审计记录。没有这些 artifact，读者无法判断报告中的训练混合如何构成、任务规则是否正确测量推理，或发布权重是否是所称管线的可复现证据。

DeepSeek-R1 是一个核心例子。其报告描述了 R1-Zero、cold-start SFT、reasoning RL、rejection-sampled SFT、general SFT、最终 alignment RL 和 dense-model distillation。它发布模型权重、代码和论文，却没有发布底层 cold start、RL 轨迹、80 万条蒸馏数据、来源 manifest、反馈实现、训练切分或去污染证据。
