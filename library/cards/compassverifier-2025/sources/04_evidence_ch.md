在 VerifierBench 的二分类设置中，Invalid 被并入 Incorrect。CompassVerifier-3B/7B/32B 的平均准确率分别为 85.0/87.5/90.8，平均 F1 为 80.4/83.4/87.7。相同表格中，CompassVerifier-7B 的 83.4 F1 高于 Qwen2.5-7B-Instruct 的 42.1 和专用验证器 Tencent-Qwen2.5-7B-RLVR 的 67.1。最强的 32B 结果在领域间仍不均衡：数学 F1 为 80.8，知识 F1 为 94.8。

三分类评测将 Invalid 保留为独立类别。CompassVerifier-3B/7B/32B 的平均准确率分别为 83.7/85.8/89.4，macro-F1 为 80.6/83.4/88.3。对于需要区分错误答案与损坏任务或输出的应用，这组证据更相关。发布的测试标签是人工 gold judgment，但论文未报告标注者人数、标注者一致性、置信区间或独立复现。

7B 消融中，基础数据得到 84.0 准确率和 79.8 F1；只加入公式增强达到 86.7/82.8，只加入错误驱动增强达到 86.4/82.0，两者同时使用达到 87.5/83.4。在独立 VerifyBench 的 hard subset 上，CompassVerifier-32B 使用自身模型专用提示时为 89.7 准确率、81.1 F1，使用 VerifyBench 提示时为 86.8/74.3。这支持它在两个 benchmark 设置内具有一定提示鲁棒性，不能证明普遍的分布外可靠性。

GRPO 实验中，Qwen3-4B-Base 在 AIME24/AIME25/MATH500 上的 avg@32 为 2.7/1.8/34.1；使用 Math-Verify 奖励后为 8.9/7.2/63.1；使用 CompassVerifier-7B 后为 21.2/17.3/82.2，使用 CompassVerifier-32B 后为 21.2/17.2/83.3。这些是单一 Open-S1 过滤与训练设置下的下游策略结果，不能独立证明标签正确、语料质量良好，也不能证明未发布的 96,832 条训练集可以复现。
