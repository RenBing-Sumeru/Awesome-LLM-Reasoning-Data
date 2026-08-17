核心对象是一条可执行仓库修复记录。`instance_id` 标识关闭 issue 的 PR；`repo` 与 `base_commit` 恢复解决方案之前的代码库；`problem_statement` 与 `hints_text` 提供面向用户的上下文；`patch` 与 `test_patch` 分离实现改动和测试改动；`Dockerfile`、`test_command`、F2P 与 P2P 共同定义执行。

verifier 是合取条件：只有所有 fail-to-pass 测试在应用 patch 后通过，且没有 pass-to-pass 测试退化，候选才算 resolved。harness 还会把候选与 gold patch 的改动文件和 Concrete Syntax Tree 节点比较，报告定位 precision/recall；这些 retrieval 分数只是诊断指标，只有 F2P/P2P 合取决定是否解决。

基准标准化的是最终 patch，而非智能体行为。提交文件至少包含 `instance_id` 和字符串类型 `model_patch`。智能体内部可以搜索、编辑和运行工具，但中间动作与 observation 不属于数据契约。本地评测会生成原始测试日志、passed/failed test 列表、patch 应用标记和 resolved/unresolved 标签。
