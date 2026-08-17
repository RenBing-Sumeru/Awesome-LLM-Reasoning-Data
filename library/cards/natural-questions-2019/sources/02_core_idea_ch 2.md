# 核心思想：这篇论文的主要贡献是什么？

- 一句话贡献：Natural Questions anchors open-domain QA in real Google queries with long and short answer annotations over Wikipedia pages.
- 核心机制：构造受控任务面，并配套 scorer 或 evaluation protocol。
- 数据对象 / 评测面：real user query, Wikipedia page, long-answer span, short-answer span or yes/no/no-answer label。
- 反馈契约：long-answer and short-answer F1 under official scorer。
- 分类理由：它的主要可复用对象是带 scoring contract 的 benchmark task suite。
- 应该对比：按领域与 MMLU、BIG-bench/BBH、LiveBench、GPQA、MMMU、SWE-bench 或其他 domain benchmark Card 对照。
