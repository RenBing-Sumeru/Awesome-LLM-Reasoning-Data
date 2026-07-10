<!-- entry_id: nemotron-math-proofs-v2-2026 -->
<!-- card_type: releases -->
# Nemotron-Math-Proofs-v2

## TL;DR

Nemotron-Math-Proofs-v2 是 NVIDIA 发布的、由 DeepSeek-V4-Pro 生成的 AoPS 来源证明、验证和元验证对话。嵌入的自然语言分数不是形式化证明检查；发布完整性、筛选、失败比例以及 AoPS 来源权利仍未解决。

## 1. 这是什么工作？

- 年份 / 来源：2026 · NVIDIA Hugging Face 数据集发布。
- 图谱角色：数据发布、过程监督与构造配方。
- 领域 / 用途：数学证明、SFT 和评估。
- 状态：`partial`。

它只替换 Cascade-2 的自然语言证明子集，不替换相关的 proof-refinement 数据。

## 2. 它暴露了什么数据对象？

每条记录是两轮证明、验证或元验证对话。公开字段为 `messages`、`problem`、`subset` 和 `uuid`；种子题目来自 Nemotron-Math-Proofs-v1 的 AoPS 来源子集，轨迹使用 DeepSeek-V4-Pro Max inference mode 生成。发布内容没有行级形式化证明对象、接受/拒绝标记或文档化的分数抽取 schema。

## 3. verifier / reward / judge / environment 是什么？

验证是按 DeepSeekMath-V2 风格 prompt 进行的自然语言 teacher 判断，文本中嵌入 boxed `0`、`0.5` 或 `1`。没有形式化 checker、校准研究、假阳性/假阴性分析或已披露的终止谓词。自然语言验证轨迹不能被当作 theorem prover 证书。

## 4. 数据如何构造？

1. 取 AoPS 来源的 v1 题目子集。
2. 用 DeepSeek-V4-Pro Max inference mode 生成证明、验证和元验证对话。
3. 使用 DeepSeekMath-V2 风格的自然语言验证 prompt。
4. 发布所得 train JSONL。

筛选规则、temperature、推理预算、基座模型、rollout 数和 optimizer 均为 `unknown`。

## 5. 如何进入后训练或评估？

它可在解析嵌入式分数、固定数据 revision 并独立验证证明质量后，用于证明 SFT 和评估。若没有外部 proof checker 或经过独立审计的标注协议，不适合作为形式化过程监督。

## 6. 复用前应核查什么？

- 固定 JSONL revision `7665d7f1d006fd89aa852a9dab8060c60b63f814` 并独立枚举记录。
- 调和 card 所称 82,737 条记录与 Dataset Server 部分转换暴露的 23,799 条之间的差异。
- 审计分数解析、分数分布、verifier prompt、teacher 配置以及与外部 checker 或专家的一致性。
- 确立 AoPS 来源、再分发权利、训练/评估重叠和去污染情况。
- 确认筛选/保留逻辑，以及失败或低分轨迹是否被表示。

## 7. 缺失信息或风险是什么？

Dataset Server 相对于声明总量仅部分可见。筛选、失败轨迹比例、去污染和独立正确性证据均为 `unknown`；分数嵌入自然语言，解析可能含糊。发布声明 CC-BY-4.0，但该声明并不能确立 AoPS 来源权利。任何 benchmark 结果都不是单条证明轨迹正确性的证据。

## 8. 为什么它对后训练推理数据重要？

它提供了证明与自验证轨迹，同时清楚保留模型的自然语言判断与形式化证明契约之间的边界。将这些记录复用为训练标签时，该边界至关重要。

## 9. 官方链接与引用

- [官方数据集](https://huggingface.co/datasets/nvidia/Nemotron-Math-Proofs-v2)
- [固定 revision 的 JSONL](https://huggingface.co/datasets/nvidia/Nemotron-Math-Proofs-v2/resolve/7665d7f1d006fd89aa852a9dab8060c60b63f814/data/train.jsonl)
- 官方论文：`null`
- 官方代码：`null`

NVIDIA Corporation，*Nemotron-Math-Proofs-v2*，数据集发布，2026。

- Data ID：`nemotron-math-proofs-v2-2026`
- 引用状态：verified
- 置信度：medium
- 发布状态：partial
