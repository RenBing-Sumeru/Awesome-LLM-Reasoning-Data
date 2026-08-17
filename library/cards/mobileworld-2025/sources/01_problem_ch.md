MobileWorld 针对 AndroidWorld 类移动基准的几个缺口：leaderboard 接近饱和、第三方生产力/电商应用覆盖有限、指令通常清晰，以及执行方式局限于 GUI。它评测 agent 能否维持长程跨应用 workflow，识别请求何时缺少关键信息，向用户澄清，并把外部 Model Context Protocol（MCP）调用与 Android 动作组合起来（ACL 论文 §1、§3）。

基准在 20 个应用上包含 201 个任务：116 个 GUI-only、45 个 agent-user interaction、40 个 MCP-augmented。76 个任务使用一个应用，100 个使用两个，25 个使用至少三个，因此 62.2% 为 multi-app。论文的 GPT-5 + UI-Ins-7B framework 在 MobileWorld 上平均执行 27.8 个动作，在 AndroidWorld 上为 14.3；这是依赖模型的测量，不应误读为任务的固有最短路径长度（论文表 5、图 5）。

一条 episode 把 task goal 和预定环境 snapshot，与截图 observation、GUI action、可选 `ask_user` 对话、可选 MCP 请求/返回、模型响应和任务特定终局分数连接起来。当前公开 trajectory bundle 还保留 token usage、evaluator reason，以及可选的截图视频 frame index。因此 canonical artifact 是与环境绑定的评测 episode，而不是 instruction-answer 行或训练 demonstration。

MobileWorld 直接属于 `environment_agent_trajectory_data`，因为状态初始化、observation/action schema、外部反馈通道和 terminal predicate 共同决定“成功”的含义。本 Card 依据 ACL 2026 论文、arXiv v3 与当前官方 artifact；不会默认论文发表后的代码或轨迹 bundle 能精确复现论文时期运行。
