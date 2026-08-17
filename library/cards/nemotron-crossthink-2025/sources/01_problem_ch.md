本卡的主要来源是 arXiv:2504.13941v3、NVIDIA 项目页和官方 Hugging Face 发布。RLVR 在正确性可形式化时最自然，但通用推理同时包含 MCQ 与开放题，其答案空间、来源质量与验证规则不同。把这些任务都当作数学式精确答案问题会产生脆弱 reward，而只用数学训练又可能无法覆盖法律、人文、社会科学与科学推理。

Nemotron-CrossThink 将其视为数据、格式、reward 和混合问题。论文训练池包含来自六个来源的 588,645 条提示；公开 release 只含两个合成组件，即 187,496 条 QA 和 99,880 条 Math。发布行提供提示和规则 ground truth，而不是完整推理轨迹。对 `frontier_reports_data_disclosure_ledger` 而言，关键边界是：可核验的公开提示数据已经存在，但完整 blend、在线 rollout、reward 与 checkpoint lineage 仍缺失。

