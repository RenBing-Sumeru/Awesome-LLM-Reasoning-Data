ThinkLite-VL 研究的是数据预算分配，而不是模型架构：面对一个异构视觉推理 prompt 池，应把昂贵的强化微调预算给哪些小规模子集，才能避免目标策略反复训练于过易样本，又不把预算全部耗在不可解样本上。NeurIPS 官方 proceedings 将本文列入 *Advances in Neural Information Processing Systems 38* 的 Main Conference Track；官方虚拟海报页与 OpenReview 记录均标明其为 2025 Spotlight。arXiv 记录的首次提交日期为 2025 年 4 月 10 日。（NeurIPS proceedings；arXiv:2504.07934）

候选池包含来自八个来源的 69,997 条记录：Geometry3K 3,001 条、GeoQA 5,010 条、Geos 66 条、随机抽取的 FigureQA 10,000 条、ScienceQA 10,332 条、OK-VQA 9,009 条、随机抽取的 IconQA 10,000 条，以及 TabMWP 22,579 条。论文把一条源记录描述为 image、ID、prompt 和 answer。实时 70K Hub viewer 显示单一 train split，字段为 `image`、`problem`、`answer`、`id`、`choices` 和 `ground_truth`，但没有上游 source/split ID。IconQA、FigureQA、Geometry3K、TabMWP 与 OK-VQA 被改成开放式回答；ScienceQA、GeoQA 与 Geos 保留多项选择形式。（论文 §3.1、Figure 3；官方 70K dataset viewer）

构造阶段的数据对象比最终公开的训练行更丰富。对每个目标策略与源样本，可审计的 selector 记录应把来源身份与规范化 prompt/answer，关联到 MCTS 推理步骤、文本 critic 的 true/false 判定、首次通过的迭代号 `K` 或 50 轮后仍未解的状态、阈值规则，以及最终 selected/rejected 决策。论文据此为 Qwen2.5-VL-7B-Instruct 选出 11K 子集，为 Qwen2.5-VL-72B-Instruct 选出 7.5K 子集。进入 GRPO 的是被选 prompt，而不是 MCTS 轨迹；因此它属于答案级 RLVR 与 prompt 筛选，不是公开的步骤级监督或教师轨迹蒸馏。（论文 §§3.2–3.3）

本文归入 `data_construction_open_release_recipes`，因为核心干预是一个原则上可复现的来源混合、搜索式难度测量、模型特定筛选与下游 RFT 配方。它没有建立独立于 policy、critic、prompt 和预算的通用难度分数，也没有证明 MCTS 轨迹本身适合作为训练示范。

证据边界清楚但不完整。正文与附录给出 selector 逻辑、prompt、数据规模、消融与模型对比；官方仓库公开 MCTS 脚本和八分片启动器；官方 Hub collection 公开 70K 池、7B hard subset 与模型 checkpoint。然而，未发现 72B 筛选数据、完整逐条决策 ledger、失败搜索、上游行级清单、精确 GRPO reward、去污染报告或逐来源许可矩阵。因此本 Card 可用于机制筛选与审计设计，但不声称现有发布物能够精确复现论文运行。
