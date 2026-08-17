RepoBench: Benchmarking Repository-Level Code Auto-Completion Systems 回答的问题是：代码补全系统需要仓库级上下文，但行级补全基准常忽略跨文件检索和项目结构。主来源是 https://arxiv.org/abs/2306.03091；公开状态为 ICLR 2024 / arXiv（2023）。

决策边界：它应作为静态仓库级代码补全/检索基准收录，不是交互式智能体环境。可复用对象是：一个样本包含仓库上下文、目标文件或行、检索到的代码上下文、语言 split、补全目标和静态指标记录。它对 atlas 的价值在于对象和反馈契约可以一起审计。
