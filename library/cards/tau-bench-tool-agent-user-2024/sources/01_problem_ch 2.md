官方来源是 arXiv:2406.12045，《tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains》，作者为 Shunyu Yao、Noah Shinn、Pedram Razavi、Karthik Narasimhan。论文于 2024-06-17 作为 arXiv preprint 发布，并在论文脚注和官方仓库中给出代码与数据链接。

决策边界是交互式 agent benchmark / environment，而不是训练数据配方。它应放在 benchmark 与 agent environment 方向：模型 agent 需要和 LM 模拟用户多轮对话，调用领域 API 工具，遵守领域 policy，并让最终数据库状态满足可验证目标。它不是偏好标注、过程监督标注或优化算法论文。

论文要解决的具体问题是：很多既有 tool-use / agent benchmark 把完整需求一次性给 agent，弱化了用户信息收集、规则遵循和长期可靠性。Tau-bench 追问的是 agent 能否在真实客服式任务中，一边询问用户、一边使用工具、一边遵守复杂规则，并且多次运行保持一致。

一个评测 instance 包含隐藏的用户指令、领域 policy、领域数据库、读写 API 工具、多轮 user-agent-tool 轨迹、标注的目标数据库写操作、可选的输出字符串检查以及二值 reward。论文的两个初始领域是 retail 和 airline，分别报告 115 个 retail 任务和 50 个 airline 任务。

它具备可审计性的依据是：论文清楚给出环境组成、构造流程、reward 定义和 pass^k 可靠性指标。复用时的关键边界是版本：原始 `tau-bench` 仓库目前明确提示 airline / retail 任务已过时，并建议使用后续 `tau2-bench` 仓库中的修正版任务和新增领域。
