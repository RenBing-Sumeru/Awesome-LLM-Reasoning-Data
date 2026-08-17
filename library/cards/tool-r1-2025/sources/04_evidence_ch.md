在 GAIA validation 的 Answer Accuracy 上，表 1 报告 Qwen2.5-7B-Instruct 未微调时为 `10.30`，经过 Tool-R1 训练后为 `19.39`；Tool-R1 Qwen2.5-14B-Instruct 的结果为 `26.67`。MAT Agent 使用 20k 条问答加轨迹记录，在两个模型规模列上的分数为 `15.15/16.97`；Tool-R1 使用 1.3k 对问答，分数为 `19.39/26.67`。这些都是作者报告结果，尚未独立复现，也不是只改变数据的受控比较。

表 2 为 7B 设置提供了更有诊断价值的证据。Vanilla GRPO 得分 `9.09`，低于未调优 base 的 `10.30`；中等难度过滤达到 `16.36`；加入辅助奖励后达到 `18.79`，并在 GAIA Level 3 报告 `3.84`。不带 resampling 的动态队列得分 `18.18`，同时报告训练时间从 `41.5` 小时降至 `22.3` 小时；带 resampling 的队列在 `22.3` 小时达到 `19.39`。论文没有给出 seed、方差或可独立重跑的配置。

评测面是 GAIA validation；论文称其包含 446 个任务、关联 109 个文件，主要指标为 Answer Accuracy。这些结果支持较窄的结论：在作者设置下，完整 Tool-R1 配方改善了所研究的 Qwen2.5 agent 配置，而 vanilla GRPO 在同一设置中可能失败。

这些分数不能认证 1,300 道问题、缓存轨迹、judge 标签、执行奖励或工具 observation 是高质量数据。MAT Agent 比较受到 base model 与 scaffold 差异的混杂；论文没有报告 split 或 contamination audit；实时 web 或模型驱动工具还可能改变 observation 分布。因此 benchmark 表现可以支持研究该配方，但不能证明训练数据可不受限制地复用。
