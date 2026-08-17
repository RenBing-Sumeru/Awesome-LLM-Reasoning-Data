可把 GLUE 作为 benchmark suite schema：子任务 id、输入格式、标签空间、split、metric、scorer、diagnostic tag 和聚合规则。

对 atlas 来说，这张卡有用，因为它命名了可复用对象、scorer 或 judge，以及任何下游分数必须携带的 provenance 字段。

派生 recipe 应保留任务来源、split、scorer、judge 或 verifier 版本，以及 hidden/public 边界。
