对 `rollout_search_test_time_trace_data` 而言，SRCA 可作为可审计中间状态日志的规范。复现应把稳定 prompt ID、policy 与 PRM revision、生成前缀、分隔符位置、checkpoint cue、completion、归一化答案键、路径分数序列、簇聚合分数、选择顺序、重构候选、终止分数、停止决定和 gold 评测结果分字段记录。保存被丢弃的分支对于诊断选择偏差是必要的，而不应只展示最终选择。

它也提供受控的测试时实验。应在相同 N、M、PRM、prompt 以及 token/latency 预算下，比较普通 beam/DVTS、无 CCA 的 ACS、向 baseline search 加 CCA，以及随机簇对照。分别评估答案 accuracy、pass@k/答案发现、checkpoint 来源率、簇多样性、PRM calibration、截断率和早停 regret。SRCA 的报告曲线可以启发这些测量，但不规定通用预算或阈值。

复用等级：**仅作阅读/审计参考和实现 recipe；直接训练复用 blocked pending release and verification。** 论文可指导新的、独立记录的实现，但没有发布轨迹语料、训练目标、许可证或足以支持 SFT、PRM 训练或 reward-model 主张的来源信息。应将其 PRM 视为外部评测组件，而不是已附着在可用数据集上的已验证标签。
