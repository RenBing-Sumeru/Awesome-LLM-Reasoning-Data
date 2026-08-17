[Qwen 官方发布页](https://qwen.ai/blog?id=qwen3-next)将 Qwen3-Next-80B-A3B 描述为总参数量 80B、激活参数约 3B 的模型。页面报告了混合 Gated DeltaNet 与 Gated Attention 层、高稀疏 MoE、面向稳定性的归一化与路由改动，以及 Multi-Token Prediction，并宣布了后训练的 Instruct 与 Thinking 变体。

就后训练而言，发布页称 GSPO 解决了混合注意力和高稀疏 MoE 架构相关的 RL 稳定性与效率问题。其另行链接的 GSPO 来源将 Group Sequence Policy Optimization 定义为：对响应分组采用基于序列似然的重要性比率，以及序列级 clipping、rewarding 和 optimization。这个通用算法描述并未给出 Qwen3-Next 的提示词、奖励、验证器、组大小、rollout、过滤规则或保留的过程记录。

因此，本卡的分类理由是披露审计，而不是声称 Qwen3-Next 发布了推理数据集或可复用的 RLVR 配方。

