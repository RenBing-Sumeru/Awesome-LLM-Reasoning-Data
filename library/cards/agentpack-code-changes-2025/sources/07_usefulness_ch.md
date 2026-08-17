AgentPack 可作为真实软件工程 agent 使用痕迹中的代码编辑监督 schema。应保留 agent identity、归因信号、仓库、commit/PR id、日期、自然语言说明、文件路径、旧/新内容或 hunks、patch size、语言/文件类型、任务标签、过滤决策、split 和快照版本。

在 atlas 中，它是“没有完整环境循环的 agent 数据”的重要提醒：记录有价值，但反馈契约是隐式且下游的。它可以支持代码编辑模型训练和公开 agent adoption 审计，前提是不要把 merged code 误读成逐项验证正确。
