已有基线是每个 Web-agent benchmark 自带自己的 harness 和日志约定。BrowserGym 改变的是复用面：benchmark 变成统一环境 API 下的 adapter，AgentLab 则提供共同的 agent 实验管理和分析层。

方向信号是 Web-agent evaluation 的基础设施标准化。质量信号包括 ServiceNow 官方仓库、OpenReview/TMLR 状态、包结构、leaderboard space 和 multi-benchmark 实验。不是新的部分包括浏览器自动化、gym API 和各 benchmark 自己的 success function。复用前要检查每个 adapter 的 license、hidden/public split、live-site 依赖、evaluator 是否忠实于原论文，以及统一接口是否遮蔽了 benchmark-specific 约束。
