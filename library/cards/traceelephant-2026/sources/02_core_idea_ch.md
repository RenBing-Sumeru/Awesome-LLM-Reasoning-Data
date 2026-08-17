本文的贡献是一种全可观察失败 episode 记录，把任务终局结果与两个需要人工因果判断的目标连接起来：负责的功能 agent，以及最早的决定性失败步骤。TraceElephant 不把后续每个症状都视为独立错误，而采用考虑可恢复性的规则：若下游 verifier 没有捕获本可恢复的上游错误，责任可以归于该 verifier；决定性步骤则是专家判断从此以后任何可行续接都无法恢复的最早位置。

反馈契约是 mixed。GAIA 与 AssistantBench 的官方答案或 SWE-Bench Verified 测试给出二元任务结果。三名具有至少一年多智能体系统开发或调试经验的标注者先独立标注 agent 与 step，再联合解决不确定案例，最后交叉复核或重新标注；最终标签要求一致同意。环境 predicate 能观察最终答案或测试是否成功，却不能以程序方式确定因果责任。专家可以检查完整输入、输出、agent 间内容和可观察工具日志，但其反事实判断不是可执行证明，发布中也没有 scalar reward。

Atlas 中最接近的工作是 AgentErrorBench/AgentDebug，它同样把失败 agent rollout 转化为局部根因与反馈。TraceElephant 的区别在于，它围绕跨多种多智能体架构的负责 agent 和最早步骤预测构建 benchmark，并比较静态诊断与面向动态回放的归因方法。其方向信号来自 episode 可观察性、终局结果与因果标签的共存；标签不确定性和回放 substrate 必须与任务 verifier 分开理解。
