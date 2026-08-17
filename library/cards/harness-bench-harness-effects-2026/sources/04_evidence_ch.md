证据不只是任务成功率，而是在 106 个 sandboxed offline tasks 和 5,194 条 execution trajectories 上做敏感性分析：同一模型-任务对在不同 harness 假设下会得到不同测量结果。官方项目页和仓库用于固定 runner 与 evaluator 细节。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
