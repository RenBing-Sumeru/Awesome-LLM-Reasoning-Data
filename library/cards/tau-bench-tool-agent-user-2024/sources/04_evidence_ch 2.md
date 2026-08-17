最强证据来自可执行 benchmark 设计。论文给出 POMDP 形式化、领域组件、任务标注格式、reward 函数和领域统计：retail 有 500 个用户、50 个产品、1,000 个订单、15 个 API 工具和 115 个任务；airline 有 500 个用户、300 个航班、2,000 个预订、13 个 API 工具和 50 个任务。

实验证据是较广的模型比较，覆盖 function calling、ReAct 和 Act 风格 agent。核心结果是强模型也明显失败：gpt-4o 在两个领域的 pass^1 不高，而要求多次独立运行全部成功的 pass^k 更低。这支持了论文主张：对话随机性和 policy 推理会暴露单步工具 benchmark 看不到的问题。

定性证据是 failure analysis。论文报告的失败集中在复杂数据库推理、领域 policy 遵守、复合请求和对不同用户表达的稳健性。这些失败与 benchmark 设计相吻合：隐藏用户信息和随机 LM 用户回复使成功不仅依赖工具选择，也依赖沟通。

发布证据可用但需要版本化。原始 GitHub 仓库提供代码、benchmark 设置说明、historical trajectories、auto error identification 和 MIT license。但仓库目前警告任务已过时，并指向后续仓库的修正版任务，所以历史 tau-bench 分数应作为特定版本证据处理。
