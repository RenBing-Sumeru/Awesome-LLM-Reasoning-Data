ORZ 的贡献是一套开放的大规模 Reasoner-Zero 实现，核心是简洁的 critic-based PPO 配方。它展示了如何从预训练 base checkpoint 直接启动 RL，只使用终局规则奖励，并在多个模型规模上扩展 grouped online sampling 和独立 critic 训练。

“Zero”边界使 ORZ 区别于先通过 SFT 或蒸馏教授响应风格/推理分布的 pipeline。它并没有移除上游预训练、筛选后的 prompt、gold reference answer、人工过滤设计、verifier engineering 或评测数据。论文中单独以蒸馏 14B checkpoint 为起点的实验属于 transfer study，不代表主要 ORZ family 使用蒸馏。

有四个具体设计点：

1. **完整在线分组：** 每个 prompt 生成 64 条响应，为 policy 更新与 hard-data selection 提供同题结果差异。
2. **学习式 token-value critic：** PPO 为每个响应前缀估计 \(V(s_t)\)，而不只使用组相对终局 return。
3. **最小终局奖励：** 报告主配方中没有独立 format reward，也没有有效 KL regularization 或 entropy bonus。
4. **依赖 policy 的 curriculum：** ORZ-32B 挖掘 64 次尝试中成功少于四次的 prompt，再在 hard subset 上做 annealing。

论文并非分别首创 PPO、GAE、规则数学验证、Qwen2.5、vLLM、Ray 或 DeepSpeed；新颖性在于整合后的扩展配方与稳定性经验披露。

对推理数据整理而言，最关键的对象是在线 trajectory group，而不仅是种子 prompt 文件。ORZ 发布的内容足以重新生成新行为，却不包含产生报告模型的精确响应组、结果、critic value、失败以及数据/checkpoint 绑定。因此，该方法比许多前沿配方更开放，但论文运行数据仍只能部分审计。
