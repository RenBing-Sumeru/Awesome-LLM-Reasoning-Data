该设定假定存在训练问题、以正确答案结束的 oracle 解答轨迹，以及可查询的奖励函数。输出可被划分为多次尝试、验证/生成块，或由回溯标记分隔的路径。进展定义为 meta-prover 在观察新增 episode 后，给正确答案分配的概率变化。实现把 episode 奖励合并为一个经进展调整的总奖励，以兼容结果奖励 RL 系统。

STaR 实验随机抽取 10,000 对 NuminaMath 问题—解答，并对每个前缀做 20 次 rollout 估计回溯进展。RL 实验中，DeepSeek-R1-Distill-Qwen-1.5B 使用 4,000 条 NuminaMath 问题，DeepScaleR-1.5B-Preview 使用 919 条 1989–2023 年 AIME 问题；训练与评测的最大输出预算为 16K。这些是具体实验构造设置，不是已发布通用数据集规范。
