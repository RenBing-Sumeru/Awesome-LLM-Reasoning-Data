早期 semantic-parsing 数据集往往只覆盖单领域或少量固定 schema，WikiSQL 又简化了 SQL 结构。Spider 改变的是评测面：把复杂 SQL 和 cross-domain database split 结合起来。

质量信号是人工标注、广泛领域覆盖、官方评测脚本和长期 leaderboard 生态。并不新的部分是 SQL 执行或 supervised question-SQL pairs。复用前要检查 CC BY-SA 数据条款、Apache-2.0 代码条款、exact data zip、post-release corrections、hidden test policy、evaluator version 和公开 benchmark 样本污染。
