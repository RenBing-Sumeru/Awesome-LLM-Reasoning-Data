权威出版来源是 PMLR 267 收录的 ICML 2025 论文，官方 Microsoft `rStar-math` 分支和该仓库链接的两个 Hugging Face 数据集用于补充核验。论文处理的具体构造问题是：如何把大规模带参考答案的数学题转化为逐步监督和可引导搜索的过程模型，并在多轮迭代中用新训练的小型 policy 替换生成器。

起始题目池据论文报告包含 747K 道文字题，主要来自 MetaMath 和 NuminaMath 的竞赛级部分，并加入以 7.5K 道 MATH-train 题和 3.6K 道 AMC-AIME 训练题为种子的 GPT-4 合成变体。内部构造对象不只是最终答案：每个题目/参考答案对作为 MCTS 树根，节点包含写在 Python 注释中的自然语言步骤、累积代码、执行 observation、访问次数、Q-value，并可能包含 terminal answer。正确的根到叶轨迹转成 SFT 样本；共享前缀的候选步骤转成 PPM 正负偏好对。

该工作属于 **Data Construction and Open Release Recipes**，因为它披露了 prompt sourcing、搜索扩展、两类 programmatic feedback、按 Q-value 选择、四轮 policy/PPM 重训以及公开打包方式。但发布内容不是完整 recipe 状态的可重放副本：公开 SFT 表有 1,188,842 条 `query`/`response` 记录，PPM 表有 1,407,399 条包含 `prompt`、`neg`、`pos`、`neg_count`、`pos_count` 的记录；二者都未保留生成过程中的来源 ID、搜索树、访问次数、Q-value、轮次 ID、随机种子或实际搜索预算。

完整双语 Card 达到 `L4_chinese_review_ready`。该等级仅表示中英文审阅材料完整、可进入人工标注，并不代表可按论文精确复现。论文引文和 artifact 存在性已经核验；去污染、上游许可衔接、原始搜索 lineage、训练后 checkpoints 以及不可变的论文匹配运行清单仍为 unknown 或不可用。
