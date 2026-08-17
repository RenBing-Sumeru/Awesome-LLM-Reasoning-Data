FActScore 适合作为长文本事实性审计 schema。可复用字段包括 topic、generation text、必要时的 sentence boundaries、atomic facts、知识源标识、retrieved evidence、support label、abstain flag、长度惩罚设置、estimator 名称、package 版本和最终聚合分数。

当单个 answer-level factuality label 太粗时，它尤其有用：人物传记、实体描述、长摘要、retrieval-augmented response 和 grounded generation 都可能同时包含 supported 与 unsupported statements。这个 metric 可以帮助区分模型是“啰嗦但不准”“简短但精确”，还是覆盖面高但 unsupported claims 多。

做下游数据工作时，要把 human FActScore、automatic FActScore、retrieved evidence 和 model outputs 分开。人工标签可以作为审计证据；自动标签可以支持规模化评测；但二者都不应在没有单独分析 judge error 和 source coverage 的情况下直接当作 reward model 或训练目标。
