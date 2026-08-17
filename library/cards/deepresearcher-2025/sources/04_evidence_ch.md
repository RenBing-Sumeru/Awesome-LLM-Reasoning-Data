EMNLP 论文明确给出轨迹语法、工具接口、观察屏蔽、奖励公式、prompt 混合、过滤后规模和 rollout 分配。仓库公开 Apache-2.0 代码、train/dev/test Parquet、生成/评测路径及 DeepResearcher-7b checkpoint。

论文报告相对 prompt-engineering 基线最高提升 28.9 分、相对 RAG 型 RL agent 最高提升 7.2 分；训练曲线与案例展示规划、交叉核验、重定向和类似弃答的行为。这些是特定评测下的 policy 结果，不能验证每条轨迹、网页、引文或奖励决定，也不能替代原始 rollout 发布。

