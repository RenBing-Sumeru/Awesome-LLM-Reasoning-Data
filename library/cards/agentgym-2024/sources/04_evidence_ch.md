ACL Anthology 摘要明确写出该框架覆盖 7 个真实场景、14 个环境和 89 个任务，并发布 code、dataset、benchmark 和 checkpoint。官方项目页和仓库列出环境清单，并链接 AgentEval、AgentTraj-L 和 AgentEvol-7B 工件。

论文的实验证据是在 AgentGym 设置下比较训练后 agent 与商业或强 baseline 模型，并报告训练后 agent 可达到可比结果。实例级证据不是自然语言 judge 本身，而是 trajectory 上的环境反馈：action validity、reward、success rate、correctness 或任务特定分数。

证据边界是：分数依赖环境版本、任务 split、最大轮数、action schema、轨迹过滤、模型规模、采样预算和导入环境行为。除非精确固定运行配置和反馈实现，否则不能把聚合 AgentEval 结果直接当成逐条 verifier label 复用。
