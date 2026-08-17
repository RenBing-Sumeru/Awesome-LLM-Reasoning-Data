论文在开放域问答套件上评估训练后的策略，并报告其 14B 模型在 HotpotQA 上达到 72.3%、在 SimpleQA 上达到 90.0%。对训练方案更有解释力的是消融：把 RL 限制为只提交一次答案，会降低两个消融任务的分数；移除冷启动会使训练不稳定。规模分析还指出，3B 与 7B 运行即使初期 reward 上升，也可能出现重复文本或畸形工具调用 JSON。这些观察支持多次提交反馈与冷启动数据的作用，但不能验证每条轨迹，也不足以建立通用 scaling law。

官方 artifact 包括采用 Apache-2.0 的 GitHub 仓库、`WebSeer-14b`、采用 Apache-2.0 的 SFT 数据集和 RL 数据集。SFT 仓库提供一个 train Parquet 文件，RL 仓库提供 train 与 test Parquet 文件。GitHub 仓库包含训练代码和模型输出文件，但 README 明确说明完整评估脚本仍待发布；仓库也没有 tagged release，因此复现者必须同时固定代码 commit、数据 revision 和模型 revision。

Benchmark 准确率只是特定工具与 judge 设置下系统表现的证据。它不能证明已发布数据具有完整 lineage、校准良好的 verifier 标签、充分的去污染处理或可回放的网页观察。
