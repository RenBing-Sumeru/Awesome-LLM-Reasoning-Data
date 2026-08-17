SWE-MERA 的核心思想是持续滚动、可执行的 GitHub 任务流水线。每个任务从已合并修复之前的仓库状态开始，加入 pull request 中的未来测试，再要求智能体生成补丁。PASS_TO_PASS 应保护既有行为；FAIL_TO_PASS 应在修复前失败、在预期修复后通过。

构造与评测使用不同反馈层。仓库构建和端到端执行是程序化的；Qwen3-32B 对任务正确性、测试正确性、测试完整性和复杂度分别给出 1–10 分、置信度与解释。前三项中任一落入后 25% 的任务会被过滤，复杂度只用于分析而不参与过滤。

公开 checker 在 `base_commit` 创建或重置仓库，构建环境，依次应用 `test_patch` 与候选 patch，再运行 `command_test_small`。在固定修订 `c1079ff` 中，只有所有 PASS_TO_PASS 标识均出现在 passed 集合中才设置 `solved`。FAIL_TO_PASS 虽被序列化并随数据发布，却没有进入终止谓词。这一实现缺口是核心审计发现，不是次要 schema 细节。
