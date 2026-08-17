**输入与初始化。** 论文称从公开的 MATH-train 和 NuminaMath 中抽取 RL 提示。已核验 launcher 读取 `datasets/train/train_30k.jsonl`，使用 `text`、`label` 和 `data_type`；但没有随附逐行映射，将其连接到论文点名的两个来源。策略会为每个提示生成 M 条完整初始链。

**搜索与反馈。** EPTree 会屏蔽接近结尾的位置，以负对数概率作为不确定性度量给可用 token 排序，从入选位置继续生成分支，并形成叶节点。论文给每个叶节点赋予 1 或 0 的最终答案奖励；后代正确性成为节点价值，再形成全局加局部 advantage；重复的非叶更新采用平方根重加权。launcher 调用私有 extractor 与 binary judge 服务，因此已部署的答案规范化和等价判断行为为 unknown。

**训练设置。** 论文报告每次更新使用 16 个提示、温度 1.2、top-p 0.95、最大长度 8192、学习率 1.5e-6、KL 系数 1e-4。它在相近生成 token 预算下比较 30 个 EPTree 叶节点与 16 个独立回答，但报告 TreeRL 的训练 batch 为 480、ChainRL 为 256；相同推理成本不等于相同训练计算量。已核验 launcher 在模型家族、叶节点参数、温度、top-p、最大长度和学习率上相符，但设置 KL=0.0 且 `NUM_TRACE=16`。论文匹配的完整命令、服务部署、原始树序列化器和 checkpoint 均未核验。
