# 03 方法

输入是围绕常见误解刻意撰写的问题，以及参考 true answers 和 false answers。构造流程把问题分到主题类别中，检查错误答案对持有该误解的人是否合理，并为 open-ended generation 与 multiple-choice evaluation 提供答案集合。

输出是 benchmark records 和模型分数。在 generation 模式中，模型生成自由文本答案，再按 truthfulness 和 informativeness 评分。在 multiple-choice 模式中，模型对 true/false answer options 打分或选择，得到 MC 类指标。因此 verifier/judge 层是混合的：human judgments 是最强证据，learned judges 和 lexical/semantic metrics 是可扩展近似，其具体实现会显著影响分数。

用途是 evaluation 和 audit，不是 SFT、preference learning、reward modeling、PRM、RLVR 或 agent training。需要核验的 artifact 包括 ACL 页面、arXiv 页面、官方软件/数据发布、DOI、license、benchmark CSV 版本，以及分数报告中使用的 evaluator code。可复现性备注：要固定 prompt template、generation settings、multiple-choice formulation、learned-judge checkpoint 或 API、human annotation protocol、模型日期，以及公开 TruthfulQA 条目是否可能进入训练数据。
