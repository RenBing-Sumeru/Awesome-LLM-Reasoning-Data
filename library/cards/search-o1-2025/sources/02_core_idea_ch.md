QwQ-32B-Preview 可在 `begin-search-query` 与 `end-search-query` 之间输出查询。Search-o1 暂停生成、执行检索，并把推理前缀、查询和抓取页面交给 Reason-in-Documents。该独立生成过程先分析页面，再输出紧凑的精炼知识，以结果定界符插回上下文，随后主推理继续；此循环可重复。

关键数据边界是原始检索与模型重写后的精炼知识。Reason-in-Documents 是转换器而非事实性 verifier：最终 benchmark 答案会被评分，但查询、来源选择、网页主张和精炼块没有独立质量标签。


