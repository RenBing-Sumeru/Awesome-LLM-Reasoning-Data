# 02 核心思想

一句话贡献：TruthfulQA 通过专门提问那些许多人会因常见误解而答错的问题，把 truthfulness 做成可测量的 benchmark。它的核心机制不是随机抽取 trivia，而是构造“模仿网页文本会带来风险”的问题；模型必须避开常见错误答案模式，输出真实回答。

数据对象是 answer-level benchmark 记录，包含 question text、category、true answer set、false answer set，以及 generation 和 multiple-choice 评分所需的元数据。反馈契约有多层：human evaluation 判断 truthfulness 和 informativeness；原始评测还使用 GPT-judge、BLEURT 类 learned generation metric；multiple-choice 侧使用 MC1/MC2 等在真/假答案选项上的分数。

方向标签是 misconception-sensitive truthfulness evaluation。最接近的对比对象包括 Natural Questions、SQuAD 等事实问答 benchmark，SimpleQA、FACTS Grounding 等 factuality/safety 评测面，以及只把 truthfulness 当子任务的一般评测套件。它最适合回答“规模或文本模仿是否带来真实回答”，而不只是模型是否记住零散事实。
