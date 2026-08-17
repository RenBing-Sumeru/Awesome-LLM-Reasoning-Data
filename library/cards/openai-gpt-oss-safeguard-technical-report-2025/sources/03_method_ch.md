报告将 gpt-oss-safeguard-120b 和 gpt-oss-safeguard-20b 描述为从各自 gpt-oss 模型后训练而来的纯文本开放权重推理模型，并称训练未加入额外的生物或网络安全数据。确切的 gpt-oss 检查点、其余数据来源混合、策略语料、权利、记录模式、过滤规则和阶段分配均未披露。

在内部多策略评测中，多个策略在推理时同时提供；只有当预测与每项所含策略的 golden-set 标签完全匹配时才计为正确。报告还称，Production Benchmarks 的补全结果由 LLM-based graders 按相关 OpenAI 策略、使用 `not_unsafe` 指标评估。这些评测契约不能与后训练奖励混为一谈：奖励实现、人类标注工作流、优化器、rollout、采样和训练环境均未公开。

