benchmark 规模是 8.5K 条；release split 为 7,473 train 和 1,319 test，仓库说明常近似写成 7.5K train / 1K test。行级证据是数值答案一致；verifier 证据是对采样解答的选择表现，不证明每个推理步骤。

审计重点是证据附着在哪个层级。benchmark score、judge score 或 leaderboard metric 不会自动变成行级 verifier certificate，除非来源明确公开了这样的 verifier。

复用分数时，应把 evaluated split、scorer、模型/scaffold 设置和 artifact version 与数字一起保存。
