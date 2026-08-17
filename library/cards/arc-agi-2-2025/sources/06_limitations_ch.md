正确性是 task 的 output-grid exact equality，不是人类式抽象的证明。solver 可能通过记忆、搜索、枚举转换或 prompt-specific heuristics 得到正确 grid。

public evaluation set 对研究有用，但容易被污染和 adaptive overfitting。README 中还有需要固定的口径：success criterion 处说每个 test input 允许 two trials，而后面的 interface description 提到 three trials。任何分数都应说明使用的 attempt policy。

这个 benchmark 有意很窄：小型彩色 grids、最小符号集合和 exact outputs。它不直接评估语言 grounding、物理推理、工具使用或真实世界任务完成。private-tier claim 需要单独证据，因为这些任务不在 public repository 中。
