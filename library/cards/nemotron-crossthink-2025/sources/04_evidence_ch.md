对 Qwen2.5-7B，论文报告通用推理上调权重的最佳 blend 在七个 benchmark 上平均 58.12，而相同设置下 base model 为 44.75、ORZ-7B 为 55.20。论文报告 MATH-500 提升 30.1 点、AMC23 提升 27.5、MMLU-PRO 提升 12.8、GPQA-Diamond 提升 11.3、AGIEVAL 提升 15.1、SUPERGPQA 提升 3.8，并称正确回答平均少用 28% tokens。格式消融中，统一开放题比 MCQ/开放题混合平均高 1.21 点，短答案比长答案高 1.20 点。

这些是论文报告的训练结果，不能证明每条提示、gold answer、blend 决策或 exact-match reward 都正确。官方数据集可以核验 artifact 存在、split 数量、schema、CC BY 4.0 标记与样例行，但不能独立复现 588,645 条提示的训练混合，也没有公开在线轨迹与 reward。

