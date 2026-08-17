对于 **Data Construction and Open Release Recipes** track，LALP 适合作为 response-selection 设计和 global likelihood failure analysis。其当前复用等级是：**仅供阅读与审计参考；由于 selected corpus 和实现不可得，阻断直接训练或代码复用**。

- **重建 candidate-selection ledger。** 对每个 prompt 保留全部 teacher response、teacher 与 checkpoint ID、采样设置、final-answer matcher input/output、准确 step boundary、逐 token log probability、LocalLP、response LALP、tie、parse failure 与最终 decision。Selected 和 unselected record 都应发布。
- **区分 admission 与 ranking。** 在 LALP 前实现有版本的 final-answer extractor 与 equivalence checker，并独立审计 false accept 与 false reject；绝不能把 local likelihood 描述成 correctness verification 的替代品。
- **把 segmentation 当作可测组件。** 比较 GLM-4.5-Air boundary 与 human 或 rule-based alternative，报告 agreement 与 parse failure，并测试 split/merge perturbation。这样才能判断收益来自 local scoring 还是 boundary style。
- **运行 student-by-selector matrix。** 把相同 candidate pool 应用于不同 student architecture、tokenizer、规模与 pretraining history，报告 rank correlation 与 selected-set overlap，使 “student-specific” 成为实测属性。
- **控制 locality budget。** 把每个 run 映射到准确 `k`，报告 token 与 step context，并在等 compute 下比较小 local window、GALP、local-plus-global coherence hybrid 与 influence baseline，同时纳入 long-range inconsistency 案例。
- **比较 equal-step 与 token weighting。** 测试收益是否来自 equal step weight、normalized step length、information-density weight 或 learned aggregation。保留 segmentation，使每种 aggregation 都可重新计算。
- **把 817-response setting 作为数据效率 baseline。** 在匹配 SFT token 与 compute 下，比较每个 LIMO prompt 一条 selected response、random、GALP、best single teacher、全部 candidate 和更多 unique prompt。必须把独立的 8,890-prompt within-teacher study 分开。
- **审计 embedding explanation。** 为 .935-versus-.760 coverage 结果发布 embedding model、revision、pooling、normalization、preprocessing 和 neighbor index，并检验 coverage 是否能在报告 benchmark 之外预测 selection benefit。
- **增加污染与权利 ledger。** 固定 source 与 benchmark revision，发布 exact、semantic 和 provenance overlap 结果；为每条记录附加 prompt 与 teacher-output license、attribution、transformation 和 hash。
- **真实 release 出现后再复用。** 当前匿名 URL 返回 HTTP 401。后续 release 必须提供可执行代码、segmenter prompt 与 parser、config、dependency、seed、selected/candidate data、score ledger、checkpoint 和不可变 commit 或 tag。只有论文链接的 URL 而没有可获取内容并不充分。

LALP 不能直接作为 PRM data、step-supervision data、preference data 或 RLVR reward；这些用途需要新的 label 或经过验证的 reward contract。重新实现后，它可以作为 offline preprocessing baseline；其 GALP failure analysis 也可进入任何 model-aware reasoning-data selector 的审计 checklist。
