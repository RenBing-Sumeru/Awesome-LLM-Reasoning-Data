**The Signal is in the Steps: Local Scoring for Reasoning Data Selection** 的接收 venue 中性记录为 **ICML 2026**。官方 presentation surface 的标签不足以支持排他断言：ICML poster landing page 链接了相关 Oral presentation page，后者的页面标题与 badge 均写 Oral；OpenReview 作者档案则把论文标为 `ICML 2026 spotlight`。论文身份还由 arXiv:2510.03988 与 OpenReview ID `GcB3a6IonG` 核验。当前 arXiv v2 PDF 仍标注 `Preprint`。论文首页显示三位作者均来自 Virginia Tech。

论文研究的问题比 prompt selection 更窄：对于同一个 prompt，多个 teacher 可能生成若干最终答案都正确的长推理 response，但用不同 response 训练 student 会得到不同下游结果。它要决定哪一条**完整 response**应成为该 student 的 SFT target。

主要数据对象是一个离线 candidate group 和一条 selected record：

| 字段 | 在管线中的作用 |
|---|---|
| prompt 与 ground truth | 定义任务和名义上的最终答案接收检查 |
| candidate responses | 由 DeepSeek-R1、QwQ-32B 或 Qwen3-32B 生成的长完整解答 |
| candidate admission | 论文称每个 candidate 在打分前都匹配 ground-truth final answer |
| step boundaries | GLM-4.5-Air 把不改写的 response 组织成逻辑 JSON `sentence_groups` |
| local scores | 目标 pretrained student 在短 step context 下给出每个 step 内的逐 token log probability |
| response score | candidate 的各 step LocalLP 等权平均 |
| selection decision | 保留 LALP 最大的完整 response，作为一条 SFT record |

主要 mixed-teacher selection 使用全部 **817 个 GAIR/LIMO prompt**，每个 prompt 保留一条完整 response，最终是 817 条 selected response。主实验每题 candidate 数、candidate 身份、step boundary、逐 step score、tie、failure 与最终决策均未发布。另一个 within-teacher study 使用 8,890 个经过筛选的 MATH level-3-to-5 prompt，并明确每题生成 16 个 candidate；不能把它与主 817-response selected corpus 混为一谈。

该工作属于 **Data Construction and Open Release Recipes**，因为它改变的是常规 SFT 之前对候选推理轨迹的打分与选择方式。Step decomposition 只是内部 selection interface，不是发布或训练的 target。LALP 不提供 step-correctness label、process reward 或 intermediate supervision，因此不能把它归类为 Process and Trace Supervision Data。进入训练的是完整的 answer-correct selected response。

该方法也是对 Global Average Log Probability（GALP）的失效审计。GALP 在完整生成 prefix 下给整条 response 打分；作者发现，在长 mixed-teacher 数据中，它可能奖励 fluency、discourse 和 self-conditioning，而不是可迁移的 reasoning transition。LALP 缩短 conditioning context 并让 step 等权，以减轻这一 failure mode。

官方 ICML/arXiv 身份、32 页全文与附录、方法、实验、上游来源和 affiliation 都足以支持完整双语 review，因此本卡达到 `L4_chinese_review_ready`。L4 不表示 release ready。论文链接了匿名仓库，但该 URL 当前重定向到 file API，未经认证返回 HTTP 401。因此无法核验 repository content、可用代码、license text、selected data、candidate、configuration 或 checkpoint。合理的复用等级是仅供阅读与审计参考。
