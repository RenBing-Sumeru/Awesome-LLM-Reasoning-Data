InfiniteBench 可作为长上下文评测 schema 参考。应保留 task name、context source、指定 tokenizer 下的 context length、input、answer、options、prompt template、输出预算、model version、generation、parser、metric 和 repo/data snapshot。

它适合压力测试模型是否能在超长上下文中保留信号，也适合作为 benchmark 声明的审计清单：只报长度不够，必须同时记录 scorer 与截断细节。

对 atlas 来说，它提供 long-context grounding 与 retrieval-plus-reasoning 的评测面，同时提醒 metric type 必须在 row/task 层级保留。
