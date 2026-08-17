已有基线是 nearby benchmark and 评测-surface datasets that share the same feedback contract。A Careful Examination of Large Language Model Performance on Grade School Arithmetic 的变化点是它给出的特定任务对象和反馈契约：word problem, final numeric answer, optional rationale, and score.，并由 exact or normalized numeric answer match. 验收。方向信号是这个对象-反馈组合，而不是泛泛说模型能力提升或下降。

质量信号是官方产物（paper: https://arxiv.org/abs/2405.00332）、来源 元数据，以及 split、license、lineage、failure modes 等审计字段。并不新的部分是 benchmark 或 裁判 本身。复用前要检查 artifact version、license、split、evaluator/裁判 实现、data lineage、prompt/scaffold 设置和 contamination risk。
