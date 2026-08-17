权威入口是 ACL Anthology：论文发表于 2025 年 7 月的第 63 届 Association for Computational Linguistics 年会长文集第一卷，页码 16285–16298。论文及附录研究的问题是：当优化中的策略逐渐偏离奖励模型原来的训练响应分布时，如何让学习式奖励模型继续提供有效反馈。反复获取人类新标注可以应对漂移，但成本较高；固定 RM 则会留下 reward hacking 与校准失效通道。（论文 §1；ACL 官方记录）

该工作属于 `data_construction_open_release_recipes`，因为它的核心对象不是新的静态语料，而是训练期间持续构造动态偏好视图的配方。一条 E-step 记录包含 UltraFeedback 提示、当前策略生成的五个响应、当前 RM 分数，以及经长度控制后供 DPO 使用的 chosen/rejected pair。一条 M-step 记录包含奖励更新提示、选中更新策略与上一策略各自生成的响应、两者的当前 RM 分数及差值、随迭代变化的标准差阈值，以及伪偏好 pair 的保留或丢弃决策。主要 RM 更新还会把这些策略比较记录与策略更新阶段产生的 self-training 偏好混合。（论文 §4.2–4.3、§5.1、§5.3；附录 B–C）

论文没有解决通用偏好获取，没有提供新的人类真值，也没有证明学习式 RM 是可靠的 verifier。实验只研究由 Llama-3-8B-Instruct 与 FsfairX-Llama3-RM-v0.1 初始化、基于 UltraFeedback 的指令跟随策略与合成 pairwise feedback。反馈契约依赖判断：当前标量 RM 同时决定候选排序、checkpoint 选择、伪 pair 筛选和后续训练数据。因此它适用于 preference learning 与 reward modeling，不应被当作程序可验证结果数据、SFT 数据或普遍正确的奖励 oracle。

将其纳入 Atlas 的价值在于，Mutual-Taught 把 RM 刷新明确纳入数据谱系：策略变化产生新比较，新比较又改变下一轮标注策略数据的 RM。当前 L4 内容边界包括完整 ACL 论文与附录、官方书目信息，以及对论文所印 GitHub 地址的核查。机制和报告表格可追溯，但训练复用仍受阻：官方链接当前指向 Alignment Handbook 快照，而非可验证的 Mutual-Taught 实现；动态 pair、被拒日志、配置、checkpoint 和 split manifest 也均未找到。
