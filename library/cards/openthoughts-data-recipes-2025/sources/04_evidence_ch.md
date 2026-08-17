最强证据来自论文 student-training protocol 下不同构造选择的对比，其中包括多项负面结果和随规模变化的结果。

| 实验 | 条件与作者报告结果 | 支持的判断 |
|---|---|---|
| 代码来源混合 | 前两个来源平均 **41.3**，前十六个来源平均 **36.4**（表 4） | 对这个 student/评测混合而言，增加来源可能稀释效用 |
| Teacher choice | QwQ-32B 在代码来源和数学来源消融中平均均为 **44.2**；DeepSeek-R1 分别为 **42.3** 和 **41.6**（表 8） | Teacher 的 benchmark 声誉不足以代替 student-data utility 实测 |
| 数学 answer filtering | 不过滤平均 **41.9**；GPT verification 平均 **40.0**（表 7） | 被测试的 judge filter 没有超过保留全部成功答案 |
| Verification 与 teacher scale | 在 OpenThoughts-114K 上，32B verified data 为 **64.5**，unverified 为 **62.1**；7B verified data 为 **41.9**，unverified 为 **45.0**（附录 H.1.1，表 15） | Verification 效果随 generator scale 改变 |
| LLM-generated unit-test filtering | 在匹配的 16k 代码子集上，verified data 在 LCB / CodeElo / CodeForces 上为 **36.0 / 9.4 / 10.4**；random unfiltered data 为 **38.5 / 10.7 / 13.54**（附录 H.1.4，表 18） | 该代码过滤器可能丢弃有用材料，或无法识别更优监督 |
| 去污染诊断 | 在 3,092 个构造污染 prompt 与 3,000 个干净 prompt 中，最终 detector 漏掉 **12** 个污染项并错拒 **42** 个干净项（附录 F，图 7） | 即使在为其设计的 testbed 上，词法 detector 也有可测 false negative 和 false positive |

“不做过滤更好”有重要限制：表 7 中数学 no-filter 条件使用 63,200 个样本，而不是 31,600 个，并且论文明确说明没有控制 compute。因此，该结果不能证明 answer verification 普遍有害或无用。OpenThoughts-114K 与 unit-test 实验更适合作为“特定 verifier/data-scale 组合可能失败”的负面证据。

在扩展所选 recipe 后，论文报告 OpenThinker3-7B 在 AIME24、AIME25、AMC23、MATH500、HMMT 02/25、held-out LiveCodeBench 06/24-01/25、CodeElo、CodeForces、GPQA-D 和 JEEBench 上分别为 69.0、53.3、93.5、90.0、42.7、51.7、31.0、32.2、53.7 和 72.4（表 1）。这些是作者报告的 checkpoint 结果，尚未独立复现。

这些分数说明，在论文评测设置下，完整的 source/filter/teacher/scale/training package 可以得到具有竞争力的 student；它们**不能**隔离每条发布记录的贡献，也不能证明 answer correctness、trace faithfulness、来源权利、provenance 完整性、去污染完整性或 security hygiene。Artifact 可访问和 benchmark 表现是比“数据质量”更窄的主张。

发布检查提供了另一层证据：公开 HF artifact 恰有 1,200,000 行、一个 train split、120 个 Parquet shard，以及前述四字段 schema；仓库和模型也已公开。在已确认官方 artifact 中，没有发现独立复现、不可变 final-run manifest、逐条 verifier 审计或 rejected-sample ledger。
