本文的贡献是一套 trajectory-to-SFT 配方：保留小规模人工执行主干，让 Claude 3.7 Sonnet 在每个人工状态补全缺失 rationale，并生成九个单步替代决策，再用人工与合成 thought-action target 的并集训练原生 screenshot-based agent。

核心数据对象分为两层。episode 层面，一项人工任务由任务描述以及 screenshot 与已执行键鼠 action 的序列构成。训练层面，每个人工或合成节点被转换成独立样本：输入是当前 1280×720 screenshot、任务描述和此前人工主干 thought/action 的文本历史，target 是一段 ReAct-style thought 加一个规范化 action。合成节点共享人工状态和历史，但不会产生新的环境 transition；上下文也不包含过去的 screenshot。

反馈契约是 mixed，但必须按阶段拆开。对发布与训练 trace 而言，`finish` 和 `fail` 是终止 action token；以失败结束的记录会被删除，清洗代码还可能把最后保留的 action 重写为 `finish`。这反映的是构造规则，不是 Windows 任务成功的独立证明。普通 Claude 替代动作只经过语法和 placeholder 过滤，从未在环境中执行。评测时，WindowsAgentArena-V2 另行恢复虚拟机 snapshot，并由任务特定 evaluator 检查最终应用状态，其中包含部分基于 LLM 的初始化检查和少量人工评测。agent 的 `finish` 只负责停止交互，benchmark evaluator 才负责判定成功。

最接近的内部对照是 Claude direct distillation：每项任务执行十条 Claude end-to-end 轨迹，共 3,120 条，并采用相同训练流程。PC Agent-E 只在人工访问过的状态采样替代动作，从而不继续展开合成分支，也避免分支误差逐步累积。仅做人工轨迹 thought completion 是另一个 baseline。相较于收集或模拟完整 episode 的一般 computer-use 数据，本文把监督接口改成每个可信人工状态对应多个正向 action target；但这些 target 并未得到环境验证。这一区分正是本 track 最重要的方向信号。
