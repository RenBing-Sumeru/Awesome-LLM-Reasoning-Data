WebRL 的核心贡献，是把数据构造直接纳入在线策略优化。从 1,186 条示范出发，它交替执行浏览器 rollout 收集、失败条件课程任务生成、学习型结果标注、actor-critic 更新和成功经验回放。在 8 个阶段中，每阶段接纳 500 条经筛选的指令，使任务难度尽量匹配当前策略，而不是沿用固定任务池。

其反馈契约是 mixed。WebArena-Lite reward function 为原始可执行任务提供标签，并用于构造含 12,200 条样本的结果奖励模型数据；新生成任务没有对应的可执行检查器，改由学习型 ORM 读取指令、完整动作历史和最终 HTML，再比较 YES 与 NO 的概率，输出二元 1/0 奖励。该 verifier 能观察可见的最终页面和已记录动作，却无法看到隐藏状态、被省略的早期 HTML、非预期副作用，或最终页面未呈现的任务条件。

监督信号附着在多个层级：terminal reward 标注整条 episode，critic 为 state-action 更新估计 trajectory value，actor confidence 则筛选回放记录。这不同于从固定示范学习的 SFT 或 Filtered BC，也不同于在固定任务集上在线训练的 DigiRL。WebRL 的方向价值来自失败驱动课程、学习型终局判断、KL 约束优化与选择性回放之间的耦合；它并不证明学习型 ORM 等价于可执行环境 verifier。
