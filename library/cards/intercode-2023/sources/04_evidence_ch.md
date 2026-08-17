论文在 InterCode 协议下评测语言模型 agent，并报告执行反馈对交互式编码任务表现很关键。官方项目页和 GitHub 仓库提供 benchmark interface 与可运行环境代码。

逐样本的决定性证据是一条 episode log 加环境最终 predicate：agent 的命令在特定环境中被执行，observation 被返回，终止 checker 接受或拒绝该任务。aggregate score 只是多条 episode 的汇总，不能替代 trace。

证据边界：分数依赖 task split、runtime image、依赖版本、命令权限、步数/时间预算和 prompting scaffold。episode 成功只证明在该环境配置下完成任务，不证明广义编码能力或安全行为。
