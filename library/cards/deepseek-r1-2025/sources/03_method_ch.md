R1-Zero 从 DeepSeek-V3-Base 开始，并在规则评估的推理任务上使用 GRPO。报告称 reward 包括准确性和格式项。R1 随后以数千条 cold-start 样本开始，这些样本通过多种未披露方法构成，包括可读的 R1-Zero 输出和人工后处理。可读 long-CoT 模式以最终 summary 或 answer 结束，但 special-token schema 和记录未发布。

在 reasoning RL 之后，管线为推理 prompt 采样多个响应，并通过 rejection sampling 保留正确响应。报告过滤 mixed-language、long-paragraph 和 code-block CoT 模式。DeepSeek-V3 生成或判断部分后续 general SFT 材料。后续 all-scenarios RL 结合规则反馈和通用 reward model。extractor、任务环境、V3 prompt、judge 版本、规则阈值、reward 系数、选择产出比例和 rollout 设置均为 unknown。

R1 checkpoint 为 dense distillation 生成 80 万个样本，并发布蒸馏模型权重。报告没有发布这 80 万行、cold-start 集、60 万 rejection-sampled reasoning 数据、20 万非推理数据，或构成它们的接受与拒绝候选组。
