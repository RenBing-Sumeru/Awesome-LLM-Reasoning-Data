构造与评测流程如下：

1. 选择主要代码语言为 Java、JavaScript、TypeScript 或 Python 的实现型 GitHub 仓库。仓库必须至少有 100 个 PR、在此前 12 个月内活跃、采用宽松许可，且项目讨论主要使用英文；SWE-bench 已包含的仓库被排除。
2. 收集关闭 issue 且贡献测试的 PR。issue 标题/正文形成 problem statement；solution PR 第一次 commit 之前的评论形成 hints。论文未报告跨自然语言翻译步骤。
3. 将 solution PR diff 拆成 gold code patch 与 test patch，记录仓库、issue/PR 标识、base commit、时间戳、编程语言，以及 LLM 生成的任务/信息充分性类别。
4. 为每个仓库和/或 base commit 手工配置 Dockerfile，在应用 gold patch 前后运行测试，识别从 fail 变为 pass 的 F2P 测试和持续通过的 P2P 测试。
5. 仅保留至少含 1 个 F2P 测试的任务。如果 gold code patch 创建了 test patch 所测试的新文件，则排除该任务，因为采用其他正确文件/函数名的方案可能被不公平拒绝。
6. 将 2,110 行作为单一 test split 发布。PB500 每种编程语言选 125 条，共含 200 个 Bug Fix、200 个 Feature 和 100 个 Refactoring 任务，同时保留全部仓库及其分布。后续 Verified artifact 当前含 382 行。
7. 评测时，为每条实例启动新 Docker container；若可用则使用公开、tag 为 v1.1 的 GHCR 镜像，否则从该行 Dockerfile 与 checkout 后的 base commit 构建。应用 test patch 和 candidate patch，执行 test command，解析输出，并保存逐实例 JSON 与原始日志。
8. 当所有 F2P 测试通过且没有 P2P 测试失败时标为 resolved，再汇总 pass rate 和可选的文件/CST 节点 retrieval 指标。该过程重跑最终 artifact，而不是回放 agent trajectory。
