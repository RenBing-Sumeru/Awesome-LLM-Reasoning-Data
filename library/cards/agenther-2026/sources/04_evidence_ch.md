以下定量结果全部来自 arXiv v4 的作者报告，未被独立复现。在论文所述构造中，对 3,000 条 WebArena 失败轨迹，single-judge acceptance 为 78.0%；对 5,000 条 ToolBench 失败轨迹则为 82.5%。cross-model MJ-X acceptance 分别为 71.5% 与 75.5%。这些 yield 只说明论文 judge 下的选择强度，不能证明未发布语料的完整性或可复用性。

Table 1 报告 MJ-X 在 WebArena 上对 GPT-4o、Qwen2.5-72B、Qwen2.5-7B 与 LLaMA-3.1-8B 的 success 分别为 29.9、37.7、26.5、24.8，相对 SFT-Success 提升 7.6–8.7 个点；ToolBench 对应分数为 75.4、83.5、72.6、69.0，提升 7.6–11.4 个点。在论文基础设施下，MJ-X 比 AWM 高 3.0–6.2 个点。这些对比支持重标记录可用于论文所述训练设置，却不能单独验证 label correctness、release completeness 或 data rights。

与数据契约更直接相关的是 judge ablation。在 WebArena 上，cross-model MJ-X 得到 26.5% success、2.9% label noise；same-model MJ-S 为 26.0% 与 4.4%；single judge 为 25.7% 与 5.9%。移除 confidence filter 后，success 降至 22.3%，label noise 升至 15.0%。这支持把 judge identity 与 filtering 视为构造变量，而不是附带的评测设置。

人工评测对每个 benchmark 抽样 200 个 pair，由三名 NLP PhD annotator 标注并多数票聚合；MJ-X precision 在 WebArena 为 97.1%、ToolBench 为 96.0%，Fleiss kappa 分别为 0.82 与 0.79。同一审计发现，在被 filter 拒绝的 pair 中，人类认为有效的比例在 WebArena 为 38.7%、ToolBench 为 35.8%。因此高 precision 伴随显著 false-negative selection bias；研究没有建立完整 source distribution 上的 recall，也没有验证 hindsight goal 在 live environment 中成立。

其他证据同样受设置约束。论文报告 Qwen2.5 从 1.5B 到 72B 均有提升；Qwen2.5-7B 在 WA-HELDOUT 上迭代部署的 round 0–3 从 17.8 上升到 26.5、27.9、28.2，而 acceptance 从 71.5% 降到 68.4% 与 66.0%。一个包含 363 条 trajectory 的 looping subset 只有 24.2% recoverability、21.5% acceptance 和 3.4 点增益，而 non-looping failure 增益为 9.5 点。这些负面结果与 scaling 结果有助于界定 recipe 的适用范围；任何一项都不能把 benchmark performance 变成 data quality 证明。
