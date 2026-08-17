一句话贡献：tau-bench 把客服式工具使用做成一个随机多轮 user-agent-tool 环境，用最终数据库状态和必要的用户可见回答来判定任务是否成功。

核心机制是模块化环境：领域数据库、Python API 工具、policy 文档、隐藏用户场景和 LM 用户模拟器共同构成任务。Agent 能看到 policy、对话消息和工具观测，但看不到隐藏目标标注。用户模拟器根据任务指令扮演用户，并在交互完成时结束 episode。

数据对象不是静态问答，而是可执行评测任务。一个任务保存用户目标与约束、唯一目标数据库结果，有时还保存 agent 必须告知用户的输出值。一次运行产生消息、工具调用、工具返回、最终状态和 reward 组成的轨迹。

反馈契约是规则式的。论文将 reward 定义为 `r_action * r_output`：最终数据库必须匹配标注目标状态；如果任务要求返回信息，agent 消息中还必须包含指定输出字符串。pass^k 衡量同一任务 k 次独立运行是否全部成功，用来评估对话随机性下的可靠性。

最接近的对比对象包括 WebShop、ToolBench、Berkeley Function Calling Leaderboard、ToolEmu、WebArena 类环境和任务型对话模拟器。Tau-bench 的差异在于把工具调用、隐藏用户信息、领域规则推理、数据库变更和重复运行可靠性放进同一个 benchmark。
