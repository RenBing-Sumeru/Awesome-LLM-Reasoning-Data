对 `rollout_search_test_time_trace_data` 轨道而言，DEER 提供了自适应算力轨迹选择 schema。可审计记录应保留 benchmark 样本与 split、模型和 tokenizer revision、未修改的完整 CoT、每个 marker 或 entropy 候选点、保存的前缀状态、诱导 prompt、试答 token 与逐 token 概率、聚合方法、λ、DEER-PRo 的均值/MAD 项、分支时序与显存、退出动作、最终答案、外部正确性，以及对应的完整解码结果。

这类记录可以用于校准错误早退与漏退、模仿算力控制器、比较 test-time compute，或构造截断轨迹与继续轨迹之间的偏好对。复用时必须把模型自置信度、控制器决策、benchmark 正确性、rationale 忠实性和实际延迟保存为不同字段。当前代码可用于复现部分控制器，但缺少 rollout 日志与 branch-parallel 代码，不能声称存在完整可复用发布。
