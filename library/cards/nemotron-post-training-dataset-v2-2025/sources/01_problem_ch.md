本卡以 NVIDIA 官方 Hugging Face 数据卡为该发布的主要来源，并用其关联的 arXiv 报告 *NVIDIA Nemotron Nano 2: An Accurate and Efficient Hybrid Mamba-Transformer Reasoning Model*（2025 年 8 月 20 日）核对更完整的后训练流程。数据版本为 2.0，日期是 2025 年 8 月 20 日；下载文件需要同意共享联系信息。

这里的具体问题不只是如何汇集数学、代码、STEM、对话和多语言数据，还包括如何审计每条保留的监督记录：prompt 来自哪里、哪个模型生成了回答、哪项检查决定接收、适用哪些权利条件，以及记录进入了哪个训练阶段。Nemotron-Post-Training-Dataset-v2 暴露了大规模 SFT 风格记录，但重要的来源、判定和训练运行 lineage 仍停留在发布级说明。

可见的单条记录包含 `uuid`、`license`、`generator`、`version`、`category`、`reasoning`，以及由 role/content 组成的 `messages` 序列。九个发布 split 合计 6,341,414 条记录。它属于 **Data Construction & Open Release Recipes**，因为发布提供了明确的打包数据对象和顶层构造说明；但它不是可重放的 RL 语料：公开 schema 中没有逐条 reward、拒绝候选、verifier 输出、rollout 分组或 SFT/RL/DPO/RLHF 阶段标识。

官方数据页、官方引用、完整报告与附录，以及 NVIDIA 官方数据目录共同支持本卡达到 L4。原始 Parquet 核验、不可变文件清单、逐条来源和去污染证据仍未解决。
