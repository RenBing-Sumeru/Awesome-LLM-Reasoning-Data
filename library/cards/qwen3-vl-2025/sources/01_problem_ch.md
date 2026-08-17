Qwen3-VL 需要在同一多模态家族中协调多种后训练契约：标准指令遵循、显式 long CoT、长文档/视频、小模型蒸馏、确定性推理 reward、开放式偏好 reward、grounding 与 agent 行为。把报告只当作模型分数表，会掩盖不同数据对象与反馈风险。

报告披露了有意义的聚合配方——约 120 万 SFT 样本与约 30K 条 Reasoning-RL query——但没有发布可复用后训练数据集。确切来源、权利、split、teacher、mixture weight、reward 配置、被拒记录与逐条 checkpoint lineage 均为 unknown。本卡属于 `frontier_reports_data_disclosure_ledger`：只记录已披露构造边界，不把公开 checkpoint 或 benchmark 结果升级为数据质量证据。

