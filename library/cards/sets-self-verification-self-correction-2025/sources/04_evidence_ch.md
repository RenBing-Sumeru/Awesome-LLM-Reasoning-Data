论文在规划、推理、数学与代码输出预测任务上，使用多种模型报告 scaling curve 与消融，并称在所评测配置中最高提升 10.9 个百分点；还分析 correction round、temperature、模型规模、难度、self-verification sampling、API call 与财务成本。曲线通常比较 SETS、SELF-REFINE、best-of-N 加 majority vote、best-of-N 加 self-evaluation，以及 best-of-N 加 self-verification。

这些证据支持较窄结论：对部分模型和任务，同时改变 m 与 n 可以得到优于所测基线的准确率—输出 token 前沿。由于每条前沿针对数据集与预算选择测试网格中的最佳配置，它并不是在线预算分配策略，也可能受特定评测集上的选择影响。结果不能证明单条 self-verification 陈述正确，也不能证明 correction history 是高质量数据。TMLR 正式发表状态与 arXiv 记录已核实；未确认官方代码或轨迹发布。
