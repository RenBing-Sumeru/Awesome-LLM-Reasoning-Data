核心贡献是一套紧凑的 factuality benchmark：每题尽量只有一个稳定答案，模型回答被判为 correct、incorrect 或 not attempted。机制不是复杂 pipeline，而是把任务收窄到可审计：短问题、reference answer、predicted answer、三分类标签，以及区分答对率和不作答行为的聚合指标。

和 TriviaQA、Natural Questions 相比，它的新点不是开放域问答规模，而是面向更强模型的对抗式难度和显式 abstention 统计。和 TruthfulQA、FreshQA、LongFact、FActScore 相比，它的新点不是覆盖所有 truthfulness 场景，而是给短事实回答提供更简单的逐样本评分表面。

方向标签是 benchmark / evaluation surface with judge-style verifier。反馈契约是局部的：回答完整包含 reference answer 且没有矛盾才通过；只要有矛盾就失败；没有矛盾但没有给出必要答案，则是不作答。
