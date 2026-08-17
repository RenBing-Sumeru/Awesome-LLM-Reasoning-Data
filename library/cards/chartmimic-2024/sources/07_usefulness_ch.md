可把 ChartMimic 当作 executable multimodal evaluation 的 recipe。应保留 sample id、source chart image、instruction、chart type/subcategory、reference code provenance、split、model prompt、generated code、execution log、rendered image、metric components、timeout/error status 和 evaluation environment。

对 atlas 来说，它是 benchmark/evaluation-surface 卡，其中数据对象不只是答案，而是 executable artifact。它能指导 code-producing multimodal agents 的审计 schema，要求 code、render、metric 和 provenance 字段始终绑定。
