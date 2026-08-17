官方来源报告 1,320 个任务、44 个职业、9 个部门和 220 个公开 gold tasks。最强证据是专家对最终交付物的比较；自动 grader 分数有用，但不能替代专家判断。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
