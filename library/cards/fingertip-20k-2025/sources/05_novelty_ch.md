论文中的 prior-work baseline 是以已给定任务和当前 UI 状态为中心的通用 mobile-agent evaluation，execution 实验包括 UI-TARS-1.5-7B。FingerTip 20K 改变了问题定义，使行为具有纵向性并以用户为条件：proactive suggestion 要在 intent 尚未给定时推断它，execution 则可利用画像和从同一用户早期行为中检索的示例（论文第 3、5 节）。

新的数据对象把真实生活中自记录的 intent、画像、时间/场景、screenshot/XML 状态序列和一个月使用期间的人类动作连接起来。新的反馈接口不是单一 automatic environment reward：suggestion 结合语义相似度与 DeepSeek-V3 判断，execution 结合人工终态检查、路径长度上限与动作序列相似度。由此，用户特定上下文和 mixed verification 成为一等审计对象。

不少组件来自既有做法，而非本文新创：Android GUI 动作、screenshot 与 accessibility-tree 观测、人类示范采集、相似度指标、learned judge、示例检索、LoRA、Qwen-2.5-VL-7B 和 live ADB execution。标题中的 “20K” 是取整后的数据集名称，不代表 20,000 个唯一任务；论文的 21,437 个采集 episode 也无法直接对应公开的 20,000 行索引。规模与下游分数都不是逐记录质量保证。

对 reasoning-data 研究而言，方向意义在于 agent episode 可以编码持续用户上下文，并同时作为 demonstration target 与 evaluation reference。复用前仍需检验哪些用户/画像字段确有必要、个性化收益能否在保护隐私的 ablation 中保留、最终成功如何裁决，以及其他有效路径是否会被错误惩罚。构建者还必须解释数量/划分差异、取得缺失的训练实现，并固定不断变化的 Android/app substrate，才能把发布视为可复现对象。
