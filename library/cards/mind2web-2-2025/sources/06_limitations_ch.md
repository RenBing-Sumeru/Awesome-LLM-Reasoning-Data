正确性只相对于已声明契约成立：Agent-as-a-Judge 用任务专属树状 rubric 同时评分答案正确性和来源归因；指标包括 Partial Completion、Success Rate 和 Pass@3。结果依赖 rubric 设计、judge 模型/提示、split 政策、网页新鲜度和来源可访问性。公开 dev 任务不能和 private test claim 混写；自动 judge 也不是 rubric 外事实真值证明。

不要把论文解读成无限制真实世界可靠性证明。公开 artifact 会进入后续训练语料，服务支撑环境会漂移，judge/评测器实现也可能随发布版本变化。
