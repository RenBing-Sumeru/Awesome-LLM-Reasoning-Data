Odysseys 把长程任务完成度分解为任务特定、可观察的检查点。评测时，Gemini 3.1 Flash Lite Preview 每次接收一条 rubric，以及完整动作历史和按时间排序的截图，并为该检查点输出文字理由与二元成功/失败。各 rubric 结果的无权平均提供部分得分；仅当所有 rubric 通过时 `perfect` 才为 1；轨迹效率则等于平均 rubric 得分除以环境步数。

任务来源试图保留真实意图。作者报告从美国和英国 248 名知情同意的 Prolific 参与者处收集 2,380 条已标注 Chrome journey，筛选保留 696 条 journey 标签，并据此组合 90 个任务；另有 30 个任务来自作者真实个人查询，GPT-5.4 再从 journey 启发的种子生成 80 个 hard 任务并经人工审核。

该反馈契约需要判断，而非可执行验证。公开 OSWorld 配置刻意将原生 evaluator 设为 `infeasible`，实际分数由外部多模态 Gemini judge 提供。逐 rubric 判断能暴露部分进展，但仍受截图覆盖、judge 漂移和不可见状态影响。
