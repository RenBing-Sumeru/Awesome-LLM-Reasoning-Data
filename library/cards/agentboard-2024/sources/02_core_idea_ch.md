一句话贡献：AgentBoard 是一个面向多轮 agent 的分析型评测板，把多种环境统一起来，并在最终成功率之外加入细粒度 progress-rate 指标。核心机制是把每个 benchmark 视为部分可观测交互过程，记录轨迹，同时衡量任务是否完成以及模型在终止前推进了多少关键步骤。

最接近的对照是 AgentBench 式成功率套件和单领域 web/tool benchmark。AgentBoard 的变化是把审计对象从“是否完成”扩展为“终止前推进到了哪里”。方向标签是诊断型 agent 评测。它并不是首次让 LLM 跑交互环境；可复用的新层是和轨迹分析绑定的 progress-aware scoring。
