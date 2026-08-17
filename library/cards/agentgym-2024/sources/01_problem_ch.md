主来源是 Xi 等人的 ACL 2025 long paper《AgentGym: Evaluating and Training Large Language Model-based Agents across Diverse Environments》，页码 27914-27961。ACL Anthology 页面将 AgentGym 明确登记为面向通用 LLM agent 的框架，并通过项目页发布代码、数据集、benchmark 和 checkpoint。

这篇要解决的问题是：LLM agent 研究缺少一个统一的交互框架，既能跨多种环境评测 agent，又能让 agent 通过多轮反馈探索和学习。这里收录 AgentGym 的边界是环境反馈支撑的评测与训练面，不是静态 instruction corpus，也不是单一 leaderboard 结果。一个可复用记录是 ReAct 式 episode：任务指令、环境 id、observation、可用动作、thought/action 输出、环境响应、reward 或 success 信号，以及 trajectory metadata。

关键边界是反馈契约。AgentGym 包含 7 个真实场景、14 个环境和 89 个任务；它对 atlas 有价值，是因为样本暴露了可执行环境反馈，并把对象分成 AgentEval benchmark、AgentTraj/AgentTraj-L 轨迹，以及 AgentEvol 训练或自我改进运行。
