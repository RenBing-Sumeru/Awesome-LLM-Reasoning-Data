论文表 1–4 报告了两个 Claude 快照的答案级覆盖率。输入 issue text 加 file structure 时，Claude 3.5 / 3.7 Sonnet 在 SWE-Bench-Verified 上的 complete coverage 分别为 76% / 73%，BeetleBox 为 21% / 17.6%，SWE-rebench 9 月为 28% / 22%，SWE-rebench 1 月为 43.12% / 44.04%。相同条件下，按同一数据集顺序，partial coverage 分别为 83.60% / 82.40%、68.6% / 59.8%、74% / 70% 和 87.16% / 81.65%。1 月划分的 partial coverage 对两个模型都高于 SWE-Bench-Verified，因此论文并未在所有条件和判据上显示统一的 SWE 优势。

只输入 issue text 时，complete coverage 在 SWE-Bench-Verified 上为 65% / 63.20%，BeetleBox 为 12.2% / 12%，SWE-rebench 9 月为 12% / 8%，SWE-rebench 1 月为 17.43% / 19.27%。按相同数据集顺序，issue-only partial coverage 为 72.80% / 71%、43% / 44.6%、34% / 30% 和 34.86% / 38.53%，同样依次对应 Claude 3.5 / 3.7 Sonnet。该分支完全不向模型提供仓库路径或代码，因此构成最关键的经验观察。

倍数说法有明确条件，不能当作通用性能乘数。对于 **issue-only complete coverage**，论文称 SWE-Bench-Verified 相对 BeetleBox 接近 6×、相对 SWE-rebench 约 3×；对于 **issue plus file structure**，论文改称相对 BeetleBox 约 4×、相对 SWE-rebench 约 2×。因此，摘要中的 3×/6× 必须保留对应指标、提示条件和比较对象，不能扩展到 partial coverage，也不能不加区分地套用于所有 SWE-rebench 划分。

OSF 发布还提供了分数之外的直接可审计证据：提示与回答、解析后预测、gold 路径、仓库结构缓存、子集文件、`leak_test.py` 以及实现精确集合判据的 `metric.py` 均可检查。这支持一个可重跑的静态评分流程确实存在；但本卡没有独立重新执行大型 parquet 和日志载荷。

作者把最小上下文下的差距解释为 Claude 很可能见过 SWE-Bench-Verified 任务，排行榜结果可能部分测量了回忆。这是与观察对比相符的作者推断，不是专有训练集成员关系的证明。分数也不能证明公开数据本身质量高；不受限制的路径多报、解析器漏失、数据集难度和仓库熟悉度都会影响覆盖率。
