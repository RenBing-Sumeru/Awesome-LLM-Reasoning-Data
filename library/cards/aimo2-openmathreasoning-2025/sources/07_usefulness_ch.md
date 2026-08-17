对于 **Data Construction and Open Release Recipes** track，只有显式保留 data mode、acceptance contract 和 release revision 时，OpenMathReasoning 才支持具体复用。

1. **构建 multi-mode SFT mixture。** 使用 `inference_mode`、`generation_model`、`problem_type` 和 `problem_source` 分离 CoT、TIR、GenSelect 与 problem-only record。不要为 `additional_problems` row 推断 solution，也不要把 mode split 当作 held-out evaluation split。
2. **复现 generation funnel。** 固定 306K 个有 solution 的题目 universe、teacher version、decoding setting、answer target 与各阶段 filter policy。保存 candidate ID 与 rejection reason，以便审计 5.2M→3.2M CoT 和分阶段 TIR yield。
3. **比较 answer target。** 分层分析 extracted-answer row、converted proof 和 no-answer majority target。用独立 symbolic/manual check 测量 equivalence judge 与 majority target 的分歧，不能把所有保留记录视为同等验证。
4. **把 TIR 表示为 episode。** 把 code call 与 output 解析成显式 action/observation record，并加入 sandbox image/hash、call budget、status、timeout、exception 与 final-answer verdict。检查 code-to-prose consistency，而不只检查 code presence。
5. **审计 filter value。** 在匹配 data 与 compute 下重跑 stage-0 novelty/significance 和 GenSelect summarization ablation。论文中的 regression 使它们成为 selector 设计的有用 negative baseline。
6. **加强来源与权利 lineage。** 发布原始 scraping code、source-post identifier/revision、作者署名、删除处理和逐条权利；保留去污染 candidate pair、judge output 与 decision。
7. **用于 GenSelect test-time selection 实验。** 保留 candidate group size、correctness composition、comparison rationale、selected index、answer verdict 与 token budget。把训练时 comparison trace 与未使用 GenSelect 的 Kaggle 获胜系统分开。

复用等级为 **conditional training and evaluation research use**。固定发布可直接加载，用于 SFT 与 selection experiment；但来源权利不确定、原始 scrape 不可用、majority-answer 噪声、缺少 verifier/rejection log 和 revision drift 阻止高保证复用。193,170 条 problem-only row 必须配套新的 solution-generation 与 verification contract，才能成为训练 target。
