R1-Zero 直接对 DeepSeek-V3-Base 应用 GRPO，使用基于规则的准确性和格式 reward。报告随后加入 cold-start SFT 以改善可读性，再进行 reasoning RL。它通过 rejection sampling 生成后续 reasoning 数据，将其与非推理 SFT 材料混合，并完成最终的 all-scenarios alignment RL 阶段。

发布的 R1 checkpoint 还充当 dense distillation 的教师。报告描述了约 60 万条 rejection-sampled reasoning、20 万条部分复用或由 DeepSeek-V3 生成的非推理条目，以及 80 万条 R1 蒸馏数据。这些是阶段级数量和描述，而不是相应记录的发布。

对本披露账本而言，关键贡献是可见的混合反馈后训练序列：规则、格式/语言约束、DeepSeek-V3 判断和通用 reward model。论文没有提供重建其精确契约或混合所需的 artifact。
