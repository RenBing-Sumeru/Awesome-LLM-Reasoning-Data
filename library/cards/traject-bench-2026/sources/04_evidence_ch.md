构造规模证据可以内部检查，但尚未完全调和。论文第 3.2 节报告 5,670 个 query；Appendix Table 9 则报告 2,000 个 simple parallel、2,000 个 hard parallel 与 1,870 个 sequential example，算术合计为 5,870。Appendix Table 8 的十个 domain 数量相加得到 1,228 个整理后的工具。官方 README 的 parallel recipe——50 个 task type、从 3 到 10 的八种 tool count、每个组合五条 trajectory——可重建 2,000 个 parallel reference。这些来源支持工具规模与 parallel reference 规模，但 canonical 总量仍未解决。

作者报告的主要诊断结果是对 trajectory length 的敏感性。在论文第 4.2 节与 Figure 2 的模型和 prompting 条件下，随着 reference tool 数增加，性能下降；作者报告从三个工具增加到五个时降幅最大。failure analysis 指出 similar-tool confusion、parameter-blind selection/use、redundant call 与 incorrect intent inference。这些结果支持一个较窄结论：trajectory-aware metric 能暴露 answer-only scoring 隐藏的失败；它们不能证明更长 reference trajectory 本身质量更高，也不能证明该 reference 是唯一有效方案。

retrieval 实验暴露了另一个瓶颈。在论文 Table 4 所示的 Claude 设置中，hard-query retrieval rate 约为 0.46–0.585，而 trajectory Exact Match 仅约 0.012–0.033。该实验在默认 top-20 retrieval budget 下改变 retriever/tool-pool access。两者的明显差距说明：在间接 query 上检索到部分 gold tool，不足以生成完整 reference trajectory。由于 Inclusion 仅计算 recall，Usage 又只在共同工具上计算，任何单一 submetric 都不应被解释为整体 task success。

artifact 检查提供了发布完整性的负面证据。当前 Hugging Face raw structure 的 parallel 目录覆盖十个 domain，但 sequential 目录只有九个，缺少 Email。Viewer 列出 28 个 configuration，并额外缺少两个 parallel Mapping configuration。Viewer 所列 row 合计 5,270；若排除缺失的 200 条 sequential Email，visible raw-domain pattern 与论文 5,670 的口径相符，但没有固定 manifest 能确认这一解释。这是 curator reconciliation hypothesis，不是作者结论。

托管 Viewer 还暴露部分 `final_answer` 包含 API failure 或 JSON-generation error，说明可见 reference release 并非显然只保留成功样本。不过，未核验到完整 accepted/rejected/dropped ledger 或 evaluated-model trajectory archive。本卡片没有独立复现实验，judge calibration 缺失，live API/provider version 也未固定。因此 benchmark performance 只能作为论文所述评测设置的证据，不能证明 data quality、training value、legal reusability 或 deterministic replay。
