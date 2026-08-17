在最终 COLM/arXiv v3 结果中，人类总体得分为 84.7%，OpenAI Chat GPT Agent 产品为 65.8%，OpenAI Deep Research 为 36.0%，Operator 与 Google Deep Research 均为 23.4%。在 55 道 multimodal 问题上，人类为 85.7%，OpenAI Chat GPT Agent 产品为 54.5%，Operator 为 12.7%，Anthropic Computer Use 与 Proxy 均为 9.1%。较早的 arXiv abstract metadata 把 Operator 写成 24.3%；本 Card 采用最终 v3 表格和项目 leaderboard 的 23.4%。

论文报告可选 GPT autorater 的总体 four-way accuracy 为 98.2%，binary accuracy 为 98.7%，逐 agent 的 four-way accuracy 范围为 96.4%–99.1%。但主实验说明发布结果由人工评估，因此 autorater 不是已报告标签的唯一来源。它在该样本上的高一致性不能证明模型/API 变化后仍稳定，也不能证明结果独立于 17 个 demonstration，更不能替代完整复现 benchmark 所需但未公开的证据。

轨迹分析指出了若干具体失败：agent 会回避或无法完成视频、游戏、3D 场景与精细控制交互；难以筛选交互式数据库；重复访问无关页面并重试失败动作；如果一条轨迹不能快速成功，之后失败概率更高。不同商业系统暴露的 trajectory detail 也不兼容，从细粒度动作到简短摘要甚至只有顶级 URL，因此 step count 和因果 failure attribution 不能直接比较。

答案正确性还会遮蔽证据质量。作者发现一些正确答案基于 secondary source 或没有 grounding。对 OpenAI Deep Research，Table 9 在 40 个正确答案中计出 15 个属于这两类，即 37.5%；论文另一处 prose 写成 38.5%，这一内部不一致不应被静默消解。无论采用哪个数字，final-answer entailment 都不能证明 agent 使用了权威来源或预期的 multimodal interaction。

artifact evidence 比 performance evidence 更窄。公开 question ZIP 可核验地包含 111 条 question-only record，四文件 autorater ZIP 也已检查并计算 hash；但两者都不含完整 task manifest 或任何完整 agent-run corpus。因此，benchmark performance 只支持在既定 protocol 下进行比较评测，不能证明公开数据完整、trajectory 是高质量 training example，或 live environment 可复现。
