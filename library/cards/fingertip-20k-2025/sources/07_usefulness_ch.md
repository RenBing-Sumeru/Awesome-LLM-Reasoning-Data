对指定的 `environment_agent_trajectory_data` 方向，FingerTip 20K 是纵向智能体 episode 的具体 schema 与审计案例。构建者可以保留完整 episode 容器——intent、profile lookup、时间/场景、screenshot/XML 观测序列、动作以及 app/activity provenance——再比较无用户上下文 SFT 与画像、历史或检索示范条件化。该对象应保持 full-episode 和 state–action 粒度；若在丢失用户、时间与 split lineage 的情况下扁平化步骤，就会抹去论文的核心对象。

两个 evaluation track 可用于研究 verifier design。Suggestion 可以比较 embedding/edit similarity、显式固定版本的 judge 与人工复核；execution 可以比较人工终态完成、步数预算、trajectory similarity、其他有效路径接受规则与 state-change predicate。忠实实现必须补上缺失的 DeepSeek-V3 `SR1` 调用，或透明地说明替代方案；还必须实现可审计的人工或 environmental success adjudicator，而不能相信公开的 `success=0` 字段。

在 data construction 上，该采集协议可作为真实 intent 纵向示范的起点，但更强的复现应保留拒绝原因、显式 outcome label、失败/放弃示范、隐私决策、consent 版本、逐 episode 设备/app 版本以及 reset/replay metadata。还应发布 unique-key manifest 与互斥或 overlap-aware 的评测视图，避免 1,000 行/996 键的 suggestion split 及其与 execution 的 172 键重叠被 headline count 掩盖。

在 SFT 研究上，发布只支持论文实际演示的监督用途：分别为 proactive 与 execution 格式化数据，对 Qwen-2.5-VL-7B 做 LoRA，以及论文报告的 joint-model ablation。它可以支持用户历史长度、画像最小化、retrieval leakage 与 privacy-preserving personalization 的消融，但不能被描述为 RL reward source、可回放 online-training environment、preference dataset 或 process-reward corpus。

复用等级：**固定 GitHub/Kaggle 快照后可用作 evaluation 与 audit reference；不受限制的训练复用在隐私和权利审查完成前受阻**。Kaggle 为 dataset version 2 声明 CC BY 4.0，但 code license、第三方 app content 权利、consent 范围、发布后删除机制及论文/公开索引映射均未解决。Benchmark 提升可以推动针对性实验，却不能认证数据质量、安全性或可回放性。
