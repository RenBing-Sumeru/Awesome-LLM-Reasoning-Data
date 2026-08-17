FActScore 衡量的是相对于指定知识源的 factual precision。它不衡量 topic completeness、usefulness、写作质量、公平性、安全性，也不保证回答包含最重要的信息。很短的回答可能 precision 很高，但遗漏核心事实。

support label 的可靠性取决于分解和证据检索。atomic fact 可能真实但不在知识源中，可能检索失败，可能在分解后变得歧义，也可能被 support model 误判。反过来，知识源支持也不一定覆盖时效更新、争议事实或特定领域的 provenance 标准。

官方 package 有实际依赖：Python 环境、spaCy model、retrieval database、model/API cache、某个 estimator 所需的 LLAMA 权重、另一个 estimator 所需的闭源模型 API key，以及默认 Wikipedia snapshot。比较分数前必须固定这些组件、`gamma` 设置、abstain detection 和是否复用已发布 atomic facts。
