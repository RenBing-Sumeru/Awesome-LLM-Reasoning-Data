论文报告 26 个 app 上共 133 个任务，其中 27 个 single-app、60 个 multi-app、46 个 memory/personalization。它在 vision-only 与 privileged vision+XML 设置下评测 frontier 和 open-source computer-use models；摘要报告最佳配置 overall 52%，multi-app 37%，vision+XML 对 frontier models 最高提升 26 个百分点。

仓库证据很具体：发布 apps、canonical `tasks.json`、rubrics、runners、scoring scripts，以及 trajectories、events、screenshots、actions、rubric evaluations 等结果 artifact。

证据边界：逐样本有效性来自 rubric-judged trajectory，不是纯确定性 verifier。分数依赖 judge model、simulator state、app build、observation mode、task seed 和 model/API version。
