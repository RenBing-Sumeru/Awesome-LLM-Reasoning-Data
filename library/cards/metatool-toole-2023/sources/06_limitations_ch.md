正确性只相对于 Tasks score whether a model should use tools and whether it selects appropriate tools under the specified scenario. 成立。通过分数不自动证明鲁棒推理、安全行为、解释忠实，或能迁移到 benchmark 分布之外。

隐藏假设包括：public/private split, hidden tests, and benchmark versioning require per-release verification before score reuse；license for questions, traces, code, data, and generated tool records is unknown unless the linked artifact states it；依赖或运行时漂移；裁判或评测器版本漂移；以及污染风险：tool/API tasks and public benchmark releases can leak into later 训练 data; pin release date and exact split。除非发布版本暴露训练输入、过滤规则和优化用途，否则这张卡不能被读成训练配方证据。
