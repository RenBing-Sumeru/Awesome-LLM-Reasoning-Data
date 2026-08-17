输入是数据库 schema 与内容、人工写成的自然语言问题，以及模型预测 SQL。输出是 SQL query 和官方 evaluator score。

数据构造从多个领域收集数据库，让标注者编写问题和 SQL，并按难度与 SQL component 结构组织样本。split 是 cross-domain：train、dev、test 中的数据库不重叠，因此只记住一个 schema 不够。论文报告 question-SQL 记录由 11 名 college-student annotators 标注。

verifier 是官方 Spider evaluator。Exact-set matching 会把 SQL 分解为 SELECT、WHERE、GROUP BY、ORDER BY、keywords、set operations 等 component；execution accuracy 检查预测 SQL 在数据库上是否返回相同结果。复现必须固定 Spider version、evaluator commit、database package、SQL dialect 假设、test-set access policy，以及报告的是 exact match、execution accuracy 还是两者。
