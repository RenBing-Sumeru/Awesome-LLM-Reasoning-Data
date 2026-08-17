论文于 2025 年以 arXiv:2506.04178 首次公开，随后被接收为 **ICLR 2026 Oral**。本卡的 primary-source 边界包括官方 OpenReview 记录、ICLR virtual page、arXiv v2 全文与附录、OpenThoughts 项目站、官方仓库，以及 OpenThoughts3 数据集和模型页面。2025 年是论文首次公开年份，2026 年是接收 venue 年份，两者描述不同事件，不能合并为同一个时间点。

它要解决的工程问题是：当 question source、source mixing、prompt-quality filtering、teacher 重复采样、answer filtering、teacher choice 和数据规模都可能改变 student 的下游行为时，如何选择一条有证据的监督推理数据 recipe。前沿模型通常没有充分披露这些变量，而逐项复现实验又需要昂贵的 teacher inference 和大量 student 训练。OpenThoughts 用 1,000 多次受控实验研究这些选择，再把选出的流程扩展为 OpenThoughts3。

一条发布记录是离线、单轮的 SFT item，包含四个可见字段：

| 字段 | 发布内容 |
|---|---|
| `difficulty` | 整数形式的 prompt 难度元数据 |
| `source` | 粗粒度来源标签 |
| `domain` | 数学、代码或科学 |
| `conversations` | 通常由 human question 与 QwQ-32B assistant message 组成；后者同时包含推理过程和最终答案 |

assistant message 是 answer-level 监督目标。记录没有附带正确性标签、unit-test 输出、reward、process label、acceptance score、上游 item ID、来源版本、license、采样 seed 或去污染判定。发布的 1,200,000 行位于单一 `train` split、分布在 120 个 Parquet shard 中，约含 85 万条数学、25 万条代码和 10 万条科学数据。

该工作属于 **Data Construction & Open Release Recipes**，因为它公开并检验了 source → prompt filter → 去重/去污染 → teacher 重复生成 → SFT → release 这条链路中的多项选择。它不是 RLVR、偏好、PRM 或交互式 agent 发布：论文仅用 SFT 训练 OpenThinker3-7B，公开对象中也没有 reward、preference pair、step label、environment state 或可重放 episode。

完整双语分析由论文与附录，以及可检查的官方代码、数据、模型、项目和 venue artifact 支持，因此本卡达到 L4。L4 不等于可安全复用：上游权利未解决、逐条 provenance 粗糙、拒绝日志缺失、teacher answer 未验证，以及当前官方配置中存在 plaintext credential，仍是阻断性审计发现。
