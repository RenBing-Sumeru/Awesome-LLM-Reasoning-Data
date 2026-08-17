最终论文在 13 个任务上评测 12 个模型，每个 model-task pair 运行 4 次，并用全部 624 条 trajectory 分析失败行为。在 aggregate AUP 比较中，Gemini-2.5-Pro 排名最高。除 o1-preview、Gemini-1.5-Pro 和 Gemini-2.0-Flash 外，每个模型都至少在 1 个任务上未能产生 valid submission。这些是作者报告的 benchmark 结果，尚未独立复现。

失败证据比 leaderboard score 更丰富。论文把 failure 定义为没有任何有效中间 test-set score，把 incompletion 定义为至少获得 1 个有效 score 后终止，并记录 evaluation、runtime、cost、format、context、permission 等终止错误。当前公开树也保留 invalid run；例如 GPT-4o Breakout run 0 的 `agent` 结果数组为空，但 trajectory 文件仍在。这支持“保留失败样本”的结论，但不代表所有可能错误类型都被完整发布。

公开 release 已超出论文实验范围。在审计 commit `9d40c1b5035202018cd7091fb4e83a9c68b377c0`，仓库包含 676 个 `.traj` 文件和 676 个配对 `results.json` 文件，对应 13 个 model-directory name × 13 个任务 × 4 次运行。额外的 `gemini-20-pro` 网格不在最终论文的 12 模型分析中；该网格的任何结果都不能作为论文表格或结论的证据。

公开文件可直接检查 episode schema，包括 action、observation、response、state、thought、execution time、message history、cost/token 统计、exit status、submission 与中间/最终 score。Task config 与 evaluator code 也已公开。这些材料支持行为与反馈利用分析，但缺少与论文绑定的 624 文件 manifest，导致无法把每条记录精确对应到论文表格。

现有证据不能支持训练复用。论文没有报告 policy optimizer、非零 Gym reward adapter、trained checkpoint 或 agent-training result。由于反复 `validate` 会暴露 test-set score，benchmark 表现也不能证明 held-out validity，更不能证明确定性 replay、统一许可、decontamination、隐私审计或科学新意。
