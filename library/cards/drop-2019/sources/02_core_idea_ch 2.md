# 核心思想：这篇论文的主要贡献是什么？

- 一句话贡献：DROP tests paragraph-level reading comprehension that requires arithmetic, counting, sorting, and other discrete operations.
- 核心机制：构造受控任务面，并配套 scorer 或 evaluation protocol。
- 数据对象 / 评测面：passage, question, answer spans or numeric answer, and annotation metadata。
- 反馈契约：exact match/F1 over spans and normalized numeric answers。
- 分类理由：它的主要可复用对象是带 scoring contract 的 benchmark task suite。
- 应该对比：按领域与 MMLU、BIG-bench/BBH、LiveBench、GPQA、MMMU、SWE-bench 或其他 domain benchmark Card 对照。
