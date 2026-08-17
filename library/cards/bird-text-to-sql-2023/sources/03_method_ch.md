1. 输入：question、db_id、数据库 schema、数据库内容、database_description、可选专家 evidence 和候选 SQL。
2. 流程：模型生成 SQL；evaluator 在目标数据库上执行预测 SQL 与 gold SQL；VES 进一步计算有效执行效率。
3. 输出：predicted SQL、execution-correct 标记或分数、VES、leaderboard 行，以及可选 finetuning/ICL artifact。
4. verifier：数据库引擎和官方评测脚本决定执行匹配；VES 对时间敏感，需要重复运行或 timeout-aware 设置。
5. 复现边界：必须固定 BIRD release、dev/test split、数据库 dump、evaluator commit、SQL dialect、timeout、重复策略，以及是否提供 oracle evidence。
