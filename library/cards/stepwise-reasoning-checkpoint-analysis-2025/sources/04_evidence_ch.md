在 N=128、M=4 下，表 1 报告 Llama-3.2-1B 配合 DeepSeek PRM 时，SRCA 在 GSM8K、MATH500、AIME、OlympiadBench 上分别为 85.60%、53.40%、24.97%、20.74%；相应 DVTS 为 83.47%、52.60%、20.68%、19.40%。使用 Skywork PRM 时，SRCA 分别为 85.97%、65.20%、39.71%、27.75%，DVTS 为 84.00%、64.80%、29.03%、25.82%。这些是固定 policy/PRM/scaffold 下作者报告的端到端 accuracy，不是 checkpoint 质量的孤立估计。（论文表 1。）

扩展证据也以相同搜索设置为条件。在 DeepSeek PRM 的 MATH500 上，SRCA 在 N=16 时报告 51.2%，DVTS 在 N=64 时为 49.8%。在 Skywork PRM 的 AIME 上，SRCA 在 N=16 时为 32.48%，高于报告的最佳 N=128 baseline，即 DVTS 的 29.03%。论文观察到 N 增大时收益递减。它没有提供原始 trial、不确定性区间、seed 或公开轨迹账本。（论文 §4.2.2、图 2。）

对机制的证据是：论文的 ablation 报告 CCA 对 pass rate 约有 10% 改进，19.07% 的最终答案来自其扩展候选池；checkpoint-answer rate 从 GSM8K 的 11.63% 到 OlympiadBench 的 25.04%。在 N=128/Skywork 下，用随机簇 baseline 替换 ACS 得到四个数据集上 83.78%、65.00%、28.62%、25.96%，低于 SRCA。在所述实验中，tau=0.95 的早停将平均推理步数减少 27%，accuracy 仅减少 0.58%；低 tau=0.5 在 MATH500 上损失 14% accuracy。（论文 §5.2–§5.3、表 3、图 4–5。）
