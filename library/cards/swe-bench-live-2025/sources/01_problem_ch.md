SWE-bench Goes Live! 回答的问题是：静态 SWE 基准会很快老化，因为公开 issue 和修复可能进入训练数据；污染敏感的智能体评测需要持续新鲜的 issue 收集。主来源是 https://arxiv.org/abs/2505.23419；公开状态为 NeurIPS 2025 Datasets and Benchmarks / arXiv（2025）。

决策边界：它应作为 live-updated 仓库修复基准收录，不是固定规模的一次性数据集，也不是通用榜单快照。可复用对象是：一个样本包含 2024 年以来创建的 GitHub issue、仓库快照、patch/test_patch 字段、FAIL_TO_PASS 和 PASS_TO_PASS 测试、image key、测试命令、log parser 和 Docker 镜像。它对 atlas 的价值在于对象和反馈契约可以一起审计。
