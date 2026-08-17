发布物相当完整。官方仓库提供 AgentNet 处理与可视化工具、反思式 CoT generator、模型推理支持和 AgentNetBench 评测。AgentNet 以 Windows/macOS 和 Ubuntu JSONL、metadata 及图像压缩包形式发布，OpenCUA 模型 checkpoint 也已公开。在 2026-07-21 核验的快照中，GitHub 固定为 `dfc91ba89f700d10f26ec50362d308571482ab8b`，AgentNet 固定为 `d76ee50a63fad81cfdbe576416757d7c2091ed50`，OpenCUA-7B 固定为 `a2efb7d2b104d477a4a2666a357e79550a28aafc`。

在 369 个 OSWorld-Verified 任务上，OpenCUA-72B 在 15、50、100 步预算下分别报告 39.0%、44.9% 和 45.0% 成功率；OpenCUA-32B 分别报告 29.7%、34.1% 和 34.8%。在包含 100 条轨迹的 AgentNetBench 上，OpenCUA-7B 的 coordinate、content、function 和 average Step SR 分别为 79.0、62.0、44.3 和 75.2；OpenCUA-32B 分别为 81.9、66.1、55.7 和 79.1。AgentNetBench 包含人工细化的备选有效动作，但仍是静态的首动作指标，而非执行后的终局状态测试。

一个受控的 Qwen2-VL-7B 消融实验使用 14K 个 Windows/macOS 与 3K 个 Ubuntu 样本，加入 reflective CoT 后，OSWorld-Verified 成功率从 11.5% 提升到 15.3%。这表明该配方在一个设置下能改善一个模型，但不能证明每条 rationale 都忠实，也不能把 benchmark 表现当作逐条数据质量测量。72B 结果还混合了公开数据、通用数据、更大训练预算和 8K 条 o3+Jedi rollouts。

采集披露本身也构成有意义的证据：Appendix C.2 报告 634 名标注者、验证前 24,095 次上传、约六个月工作、约 USD 20K 人工标注成本、每项任务 USD 0.6 的 CoT 成本以及约 USD 32K 总成本。这些数字澄清了规模与成本，但尚无独立复点或完整的逐记录来源 manifest。
