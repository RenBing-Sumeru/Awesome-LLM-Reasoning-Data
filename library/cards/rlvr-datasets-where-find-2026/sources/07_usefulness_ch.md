对 `data_construction_open_release_recipes` 而言，该工作把 RLVR 数据流水线拆成明确审计点：规范化记录、归并精确复用、恢复变换后的祖先、保留按时间排序的出现、审计评测重叠、估计来源条件化可学习性、定义数据集级分数、修复训练集，再在固定奖励与优化器下评测修复结果。最可复用的经验是用显式记录连接 provenance、verification、selection 与 evaluation，而不是只做数据集级摘要。

可复用谱系记录应保留规范化提示与答案 hash、上游 ID 与版本、来源 URL、时间戳、每次出现、变换类型、精确与语义匹配分数、候选祖先、最终来源决策、审查与裁决、不确定性和许可证。要审计论文报告的 1.45M 实例映射，仍需最终谱系字典。

可复用 SCA 与 Q 记录应保留 base 和来源 checkpoint 版本、来源训练子集、GRPO 设置、Math-Verify 与 parser 版本、rollout seeds、各 checkpoint 正确性、00/01/10/11 标签、聚合权重、多样性与污染特征、Math500 checkpoint 选择轨迹和每个 Q 输入。只要模型、verifier、parser、混合或评测版本改变，就应重新计算这些分数。

可复用 DAPO++ 决策账本应保留每条原始 DAPO 记录、泄漏证据、保留或删除决策、完整可选替换池、随机种子与抽取顺序、被拒候选、选中的 Stack Exchange 记录、MCQ 与 SCA 门控、最终行 ID、变换、来源许可证和不可变 checksum。公开 Parquet 可作为 rule-reward 提示 schema，也可作为已核验 commit 的精确 17,000 行训练对象，但无法解释每条记录为何进入集合。

指标契约必须分开：Math-Verify 是 rollout 奖励；SCA 是受 checkpoint 约束的可学习性代理；Q 是六数据集排序分数；SRank 是聚合参考排序；Average* 是排除 Math500 的下游评测。benchmark 提升不是公开数据正确、无污染、许可清晰或普遍高质量的证明。
