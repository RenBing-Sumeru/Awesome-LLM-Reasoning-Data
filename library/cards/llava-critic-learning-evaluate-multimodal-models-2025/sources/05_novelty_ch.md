此前开源多模态 evaluator 多针对单一 benchmark 或只输出 scalar；LLaVA-Critic 的变化是用统一 critic instruction format 跨任务学习 pointwise、pairwise 与 rationale，并将同一模型同时用于自动评价和 preference learning。
