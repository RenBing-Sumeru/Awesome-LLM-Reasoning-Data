若团队要评测仓库或 workspace agent，可将用户任务写成带依赖的明确 requirements，保留文件树和执行产物，再以 locate/read/ask 输出逐条、附证据的判决。应在留出的任务集上与盲评专家共识比较；最终产物是可审计的失败报告，而不只是通过率。

DevAI 可用作 agent 评测 benchmark，也可作为任务专属 rubric 的模板。若未验证标签可靠性、许可、目标环境访问，或 evaluator 不能安全读取不受信任产物，不应把这些标签直接作为训练奖励。
