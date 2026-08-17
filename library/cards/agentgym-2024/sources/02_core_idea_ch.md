一句话贡献：AgentGym 是一个跨多种交互环境评测、训练和改进 LLM-based agent 的一体化平台。核心机制是把不同环境封装到统一交互接口中，让 agent 以 ReAct-style loop 运行，收集高质量轨迹，并把环境反馈同时用于 benchmark evaluation 和 self-improvement / reinforcement learning 等训练方法。

数据对象不是 prompt-answer pair，而是可执行 episode：包含任务状态、动作选择、环境响应，以及终局或逐步反馈信号。反馈契约来自环境：每个 benchmark module 通过 reward、correctness check、任务特定分数或最大轮数终止规则判断成功。

接近对比包括 AgentBench、AgentBoard 这类多环境评测套件，以及绑定单一环境的 agent-training 系统。AgentGym 的方向标签是 environment-agent trajectory data：它把评测、轨迹发布和可训练反馈连接起来，但复用时必须严格审计 split、license 和污染风险。
