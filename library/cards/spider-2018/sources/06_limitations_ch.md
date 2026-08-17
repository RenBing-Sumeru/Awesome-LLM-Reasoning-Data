正确性只相对于 gold SQL / evaluator contract 成立。Exact-set match 可能拒绝结构不同但语义等价的 SQL；execution accuracy 也可能接受只是在当前数据库上结果相同、但逻辑并不等价的查询。

Spider 已经是公开且被大量使用的 benchmark，因此 LLM 评测污染风险很高。分数对 evaluator version、value grounding、database package、SQL dialect、prompt/scaffold 和 hidden test access 敏感。它不能在没有额外环境和交互 metadata 的情况下被当作新鲜训练数据或通用 database-agent benchmark。
