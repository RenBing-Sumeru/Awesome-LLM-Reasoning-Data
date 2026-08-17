正确性只相对于它自己的 scoring contract 成立：mixed checker or judge scoring.。它不能证明模型在任务分布外的泛化能力，也可能漏掉“最终答案正确但推理无效”的情况。

主要限制是：needs_audit: pin task/skill release, deterministic verifiers, trajectory schema, agent configurations, split, and license。公开或高频引用的 benchmark 容易进入训练污染；hidden 或 vendor-hosted benchmark 可以提高新鲜度，但会降低可复现性。judge 或 rubric 分数还可能受位置、长度、领域和模型家族偏差影响，除非校准细节被披露。
