CVPR 2026 论文与官方 Hugging Face 数据卡对核心规模的描述一致：31,725 条人工核验轨迹、317,993 个交互步骤、428 个 domain，轨迹平均长度 10.02 步，任务平均耗时 1.07 分钟。摘要将步骤数四舍五入为 318K。HF revision `ae99f420a646866fd3f6d70ca5984efa0eca5a77` 的文件清单包含原始 JSON 与图像归档、部分全页面截图归档、高层 Parquet 和低层 Parquet，仓库标示总规模约 837 GB。

论文内部的受控实验是最清楚的训练证据，但不是对发布数据的直接质量审计。在 Qwen2.5-VL-3B 的 WCB-L 上，直接 LCRL 得分 0.487，加入 CoT-SFT 为 0.603，加入 SGRL 为 0.629，两者同时加入为 0.658。论文公开 GUI benchmark 汇总表中，最强的 7B WebChain 变体达到 81.4。等设置 scaling 实验采用 4K、20K 和 150K 个 action-step 子集并报告正相关趋势；正文没有逐一列出图中数值，因此本 Card 不补造分数。

WebChainBench 由 1,200 个 held-out 交互步骤构成，分为短链和长链子集，并在短、中、长历史之间平衡。只有动作类型和具体行为同时匹配才算正确。这支持论文提出的 grounding/规划拆分，但已检查材料没有给出确定性 split manifest、跨 benchmark 去污染报告，也未证明所有替代有效动作都会被接受。

发布证据收窄了论文中的“open-source”表述。Hugging Face 仓库虽然公开可见，却需要人工审批；WebChain Academic Research License v1.0 只授予获批的非商业学术使用，并限制商业使用、大规模再分发、镜像和再识别。arXiv v3 链接了作者仓库，但检查到的树仅有 `README.md`、`trajectory_info.png` 和 `webchain_table3_benchmark_results.png`，没有实现文件或 LICENSE。因此，可以确认 gated 数据发布，不能确认端到端代码发布。

论文声称采集、脱敏和审查保护了隐私，并称发布物不含 PII。本 Card 只把它记录为作者声明，因为没有逐记录脱敏证据、审计样本、漏检率估计、同意协议或逐网站合规日志可供独立检验。
