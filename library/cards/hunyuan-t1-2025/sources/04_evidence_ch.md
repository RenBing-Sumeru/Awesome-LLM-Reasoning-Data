官方 [Hunyuan-T1 发布页](https://tencent.github.io/llm.hunyuan.T1/README_EN.html)与[腾讯 GitHub 仓库](https://github.com/Tencent/llm.hunyuan.T1)支持以下事实：模型基于 TurboS、后训练算力的 96.7% 用于 RL、覆盖四类推理领域、使用 ground-truth feedback，并采用难度/上下文课程、回放/重置以及 T1-preview 加 reward model 的偏好反馈。官方[腾讯云首发记录](https://cloud.tencent.com/product/events/detail/6702)把发布日期定为 2025 年 3 月 21 日，[产品动态](https://cloud.tencent.com/document/product/1729/97765)则记录后续 API 版本；两者都不是训练数据发布。

官方 [Hunyuan-T1 Hugging Face Space](https://huggingface.co/spaces/tencent/Hunyuan-T1)只是 API 驱动的演示，README 也仅描述轻量应用，并非模型权重仓库或实质性训练模型卡。后续官方 [Hunyuan-TurboS 技术报告](https://arxiv.org/abs/2505.15431)记录了 TurboS 家族，并在 TurboS 的 adaptive-CoT 构造中提到 Hunyuan-T1，但它没有追溯披露 Hunyuan-T1 自身的 RL 数据集、奖励实现或确切基座检查点。

发布材料给出基准分数，并声称训练稳定性提升 50% 以上。这些都是作者报告的模型/系统结果。缺少公开记录、指标定义、基线、验证器规格、污染分析和奖励审计时，它们不能证明隐藏训练数据准确、有代表性、可合法复用或质量较高。

