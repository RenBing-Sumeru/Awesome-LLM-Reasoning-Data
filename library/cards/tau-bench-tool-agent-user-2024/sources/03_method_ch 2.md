输入包括领域 policy、领域数据库、读写 API 工具、给用户模拟器的隐藏任务指令、标注的期望动作与输出、agent 模型、用户模拟器模型和最大动作预算。论文在构造中使用 gpt-4-0613 作为用户模拟器，并用多个闭源与开权重模型做 agent 实验。

流程是：人工设计 schema、API 和 policy；用 LM 辅助代码生成可扩展数据库条目；撰写并迭代任务场景；通过 agent 试跑消除歧义；标注唯一目标数据库结果。评测时，模拟用户和 agent 通过消息与工具调用交替互动，直到用户停止或达到预算。

输出包括每个 episode 的对话/工具轨迹、最终数据库状态、必要输出检查、二值 reward 和聚合的 pass^k 指标。论文报告 function-calling gpt-4o 在 retail 上约 61% pass^1，在 airline 上约 35% pass^1；随着 k 增大，可靠性明显下降。

Verifier / reward / environment 是确定性的 Python 数据库转移函数加规则式评分。Reward 比较最终数据库是否等于标注目标数据库，并检查必要回复字符串。论文也说明这只是必要但不总是充分的成功条件，因为未获确认就执行动作等 policy 违规可能未被完全捕捉。

训练/评测用途是 evaluation 与 failure analysis，而不是后训练数据配方。复用分数时应固定仓库版本、领域、任务 split、模型 prompt、用户模拟器、temperature、最大动作预算和 pass^k 聚合方式。

需要核验的 artifact 包括 arXiv 论文、DOI、原始 GitHub 仓库、仓库 license 和后续版本说明。原始仓库采用 MIT license，但 README 目前说明 airline / retail 任务已过时，并指向 `tau2-bench` / tau3-bench 的修正版任务。
