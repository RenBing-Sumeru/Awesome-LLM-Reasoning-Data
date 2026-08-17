把本 Card 用作 disclosure-delta checklist：要求后续报告说明 source manifest、训练 objective、reward、rollout、filtering、split membership 与 checkpoint 的变化，而不是重复家族语言。

评测时记录 prompt provenance、overlap status、sampling stratum、model/grader/monitor version、environment/tool、attempt budget、terminal predicate 与 raw/aggregate label。严格区分 pass@1、pass@12、any-of-16 success、hidden-test completion 与 hierarchical rubric。

CoT 审计应发布 retrieval/revision date、monitor prompt/checkpoint、cross-fit split、length stratum、label taxonomy、人类验证与 false negative。生产评测不能把选择的困难案例解释为 prevalence。

复用等级：仅适合阅读、release audit 与评测契约比较。因缺失数据、reward、权重、全局 split、license 与 lineage，训练复用被阻断。
