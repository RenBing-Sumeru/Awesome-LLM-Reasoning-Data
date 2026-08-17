核心贡献是一个生物医学 yes/no/maybe QA benchmark：标签来自 PubMed 论文 conclusion，核心评测集由医学背景标注者人工标注。它不是让模型在开放语料里找事实，而是在给定论文摘要上下文后，判断 conclusion 对研究问题的立场。

机制上分成三类资源。PQA-L 提供 1,000 条专家标注样本，用作可信评测；PQA-U 从带问号形式的 PubMed 标题中过滤出较大的未标注池；PQA-A 把陈述式标题转换成问题，并用否定规则等启发式赋 yes/no 标签，作为更大但噪声更高的训练资源。

反馈契约是 answer-level 分类：系统对每个 PMID 预测 yes、no 或 maybe，官方 evaluator 计算 accuracy 和 macro-F1。相近工作包括 BioASQ 一类生物医学 QA 与阅读理解数据集，但 PubMedQA 的边界更窄：它评测的是给定摘要上的 conclusion-level 生物医学推断，而不是检索覆盖面或自由文本生成质量。
