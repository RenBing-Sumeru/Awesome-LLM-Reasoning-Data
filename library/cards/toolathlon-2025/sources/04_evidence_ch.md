在论文 protocol 下，17 个模型各自对 108 个任务运行 3 次，每次最多 100 turns；根据已披露设计计算，共有 5,508 个 task-run attempt。报告指标包括带标准差的 mean Pass@1、Pass@3、Pass^3 与 average turns。表 3 报告 Claude-4.5-Sonnet 的 mean Pass@1 为 38.6%，DeepSeek-V3.2-Exp 为 20.1%；这些是论文快照结果，不是当前 Toolathlon-Verified leaderboard 数值（论文第 4.1 节与表 3，第 7–8 页）。

这些分数表明，在该 scaffold 下，108 个任务对被测系统具有难度；它们不能证明每个任务、evaluator 或记录轨迹都具有高质量。任务失败可能来自模型规划、工具调用、context handling、credential、初始化、可变外部服务或 evaluator 本身。反过来，如果 terminal checker 的谓词遗漏重要副作用，确定性 evaluator 也可能放过非预期路径。论文没有报告逐任务 false-positive/false-negative 研究或对抗性 evaluator 审计。

论文 failure analysis 指出 tool-call error、long-context degradation、premature stopping 与 overlong tool output。不同模型约有 15%–35% 的轨迹遇到超长输出；OpenAI Agents SDK scaffold 会截断超过 100K 字符的输出，并提供 10K 字符分页。这具体展示了 benchmark infrastructure 与被测智能体行为之间的耦合，但所观察到的关联没有隔离出因果效应（论文第 5.1–5.2 节，第 8–9 页；附录 B，第 14–15 页）。

后续发布提供了不同的 evidence surface。Toolathlon-Verified 发布于 2026-06-30，并说明 prompt、ground truth、evaluator 与 infrastructure 已被实质修改。其 gated Hugging Face card 列出 10 个模型 archive，每个含 3 次完整 108-task 运行；30 份 run summary 均覆盖 108 个任务，名义上共 3,240 个 episode。发布还警告部分 `summary.config_used` 模型标签过时，且某些模型少于 324 条有效 AvgTurns 记录。这些警告有助于审计，但原始 archive 无法访问，因此不能独立确认文件级完整性、redaction 变化，以及 corrupt 或 dropped episode 的处理。

不能把论文分数与当前 release 分数合并为一条进展曲线。benchmark artifact、evaluator 行为、infrastructure、provider 默认值与模型生成均已变化，而且没有不可变 manifest 把论文快照映射到仓库 commit `3b647e6` 和 Hugging Face revision `01deb37`。所有数值结果均为作者报告，未在已检查证据中得到独立复现。它们证明的是指定快照下的相对表现，不能证明无污染、轨迹具有训练价值、许可证允许复用，或 benchmark 始终有效。
