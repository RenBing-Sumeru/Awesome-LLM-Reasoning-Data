输入包括 benchmark task、LLM agent 或 scaffold、benchmark driver、可用 action，以及环境的 state/observation 接口。论文和仓库把 AgentQuest 描述成一个模块化层，用统一的 driver 和 metric 抽象连接多类 benchmark。

流程可以概括为：

1. 选择 benchmark module，并初始化任务或环境状态。
2. agent 观察当前状态，选择 action，再接收下一步 observation 或环境响应。
3. 记录 trajectory，包括 action、observation、可获得的 state transition 和 terminal outcome。
4. 同时应用任务成功指标、AgentQuest progress 指标和 repetition 指标，暴露中途行为。
5. 在相同 benchmark module、metric 定义和运行预算下比较 agent 或 scaffold。

输出是带分数的运行结果和 trajectory 级诊断，不是独立训练语料。复现时必须固定仓库 commit、benchmark module 版本、模型或 scaffold prompt、运行预算、API 依赖，以及底层 benchmark 的 split 或 seed 策略。
