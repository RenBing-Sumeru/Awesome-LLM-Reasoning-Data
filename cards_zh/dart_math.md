<!-- entry_id: dart-math-2024 -->
<!-- card_type: releases -->
# DART-Math：面向数学解题的难度感知拒绝微调

## TL;DR

DART-Math 发布两个经难度感知和 verifier 过滤的合成数学 CoT 数据集，用于 SFT。正则/SymPy 检查只建立最终答案接受条件，不能证明每一步推理正确；复用前须固定当前 Hugging Face 行数与 revision。

## 1. 这是什么工作？

- 年份 / 会议：2024 · NeurIPS 2024。
- 图谱角色：数据发布、构造配方和程序化 verifier。
- 领域 / 用途：数学推理 SFT。
- 状态：`partial`，但论文、代码、collection 和数据产物已核验。

它比较均匀拒绝采样与按估计提示难度分配采样预算的策略。

## 2. 它暴露了什么数据对象？

数据对象是带正确性与采样元数据的答案级 query/response 对：提示来自 MATH、GSM8K 训练题及原创示例；CoT 由 DeepSeekMath-7B-RL 生成；发布 Uniform 与 Hard 两套 query/response 数据及已接受回答池，字段包括 query、response、答案正确性、来源元数据、采样次数和 pass rate。

metadata 记录 Uniform 590,705 行、Hard 585,392 行 viewer 数据；可复现复用仍需固定不可变的数据集 revision 和最终行级来源。

## 3. verifier / reward / judge / environment 是什么？

系统以正则抽取答案，再用 SymPy 符号计算判断最终答案。保留的回答是抽取结果通过等价判断的回答。它不会形式化验证 CoT；已知的 GSM8K 标签错误会影响接受结果，难度也依赖具体生成模型。

## 4. 数据如何构造？

1. 取 MATH/GSM8K 训练提示及原创示例。
2. 通过 vLLM 用 DeepSeekMath-7B-RL 采样自然语言 CoT。
3. 用正则与 SymPy 抽取并检查最终答案。
4. 在 Uniform 分配或与观察到的失败率成比例的 Hard 分配下，保留通过的回答。
5. 用所得答案级样本进行 instruction tuning。

最终数据设置为 `k_u=40`、`k_p=192`、最大 2,048 tokens、`top-p=0.95`、temperature 1.6。完整原始试验和全部拒绝池是否公开尚未确认。

## 5. 如何进入后训练或评估？

它支持答案级数学 SFT，不应被视为已验证的过程监督：最终答案正确的样本仍可能含有无效或无依据的中间推理。复用时应保留来源、生成器、checker 版本、分配规则和接受结果。

## 6. 复用前应核查什么？

- 固定 Hugging Face collection/dataset 的 revision、manifest 和最终行数。
- 复核 MATH/GSM8K 及原创示例的许可、划分和来源。
- 保留原始试验上限、随机种子、checker/parser 版本、分配日志和失败样本。
- 审计语义及模型预训练重叠；目前没有独立审计。
- 检查抽取失败、符号等价边界和错误源标签。

## 7. 缺失信息或风险是什么？

最终答案正确不代表 CoT 有效。完整拒绝轨迹、不可变 manifest 和独立语义/预训练去污染审计尚未确认。仓库/cards 显示 MIT，但上游许可兼容性仍需审查。论文的 benchmark 结果评估的是模型/数据组合，不证明发布轨迹普遍高质量。

## 8. 为什么它对后训练推理数据重要？

它把最终答案验证、试验预算、依赖生成器的难度估计和最终 SFT 分布分开，使分配策略可审计，也说明结果 verifier 不足以支撑过程质量主张。

## 9. 官方链接与引用

- [NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/0ef1afa0daa888d695dcd5e9513bafa3-Abstract-Conference.html)
- [arXiv](https://arxiv.org/abs/2407.13690)
- [官方代码](https://github.com/hkust-nlp/dart-math)
- [官方数据](https://huggingface.co/datasets/hkust-nlp/dart-math-hard)
- [官方 collection](https://huggingface.co/collections/hkust-nlp/dart-math)
- [DOI](https://doi.org/10.52202/079017-0251)

Tong 等，*DART-Math: Difficulty-Aware Rejection Tuning for Mathematical Problem-Solving*，NeurIPS 2024。

- Data ID：`dart-math-2024`
- 引用状态：verified
- 置信度：high
- 发布状态：partial
