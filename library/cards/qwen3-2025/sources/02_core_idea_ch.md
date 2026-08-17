该报告将 Qwen3 描述为包含 dense 与 MoE 模型的系列，并披露了阶段级训练叙事：约 36T 个预训练 tokens、覆盖 119 种语言和方言；Long-CoT cold start；使用 3,995 个 query-verifier pairs 和 GRPO 的推理 RL；通过 continual SFT 融合 thinking/non-thinking 模式；以及面向小模型的基于 logits 的强到弱蒸馏。

其中的数据与反馈对象仅被部分公开。报告指出 cold-start 问题具有已验证的参考答案或代码测试，使用 Qwen2.5-72B-Instruct 过滤查询、QwQ-32B 生成候选响应，并以 rejection sampling 生成 thinking 数据。但它未提供底层记录、来源清单、完整 verifier 或奖励定义，以及保留率和错误审计。
