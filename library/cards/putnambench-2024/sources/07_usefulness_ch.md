PutnamBench 可以作为 formal-math evaluation surface 的样板：每条样本的反馈不是主观分数，而是 verifier verdict。可复用 schema 应保留原题编号、语言、theorem statement、factored-solution mode、proof assistant 版本、库版本、prompt/scaffold、attempt budget、timeout、candidate proof、checker output，以及最终 accepted/rejected 状态。

它对 atlas 的价值是：展示了公开 benchmark 也可以有很强的反馈契约，同时必须承担污染风险。最适合的用途是评测、verifier 设计、benchmark 难度分析和 proof-search 诊断。若用于训练，需要额外采集轨迹和失败尝试，记录 proof 是否公开，并把 answer-given 与 answer-finding 两类任务拆开统计。
