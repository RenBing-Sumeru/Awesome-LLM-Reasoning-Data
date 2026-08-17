ReFInE 为答案句附加 `(DocID, SentID, Relation)` 三元组，关系为 Quotation、Compression 或 Inference。GenProve 先用 SFT 学习带标签输出，再用 GRPO 联合阈值门控的内容相似度奖励与精确溯源三元组 F1。

