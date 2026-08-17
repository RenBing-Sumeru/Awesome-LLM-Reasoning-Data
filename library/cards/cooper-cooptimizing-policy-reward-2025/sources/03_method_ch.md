初始 completion 使用温度 0.7、top-p 0.95。VerifyRM 以参考答案为条件，从 Qwen2.5-Math-1.5B-Instruct 初始化，只使用规则与 Qwen 一致的数据。Cooper 在随机 10K DeepMath 子集上训练 Qwen2.5-1.5B-Instruct 和 Llama-3.2-1B-Instruct 策略 10 个 epoch，每个 prompt 采样 16 条 rollout。VerifyRM 为 GRPO rollout 打分；Math-Verify 随机选择规则正确正例并拒绝助手生成的破坏响应。若无法构造有效 pair，则屏蔽 RM loss。策略更新后，RM 使用对比式分数差目标更新。

