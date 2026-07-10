<!-- entry_id: womd-reasoning-2025 -->
<!-- card_type: releases -->
# WOMD-Reasoning：面向驾驶交互推理的大规模数据集

## TL;DR

WOMD-Reasoning 将 Waymo Open Motion Dataset 场景转为规则支撑和 LLM 撰写的驾驶问答，其中包含未来轨迹上下文。确定性的场景事实与生成的交互叙述应当区分；后者没有发布逐项形式 verifier，且可能包含离线 hindsight。

## 1. 这是什么工作？

- 年份 / 会议：2025 · ICML 2025。
- 图谱角色：数据发布、benchmark 与构造配方。
- 领域 / 用途：自动驾驶交互推理、SFT 和评估。
- 状态：`partial`。

它是与 WOMD 场景和 agent identity 绑定的驾驶语言构造发布，支持可选的 MetaDrive 视觉渲染。

## 2. 它暴露了什么数据对象？

scene JSON 将 WOMD 地图、交通灯、agent 运动和未来轨迹字段连接至经替换的 Q&A ID，包含 `scene_id`、ego/周边 agent ID、interaction ID、当前/未来时间、以及环境、ego、周边 agent 和交互视角的问题与答案。报告的构造覆盖约 63,000 个场景和 294 万条 Q&A，其中约 40.9 万条为交互/意图 Q&A。

## 3. verifier / reward / judge / environment 是什么？

规则转换为地图和运动事实提供 grounding。Azure GPT-4-Turbo 生成交互与意图 Q&A；这些叙述没有发布的逐项形式 verifier 或通用终止谓词。论文报告约 90% 的初步人工评估准确率，但这不是行级质量证书，也不验证每个生成解释。

## 4. 数据如何构造？

1. 选择 Objects-of-Interest 和交互相关的 WOMD 场景。
2. 将地图、交通灯、agent 运动和未来状态转成规则支撑的自然语言上下文。
3. 提示 Azure GPT-4-Turbo 生成交互和意图 Q&A。
4. 存储场景/agent/时间连接，并可选用 MetaDrive 渲染场景。

精确拒绝策略、API prompt/version、temperature、推理预算和 Waymo archive revision 均未在可复用记录中披露。

## 5. 如何进入后训练或评估？

它可用于驾驶语言 SFT 与评估，但必须分别标记确定性 grounding 和 LLM 撰写叙述。任何使用未来轨迹的条目必须标为离线 hindsight，而非可部署的实时感知目标。商业复用还须审查仓库研究/非营利条款和 Waymo 条款。

## 6. 复用前应核查什么？

- 固定 Waymo archive、仓库 commit、场景/split manifest 和 MetaDrive 渲染版本。
- 保留 rule translator 版本、Azure prompt/model/API 设置、采样失败与拒绝决策。
- 标识所有依赖未来轨迹的 Q&A，并判断其是否适合目标用途。
- 审计 LLM hallucination、替换 ID 映射、人工评估抽样/协议、隐私和来源权利。
- 进行语义/预训练及 benchmark 重叠检查；去污染为 `unknown`。

## 7. 缺失信息或风险是什么？

LLM 叙述可能 hallucinate。未来轨迹可能造成 hindsight leakage，agent-ID 替换并不会消除 Waymo 条款、隐私或来源权利义务。Waymo archive 受限且 revision 未固定；生成数据失败和完整筛选策略不可得。人工或 benchmark 表现不能证明每个 Q&A 的数据质量。

## 8. 为什么它对后训练推理数据重要？

它使一个重要区分可见：确定性状态 grounding 可以与生成的解释性监督共存，但二者承载不同的错误、因果和复用风险。将所有 Q&A 视作同等“已验证”会掩盖该差异。

## 9. 官方链接与引用

- [ICML/PMLR](https://proceedings.mlr.press/v267/li25l.html)
- [arXiv](https://arxiv.org/abs/2407.04281)
- [官方仓库](https://github.com/yhli123/WOMD-Reasoning)
- [Waymo 下载](https://waymo.com/open/download/)
- [OpenReview](https://openreview.net/forum?id=lTBq5LOUKC)

Li 等，*WOMD-Reasoning: A Large-Scale Dataset for Interaction Reasoning in Driving*，ICML 2025。

- Data ID：`womd-reasoning-2025`
- 引用状态：verified
- 置信度：medium
- 发布状态：partial
