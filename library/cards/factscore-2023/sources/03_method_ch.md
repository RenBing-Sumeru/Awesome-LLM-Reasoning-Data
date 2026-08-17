输入包括 topic entity、模型生成的长文本回答、知识源和 evaluator 设置。官方 README 说明，输入 JSONL 每行包含 `topic` 和 `output`；官方提供 183 个 labeled people 与 500 个 unlabeled people 的 prompt entities，默认知识源是 2023-04-01 的英文 Wikipedia。

流程如下：

1. 对每个 topic 生成或收集长文本回答，例如人物传记 prompt；
2. 把回答拆成可以独立检查的 atomic facts；
3. 针对每条 atomic fact 从指定知识源检索证据段落；
4. 判断每条 atomic fact 是否被检索到的证据或知识源支持；
5. 可选地检测 abstention，并在事实数量过少时使用 `gamma` 长度惩罚；
6. 聚合 supported atomic facts 得到 `score`，保留无长度惩罚的 `init_score`，同时报告 response ratio 和平均 fact 数量。

这里的 verifier 是判断契约，不是编译器式谓词。人工标签是最强的行级证据；自动标签取决于分解模型、检索索引、support judge、prompt、cache 和 package 版本。复现时必须固定知识源 snapshot、estimator 名称、package 版本、atomic-fact 生成模式、abstain detector、`gamma`，以及是否通过 `--use_atomic_facts` 复用已发布的 atomic facts。
