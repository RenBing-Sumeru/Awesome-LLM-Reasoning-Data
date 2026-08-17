
- 将 Figures 4-12 视为 workflow 与 serving characterization，将 Figures 13-17 视为设计空间与 test-time-scaling 比较，并区分 Tables III-IV 的逐查询汇总测量与基于流量的外推。
- 50 道题的说明适用于 cost-efficiency 与 scaling study 的每个设计点；完整 query manifest 未发布。
- AgentBench 发布了可运行实现、benchmark input、可选 trace 保存和一个小型示例 trace，而不是论文的完整实验日志。
- Benchmark correctness 或 task score 是评测反馈；本文不训练 reward model，也不构建 post-training corpus。
- 必须保留 model、hardware、tool、caching、concurrency 与预算元数据，因为它们都会改变相似轨迹的成本。
