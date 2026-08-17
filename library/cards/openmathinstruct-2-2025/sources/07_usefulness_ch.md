对于 **Data Construction & Open Release Recipes** track，OpenMathInstruct-2 可作为有条件的 SFT 来源、双轴 augmentation 参考实现，以及 answer aggregation 和 release drift 审计案例。

- **有条件的 SFT 复用：** 固定 dataset commit `469216e3f46f4dacf476b382e192485ea51a143e`，核验全部 shard hash 与准确 split count，检查行结构，做问题去重，重新运行目标 benchmark overlap check，并解决逐来源 attribution 和 teacher terms。CC BY 4.0 repository label 不能替代这些审查。
- **Augmentation 设计：** 在分别固定 unique question、total pair、teacher token 和 student compute 的条件下，比较 solution augmentation、question-solution augmentation 及匹配混合。这样可避免把“每个 prompt 更多 solution”与“更多 task diversity”视为同一件事。
- **Answer-aggregation baseline：** 重现 32-solution extraction 和阈值 0/8/16/24，但保留 candidate answer、normalized equivalence class、vote margin、null、tie、parser failure 和抽样人工裁决。应测量 false accept 与 false reject，而不是把 top surface form 直接当作 ground truth。
- **Process-quality 审计：** 只把原始/source answer 和 majority proxy 当作 answer-level label。如果研究需要 faithful rationale 或 PRM supervision，应增加 step checking、symbolic validation 或 human review。
- **去污染审计：** 对 GSM8K、MATH、AMC 2023、AIME 2024、Omni-MATH 及所有目标 benchmark 做版本固定，发布 retrieval neighbor、全部十个 405B judgment、删除结果和 sampled error review。已披露的 1.4% Omni-MATH overlap 应成为刷新 benchmark ledger 的理由。
- **历史复现：** 分别重建 2024 release path 与 2026 current Skills path，并解释发布数据保留 564 个过长问题等差异。只有固定 teacher/source revision、prompt、container、random seed 和逐阶段 yield 后，才能主张 byte-level reproduction。
- **Scaling study：** 把相互重叠的 1M/2M/5M subset 用于受控 training-scale curve，而不是视为独立数据集。准确 row count 与四舍五入的 unique-question count 应作为不同分母报告。
- **改进 release schema：** 为每条记录附加 seed ID/revision、准确 405B checkpoint、generation config/run ID、candidate-group ID、抽取 answer/vote、filter decision、contamination result、transformation history、license 和 attribution。

复用等级：完成 provenance、权利、质量和污染检查后，可有条件用于 answer-level mathematical SFT；适合 recipe comparison 与 audit；没有独立 overlap analysis 时，不能作为 clean evaluation set。发布对象缺少 step label、paired choice、reward、policy group 和 environment trajectory，因此不能直接支持 PRM、preference learning、RLVR replay 或 agent training。
