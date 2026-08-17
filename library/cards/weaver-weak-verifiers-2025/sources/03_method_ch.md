论文流程分为三个阶段。

1. 生成与评分。不同实验分别使用 Llama 3.1 8B/70B Instruct 和 Llama 3.3 70B Instruct 重复生成回答，主要比较每个 query 使用 100 个候选。研究覆盖 MATH500、GPQA Diamond、MMLU College 和 MMLU-Pro，附录还分析 BBH 与 AIMO。候选 query-response 由来自 RewardBench、Process Reward Bench 和 Chatbot Arena 生态的 reward model、process reward model 与 LM judge 评分。arXiv 主比较描述了 33 个 7B-72B verifier。

2. 适配与弱监督。Reward 分数用 5th/95th percentile 映射到 0/1 的方式稳健缩放，连续输出随后二值化；LM judge 已直接给出二值判断。Weaver 根据估计的数据集类别比例，移除正例边际行为不一致的 verifier。它用梯度优化把两两及边际投票统计拟合到条件独立潜变量模型，得到 verifier-specific TPR/TNR。约 1% 带标签开发数据用于估计类别比例、阈值和正确性先验。系统为每个候选计算后验分数，并选择后验最高的回答。Difficulty clustering 依赖 ground-truth correctness 来定义难度，是 oracle 探索，不是默认可部署流程。

3. 蒸馏。Query-response 与 Weaver 后验分数组成训练记录，用于训练 ModernBERT-Large（396M）cross-encoder；论文为此报告 80:20 的训练/评估划分。生成模型保持冻结。

官方仓库公开 generation、selection 与 distillation 代码，Hugging Face collection 提供经多个 verifier 预评分的 benchmark generations 和 distilled models。要复现一次运行，仍需锁定 dataset revision、generator checkpoint 与解码配置、verifier checkpoint 列表、prompt/parser、分数归一化、阈值与过滤状态、开发集划分、拟合参数、候选 ID 以及软硬件版本。此次核对材料没有统一披露 temperature，因此保留为 unknown。
