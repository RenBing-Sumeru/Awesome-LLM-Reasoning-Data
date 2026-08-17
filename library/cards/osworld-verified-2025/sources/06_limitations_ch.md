正确性只相对于 OSWorld task evaluators and verified task-quality fixes. 成立。通过分数不自动证明鲁棒推理、安全行为、解释忠实，或能迁移到 benchmark 分布之外。

隐藏假设包括：Verified release is an in-place upgrade; compare only against the verified section or a pinned old OSWorld version.；OSWorld repository reports Apache-2.0; task assets, third-party software, and cloud images need separate reuse checks.；依赖或运行时漂移；裁判或评测器版本漂移；以及污染风险：Public tasks, trajectories, and 榜单 implementations can leak into 训练 data。除非发布版本暴露训练输入、过滤规则和优化用途，否则这张卡不能被读成训练配方证据。
