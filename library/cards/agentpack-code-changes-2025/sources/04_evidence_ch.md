论文 v2 报告 1,875,014 个条目、371GB：Claude Code 1,070,262 条，Codex 669,615 条，Cursor Agent 186,044 条。不同 agent 的 median patch 通常触及 2 到 3 个文件、变更 67 到 102 行；自然语言说明明显长于早期 commit 语料。论文还对每个 agent 抽样 5,000 条 commit 做任务标签分析，覆盖新功能、bugfix、文档、测试、配置和重构等类别。

下游证据来自微调实验。在论文协议下，AgentPack 训练把 DeepSeekCoder-1.3B 在 HumanEvalFix-Py 的 pass@1 从 0.19 提到 0.32，把 DeepSeekCoder-6.7B 从 0.39 提到 0.50；在 JavaScript HumanEvalFix 上，AgentPack 训练模型也优于对应 base model。这些数字受 lightly filtered subset、4,096 token cutoff、prompt/completion 格式、采样协议和 benchmark 选择约束；它们不证明每条 edit 都正确。
