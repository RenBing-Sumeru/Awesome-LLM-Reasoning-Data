最终论文发表于 ICLR 2026（OpenReview 记录），arXiv v3 的日期为 2026 年 3 月 2 日。链接的作者仓库公开且使用 MIT license；其中含预处理、推理、任务评测代码、预分解输入目录及复现实验命令。截至核验时，未观察到 tagged release 或作者运行得到的结果包。

作者报告，在五次运行中，Plan-and-Budget 在其所报告的任务/模型比较里，E3 均优于 Vanilla 和 Global Budget，最大报告的 E3 提升为 193.8%（论文第 5.2 节）。论文给出的一个 MATH-500 具体比较是：DeepSeek-R1-Distill-Llama-70B 的 Global Budget E3 为 4.55，Plan-and-Budget 为 5.89（+29.4%）；o4-mini 从 13.25 变为 15.95（+20.3%）。这些是作者报告的聚合结果，不是独立复现，也不是数据质量的度量。

证据支持方法可得性及所述评测协议；它不支持 credits 已校准、过程引导忠实、benchmark 项无污染、或发布的预分解数据适合训练等主张。
