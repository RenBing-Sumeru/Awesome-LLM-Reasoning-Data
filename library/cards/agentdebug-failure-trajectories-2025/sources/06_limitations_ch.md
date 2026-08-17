200 个失败仅覆盖三个环境，且按代表性选择，因此标签频率不能视为总体估计。根因标注具有反事实与因果判断性质；不同 prompt、模型、工具、reset 或 admissible action 可能改变哪一步被视为决定性错误。尽管经过训练与裁决，kappa 0.55 仍表明显著分歧。

论文算法把关键错误检测标为无需 rollout/counterfactual 的 LLM 操作，邻近正文却描述逐步反事实替换，确切实现边界需要审计。官方 Drive 发布已核验，但数据集专属许可、不可变版本、checksum、split manifest、provider/model 谱系、环境固定信息和完整恢复历史仍为 unknown。恢复增益不是标注质量证明。

