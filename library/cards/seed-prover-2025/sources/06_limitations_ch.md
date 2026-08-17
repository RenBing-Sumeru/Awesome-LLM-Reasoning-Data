最大的审计缺口是发布范围。仓库只有报告和成功证明 artifact，没有 RL 语料、模型 checkpoint、失败/修正轨迹、编译记录、自摘要、猜想/lemma 池、judge 分数、LooKeng 或 Seed-Geometry 数据与引擎。仓库的 Apache-2.0 也不能覆盖隐藏的内部数据、第三方形式化、生成变体或 2.3 亿几何语料的权利。

训练—评测污染尚未解决。训练使用公开及内部形式化；往届 IMO 多由 Compfiles/MiniF2F 改编，MiniF2F 又被单独评测；proposer 变体若无父子划分会形成近重复。MiniCTX-v2 的 2024 年 11 月后创作日期只能部分缓解风险，因为模型截止时间及后续 RL 成员关系未知。

搜索算力未统一核算：light 约为 Pass@64–256、耗时 1–2 小时，但 medium 外层限制及 heavy 的总调用、token、硬件、并发、超时和停止规则缺失。Heavy 的 LLM relevance judge 是不透明的学习式选择器，即使最终 Lean 证明可形式验证。IMO 2025 还依赖人工形式化和 Seed1.6-Thinking 先验，比赛期间完成的是 4/6，而不是 5/6。
