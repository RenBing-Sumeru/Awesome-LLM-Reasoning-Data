初始 VerifyRM 数据来自七个数学数据集和十一种 LLM 产生的 65K 条问题—参考答案—completion 三元组。仅保留 Math-Verify 与 Qwen3-4B 一致的样本，得到公开的 58.7K 条记录。Cooper 训练时，当前策略每个 prompt 采样 16 条 rollout；Math-Verify 接受的响应作为正例，同家族助手持续破坏该响应直至规则拒绝负例。每次 GRPO 策略更新后再更新 RM。

