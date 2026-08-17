首要证据是发布完整性，而不是某个 leaderboard 分数。完整 Hugging Face test split 含 2,110 行，四种语言数量之和精确等于总数：165 + 1,017 + 729 + 199。PB500 含 500 行，每种语言 125 条，任务类别分配为 200/200/100。当前 Verified artifact 含 382 行：Java 69、JavaScript 100、Python 113、TypeScript 100。

verifier 实现保存 `all_f2p_passed`、`no_p2p_failed` 和 `resolved`，还保留 passed/failed test 列表、patch 是否应用、是否存在 generation、是否有日志。这形成明确的二值结果契约，并让本地执行失败与测试失败保持可区分。

环境证据弱于完全不可变的发布。仓库称逐实例 GHCR 镜像已冻结并记录 tag v1.1；2025-09-18 更新称修正了部分 Dockerfile，且 gold patches 在预构建镜像上达到 100% 通过率。然而，仓库没有正式 Release，也未发布 dataset-to-image digest 清单。

论文的多智能体比较还暴露了运行故障：SWE-agent 兼容性问题影响 129 条实例，其中 111 条获得预测，其余 18 条按 empty 处理。这说明即使任务记录有效，环境兼容性也可能改变 benchmark 分数。
