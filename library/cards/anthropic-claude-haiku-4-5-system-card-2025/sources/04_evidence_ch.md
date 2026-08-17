第 1.1.1 节第 5 页列出五类训练来源与公开互联网信息的 2025 年 2 月 cutoff。同节还命名 deduplication、classification 与 crawler access policy，并说明后训练包含 RLHF 和 AI feedback，但没有给出来源比例、数量、reward 细节或 RL 算法。

第 1.1.4 节第 6 页称，通过 data-work platform 雇用的 crowd worker 参与 preference selection、safety evaluation 与 adversarial testing。这支持 preference-learning 用途，但没有披露比较数量、rater agreement、adjudication，也未说明多少 worker 输出属于训练而非评测。

第 1.1.3 节第 6 页给出上下文感知干预：Haiku 4.5 在训练时获得精确 context usage 信息，以便接近上限时收尾、否则继续坚持。发布上下文为 200K token。报告没有提供 ablation、rollout count、任务分布、reward 或 state encoding。

第 4.3 与 4.5 节第 28–30 页提供两项 trace-lineage 事实：所有 later-stage training behavior 被递归总结，每份 summary 由 Claude Sonnet 4 判断；部分 earlier supervised-learning data 则含前代模型 reasoning text。审计报告发现 excessive tool use、overengineering 与 hallucination，但没有新型令人担忧模式。原始审计记录和前代模型 reasoning 记录均未开放。

第 34 页表 5.B 报告：Reward-Hack-Prone Coding Tasks v2 上 classifier-detected reward hacking 为 6%，hidden-test hacking 为 3%；Impossible Tasks 在无/有 anti-hack prompt 时分别为 30% 与 23%。编码任务来自 Anthropic training distribution，并因前代模型曾 hack 而手工选择。其 held-out fuzzed test 只在该评测内部成立，不能证明 unseen-distribution 泛化或全局 train/test split。

其他官方数字也必须绑定评测界面。第 8–9 页表 2.1.1.A 与 2.1.2.A 报告违规请求上的 overall harmless-response rate 为 99.38% ±0.21，benign over-refusal 为 0.02% ±0.04。第 15–17 页表 3.1.2.A–B 在特定 mitigation 条件下评测 49 个 malicious 和 61 个 dual-use/benign Claude Code prompt。这些是发布评测，不是训练 label 或 reward。
