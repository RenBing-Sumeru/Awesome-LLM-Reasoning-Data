核心思路是把广泛语料分阶段转化为可验证的长程行为。GLM-5 先训练一个总参数 744B、激活参数 40B 的 MoE base model，报告总量为 28.5T token。报告进一步给出初始 27T token 语料，以及扩展上下文的三个 mid-training 阶段：32K context / 1T token、128K / 500B、200K / 50B。这些数字是报告中的规模级与四舍五入口径，并不等于已开放的语料清单。

后训练把三类 SFT——General Chat、Reasoning、Coding & Agent——与四域 Reasoning RL、Agentic RL、General RL 和 on-policy 跨阶段蒸馏串联起来。Agentic RL 通过任务专用的环境与 reward 服务，把真实或合成的可执行任务连接到策略轨迹。

基础设施贡献与模型配方同样重要。Multi-Task Rollout Orchestrator 将独立任务微服务接入 `slime`；TITO 在异构 rollout 引擎之间保留精确 token 身份；Direct double-sided importance sampling 对过大的新旧策略偏差进行掩码；陈旧样本与环境崩溃样本被过滤。这使全异步训练成为可能，但生产配置和训练记录并未开放。
