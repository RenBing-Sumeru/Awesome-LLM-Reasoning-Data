核心审计流程从 290 条刻意极端的 seed instruction 开始。一个基于 Claude Opus 4 的 auditor 为每个目标模型——Claude Sonnet 4、Claude Opus 4、Claude Opus 4.1——扩展出 1,160 条模拟 interaction，每条持续 24–64 turns。目标模型产生被审计的 response 与 action。

随后，model-based scorer 衡量八项 alignment criterion；四个额外 scorer 在同一批 transcript 上评估 welfare-related attribute；另有 Opus 4-based judge 识别 admirable behavior。这形成可扩展的比较审计，但同一家族模型同时参与生成与判断，会产生相关的风格和偏好风险。

训练方面，addendum 明确命名了面向 computer-use 与 agentic-coding misuse 的 harmlessness training，以及抵御环境 prompt injection 的专门 reinforcement-learning training，但没有披露 attack、rollout distribution、reward、verifier、algorithm 或相对部署 detector 的 ablation。

Addendum 还报告两个未命名 training environment 中的 reward-hacking monitoring。这些结果是后训练行为审计信号；环境、任务记录、reward、样本数、classifier 和 calibration 均未开放。
