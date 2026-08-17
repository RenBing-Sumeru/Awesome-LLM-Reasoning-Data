在论文报告的 MATH500、AIME2024、AIME2025、HMMT 和 AMC 实验中，DORA 在所测模型与预算下通常优于 temperature sampling、beam search、DVTS 与 REBASE。对 Llama-3.2-1B-Instruct 的 MATH500，表 2 报告 DORA 用 64 个 rollout 得到 68.7，总计算 8.92e14 FLOPs、124 秒；REBASE 用 256 个 rollout 得到 67.4，总计算 3.11e15 FLOPs、490 秒。同表中 DORA-64 与 REBASE-256 在 AIME24 都得到 14.7，但 DORA 计算更少。

这些结果说明一个分配方法在特定数学 PRM、embedding family、小型 policy 与 evaluator 下的表现，不能证明 semantic affinity 恢复了真实策略，也不能证明接收轨迹适合作为有效监督。论文测试了替代相似度 temperature 和 retriever，但由于缺少原始记录，分配决策与被拒分支无法独立审计。

