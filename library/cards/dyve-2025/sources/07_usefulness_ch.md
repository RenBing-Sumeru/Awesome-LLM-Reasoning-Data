对 `data_construction_open_release_recipes` track 而言，Dyve 的价值在于公开了一条具体的 process-supervision data refresh loop：来源题目进入搜索 rollout，外部 judge 过滤候选错误标签，样本经过重平衡，更强的 teacher 编写混合快、慢 target，最后训练较小的 verifier 做逐步验证。这一流程可作为研究替代搜索策略、独立裁决、保留 provenance 的 schema 或人工审计过滤时的比较基线。

所得 verifier 可用于给推理前缀评分、定位首个错误、过滤生成轨迹、支持 process-reward training，并对 best-of-N 候选排序。该 release 也为审计设计提供了有价值的反例：后续数据集可以增加 immutable version、来源与 judge 字段、被拒样本、类别比例 manifest、明确许可证，以及论文数量与仓库数量的对齐说明。复用者仍应单独评估标签质量，而不能从下游 benchmark 提升反推数据质量。
