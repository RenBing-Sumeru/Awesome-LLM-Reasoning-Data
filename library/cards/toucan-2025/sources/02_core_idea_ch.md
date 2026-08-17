TOUCAN 的核心贡献是一条可检查的流水线：把 MCP specification 转为合成任务，让 agent policy 对真实远程工具执行，附加规则与模型评审反馈，并同时发布三个按生成模型划分的 full config 和一个经过阈值筛选的 SFT 视图。

该机制连接四类不应混为一谈的对象：

- **任务上下文：**来自 GitHub 与 Smithery 的 specification 定义可用工具；每个任务在 single-server、multi-server 或 featured-server 采样下预设一至三个目标工具。
- **Episode：**GPT-OSS-120B、Kimi-K2 或 Qwen3-32B 通过 Qwen-Agent 或 OpenAI Agents 行动，产生工具调用、真实 observation 和最终响应。
- **反馈：**Kimi-K2 给出六项带理由的 1–5 分任务评分；公开规则检查 episode 结构及至少一个有意义工具响应；基于名称的逻辑计算目标工具覆盖与顺序；GPT-OSS-120B 对完整性和简洁性给出 1–5 分。
- **训练视图：**硬阈值与类别再平衡筛出 119,287 行用于 SFT，而更丰富的 full config 保留质量评审与 MCP 元数据。

反馈同时附着于 state/action 与完整 episode 层级，但不是通用 reward。Kimi-K2 和 GPT-OSS-120B 能观察序列化任务、轨迹及被要求的质量维度；规则层能观察消息和工具名。两者都没有用户期望世界状态的通用 gold representation，而真实工具执行本身也不能证明最终综合正确。

在本 Atlas 中，最接近的受控对照是 tau2-bench 等可执行 agent benchmark，TOUCAN 把它们用于下游评测；TOUCAN 的主要贡献则是可训练轨迹的构造与发布。这个区别很关键：benchmark 分数只是在相应评测下关于训练后模型的证据，并不是对每条发布数据或 SFT 选择 judge 的直接验证。
