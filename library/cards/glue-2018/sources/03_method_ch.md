输入是一条记录所需的任务材料和元数据：9 个英文句子或句对任务、任务标签、train/dev/test split、指标、leaderboard 提交和 1,100 条 diagnostic set。

流程：打包任务输入和标签；定义 train/dev/test split；用任务特定 scorer 评测预测；聚合 leaderboard 分数；用 diagnostic examples 做语言分析。

输出是在该契约下评分的 benchmark record 或 evaluation summary：accuracy、F1、Matthews correlation、Pearson/Spearman 等任务特定指标及宏平均聚合。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
