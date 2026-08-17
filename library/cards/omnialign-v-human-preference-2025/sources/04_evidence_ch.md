主张：在 OmniAlign-V 的 SFT 之后加入公开偏好对，可提升多模态对齐的评审结果。设置：比较同一 SFT 模型在 DPO 前后。结果：MM-AlignBench 从 57.1／+11.1 升至 64.3／+22.4，WildVision 从 29.6／-31.3 升至 41.8／-10.1；数字为胜率／奖励。边界：这支持该配置下的 DPO 阶段，并非直接的人类满意度保证。

机制复核：InternVL2-8B 加入 DPO 后，MM-AlignBench 从 31.4／-21.8 升至 64.7／+19.4，说明增益不只出现在一个基础模型上。但 MM-AlignBench 由 GPT-4o 对照 Claude3V-Sonnet 参考回答评审，评审器行为仍影响结论。
