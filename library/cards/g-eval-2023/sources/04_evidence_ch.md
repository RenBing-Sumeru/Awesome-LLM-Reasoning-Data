论文在 SummEval、Topical-Chat 和 QAGS 上做 meta-evaluation，并报告 GPT-4 G-Eval 在 SummEval 上 Spearman 0.514。行级证据是固定 prompt 下的一次 judge response，因此 aggregate correlation 不是单样本正确性证书。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
