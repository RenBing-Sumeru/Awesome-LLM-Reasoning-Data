AgentBoard 适合作为诊断型轨迹评测 schema。可复用记录应保留 task id、环境、observation/action 序列、终止状态、progress checkpoints、progress score、失败类型、模型/scaffold 元数据和预算。它的用途是分析 agent 在哪里停止推进，而不只是是否解题。

在 atlas 中，可把它作为给环境轨迹加入过程指标的 benchmark 设计样例。主要复用边界是 progress label 和 terminal predicate 必须随任务一起保存；只有聚合分数而没有指标定义是不够的。
