这份 addendum 可作为模型更新 delta 报告模板。一张可靠的增量卡应明确分开：继承的家族背景、改变的训练干预、刷新的评测数据、新审计流程、部署 mitigation，以及未知的 checkpoint delta。

对自动审计设计者，290-seed/1,160-transcript pipeline 展示了应发布哪些结构元数据。可复用版本还应开放 seed、generator prompt、random seed、retry policy、scorer prompt/checkpoint、per-item score、人工 calibration 与 bootstrap code。

对 agentic-safety 研究者，把 prompt-injection RL、system instruction、real-time detector、execution halting 和 monitoring 分开，是有价值的系统视角。因果归因需要 component ablation 与共享 attack set。

对 benchmark curator，training-distribution 警告、held-out-test scope、evaluation-awareness 观察、checkpoint mismatch 与历史数值修正，构成一份防止过度声称的简明检查表。
