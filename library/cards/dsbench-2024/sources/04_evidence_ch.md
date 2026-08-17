arXiv 摘要报告 466 个 data-analysis 任务、74 个 data-modeling 任务、最佳 agent 仅解决 34.12% 的 data-analysis 任务，并达到 34.74% Relative Performance Gap。官方项目页重复了同一规模，并强调现有 LLM、LVLM 和 agent 在该 benchmark 上仍困难。

决定性证据是 task-level evaluation output：分析答案被判对/错，或建模提交按 competition metric 计分。这比自报成功更强，但受官方 processed data、答案判定用的 judge/model 版本、metric 实现，以及源 competition 数据是否变动的限制。
