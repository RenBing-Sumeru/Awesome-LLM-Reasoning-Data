对于 **Data Construction and Open Release Recipes** track，s1 既是紧凑 selection baseline，也是“看似开放的 pipeline 仍不可重放”的审计案例。

1. **复现五阶段 funnel。** 在 59,029、54,116、51,581、24,496、1,000 各阶段保留稳定 ID。发布每个 exclusion reason、Gemini failure、format rule、Qwen attempt、Claude decision、domain、rank、weight 与 sampler seed。
2. **分别评估 selection proxy。** 在匹配 training 与 inference budget 下比较 source quality、Qwen-relative difficulty、domain balance、trace length 与 answer correctness。不要假设长或错误 trace 能跨 model family 迁移。
3. **审计 judge reliability。** 对 Claude 与 source answer 不一致的 strata 采样；在可行处使用独立 human 或 programmatic check。把 Boolean feature column 当 ground truth 前，先发布 confusion estimate 与 rationale。
4. **对账开放发布。** 找出 full-pool 缺失的 43 行，发布 `qfq/geminiall` 的可访问替代物，使 feature name 与 notebook code 一致，并标记 deterministic end-to-end manifest。
5. **分开原始与衍生数据。** 复现 s1-32B 时使用 Gemini s1K；DeepSeek-R1 s1K-1.1 只用于 s1.1 实验。每个结果都记录 teacher/model/data revision 与 license。
6. **把 budget forcing 用作 inference ablation。** 比较 forced stopping、反复 `Wait`、普通 continuation 与 equal-token baseline；报告 loop、context exhaustion、latency 与 vLLM configuration。不要把它标为 training supervision。
7. **构建 rights-aware mixture。** 为每行附加 upstream source revision 与 license，在再分发或商业训练前显式审查 non-commercial/share-alike constraint。

复用等级为 **conditional training and evaluation reuse**。固定 revision 后，原始 s1K、tokenized data、s1-32B 与训练脚本可直接使用；但不可访问/不匹配 schema 的中间文件、无 seed 的 sampler drift、缺失 judge evidence 与 43 行差异阻止 paper-exact reconstruction。full 59K artifact 是 ablation corpus，不是原始模型训练集。
