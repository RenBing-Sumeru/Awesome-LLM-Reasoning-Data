发布页只将预训练输入描述为从 Qwen3 的 36T-token 语料中均匀采样的 15T-token 子集，没有提供来源混合、文档标识、来源权利、数据版本、过滤、去重、污染控制或保留记录 schema。因此，可报告的 lineage 仅限于 Qwen3 语料、采样得到的预训练子集、Qwen3-Next-80B-A3B-Base，以及后训练的 Instruct 与 Thinking 变体。

[Thinking 模型仓库](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Thinking)标注“Pretraining (15T tokens) & Post-training”，以 Apache-2.0 提供权重与配置，并给出推理说明。Instruct 仓库对 non-thinking 变体提供相应工件。模型卡称 Qwen3-Next 的推理支持已合入 Hugging Face Transformers；这使推理架构可检查，但不等于原始训练流水线可检查。

在 RL 方面，发布页点名 GSPO，而通用 GSPO 来源给出了基于 query 与分组响应的序列级目标。已接受来源均未说明 Qwen3-Next 的 query 集、响应生成器、teacher、奖励或验证器、judge、分组构造、终止条件、优势计算、损失系数、rollout 数量、解码设置、优化器、日程、检查点选择或训练环境。这些字段均保留为 unknown。

Thinking 模型卡建议多数 query 使用 32,768-token 最大输出长度，复杂数学或编程 benchmark 使用 81,920。这些是推理与 benchmark 设置，不是训练时 rollout 预算的证据。

