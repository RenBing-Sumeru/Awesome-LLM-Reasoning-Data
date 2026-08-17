该过滤器是代理信号，不是正确性证书。rationale 可能通过复述词汇线索、概括前文，或对已知后文进行事后合理化来提高后文似然。Appendix H 尤其关键：作者的人工复核指出，大多数保留的 Pile rationale 描述的是前文，而不是指导后续推理。Pile 阈值为 0，也没有用带标签的 rationale 有效性进行校准。

论文和 artifact 中有多处冲突。论文对 loss difference 的定义及保留不等式，与“rationale 应降低损失”的文字说明不一致；公开代码实际比较的是有无 rationale 条件下的 token log-probability。Pile 长度上限分别被描述为 2,000 word、2,000 token，并在代码中实现为 2,000 character。ECQA 在 Table 2 和官方 model card 中为 75.2，在 Table 5 中却为 76.2。这些都应保留为未解决的报告问题，不能暗中统一。

发布完整性同样未解决。链接 HF 数据集有 15,178 行，字段为 `preceeding`、`rationale`、`following`，没有 dataset card，也没有 license。该规模既不匹配报告的 7.9 万混合，也不能显然对应 Table 1 隐含的 GSM8K 保留数；数据还缺少来源 ID、过滤分数、阈值和 manifest。检查的 GitHub revision 没有 LICENSE，README 引用的过滤/解析脚本缺失，并包含集群特定路径。HF 模型的 Apache-2.0 声明不能替数据集或代码授权。

没有发现广泛去污染分析，尽管 GSM8K 与 ECQA 的训练集参与构建，而其 test/validation 集参与评测。禁止答案出现在生成 rationale 中只能减少一种泄漏路径，不等于基准重叠审计。报告运行使用的精确超参数与包版本仍未知。

论文自身还指出：任务与比较覆盖有限、数据混合选择研究不足、没有 DPO 实验，以及计算约束使作者无法扩展到更强模型或 OpenWebMath 一类语料。因此，基准提升既不能证明普适性，也不能证明 rationale 质量。
