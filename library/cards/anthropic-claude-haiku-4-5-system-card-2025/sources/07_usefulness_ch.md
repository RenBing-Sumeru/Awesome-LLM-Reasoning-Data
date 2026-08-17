这份系统卡可作为前沿模型最小披露台账的参考。它说明即使记录保持私有，也可以明确陈述来源类别、收集 cutoff、过滤、feedback type、偏好劳动、reasoning-trace 来源、agent-state 干预、行为审计与评测边界。

对偏好数据研究者，它指出了复用所需的下一层元数据：comparison schema、candidate generation、rater assignment、worker cohort、agreement、adjudication、AI-feedback model、reward version、aggregation 和 source-to-checkpoint lineage。

对 agentic RL，上下文使用干预提示我们把预算感知作为显式 process field，而非偶然的 prompt 特征。开放复现应记录 context-used/context-remaining 信号、action、termination choice、reward 与 episode boundary。

对审计者，reward-hacking suite 来自 training distribution 是值得效仿的披露。每个 benchmark 都应说明 membership、selection rationale、held-out scope、scaffold、mitigation，以及分数来自发布 checkpoint 还是其他 snapshot。
