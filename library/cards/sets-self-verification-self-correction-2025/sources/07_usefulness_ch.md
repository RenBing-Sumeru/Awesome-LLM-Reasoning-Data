SETS 与 Rollout, Search, and Test-Time Trace Data 直接相关，因为其有用对象是一组分支与 revision，而非单个最终答案。它清晰对照并行 sample、顺序 correction、自判断 stopping 和最终 aggregation。这类记录可用于研究计算预算分配、self-feedback 可靠性、失败保留，以及如何谨慎筛选评测时 episode 形成训练数据。

可复用记录应保存 benchmark 条目与 split、模型/API 版本、Sampling prompt 与输出、branch id、round number、Self-Verify prompt 与完整 response、解析后的 judgment、停止原因、包含完整历史的 Self-Correct prompt、修订 solution、temperature、token 数、m 与 n、exact-match normalization、投票分组、tie-break seed、最终答案和外部 ground-truth check。Self-judgment 与外部 evaluator 必须是不同字段。由于未确认轨迹发布，应把该论文用作 schema 与配方，而非开放数据集。
