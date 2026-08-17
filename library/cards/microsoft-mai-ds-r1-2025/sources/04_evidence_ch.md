官方 Microsoft 发布直接陈述了构造顺序和两个聚合数量：约 350K 个内部开发多语示例以及 110K 个 Tulu3 安全/不合规示例。Microsoft 模型卡佐证这些数量，并将 DeepSeek-R1（671B）识别为基础。已链接数据摘要说明了 2025 年 4 月发布、2025 年 3 月首次使用数据、使用合成 AI 生成数据和使用公开可用数据。

模型卡描述了公共 benchmark、一个 3.3K-prompt/11-language 的阻断测试集和一个 320-query HarmBench split。它以 Satisfaction 和 percent-response 指标报告响应性，以 attack-success-rate/micro-average 指标报告伤害缓解。实现、标注者和校准未完全披露，因此这些评估不能建立训练 reward。

模型卡还警告，MAI-DS-R1 可能保留训练数据和 DeepSeek-R1 的偏见、产生 hallucination、容易受到对抗性 prompt 影响，或在某些条件下生成不安全、有偏见或有害的输出。

