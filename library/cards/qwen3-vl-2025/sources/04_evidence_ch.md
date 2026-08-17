官方技术报告直接支持以下内容：120 万 SFT 及三分之一/三分之二模态比例、32K 到 256K curriculum、两阶段 filter、Long-CoT 的 1:1 平衡与视觉必要性测试、off-/on-policy distillation、约 30K 条 Reasoning-RL query、16-response filter、超过 90% 的 easy threshold、SAPO 和 General-RL hybrid reward。

官方仓库与 dense/MoE Instruct/Thinking checkpoint 可用于架构和能力检查，但不能复现来源记录、SFT/CoT 回答、teacher generation/logit、人工标注、RL query、全部 16 条 rollout、被拒来源、reward service 或阶段到 checkpoint 的映射。Benchmark 表支持作者设置下的性能主张，不能验证语料 provenance、许可、去污染或逐记录 reward 正确性。

