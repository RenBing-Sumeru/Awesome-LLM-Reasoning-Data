arXiv 摘要说明该 benchmark 包含 89 个困难终端环境任务，每个任务都有独立环境、人工编写解法和用于验证的测试。摘要还报告 frontier models and agents 得分低于 65%，支持了发布时 benchmark 尚未被饱和这一判断。

公开仓库从操作层面提供了独立证据：它把 Terminal-Bench 描述为 task dataset 加 execution harness，harness 把语言模型连接到 terminal sandbox。仓库列出任务组成：instruction、test script 和 reference solution，并指向 task gallery、docs、registry 和 leaderboard submission guidance。

证据最强的部分是 benchmark 结构、任务级程序化评分，以及 code/harness 可用性。较弱的部分是长期可比性：若不固定 benchmark version、task release、harness version、package version、runtime image 和 agent adapter，分数不宜横向比较。仓库还说明 benchmark 处于 beta，因此不能把移动中的任务套件当作固定测量面。
