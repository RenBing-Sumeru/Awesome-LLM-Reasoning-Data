<!-- entry_id: guided-rest-2025 -->
<!-- card_type: recipes -->
# Guided ReST：带引导的强化自训练

## TL;DR

Guided ReST 是一种迭代式自训练配方：保留得分为正的策略样本，同时注入训练期子目标或参考代码引导。官方代码可用，但没有发布冻结的 rollout 语料、缓冲区、来源版本或 checkpoint。

## 1. 这是什么工作？

- 年份 / 会议：2025 · NeurIPS 2025。
- 图谱角色：构造配方与扩展研究。
- 领域：通用推理与后训练。
- 状态：`partial`。

它是迭代的强化自训练方法，而非已发布的静态推理轨迹数据集。

## 2. 它暴露了什么数据对象？

方法层面的记录包含：由公开 Hugging Face 数据集提供的提示、当前策略的回答、任务得分，以及可选的训练期 `subgoal_guidance` 或 `reference_code_guidance`。公开脚本读取外部数据集并生成缓冲区，但精确来源版本、生成行、得分、引导值和缓冲区成员均未发布。

## 3. verifier / reward / judge / environment 是什么？

任务特定评分只保留得分大于零的样本。复现时必须逐任务固定评分实现、任务混合和误差率。正分只是接受规则，不能证明轨迹完整正确、无捷径行为或对其他任务可迁移。

## 4. 数据如何构造？

1. 加载公开提示数据集，但当前 card metadata 未固定其版本。
2. 用当前策略采样回答；在配置时加入训练期子目标或参考代码引导。
3. 以任务特定信号评分，仅保留正分样本。
4. 将保留缓冲区用于下一轮自训练。

任务混合、rollout 数、temperature、推理预算、基座模型和冻结缓冲区 manifest 均为 `unknown`。

## 5. 如何进入后训练或评估？

它可用于 SFT 风格的强化自训练；若另行定义显式比较规则，也可用于偏好式过滤。复用必须重建每个任务的 scorer、来源版本、引导边界和保留策略；它不是已冻结的 SFT 或偏好数据集。

## 6. 复用前应核查什么？

- 提示数据集、版本、许可、划分和 benchmark 重叠。
- scorer 实现、版本、校准、阈值和假阳性/假阴性。
- 子目标/参考代码是否仅允许在训练期使用。
- 引导生成、截断、任务混合、rollout 设置与随机种子。
- 已接受/已拒绝样本、保留率和跨迭代缓冲区谱系。

## 7. 缺失信息或风险是什么？

子目标和参考代码属于特权信号，可能泄露部署时不可用的 oracle 结构；正分筛选也可能奖励捷径。未发布冻结 rollout、缓冲区、被拒样本、checkpoint、去污染审计或生成数据划分；上游数据集的权利仍需审查。

## 8. 为什么它对后训练推理数据重要？

它明确区分了可部署输入和仅训练期的特权引导。该边界以及背后未发布的选择缓冲区，对复用的影响大于任何单项 benchmark 分数。

## 9. 官方链接与引用

- [arXiv](https://arxiv.org/abs/2502.04327)
- [官方仓库](https://github.com/Meta-Llama/guided-rest)
- 官方数据发布：`null`
- 官方 Hugging Face 发布：`null`

*Guided ReST: Reinforced Self-Training for Large Language Models*，NeurIPS 2025。

- Data ID：`guided-rest-2025`
- 引用状态：verified
- 置信度：medium
- 发布状态：partial
