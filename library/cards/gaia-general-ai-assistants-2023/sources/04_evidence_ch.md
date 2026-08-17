论文报告 466 个问题，原始设置下人类 92%，GPT-4 with plugins 15%。行级证据是最终答案匹配，不是动作路径验证。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
