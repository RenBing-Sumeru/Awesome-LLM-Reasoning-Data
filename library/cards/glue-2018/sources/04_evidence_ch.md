论文定义 9 个任务，表中约 951k train、424k test，并有 1,100 条 diagnostic NLI set。证据是基于指标的 leaderboard scoring，不是行级语义验证。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
