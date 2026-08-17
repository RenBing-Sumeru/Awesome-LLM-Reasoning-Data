对 `rollout_search_test_time_trace_data` 而言，DORA 为冗余轨迹上的计算分配提供了明确日志合约。可复用 episode 应保留提示与 benchmark 版本、policy/PRM/embedding 版本、每条部分轨迹、token 边界、PRM 分数、embedding、cosine 与 affinity 行、temperature、uniqueness 与质量权重、取整前后分配、continuation、完成状态、解析答案与加权投票。

这些日志支持更换 PRM 或 retriever 的反事实回放、分配熵与方向覆盖分析，以及检查被拒分支是否包含正确或有信息量的推理。复用者应在自己的领域校准分数与语义分组，并与同预算 baseline 比较。官方代码可以支持实现研究，但不能替代已发布的决策 lineage。

