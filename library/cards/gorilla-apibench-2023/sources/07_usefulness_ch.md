可作为 tool-use 数据 schema：用户指令、API schema、检索文档、生成调用、参数、环境要求、AST match、hallucination label 和 API 版本。

对 atlas 来说，这张卡有用，因为它命名了可复用对象、scorer 或 judge，以及任何下游分数必须携带的 provenance 字段。

派生 recipe 应保留任务来源、split、scorer、judge 或 verifier 版本，以及 hidden/public 边界。
