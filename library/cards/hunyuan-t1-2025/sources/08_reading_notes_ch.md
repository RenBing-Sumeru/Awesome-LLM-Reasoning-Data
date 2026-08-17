- 把[官方发布页](https://tencent.github.io/llm.hunyuan.T1/README_EN.html)当作披露文档阅读：96.7% 是 RL 算力占比，不是样本数、token 数或 rollout 数。
- 分开记录两类反馈：推理 RL 使用未明确的 ground-truth feedback，偏好对齐再使用 T1-preview self-reward 加 reward model。
- 把课程、回放和策略重置视为已点名的 scaffold；难度桶、上下文日程、回放策略、重置周期和 RL 目标均是 unknown。
- 用[官方 GitHub 仓库](https://github.com/Tencent/llm.hunyuan.T1)和 [Hugging Face Space](https://huggingface.co/spaces/tencent/Hunyuan-T1)核实发布/演示边界，不要把它们当作开放权重、数据或训练代码的证据。
- 后续 [Hunyuan-TurboS 报告](https://arxiv.org/abs/2505.15431)仅用于相关家族背景；没有明确绑定时，不要把其中的 16T 预训练、3M SFT、GRPO 或验证器细节移植到 Hunyuan-T1。

