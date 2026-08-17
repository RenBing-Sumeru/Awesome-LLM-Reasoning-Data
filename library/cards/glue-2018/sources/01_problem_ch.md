GLUE 是 ICLR 2019 的多任务 NLU benchmark，包含 9 个英文句子/句对任务和 diagnostic set。 主来源是arXiv 1804.07461、ICLR 2019 状态、gluebenchmark.com 和 GLUE-baselines。

它回答的具体问题是：如何跨多种任务比较通用 NLU 模型，而不是只优化单一数据集。决策边界是benchmark 基础设施和分析平台，不是 reasoning-specific 训练语料。

数据对象或评测面是9 个英文句子或句对任务、任务标签、train/dev/test split、指标、leaderboard 提交和 1,100 条 diagnostic set。它对 atlas 的价值在于把反馈契约说清楚：accuracy、F1、Matthews correlation、Pearson/Spearman 等任务特定指标及宏平均聚合。
