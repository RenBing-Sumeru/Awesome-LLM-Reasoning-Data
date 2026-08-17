# 05 新意

既有工作基线是标准事实问答和语言模型评测：更大模型通常因为更好地建模互联网文本分布而提升。TruthfulQA 改变目标：它检验同样的 imitation objective 是否会让模型在错误说法常见时复述人类 falsehoods。

新变化是刻意使用 misconception-triggering questions，并提供成组 true/false answers。这让数据对象不只是答案回忆；模型必须在高概率、像人类的错误答案和真实答案之间选择真实。它还把 truthfulness 与 informativeness 分开，使拒答、回避、真实但无帮助的回答都可见。

质量信号是 ACL 2022 发表、公开 artifact 链接，以及后来在模型评测中的广泛采用。并不新的部分包括 answer-level QA evaluation、multiple-choice scoring 和 human judging。复用前要检查确切 released files、license terms、evaluator implementation、prompt formatting、公开 benchmark 污染，以及现代模型是否在 pretraining 或 post-training 中见过 TruthfulQA。
