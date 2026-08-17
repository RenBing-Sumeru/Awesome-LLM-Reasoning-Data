长时程 agent 在一次早期错误后可能出现许多下游症状，因此平铺列举错误不能回答哪一步导致终局失败，也不能说明什么反馈可促成恢复。该工作区分 AgentErrorTaxonomy、AgentErrorBench 与 AgentDebug。

可复用数据对象是带增强字段的失败环境 episode：决策步模块文本、错误标签、最小关键根因、支持证据、纠正反馈和后续 re-rollout 结果。官方仓库链接了 200 条 episode 的 AgentErrorBench；它不同于建立 taxonomy 时分析的 500 余条失败池。

