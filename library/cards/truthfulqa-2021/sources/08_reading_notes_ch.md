# 08 阅读笔记

先读摘要和 task construction：该 benchmark 关注会出现在人类文本中的 false beliefs，而不是普通无知。再仔细读 scoring 部分，因为 generation、MC1、MC2、truthfulness 和 informativeness 回答的是不同问题。

关键概念转折是：scale 可以提升许多 NLP 指标，却可能在“网页文本中高概率延续为错误说法”的 prompt 上降低 truthfulness。这让它既是对 imitation objective 的警示，也是审计 public-text-trained model 的有用评测面。

比较现代系统时，除非报告给出具体证据，否则应假设存在污染可能。一个可用的分数报告应包括 source version、prompt、answer mode、scorer、judge model 或 human protocol，以及模型是否可能接触过公开 benchmark examples。
