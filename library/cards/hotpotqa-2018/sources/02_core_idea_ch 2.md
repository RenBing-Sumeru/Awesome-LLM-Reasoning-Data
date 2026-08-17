# 核心思想：这篇论文的主要贡献是什么？

- 一句话贡献：HotpotQA makes multi-hop QA auditable by pairing answers with supporting Wikipedia facts.
- 核心机制：构造受控任务面，并配套 scorer 或 evaluation protocol。
- 数据对象 / 评测面：question, answer, supporting paragraphs/sentences, distractor or full-wiki setting。
- 反馈契约：answer exact match/F1 and supporting-fact F1。
- 分类理由：它的主要可复用对象是带 scoring contract 的 benchmark task suite。
- 应该对比：按领域与 MMLU、BIG-bench/BBH、LiveBench、GPQA、MMMU、SWE-bench 或其他 domain benchmark Card 对照。
