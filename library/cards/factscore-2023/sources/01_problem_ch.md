FActScore 解决的问题是：当长文本回答同时包含正确和错误事实时，如何评估 factual precision，而不是给整段回答一个粗粒度 factuality 标签。主论文是 Min 等人的 “FActScore: Fine-grained Atomic Evaluation of Factual Precision in Long Form Text Generation”，发表于 EMNLP 2023 main proceedings，页码 12076-12100，DOI 为 10.18653/v1/2023.emnlp-main.741。官方 GitHub 和 PyPI package 发布了 evaluator 与数据下载入口。

它的评测对象不是整段答案标签，而是：topic/entity、模型生成的长回答、拆分出的 atomic facts、从指定知识源检索到的证据、每个 atomic fact 的 supported/unsupported 标签，以及聚合得到的 factual-precision 百分比分数。公开 package 默认使用 2023-04-01 的英文 Wikipedia snapshot，同时支持自定义知识源。

判断边界是长文本生成的细粒度事实性评测。FActScore 不是覆盖度指标，不是医学或法律真值验证器，不是 pairwise preference 数据，也不是训练配方。它的关键信号是把 atomic-claim 层面的 factual precision 与覆盖度、helpfulness、风格和回答长度分开。
