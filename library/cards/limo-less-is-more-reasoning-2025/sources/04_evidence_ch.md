论文报告很强的最终模型行为，但只有把完整 pipeline、消融和边界分开，证据才最有用。

对于在 800-example v2 数据上训练的主 Qwen2.5-32B-Instruct 模型，摘要报告 **AIME24 63.3%** 和 **MATH500 95.6%**；论文引用的此前 fine-tuned model 分别为 6.5% 和 59.2%。表 1 报告，该 800-example 模型在论文平均指标上超过两个规模大得多、使用同一 backbone 的 SFT baseline。这些是作者报告的模型结果，不是独立复现或逐条质量认证。

论文还提供四组更具区分力的研究：

- **Reasoning-quality band：** 对 500 个有多个正确 solution 的 LIMO 问题，使用同一词法质量分数划分的五档表现出单调的下游差异（第 6.3.1 节，图 3）。由于分档继承了 proxy score，这不是“被奖励词语导致正确推理”的独立证明。
- **Question difficulty：** Simple-500、Complex-500 和 Advanced-500 使用 DeepSeek-R1 solution 隔离问题难度（第 6.3.2 节，图 4），支持困难样本在该 base model 与预算下有价值。
- **Pretraining dependence：** 相同 LIMO SFT 在 Qwen2.5-32B-Instruct 上远好于 Qwen1.5-32B-Chat（第 6.3.3 节，图 5）。这是论文自身边界的直接证据：recipe 依赖 base 中已编码的 prerequisite knowledge。
- **Scale 与 sample efficiency：** Qwen2.5-Instruct 的 3B、7B、14B、32B 和 72B 模型都用 800 个样本 fine-tune；从 LIMO-Pool 排名得到的 400、800、1,200、1,600 和 2,000 子集，在 800 之后呈现 diminishing return（第 6.3.4–6.3.5 节，图 6–8）。

这些证据不能把“800 行”与隐藏构造预算分离。候选池从数千万问题开始，用四次 Qwen2.5-Math-7B 尝试和 32 次 DeepSeek-R1-Distill-Qwen-32B 尝试估计难度，再从三个 reasoning teacher 采样多个 solution。Token、GPU-hours、wall time、rollout count 和 rejection yield 都未报告。

质量分析也存在 proxy circularity：同一个偏好长度和 reasoning-style keyword 的分数，既负责优先选择数据，又定义用于论证更高质量 trace 更好的分档。人工检查形成质量维度，但没有发布独立 step-correctness label 或 annotation agreement。

最后，artifact 证据否定了简单复现说法。官方 HF v2 发布有 800 行，官方 legacy v1 和已检查 GitHub training file 有 817 行；当前 YAML 也没有接入 dataset registry。因此，benchmark 结果支持论文内部设置下的 model-behavior claim，但公开 artifact 尚不支持 byte-for-byte 的 v2 构造或训练重放。
