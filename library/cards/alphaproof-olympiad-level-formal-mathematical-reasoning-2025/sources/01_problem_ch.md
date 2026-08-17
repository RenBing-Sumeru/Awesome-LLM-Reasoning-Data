AlphaProof 面向 Lean 中的高水平形式数学：智能体需要在巨大的开放动作空间中选择 tactic，在有限计算预算内解决所有生成的子目标。对推理数据策展而言，数据对象不只是最终通过验证的证明，还包括 pretty-printed tactic state、采样 tactic、Lean 状态转移、proof/disproof/timeout 结果、树搜索统计和 replay 选择决策。

该工作处理两类数据瓶颈。人工编写的 Lean 证明规模不足以支撑广泛 RL 课程，因此系统用基于 Gemini 的 auto-formalizer 将非形式问题扩展为形式陈述；困难目标问题再通过相关变体进行问题特定的 test-time reinforcement learning（TTRL）。论文记录了该配方，但主要合成课程、replay buffer、失败搜索尝试和训练后模型并未作为开放数据包发布。
