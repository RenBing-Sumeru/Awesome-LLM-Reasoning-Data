论文指出，generative RM 的效率明显低于同规模 scalar RM，且 DeepSeek-GRM 在可验证任务上可能落后于 scalar model。其作为 process reward model 的用途只是推测，尚未得到充分验证。并行采样只有在具备充足并行硬件时才会减少 wall-clock latency，总生成 token 与服务成本仍随样本数增加；Meta RM guided voting 还引入第二个 learned model，其分布偏移和相关失败不可忽略。

1,070K general-instruction 数据来自内部，reward mixture 也混合内部与公开来源，却没有完整 manifest 或逐条许可证 lineage。Preference 重标、MATH 规则过滤、hinted sampling 和剔除过易条目都会改变训练分布。模型生成的原则与 critique 可能合理化既有偏差或走捷径；论文自身也观察到 hinted trajectory 捷径和对 KL 正则的敏感性。已发布 checkpoint 提高了 artifact 可用性，但原始样本、采样失败、拒绝轨迹、seed 与代码仍未核实。Benchmark 增益不能替代数据或 verifier 审计。
