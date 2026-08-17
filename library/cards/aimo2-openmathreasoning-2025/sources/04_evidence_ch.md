所有性能数字均由作者报告；artifact 计数来自固定的官方发布。

| 问题 | 条件与结果 | 来源 |
|---|---|---|
| 系统是否赢得 AIMO-2？ | 报告的 submission 在竞赛约束下解出 50 道 private-test 题中的 34 道。 | 论文 §§1、6；NVIDIA 竞赛说明 |
| 论文中的题目计数如何变化？ | 620K 条论坛 discussion → 580K 个 extracted problem → 移除不适合题目后 550K → LLM 去污染后 540K。 | 论文 Table 1、§2.1 |
| 官方发布更正了什么？ | 540K 统计得过早。公开 solution 数据对应 306K 个有 solution 的唯一题目，另有 193,170 条 problem-only row。 | 官方数据卡 count-reconciliation note |
| 固定发布中有哪些记录？ | `cot`：3,201,061；`tir`：1,718,466；`genselect`：565,620；`additional_problems`：193,170；合计 5,678,317。 | revision `d3d0866...` 的官方 Hugging Face datasets-server |
| CoT 生成 yield 是多少？ | 5.2M 个 candidate——1.0M 来自 QwQ、4.2M 来自 DeepSeek-R1——变成 3.2M 个保留 solution，分别为 0.5M 和 2.7M。 | 论文 Table 5、§2.3 |
| 分阶段 TIR yield 是多少？ | 1.2M 个 LIMO-Qwen-32B attempt 变为 15K stage-0 集；微调 QwQ-32B 生成 700K 个 attempt，移除错误/无代码后剩 260K；后续生成得到约 1.7M 条公开 TIR。 | 论文 §§3.1–3.3 |
| GenSelect yield 是多少？ | QwQ-32B 标注 1M 条 selection trace；correctness filtering 保留约 565K，与固定 split 的 565,620 条一致。 | 论文 §4.2、Table 6；官方发布 |

34/50 的竞赛结果和论文 benchmark 表显示训练后模型与 inference scaffold 的行为，不能证明每条数据记录的正确性或 provenance。更直接的数据证据是文档化的生成/筛选 funnel、公开 schema、split count 与官方 count correction。

若干 negative result 限制了结论。novelty/significance filtering 在 stage 0 后被关闭，因为它降低后续下游性能。Qwen2.5-32B-Instruct 对 GenSelect comparison 做摘要后，模型性能下降约 1–2 个百分点。pipeline bug 丢失 137K 道 proof question；NVIDIA 表示 recovered data 导致 SFT 回退，并把 future solution release 限定为找到提升之后。论文还报告对较小模型的迁移弱于预期、public leaderboard variance，以及 final output 约长 10%，这损害了竞赛时间分配。

Appendix 样例显示，TIR program output 可能与 prose conclusion 冲突，search result 也可能无法支持声称的唯一答案，即使记录通过 novelty/significance filtering。这直接说明 mode-specific filter 与 final-answer acceptance 不能认证语义一致性。
