系统卡没有发布训练或后训练语料、prompt/task 记录、preference comparisons、thought traces、worker labels、记录模式、来源清单、混合权重、记录数量、版本、权利映射、入选或拒绝记录，或条目级谱系。它没有公开先前模型 trace 生成器的身份和 checkpoints、生成 prompts、trace filters，或各个 traces 在训练中的作用。

RLHF、来自 AI feedback 的强化学习和 inoculation prompting 被点名，但没有给出奖励契约。奖励模型和 AI-feedback 来源、preference protocol、目标、权重、归一化、verifiers、校准、terminal predicates、环境规范、优化器、调度、rollout policy 和 checkpoints 仍为 unknown。11,000-transcript 子集和数十万 transcript 审查都是内部分析，并不是发布的数据集或可复现的监测制品。

所述去污染控制在没有训练语料、benchmark snapshots、代码、filter 配置、保留/移除记录列表、保留率和完整审计结果时无法独立复现。其已记录的失效——改写的 AIME 问题、官方解答和模型生成答案仍然存在——意味着这些控制不是干净评测分离的保证。能力和安全评估也在很大程度上依赖内部或删节制品，因此不应被理解为可独立重跑的证据。

