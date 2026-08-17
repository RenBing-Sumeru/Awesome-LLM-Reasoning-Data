论文在 WorkArena 的七类企业任务上报告 success rate：dashboard、form、knowledge、filter、sort、menu 和 service；“Overall” 按各类别任务数加权。以下均为作者报告结果。由于数据和 checkpoint 未公开，本 Card 没有独立复现训练或评测。

| Backbone / 训练方式 | Overall success rate | Table 1 报告的变化 |
| --- | ---: | ---: |
| Qwen2.5-3B-Instruct | 2.62 | 参考值 |
| Qwen2.5-3B SFT | 26.59 | 相对 base +23.97 |
| WorkForceAgent-R1 3B | 36.85 | 相对 SFT +10.26 |
| Qwen2.5-7B-Instruct | 9.42 | 参考值 |
| Qwen2.5-7B SFT | 27.32 | 相对 base +17.90 |
| WorkForceAgent-R1 7B | 39.56 | 相对 SFT +12.24 |
| Qwen2.5-14B-Instruct | 23.79 | 参考值 |
| Qwen2.5-14B SFT | 30.20 | 相对 base +6.41 |
| WorkForceAgent-R1 14B | 46.79 | 相对 SFT +16.59 |

作为参照，Table 1 中 GPT-4o 为 42.65，GPT-4.1 为 48.19，o4-mini 为 55.78。因此 14B 结果比表中的 GPT-4o 高 4.14 个点，但没有超过最强 proprietary baseline。论文正文所称“4.99%”与表中 `46.79−42.65` 的算术结果不一致，引用时应直接使用表格数值，不宜重复该派生说法。

Backbone 迁移同样呈正向变化，但绝对水平较低。Table 2 中 Llama-3.1-8B 的 Instruct、SFT、SFT-L 和 WorkForceAgent-R1 分别为 8.57、20.48、24.56、32.41；相对 Instruct 提升 23.84 个点。

训练条件不可忽略：warm-up 在随机抽取的 1,000 条样本上训练 1 个 epoch；RL 使用 batch 128、temperature 0.6、KL `1e-3` 和 8 张 H200。Figure 7 显示 7B 模型的 warm-up GRPO 优于直接从 Instruct 初始化的 PPO/GRPO；Figure 6 报告 GRPO 为 39.56、PPO 为 36.08。奖励消融中，sparse reward 更稳定；fully dense similarity reward 退化为频繁输出 `click('a324')`，piecewise dense reward 则诱导结束标签后的过量动作（Figures 6–8，§5.4）。

这些证据支持其作为 WorkArena 优化配方的价值，却不能独立证明 data quality：失败轨迹被过滤、记录总数缺失、训练与评测共享任务家族，而且公开实现缺少私有输入，无法重现论文运行。
