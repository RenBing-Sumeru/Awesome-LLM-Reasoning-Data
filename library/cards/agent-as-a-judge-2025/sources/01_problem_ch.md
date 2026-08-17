现有 agent benchmark 往往只看最终是否完成，掩盖长程开发 agent 在哪里失败；逐一检查文件、输出和轨迹的人工评测又非常昂贵。既有代码 benchmark 也难以表示完整 AI 开发请求及其中彼此依赖的中间要求。

Agent-as-a-Judge 让一个 agent 评估另一个 agent。论文提出 DevAI：以分层 requirements 表示真实 AI 开发任务的 benchmark；随后通过收集到的 workspace 证据，并在可得时结合轨迹，对开发 agent 逐条 requirement 做判断。
