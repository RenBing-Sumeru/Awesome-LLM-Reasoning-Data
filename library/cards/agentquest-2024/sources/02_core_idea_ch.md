AgentQuest 的主要贡献是一个模块化框架：让 LLM agent 在不同 benchmark 环境中运行，同时记录 progress 和 repetitive behavior，而不是只报告 terminal success。

核心机制是把评测拆成 benchmark-specific driver、action、state、observation 和 metric。一个记录因此不是“agent 做了某题”这么粗，而是一串经过环境反馈的动作，外加最终分数和过程进展信号。反馈契约来自 benchmark 环境和 AgentQuest 指标；成功、部分进展和重复行为是运行记录的属性，不是开放式主观评价。

最接近的对比是 WebShop、HotPotQA 工具任务或 ALFWorld 这类更重最终成功率的 agent benchmark。方向标签是 environment-agent trajectory evaluation：它适合审计 agent 在哪里失败，但不能单独证明数据许可证、benchmark 新鲜度或可复用质量。
