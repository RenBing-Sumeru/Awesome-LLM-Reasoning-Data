arXiv 摘要报告 448 道题；专家准确率 65%，扣除明确错误后 74%；高技能非专家即使长时间不限网页访问也只有 34%；最强 GPT-4 baseline 为 39%。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
