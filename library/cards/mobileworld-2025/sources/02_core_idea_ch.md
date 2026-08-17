核心贡献是一个可控 Android 基准，其中同一 decision loop 可以在三类动作之间切换：普通 GUI operation、`ask_user` 澄清和 `mcp_call` 工具调用。Planner 接收 goal、当前截图和历史；click 类计划由 UI-Ins-7B 转换为坐标，用户与 MCP 返回则作为后续 step 的 observation 追加到历史（论文 §3.1–§3.2、§4.1；附录 A）。

Agent-user 任务先由人工写出信息完整的 goal，再移除一个关键事实，并检查设备中没有泄漏该信息。GPT-4.1 扮演 simulated user，接收完整 goal 与被移除信息，并被要求拒绝无关问题。MCP 任务先设计只靠工具可完成的任务，再追加消费工具输出的 GUI 动作，因此形成 hybrid trace，而不是只有 API call（论文 §3.3）。

虽然交互面是 mixed，终局反馈仍主要是程序化的：22 个任务用 exact/regex 文本匹配，95 个查询自托管 backend database，74 个通过 ADB 检查本地 app storage，10 个查询 application callback。这些 verifier 只能观察选定答案或状态字段，不能证明每个中间动作都合理、没有未查询的副作用，或外部 MCP 返回保持稳定（论文表 4–5）。

相对 AndroidWorld，MobileWorld 增加自托管第三方应用替代品、显著更多 multi-app task、用户澄清和 MCP-augmented execution。相对 τ-bench 一类会话基准与 OSWorld-MCP 一类 hybrid computer-use 工作，它的区别是：截图驱动的 Android episode 经 dialogue/tool call 后，最终由 database、storage、callback 或 text predicate 验证移动状态。它是评测环境与公开 trace surface，不是 agent-training recipe。
