论文的核心做法，是把“污染检测”拆成五种不同的测量 contract，而不是把它们视为可互换的同一种分数。WPQ 要求模型从四个由 LLaMA-3 生成的扰动版本与一个 `None` 选项中识别原始样例。Local Order 要求从四个候选项中选出数据集中紧接目标样例的记录。两者都输出 quiz accuracy，但高于随机水平的准确率可能来自语言流畅度或语义相邻性，而非记住了训练暴露。

Token Completion Overlap 在 general prompt 与 dataset-guided prompt 下提供部分样例，让模型补全后缀，再用 ROUGE-L 和 GPT-4 的 exact/near-match 判断与参考后缀比较。公开实现对 guided 与 general 的 score list 做 bootstrap，得到单侧经验 p-value。该 contract 混合了模型生成、学习型 judge、词面重合与统计比较，并不直接给出逐实例污染标签。

Min-K% 依赖概率访问。对每段文本，它取最低概率 20% token 的平均 negative log likelihood，并在 100 个样例上报告 mean 与 standard deviation。原方法把更高的数值解释为更强的熟悉度，但没有给出适用于任意数据集的判断阈值。Canonical Order 则把 10 个 canonical shard 的 likelihood 与每个 shard 的 25 个 shuffle 版本比较，再把 10 个配对差映射为单侧 t-based p-value。

受控 oracle 是检验这些接口的关键。LLaMA-2-70B-Chat 在微调前后分别测量，已知新增比例为：MMLU test 与 BBH test 各 100%；ARC-Challenge train 与 DROP train 各 50%，对应 test 各 0%；HumanEval test 为 25%；GSM8K train 为 25%，test 为 0%。设计所问的是 detector 输出能否随已知新增暴露单调变化。

五种方法之间没有统一的 verifier、reward 或 judge。程序化 quiz 正误、token likelihood、GPT-4 match judge、词面 overlap 和顺序统计量观察的是不同 proxy。论文最重要的结论因此是 contract 失效：没有一种 proxy 能稳定追踪 oracle 比例，方法间的弱一致性也不允许把它们当作相互印证的污染结论。
