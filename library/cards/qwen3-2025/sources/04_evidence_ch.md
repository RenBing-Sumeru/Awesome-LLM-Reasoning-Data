官方技术报告明确支持以下披露事实：约 36T 个预训练 tokens、覆盖 119 种语言和方言；OCR/精炼和 Qwen 系列合成内容步骤；Long-CoT cold-start 过滤；使用 GRPO 训练的 3,995 个推理 RL query-verifier pairs；以及用于融合 SFT 的 rejection-sampled thinking 数据和整理后的 non-thinking 数据。报告还称模型权重以 Apache-2.0 公开可得，并存在官方 Qwen 代码、项目和模型发布页面。

这些内容是报告披露，而非被独立复现的训练数据结果。报告给出了 benchmark 评估并描述 thinking-budget 控制，但两者都不能证明源数据来源、verifier 有效性、奖励校准、抗污染性或数据流水线可复现性。官方发布端点公开的是模型和使用工件，而不是所述训练语料或完整构造审计。
