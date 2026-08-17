NeurIPS 2024 proceedings 确认 main-conference 状态和 DOI 10.52202/079017-4020。论文报告 APIBench 规模，并在 AST matching 契约下评测 accuracy、errors 和 hallucination。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
