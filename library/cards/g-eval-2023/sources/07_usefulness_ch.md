可作为 LLM-judge 记录 schema：prompt、rubric、候选输出、judge 模型、推理字段、标量分数、人类目标分和相关性指标。

对 atlas 来说，这张卡有用，因为它命名了可复用对象、scorer 或 judge，以及任何下游分数必须携带的 provenance 字段。

派生 recipe 应保留任务来源、split、scorer、judge 或 verifier 版本，以及 hidden/public 边界。
