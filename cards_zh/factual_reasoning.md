<!-- entry_id: learning-to-reason-for-factuality-2026 -->
<!-- card_type: releases -->
# Learning to Reason for Factuality：面向事实性的推理学习

## TL;DR

该工作发布经筛选的事实推理 SFT 数据和 DPO 对，而其在线 GRPO 轨迹及 reward 日志未发布。其混合反馈包含检索支撑的 claim 验证和 LLM 相关性判断，并非简单的事实正确/错误标签。

## 1. 这是什么工作？

- 年份 / 会议：2026 · ICML 2026。
- 图谱角色：数据发布、构造配方和 verifier/reward 设计。
- 领域 / 用途：长文本事实性、SFT 和偏好学习。
- 状态：`partial`。

它结合合成事实提示、候选回答筛选、偏好对和独立的在线 GRPO reward server。

## 2. 它暴露了什么数据对象？

公开的离线对象是 SFT Long-CoT 和 DPO chosen/rejected 对，包含 prompt、response、factual precision、supported claims、relevance、chosen/rejected 角色及 margin metadata。提示为 7,000 个 Llama-4 合成事实提示，以 WildChat 和 LongFact 的非测试 demonstrations 为基础；候选回答来自 Llama 3.3。发布内容不含 GRPO rollout、候选池或完整检索证据历史。

## 3. verifier / reward / judge / environment 是什么？

ScalableVeriScore 会抽取 claim、检索证据并进行 LLM 验证；相关性由另一个 LLM 判断。组合信号包含事实精度、细节和相关性，可能受到检索缺口、claim 抽取错误、judge 错误和 reward hacking 影响。复用前必须固定 reward server、检索语料、prompt 和组件日志版本。

## 4. 数据如何构造？

1. 用 WildChat 和 LongFact 非测试 demonstrations 作为依据，构造合成事实提示。
2. 每个提示生成 10 个 Llama 3.3 候选回答。
3. 用 ScalableVeriScore 和相关性 judge 评分。
4. 选取 factual precision 最高的回答作为 SFT 样本。
5. 当 margin 大于 0.1 且相对长度差不超过 0.1 时构造 DPO 对。
6. 在线 GRPO 使用单独的新鲜策略 rollout；这些轨迹未发布。

报告的离线划分包含 3,000 个 SFT 提示和 3,700 个 DPO 对；RL 划分为 4,000 个提示。GRPO 使用四个 rollout、temperature 1.0、最大 2,048 tokens。

## 5. 如何进入后训练或评估？

发布的 SFT 与 DPO 对可支持相应离线目标，但需遵守 CC-BY-NC-4.0、Llama 和第三方义务。在线 GRPO 无法仅凭发布数据独立重放：仍需要 reward server、检索状态、候选/rollout 日志和策略版本。

## 6. 复用前应核查什么？

- reward server、claim 抽取器、retriever、judge 和 prompt 版本。
- 检索证据 URL、快照、覆盖/误差分析和 reward 组件日志。
- 候选池、筛选 margin、被拒候选与在线 GRPO rollout。
- WildChat/LongFact 来源、许可、划分及与事实性 benchmark 的重叠。
- 长度/细节压力是否导致看似可信但缺乏支持的 claim。

## 7. 缺失信息或风险是什么？

verifier 与检索错误、judge 分歧和 reward hacking 仍可能发生。在线 rollout、reward 组件日志、候选池和完整证据来源均缺失。LongFact 被标记为非测试集，但完整 benchmark/检索重叠审计为 `unknown`；因此论文结果不能证明发布数据质量或无污染。

## 8. 为什么它对后训练推理数据重要？

它明确区分可复用的离线筛选数据与未发布的在线 reward 证据，也表明事实性反馈并非二元：细节、相关性、检索覆盖和评估器行为会共同改变有效训练信号。

## 9. 官方链接与引用

- [arXiv](https://arxiv.org/abs/2508.05618)
- [ICML 2026 / OpenReview](https://openreview.net/forum?id=byZ7DoyDNd)
- [官方数据](https://huggingface.co/datasets/facebook/factual_reasoning)
- [官方代码](https://github.com/facebookresearch/factual_reasoning)
- [DOI](https://doi.org/10.48550/arXiv.2508.05618)

Chen 等，*Learning to Reason for Factuality*，ICML 2026。

- Data ID：`learning-to-reason-for-factuality-2026`
- 引用状态：verified
- 置信度：high
- 发布状态：partial
