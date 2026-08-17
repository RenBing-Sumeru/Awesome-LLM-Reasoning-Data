1. **多轮 SQL agent 评测：** 在快照数据库中运行完整交互，报告逐轮、终局和 Pass^k。

2. **轨迹训练：** 将意图、SQL、执行结果和下一轮用户反馈用于 SFT 或 agent RL。

3. **执行 verifier：** 以 query result 与 state diff 作为奖励，分离语法、运行和语义错误。若任务只需静态查询，DySQL-Bench 可能过重；若涉及真实敏感数据，必须使用脱敏副本与权限沙箱。
