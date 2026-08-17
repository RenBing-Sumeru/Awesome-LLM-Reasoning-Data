可信证据是 benchmark 规模和 cross-domain split：10,181 个问题、5,693 条 unique complex SQL、200 个数据库和 138 个领域。行级证据是 gold SQL、数据库和官方 evaluator result，而不是自然语言解释。

Spider 难在 test databases 未见过，并且许多查询需要 joins、nested queries、grouping、ordering 和 set operations。不同论文的分数只有在使用同一 Spider release、evaluator、数据库文件、value-matching policy 和 hidden test protocol 时才可比。公开 train/dev 样本对现代 LLM 已经是高污染风险。
