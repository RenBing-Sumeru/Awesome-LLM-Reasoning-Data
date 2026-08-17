InterCode 可作为 coding-agent 轨迹记录配方。应保留 task id、environment id、initial state、observation、action、execution output、error message、step number、time budget、final predicate、reward/score 和 runtime version。

它适合评测命令行 agent、SQL agent、调试 agent 和依赖迭代工具反馈的 coding scaffold。它也为任何声称 execution-grounded agent 能力的 benchmark 提供审计清单。

对 atlas 来说，它连接 benchmark/evaluation surface 与 environment-agent trajectory data。最可复用的洞见是：中间执行反馈必须成为一等数据，而不只是隐藏 evaluator。
