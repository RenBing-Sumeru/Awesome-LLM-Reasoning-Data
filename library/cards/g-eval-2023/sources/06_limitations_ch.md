正确性只相对于选定人类评分数据和 GPT-4 prompt 成立。judge 可能奖励流畅风格或 benchmark 熟悉度，也会随模型版本漂移。

结论不能超出已披露的来源、split、scorer、judge、runtime 或 artifact policy。公开 release 也可能成为后续模型训练污染。

如果把 benchmark 信号复用到训练、过滤或 reward 设计中，反馈契约需要独立于 headline score 再审一遍。
