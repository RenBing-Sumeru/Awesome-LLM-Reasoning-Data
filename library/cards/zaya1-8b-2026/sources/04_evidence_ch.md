官方 [arXiv 报告](https://arxiv.org/abs/2605.05365) 是训练阶段、类别级混合、answer-preserving trimming、SFT 构成、RL 阶段规模、验证器、奖励 gate 以及“没有专门多轮 agentic RL 阶段”这一范围声明的主要证据。

官方 [Zyphra 项目页](https://www.zyphra.com/our-work/zaya1-8b) 确认了发布并链接技术报告和官方权重。官方 [Zyphra 模型页](https://huggingface.co/Zyphra/ZAYA1-8B) 验证了 Apache-2.0 的后训练 checkpoint，并记录通过 Zyphra vLLM 和 transformers fork 的部署方式。[Zyphra vLLM 分支](https://github.com/Zyphra/vllm/tree/zaya1-pr) 是推理支持，而不是训练管线发布。

这些官方来源均未发布预训练/后训练语料、数据卡、轨迹清单、教师身份、奖励模型、验证器实现、配置化环境、来源级权利信息或去污染审计。它们被如实记录为 unknown 或未发布，不会从公开权重中推断出来。
