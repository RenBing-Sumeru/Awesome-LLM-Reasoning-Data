MMLU 适合作为静态 answer-level 学术评测的数据结构参考：question、choices、answer key、subject、split、prompt policy、model output 和 exact-match score。它也适合研究 prompt/评分实现如何影响 leaderboard。

在 atlas 中，MMLU 应作为一批衍生基准的根对象：MMLU-Pro 改难度和选项数，MMLU-Redux 审计标签和题面错误，但二者都继承了 MMLU 的答案键评分契约。

复用时要保留 provenance 字段：原始 subject、split、数据包 revision、evaluator revision、答案规范化规则，以及任何去污染或剔除策略。
