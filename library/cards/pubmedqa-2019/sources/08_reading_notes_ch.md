阅读时先看数据构造，再看模型结果表。核心区分是 PQA-L、PQA-U、PQA-A：把三者混在一起会掩盖专家标签、无标签和启发式标签之间的差异。

必须分开三类 claim：标签是否匹配、生物医学解释是否可靠、是否具有临床用途。PubMedQA 直接测的只有第一类；后两类需要额外证据。

做下游比较时，要报告 subset、split、prompt/input format、是否排除 conclusion，以及 scorer。更高的 aggregate score 不是单条样本生物医学正确性的证明。
