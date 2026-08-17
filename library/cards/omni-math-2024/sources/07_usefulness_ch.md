可把 Omni-MATH 当作 hard-math evaluation recipe，也可把它的字段设计作为 answer-level 数学基准 schema 参考。复用时应保留题面、参考答案或解法、子领域、难度、来源 provenance、split/release revision、prompt 模板、答案抽取规则、scorer 类型、judge 版本和逐题正确性。

对 atlas 来说，它适合衡量后训练后模型在奥赛级推理上的进展和污染风险；若要把它当 reward 数据或训练监督，则必须另行审计评分路径和 license。
