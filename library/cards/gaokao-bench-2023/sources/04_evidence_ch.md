论文评测 GPT-4、论文评测的 OpenAI chat model 和 ERNIE-Bot，报告转换总分和学科差异，并研究 LLM 主观题评分与人类评分的中等一致性。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
