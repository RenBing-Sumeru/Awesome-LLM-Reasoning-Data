在 Rollout, Search, and Test-Time Trace Data 中，SCS 提供了一个 RL 期间使用 multimodal counterfactual rollout 的具体 schema。可复用条目应把原始图像和问题连接到初始轨迹、保留前缀长度、每次扰动后的图像或 noise seed、continuation、抽取选项、不同答案数、归一化 consistency reward、accuracy/format rewards、optimizer group、model checkpoint 与最终 update。

把这些字段分开保存，才能审计增益来自更多样本、图像增强、一致性公式、终局验证还是 RL algorithm，也可避免把最终 benchmark score 反向复制成中间推理标签。官方 prompt release 可作为复现起点，但缺少 rollout 与 reward ledger，限制了它直接用于 verifier training 或 process supervision。
