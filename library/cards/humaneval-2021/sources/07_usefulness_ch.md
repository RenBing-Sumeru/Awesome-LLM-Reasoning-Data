HumanEval 可作为可执行代码生成评测的最小 schema：prompt、candidate code、task tests、timeout、sandbox result 和 pass@k 汇总。它适合在进入更难的修复、仓库或 agent benchmark 前做基础坐标。

做 reasoning-data 审计时，应保留 sample-level 执行日志，而不是只有 aggregate pass@k。同一题可能被用作 prompt-only 评测、监督代码数据或 test-based reward 数据，这些角色要分开标注。
