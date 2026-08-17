对于 **Data Construction & Open Release Recipes** track，这篇论文最适合作为 recipe-comparison framework 与 release-audit 案例。公开语料本身的复用等级是：**在 license、provenance 与 security remediation 完成前，阻断直接训练复用**。

- **重建 curation 消融矩阵。** 固定 base model、optimizer、样本数与评测预算，每次只改变 source choice、source diversity、prompt filter、去重、rollout multiplicity、answer filter 或 teacher 中的一项。同时报告保留样本数和 compute，避免把更大的 unfiltered set 误判为过滤效果。
- **设计 verifier-by-scale 实验。** 跨 teacher scale 与 verifier 类型重复 verified-versus-unverified 对比。保留每个 candidate、verifier input/output、threshold、failure code 和最终决策，使 false accept 与 false reject 可审计。
- **把 repeated teacher sampling 当作受控变量。** 在 token 和 inference budget 相同的条件下，比较“每个 unique prompt 生成 16 个 response”与“增加 unique prompt 数量”。显式记录 prompt identity 与 candidate group；当前发布缺少这些 group ID，无法直接支持该分析。
- **建立更强的 release ledger。** 为每条记录补充不可变上游 ID/revision/URL、transformation history、license 与 required attribution、准确 teacher checkpoint、chat template、解码设置、candidate group、dedup group、去污染匹配、verifier 输出和拒绝原因。
- **审计去污染。** 固定每个 benchmark 版本，重新运行 exact、normalized-edit、n-gram 和 semantic-neighbor 检查，并发布匹配、删除以及 sampled false-positive/false-negative review。不能把作者报告的词法 detector 当作 clean evaluation split 的证明。
- **把负面结果用作 baseline。** 表 7、表 15 和表 18 的设置适合检验新 judge 或 executable verifier 是否增加价值。正确主张是这些设置下的条件性表现，而不是普遍否定 verification。
- **仅在 security 修复后复现。** 从删除并轮换 exposed credential 后的固定 commit 开始 fork，将 secret 改为环境注入，记录 secret-scan 结果，并固定 container/dependency hash。
- **区分 recipe study 与 corpus reuse。** 论文、附录、代码结构和消融表现在即可用于阅读、审计和受控重实现。上游权利与逐条 provenance 对齐前，不应重新分发 120 万行数据或用于生产训练。

该对象不能在没有新增标签或交互的情况下用于 PRM、preference learning、RLVR replay 或 agent training：它没有 step outcome、preference pair、reward、environment state 或 action trajectory。它也不应作为 evaluation set 复用，因为本质上是训练语料，且需要独立 overlap audit。
