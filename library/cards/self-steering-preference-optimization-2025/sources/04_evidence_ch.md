在 Qwen2-7B 监督微调版上，SSO-DPO 报告 AlpacaEval 长度控制胜率为 43.0、MT-Bench 为 8.66，而原则式 DPO 分别为 37.7 和 8.59。在 Llama3-8B 监督微调版上，它报告 35.0 和 7.96，而原则式 DPO 为 29.5 和 7.92。它也改善了一些客观评测，尽管论文没有宣称 MMLU 有稳定提升。

对于奖励建模，使用 6 万条 SSO 回答对训练的 Llama3-8B-Instruct 在 RewardBench 上平均为 80.0，高于 UltraFeedback 的 79.5 和原则式回答对的 78.9。将其合成回答对与 Skywork-Reward-Preference-80K-v0.2 混合后达到 86.3，而单独 Skywork 为 84.5。一项对 200 个问题的 GPT-4 分析报告了更高的回答对准确性和平均回答概率，但这只是对构造主张的有限证据。
