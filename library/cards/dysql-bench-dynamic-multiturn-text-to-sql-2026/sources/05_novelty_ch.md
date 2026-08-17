此前多轮 Text-to-SQL 多是连续改写查询，但数据库状态基本不变，评测仍可逐条匹配 SQL。DySQL-Bench 的新意是让用户意图和数据库状态都随执行变化，并通过事务后的真实结果与 state diff 判分；逻辑树又使任务能够自动扩展。改变的是交互和 oracle，而不是提出新的 SQL decoder。
