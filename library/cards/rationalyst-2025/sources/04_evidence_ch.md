主实验在七个 exact-match 基准上比较隐式 RATIONALYST 监督与 Llama-3-8B-Instruct 基线。报告分数分别为：GSM8K 77.6→81.6、MATH 28.0→32.5、ECQA 72.6→75.2、HellaSwag 58.2→60.3、ProofWriter 86.4→90.7、ARC-Challenge 77.6→80.7、MMLU-Pro 39.6→45.3；平均提升为 3.9 个百分点。

评测包含 GSM8K test（1,319）、MATH test（5,000）、ECQA validation（17,944）、HellaSwag validation（10,000）、ProofWriter depth>5 test（600）、ARC-Challenge test（1,172）和 MMLU-Pro test（12,000）。移除 Pile rationale 后，七项报告分数都下降，降幅从 ECQA 的 0.7 到 MMLU-Pro 的 4.1。这说明在论文设置下数据混合有贡献，但不能把 rationale 真值、额外训练、来源域线索和搜索过程的作用分离开来。

只使用任务特定数据训练时，Table 4 报告 GSM8K 上隐式与显式指导为 80.3 对 77.5，ECQA 上为 74.5 对 72.2。作者据此认为，相比直接向 agent 暴露不完美 rationale，隐式似然评分更稳健。Table 5 还比较过程与结果验证器，但存在未解决的 ECQA 不一致：完整 RATIONALYST 被写为 76.2，而 Table 2 与官方 model card 均为 75.2。

Table 1 提供了难得的构建证据：八个来源组各自的候选数、保留比例与阈值。然而，发布证据较弱。官方数据集 viewer 只显示一个 train split、15,178 行和 3 个字段，而论文报告约 7.9 万条保留 rationale。缺少对齐这些数量的 manifest 时，实验支持方法在报告设置下的效用，却不能证明完整数据已经公开，也不能证明逐条数据质量。
