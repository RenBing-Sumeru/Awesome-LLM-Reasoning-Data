一手来源是 arXiv:2409.07703（2024-09-12 首次提交，2025-04-11 v3）、官方项目页和 `LiqiangJing/DSBench` 仓库；仓库新闻标注 2025-01-22 被 ICLR 2025 接收。DSBench 要评估的是 data-science agents 能否完成真实端到端任务，而不是简化 notebook 或单 API 题。

一个样本包含任务指令、可能出现的图片或表格、数据文件，以及需要提交的分析答案或建模结果。benchmark 包含 466 个 data analysis 任务和 74 个 data modeling 任务，来源于 Eloquence/ModelOff 式分析材料和 Kaggle competitions。它是 data-science agent evaluation surface，不是纯代码补全 benchmark，也不是训练 recipe。
