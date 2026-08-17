**有证据支持的用途**

- RLVR 与 agent training 有直接证据：Qwen3-8B 和 Qwen3-32B 训练 48 个 GRPO step，rollout batch 分别为 1,024 与 2,048。
- 16 领域、2,560 任务配方支持研究可执行环境合成、状态 grounded intent、规则奖励与环境多样性 scaling。
- 程序化 success、anticipated rejection、unexpected failure 可在策略 rollout 前监督环境 debug。

**需要发布工件的用途**

- 离线策略训练需要完整成功/失败轨迹、用户反馈、状态转移、终局奖励与来源链；这些都未核实公开。
- 环境复用需要许可明确的工具/数据库代码、测试、状态 snapshot、reset/isolation 接口、依赖锁和安全控制。
- 复现需要 generator prompt 与模型修订、种子、rollout grouping、解码、simulator/checker 设置、计算拓扑及保留失败。

因此 `training_use` 保持为 RLVR 与 agent training。本 Card 不从论文推断 SFT、公开轨迹训练或 reward-model training。
