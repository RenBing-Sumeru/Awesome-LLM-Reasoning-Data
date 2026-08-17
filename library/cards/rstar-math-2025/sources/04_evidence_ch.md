下列数字均为作者报告结果或 artifact 检查结果，不是独立复现。

| 问题 | 条件与结果 | 来源 |
|---|---|---|
| 迭代收集是否覆盖了更多 747K 题目？ | 第 1–4 轮总体解出/覆盖率依次为 60.17%、66.60%、77.86%、90.25%；Olympiad-level 覆盖率依次为 20.99%、56.04%、62.16%、80.58%。 | 论文 Table 2 |
| policy 性能在哪一轮变化？ | Qwen2.5-Math-7B System-2 在 MATH 上的四轮分数为 75.2、86.6、87.0、89.4；报告中最大增幅出现在第 1 轮到第 2 轮。 | 论文 Table 4 |
| 在作者设置中，步骤验证轨迹选择是否优于 answer-only selector？ | 第 4 轮 step-verified SFT 得到 MATH 78.4、AIME 26.7；采用 ORM 排序的 rejection sampling 在相同下游 SFT 对照中得到 73.4 和 13.3。 | 论文 Table 5 |
| PPM guidance 是否优于另外两种 selector？ | PPM-MCTS 报告 MATH 89.4 / AIME 50.0；直接 Q-value PRM（PQM）-MCTS 为 88.2 / 46.7；ORM Best-of-N 为 82.6 / 26.7。 | 论文 Table 6 |
| 最高 test-time 结果是什么？ | Qwen2.5-Math-7B 在普通报告搜索下达到 MATH 89.4 / AIME 50.0；使用 64 条轨迹时为 90.0 / 53.3。多个 benchmark 上的准确率在约 64 条轨迹附近趋于饱和，candidate-node 收益在 32 个之后趋于饱和。 | 论文 Table 3、Figure 3、Table 12 |
| 实际发布了什么？ | 已检查的 SFT revision 有 1,188,842 条仅 train split 的 `query`、`response` 记录；PPM revision 有 1,407,399 条仅 train split 的 `prompt`、`neg`、`pos`、`neg_count`、`pos_count` 记录。 | 官方 Hugging Face dataset-server schema 与计数 |

这些结果支持的结论比“数据质量高”更窄。Table 5 在一个下游 recipe 中比较了作者的 step-verified trajectory selection 与 ORM-ranked rejection sampling；Table 6 比较了三种搜索 guidance。两项对照都没有测量来源正确性、provenance、污染、许可兼容性或 verifier calibration。test-time 数字还同时受已训练 policy、搜索预算和 PPM guidance 影响。

作者对剩余未解题做了一个小规模检查：手工查看的 20 题中有 19 题标签错误（论文 §3.3）。采样框、被检查题目和标注没有发布，因此这只能提示答案标签噪声，不能作为总体比例估计。缺少 checkpoints 与论文匹配配置也进一步限制了这些表格的精确复现。
