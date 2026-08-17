PaRS 用三类 gate 替代只看 outcome 的轨迹选择：有效 EQE 范围、与该配方湿实验 EQE 的容差，以及由薄膜 PLQY 构造的配方特异上包络。它接受第一个同时通过所有 gate 的候选；若一轮均未通过，则在多样性/改进很低时停止，否则提高 temperature 继续采样。

反馈契约是程序化的，但只能部分观察。gate 评估最终数值 EQE，而不评估 rationale 中的每个因果主张。论文还以外部 DeepSeek-R1 judge 报告轨迹质量指标，但它不同于 PaRS 接受条件；因此不能把 PaRS 称为步骤级 verifier。
