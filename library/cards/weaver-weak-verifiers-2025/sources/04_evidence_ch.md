现有证据支持 selector 与 verifier compression 的结论，不支持笼统的“数据高质量”结论。

- NeurIPS proceedings 摘要报告：Llama 3.3 70B Instruct 作为 generator、较小 judge/reward model 作为 verifier 时，平均准确率为 86.2%；400M distilled verifier 保留 full Weaver 准确率的 98.7%，verification compute 最多下降 99.97%。
- 当前可访问的 arXiv 版本在 Table 1 报告了不同平均值：100 个候选下，Weaver 在 MATH500、GPQA Diamond、MMLU College、MMLU-Pro 上分别为 93.4%、72.1%、94.9%、90.2%，平均 87.7%；多数投票平均 72.2%，Pass@100 oracle 为 91.9%。这些数字必须绑定该版本，不能静默替换 proceedings 结果。
- arXiv 消融中，1% 开发集对应平均 84.5%，naive 0.5 threshold 为 79.0%；extreme-marginal pruning 为 85.2%，不移除 verifier 为 79.4%。这些实验支持阈值和过滤在已评估设置中的重要性。
- 蒸馏部分的 arXiv 正文称 ModernBERT-Large 保留 Weaver 性能的 98.2%，verifier FLOPs 下降 99.97%。官方版本间同样存在 98.2%/98.7% 的表述差异，应标注版本。

官方 GitHub 与 Hugging Face artifacts 只能证明代码、经评分 benchmark generations 和 distilled models 已存在，不能证明每个 verifier vote 或 Weaver posterior 正确，也不能证明公开记录在固定 revision 下复现所有表格，或已经完成去污染与许可链核验。Benchmark success rate 衡量选中答案是否匹配 benchmark ground truth，不是候选语料或伪标签集合整体高质量的直接证据。
