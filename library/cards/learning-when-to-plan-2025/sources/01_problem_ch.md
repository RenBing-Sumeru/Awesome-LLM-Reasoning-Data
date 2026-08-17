
序贯智能体不仅要决定下一步采取什么 action，还要判断当前状态是否值得为新 plan 分配额外 token。ReAct 式每步规划会重复消耗推理计算，并可能使长时程行为不稳定；从不规划则缺少在获得新 observation 后显式更新策略的机制。论文在两个由自然语言交互的环境中研究这一分配问题：Partially-Observable Graph Search（POGS）用于隔离不确定条件下的导航与 backtracking，Crafter 则通过 BALROG 要求智能体完成生存、资源收集、制作和 22 个稀疏奖励 achievement。

本卡关注的数据对象是交错的 planning trajectory，而不是最终 benchmark answer。每个 timestep 的 context 包含近期 observation、action 和当前 plan；模型可以只输出一个环境 action，也可以先输出 带 plan 标签的文本块 再输出一个 action。plan block 是否出现就是 planning-allocation decision，block 文本是被分配的 test-time compute，之后的 task reward 提供环境反馈。论文为 SFT 构造了 1,024 条合成 Crafter 轨迹，并在之后收集 PPO rollout，但尚未核验 synthetic dataset 或 RL trajectory 的公开发布。因此该工作适合作为 Rollout, Search, and Test-Time Trace Data 的构造配方与 scaling study，而不是已确认可下载的轨迹语料。
