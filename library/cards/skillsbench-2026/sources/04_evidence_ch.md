关键证据来自官方来源线索和 artifact：论文：https://arxiv.org/abs/2602.12670。真正能支撑结论的行级证据不是 benchmark 名称，而是一条具体 task record、模型回答，以及可追溯到固定版本的 scorer 或 rubric outcome。

证据边界很窄：分数依赖 source version、split、evaluator implementation、prompt/scaffold、model settings、hidden-set access 和 contamination controls。当前元数据状态是 verified；仍需审计的事项是：needs_audit: pin task/skill release, deterministic verifiers, trajectory schema, agent configurations, split, and license。
