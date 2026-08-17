官方来源支持四层边界明确的披露。

1. **预训练范围。** Qwen 描述了 early-fusion 多模态训练、更广的语言覆盖，以及经中文/英文、多语言、STEM 与推理材料丰富并采用更严格过滤的数据；但没有发布来源清单、各来源 item 或 token 数、混合权重、获取与权利记录、过滤阈值、保留比例、split policy 或 decontamination 结果。
2. **后训练与智能体范围。** 发布材料称 RL 覆盖逐步复杂化的 task distribution 与百万规模智能体环境，并包含文本、多模态和多轮设置。环境名称、task definition、observation/action schema、tool、reset condition、terminal predicate、课程分配、rollout 与 failure trace 均未披露。
3. **系统脚手架。** Qwen 描述了训练—推理解耦的异步框架，以及 dynamic load balancing、fault recovery、rollout-router replay、speculative decoding 与多轮 rollout locking。这些属于基础设施披露；优化算法、objective term、reward 或 verifier、校准、rollout 数、decoding、optimizer、系数、schedule、seed 与可复现训练实现仍为 unknown。
4. **已发布工件。** `Qwen3.5-397B-A17B` 是带 vision encoder 的后训练 causal language model，报告总参数 397B、激活参数 17B，原生 context 为 262,144 token。Qwen 以 Apache-2.0 发布权重和配置，并提供推理与 agentic usage 示例。官方 QwenLM 信息仓库提供发布链接和文档，而不是 RL training pipeline 或训练记录。

由于没有公开 training-record schema，trace author、sampling、reward attribution、terminal success 与训练/评估分离均为 unknown。Temperature、top-p、context extension、tool parser 或 serving framework 等推理建议，不能被反向填入缺失的训练配方。
