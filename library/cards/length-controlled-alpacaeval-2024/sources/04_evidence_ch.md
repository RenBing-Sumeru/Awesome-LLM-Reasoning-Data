论文和官方仓库给出的核心证据是：长度控制后，AlpacaEval 2.0 与外部人类偏好 leaderboard 的相关性更高，同时对“写得更长”的可操纵性更低。arXiv 摘要报告与 LMSYS Chatbot Arena 的 Spearman 相关从 0.94 提升到 0.98；官方 README 在实际 AlpacaEval 2.0 说明中写作 0.93 到 0.98，并说明 LC win rates 已作为默认指标使用。

单条样本层面的证据仍然是自动偏好标注，不是人工认证的正确性判断。更强的证据来自诊断用途：同时看 raw win rate 和 LC win rate，可以发现模型是否主要靠更长回答抬高分数。这些数字依赖官方 AlpacaEval 评测集、参考模型、评测器 prompt/config、API 模型行为，以及比较时的 leaderboard 快照。
