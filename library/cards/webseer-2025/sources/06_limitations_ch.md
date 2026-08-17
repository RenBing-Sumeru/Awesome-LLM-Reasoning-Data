若干关键构造事实仍为 unknown：确切的训练 prompt 来源与混合、teacher 或轨迹生成策略、verifier 模型、(K)、(n_{max})、继续推理阈值、(\alpha)、长度阈值、解码 temperature、随机 seed、详细数据划分和去污染流程。两个 Hugging Face card 除 license metadata 外几乎没有文档，因此文件可下载并不能解决 lineage 或选择偏差问题。

冷启动过滤采用不对称的存活规则：成功修复的 episode 会保留，而完全失败或达到预算上限的 episode 会被丢弃。重复查询 verifier，直到二元判断与已知正确性一致，可能筛中一次偶然正确的判断，而不是测得校准能力；证据路径仍可能不完整或具有误导性。因此，已发布的成功轨迹不能作为失败频率的无偏证据。

各阶段环境并不一致：论文训练使用受 Wikipedia 限制的 Google Site Search，论文评估使用 Google Web Search 与 Jina，仓库推理说明则使用 Serper。API 版本、索引、parser 行为、网页内容和网页阅读器模型输出都会漂移。评估还使用 LLM-as-a-Judge 且只允许一次提交，而 SRRL 训练使用 F1 等任务特定得分并允许多次提交；这些判定条件不能互换。

仓库缺少完整评估脚本和 tagged release。小模型训练崩溃与畸形 JSON 也限制了规模结论。论文没有记录源数据许可、网页内容隐私、污染控制、被拒 verifier 样本以及发布完整性。因此，benchmark 提升不能证明过程记录质量或端到端可复现性。
