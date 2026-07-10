<!-- entry_id: nemotron-post-training-dataset-v2-2025 -->
<!-- card_type: releases -->
# Nemotron-Post-Training-Dataset-v2

## TL;DR

Nemotron-Post-Training-Dataset-v2 是一个受访问控制的、包含 634 万行的多语言 SFT 风格发布，记录含 generator 与 license 字段。其发布级文档没有提供行级 reward、被拒候选、rollout 或训练阶段谱系；不能将它重述为可审计的 RL、DPO 或偏好语料。

## 1. 这是什么工作？

- 年份 / 来源：2025 · arXiv。
- 图谱角色：数据发布、构造配方和 verifier/reward 文档。
- 领域：数学、代码、STEM、聊天、多语言和指令遵循。
- 状态：`partial`；公开 metadata 已核验，完整 parquet 访问受限。

这是 NVIDIA v2 后训练混合数据，覆盖数学、代码、STEM、聊天和五个多语言子集。

## 2. 它暴露了什么数据对象？

行记录提供 `uuid`、`license`、`generator`、`version`、`category`、`reasoning` 和 `messages`。提示来自公开/开放或合成来源，合成生成使用命名的 DeepSeek 和 Qwen 模型族。634 万行发布分为九个类别/语言 split，但并不将单行映射到来源、训练阶段、reward 结果或被拒备选。

## 3. verifier / reward / judge / environment 是什么？

不同子集据称使用 tool rules、IFEval rules、guards 或 reward models。公开 row schema 不标识每行使用了哪种 verifier、结果、输入、版本、阈值或错误率。因此，发布级的反馈契约是 mixed，而记录级为 `unknown`。

## 4. 数据如何构造？

1. 获取公开/开放或合成提示。
2. 使用命名的 DeepSeek 与 Qwen 模型族生成回答。
3. 应用报告的质量/复杂度、语法和目标语言过滤。
4. 以 revision `5c89e01dd720ae0f4058445ed49c5fb68a03c76e` 发布 v2.0 parquet。

采样设置、temperature、推理预算、逐行提示/来源，以及 SFT/GRPO/DPO/RLHF 阶段映射均未公开。

## 5. 如何进入后训练或评估？

它是 SFT 风格混合数据。在获得受限文件访问、固定 revision 并审查每行许可与来源后，记录字段可用于 SFT。没有明确的阶段和比较/reward 映射时，不应把它视为已发布 RL、DPO 或偏好数据。

## 6. 复用前应核查什么？

- 取得并固定可访问文件、checksum 和声明的 v2 revision。
- 审计每行 prompt 来源、generator/version、license、语言/类别和重复情况。
- 要求 verifier/reward 结果、被拒候选、rollout 谱系及 SFT/GRPO/DPO/RLHF 阶段映射。
- 调和 ODC-BY、CC-BY-SA 和模型许可等例外与仓库 CC-BY-4.0 声明。
- 检查 split、去污染及 benchmark/模型预训练重叠；这些目前均为 `unknown`。

## 7. 缺失信息或风险是什么？

完整 parquet 访问受限。可见 schema 缺失 reward、被拒候选、rollout 和训练阶段字段；来源混合与去污染在行级并不完整。许可例外需逐行审查。数据规模和下游 benchmark 分数均不是每一行数据质量一致的证据。

## 8. 为什么它对后训练推理数据重要？

它展示了具备丰富 metadata 的版本化发布与可重建的 RL 数据谱系之间的差别。generator 与 license 列有助于审计复用，但不能替代 reward、选择和阶段来源。

## 9. 官方链接与引用

- [arXiv](https://arxiv.org/abs/2508.14444)
- [官方数据集](https://huggingface.co/datasets/nvidia/Nemotron-Post-Training-Dataset-v2)
- [DOI](https://doi.org/10.48550/arXiv.2508.14444)
- 官方代码：`null`

Nathawani 等，*Nemotron-Post-Training-Dataset-v2*，2025。

- Data ID：`nemotron-post-training-dataset-v2-2025`
- 引用状态：verified
- 置信度：high
- 发布状态：partial
