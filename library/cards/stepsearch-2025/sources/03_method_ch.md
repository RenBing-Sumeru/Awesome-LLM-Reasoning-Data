构造流程从 MuSiQue 已分解的问题开始。作者使用 GPT-4o 将其扩充为连贯的子问题—子答案对，并为每一步生成 N 个候选搜索查询。查询被发送到 M 个来源，论文以 Google、Bing 和 Wiki-18 为例；只有在至少 `ceil(M/2)` 个来源中返回有效结果的查询才会被保留。论文报告得到 60k 条经过筛选的搜索关键词，其中 19k 条 MuSiQue 派生样本用于 RL 训练；N 与 M 的已核验具体取值、完整发布清单以及逐记录拒绝日志仍为 unknown。

在线 rollout 使用 Qwen2.5 3B 或 7B 的 Base/Instruct 模型，通过含三个示例的提示反复执行 ``think``、``search`` 和外部返回的 ``information``，直到输出 ``answer`` 或耗尽 action budget。训练时，检索得到的 ``information`` token 不参与优化损失。实现基于 Search-R1 和 verl；训练阶段使用 E5 在合成语料上检索，评测阶段加入 2018 Wikipedia dump，并固定检索 `k=3` 篇文档。附录报告 rollout temperature 为 1.0、`top_p=1.0`、KL 系数为 `1e-3`、PPO clipping ratio 为 0.2。论文没有建立冻结的搜索服务快照、完整的逐记录奖励日志或已发布的可重放环境。

