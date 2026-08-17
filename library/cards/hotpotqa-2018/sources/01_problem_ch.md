HotpotQA 是 EMNLP 2018 的 Wikipedia 多跳问答 benchmark。它要补的缺口是：许多问答数据可以从单段文本回答，或者只给答案不给 supporting evidence，难以审计模型是否真的做了多跳证据组合。

一个样本包含众包问题、答案和句子级 supporting facts，并在 distractor 与 full-wiki 两类设置下评测。这里收它作为检索加阅读、证据定位和多跳推理的评测面，而不是开放式解释 verifier 或训练流程。
