一句话贡献是：把跨任务迁移变成标准 NLU 评测目标的共享 benchmark 和 leaderboard。

核心机制是收集既有 NLU 数据集、统一提交格式、定义任务指标、聚合分数，并加入 diagnostic analysis。被评分对象是9 个英文句子或句对任务、任务标签、train/dev/test split、指标、leaderboard 提交和 1,100 条 diagnostic set，反馈契约是accuracy、F1、Matthews correlation、Pearson/Spearman 等任务特定指标及宏平均聚合。

最近对比对象是单任务 NLU 数据集和后来更难的 SuperGLUE 式套件。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
