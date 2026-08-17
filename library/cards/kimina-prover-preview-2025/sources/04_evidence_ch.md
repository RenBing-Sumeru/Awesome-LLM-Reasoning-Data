官方 [arXiv 记录](https://arxiv.org/abs/2504.11354) 将该工作标识为 2025 年的 *Kimina-Prover Preview: Towards Large Formal Reasoning Models with Reinforcement Learning*。官方 [MoonshotAI/Kimina-Prover-Preview 仓库](https://github.com/MoonshotAI/Kimina-Prover-Preview) 提供项目材料、工具、证明档案和经修正的 [miniF2F 工件](https://github.com/MoonshotAI/Kimina-Prover-Preview/blob/master/minif2f_test_solved_filtered_0710.zip)。官方 [Kimina-Prover-Preview-Distill-7B 页面](https://huggingface.co/AI-MO/Kimina-Prover-Preview-Distill-7B) 提供公开蒸馏模型。

这些官方工件支持“公开蒸馏模型、工具、证明文件和修正后的 miniF2F 档案存在”这一主张；它们不证明完整 20 万条 prompt 池、Claude 冷启动、Kimi-thinking 混合、72B RL rollout、奖励日志、prompt 到证明的谱系、环境版本锁定或完整训练/验证划分已发布。

报告描述了针对 miniF2F 的 13-gram 去污染，以及从 NuminaMath 中移除 AMC12/AIME/IMO 重叠；但没有提供重叠列表或残余污染分析。
