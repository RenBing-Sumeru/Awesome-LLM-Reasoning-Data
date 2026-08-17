一句话贡献：RepoBench: Benchmarking Repository-Level Code Auto-Completion Systems 把一个样本包含仓库上下文、目标文件或行、检索到的代码上下文、语言 split、补全目标和静态指标记录。绑定到具体反馈契约，形成可复用对象。

核心机制：基准在 Python 和 Java 仓库上定义带仓库级上下文的 retrieval、completion 和 pipeline 任务。反馈契约：RepoBench-R 用 Accuracy@k 评估检索；RepoBench-C 和 RepoBench-P 用 Exact Match 与 Edit Similarity 评估补全或 pipeline。最接近的对比对象是：单文件代码补全和可执行仓库修复基准。方向标签是 verifier-anchored software-agent evaluation。
