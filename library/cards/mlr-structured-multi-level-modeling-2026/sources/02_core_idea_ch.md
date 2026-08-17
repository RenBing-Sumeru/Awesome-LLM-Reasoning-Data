官方 `MLR_structured_trajectory` 含 12,039 条、约 360 MB 的结构化推理轨迹，覆盖 MATH、AIME24、GPQA 和 BoardgameQA。每条记录保存 prompt、完整 reasoning、最终回答、正确性及 steps；每步含 `cognitive_mode`、`subgoal`、`summary`、`outcome` 与原文，可用于层级监督、planner/executor 训练和轨迹诊断。

四个配置分别保留任务来源与模型输出，统一的 steps 列表把原始长链映射为可训练的层级状态；官方以 Parquet 形式发布，可直接用于结构化 SFT。
