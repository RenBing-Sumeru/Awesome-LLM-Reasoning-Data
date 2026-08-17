所有模型分数均由作者报告；release count 来自已检查官方 artifact。

| 问题 | 条件与结果 | 来源 |
|---|---|---|
| pipeline 的选择性有多强？ | 59,029 道 source question 变为 54,116 条成功 trace、51,581 条格式合格 trace、24,496 道两个 Qwen probe 都未解出的题目，最后为 1,000 条。 | 论文 §2.2 |
| 最终 teacher output 是否大多正确？ | Claude 3.7 只把 1,000 条 s1K generation 中的 53.6% 判为正确。 | 论文 §2.2 与 Limitations |
| 选择出的 1K 是否匹配 full-pool ablation？ | 在约 30K maximum thinking budget 下，s1K 在 AIME24/MATH500/GPQA Diamond 上为 50.0/93.0/57.6；full-pool run 为 53.3/92.8/58.1。 | 论文 Table 2 |
| 更简单的 1K selector 如何？ | 相同三项任务与预算设置下，random 为 36.7/90.6/52.0，diversity-only 为 26.7/91.2/54.6，longest-only 为 33.3/90.4/59.6。 | 论文 Table 2 |
| compute 差异是多少？ | 主要 s1K SFT 约需 7 H100 GPU-hours；full-pool ablation 需 394 H100 GPU-hours。 | 论文 §5.1、Table 2 |
| budget forcing 改变了什么？ | 原始 s1-32B 在 AIME24 上从无干预时 50.0% 提升到强制四次 `Wait` 时 56.7%。 | 论文 Tables 1、4 |
| 公开 full pool 的计数是否相同？ | 不同。`data_ablation_full59K` 有 58,986 行，论文/raw/feature pool 为 59,029 行；43 行差异没有解释。 | 官方 Hub revision 与论文 Table 6 |

Table 2 支持的是：在已测试模型与预算下，论文选择 recipe 比全量训练具有高得多的 compute efficiency。它不能证明 1,000 对所有情况都最优：full-pool 在 AIME24 与 GPQA 略高，在 MATH500 略低，论文没有得到统计上可区分的整体增益。

53.6% correctness audit 是关键 negative result。它说明 s1K 不是 correctness-filtered solution set；即使 final response 错误，其训练价值也可能来自 trace structure、困难题目或部分 reasoning。该现象不能外推为错误 trace 对其他模型安全或有益的证据。

budget-forcing gain 反映训练后模型的 inference policy，而不是 s1K 质量。即使 greedy decoding，分数也会随 vLLM batch size、continuation 与 tensor parallelism 变化。更多 forced token 还会产生 loop 与饱和，因此报告的 positive slope 只在有限区间成立。
