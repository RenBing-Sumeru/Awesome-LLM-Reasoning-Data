关于发布内容，最强证据来自 artifact 本身。在 revision `61c9ade2e04ab4ee7e257434e0826cb9b737f63e` 上，FineProofs-RL 公开一个含 5,227 条 `train` 记录、恰好八列的 parquet。直接检查发现 5,227 个唯一且非空的题目字符串，各列均无 null，来源计数为 3,794 条 `aops` 与 1,433 条 `olympiads`；score 范围为 0-7，reward 范围为 0-1，没有 score/reward 归一化不一致，也没有在指定容差下的计数或均值不一致。检查同时确认 proof、reasoning、assessment、error 与 trajectory 字段均不存在。

论文与固定版本配置支持不同预算之间的区分。离线难度评分使用 Qwen3-4B-Thinking-2507，名义上每题有 128 次由 judge 评分的尝试。在线 RL 对 64 个 prompt 各使用 16 次当前 policy 尝试，即每个 batch 共 1,024 个样本；代码中的生成上限为 49,152 token，论文约述为 50,000。Reasoning-Cache 训练使用三轮 refinement。FineProofs-RL-test 是另一个 repository，其中 `test` split 有 128 条记录，并不是主发布 5,227 条记录中的隐藏 split。

作者还对 judge 做了验证，而没有把它描述为绝对正确。GPT-OSS-20B-medium 是根据 grading benchmarks 与严格的 ProofBench-style prompt 选定的。论文报告，加入 reference proof 并未提升其采用的 in-distribution advantage 指标，因此最终未提供 reference proof。尽管如此，人工对比仍发现 automated grader 有时更宽松，并在 IMO 2025 Q2 上出现明显不一致。这些证据支持把该信号视为 learned rubric judge，而不能重新命名为 formal correctness。

实验结果说明，该配方可以训练小模型，迭代 scaffold 也可以提升 proof-generation 表现。实验同样暴露失败行为：SFT 可能导致长度膨胀和重复，早期 RL 可能把大量预算消耗在被截断输出上。测试时比较高度依赖计算预算。表 2 报告单轮平均约 93,690 token，而 RSA 为 2,045,764 token，因此收益混合了模型能力、scaffold 设计与额外采样预算。

证据未能证明的内容同样重要。由于分数数组没有配套发布原始证明尝试或 grader assessment，外部读者无法判断某个 0-7 分是否在数学上合理，无法逐尝试分析 false positive 与 false negative，也无法重建为何某条记录少于 128 个结果或多达 256 个结果。已存储统计量的完整性并不等于证明有效性、judge calibration、无偏 curriculum selection 或完整 trace release。

因此，合理的证据结论是有限的：论文身份、官方 artifact 归属、记录 schema、计数、顶层发布声明、rollout 设置以及论文报告的训练评估流程均有充分支持；单个 reward 的可复现性、精确去污染决策、上游权利与原始轨迹复用仍是 partial。
