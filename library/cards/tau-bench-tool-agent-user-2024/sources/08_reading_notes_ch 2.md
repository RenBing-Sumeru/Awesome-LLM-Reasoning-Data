先读第 3 节掌握 benchmark 对象：数据库状态、API 工具、policy、用户模拟、任务 instance、reward 和 pass^k。判断后续论文是否真的可与 tau-bench 比较，关键在这一节。

再读第 4 节看构造细节。重点是任务经过人工迭代，直到隐藏用户指令在 policy 下有唯一结果，因此最终状态评分才成立。

读实验时要带着动作预算和用户模拟器看分数。论文结果依赖特定 prompt、模型、temperature、领域，以及最多 30 个 agent actions 的预算。

需要记住仓库警告。论文仍是原始 tau-bench 定义的重要来源，但当前分数和任务复用不能忽略官方说明：旧仓库中的任务已过时。

继续保留的 unknown：各 leaderboard 结果对应的历史 release tag，下游论文是否应用 task fixes，用户模拟器漂移对分数的影响，以及规则式 reward 漏检真实 policy 违规的频率。
