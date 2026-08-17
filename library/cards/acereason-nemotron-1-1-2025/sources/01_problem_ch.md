主要来源是 NVIDIA 作者团队于 2025 年 6 月 16 日提交的 arXiv v1 报告。论文提出两个相互关联的后训练问题：增加唯一 prompt 与增加每个 prompt 的 response，分别如何影响 7B SFT 初始化模型；更强的 SFT 初始化经过较长的、基于 verifier 的 RL 课程后，是否仍保持优势。对本 Atlas 而言，关键对象不是榜单条目，而是从 prompt 来源、教师输出、规则 reward、阶段筛选到发布 artifact 的披露链。

必须区分三个相关对象。公开的 AceReason-1.1-SFT 训练 split 保存 `category`、`source`、`input` 和 `output`，其中所有 output 均声明来自 DeepSeek-R1。未发布的 RL 对象被描述为 question、ground-truth answer、8 或 16 个 on-policy response、规则生成的 score 与 token-level advantage。最终模型在明确采样预算下接受数学和代码 benchmark 评测，但这些分数不能证明 SFT 发布物等同于实际使用的混合，也不能证明 verifier 可靠。

该论文属于 `frontier_reports_data_disclosure_ledger`，因为它比仅发布权重的模型公告披露了更多数据与反馈管线，同时仍有关键缺口：论文 v7 混合有 220 万个样本，来自 38.3 万个 prompt；公开 SFT artifact 则有 3,970,332 行，来源统计合计 514,807 个 question。官方还发布了相关的 49,585 行 AceReason-Math artifact，但完整代码 RL 语料、测试、reward 代码与不可变的阶段到检查点 manifest 均不存在。因此，本 Card 将其视为部分披露账本，而非可完全回放的构造配方。（论文 §3.1–3.2；官方 SFT 与 AceReason-Math 数据卡。）
