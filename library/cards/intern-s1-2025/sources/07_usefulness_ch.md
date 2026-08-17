在“前沿报告与数据披露账本”轨道中，Intern-S1 是比较科学多模态流水线的一个细节较丰富的案例。它支持结构化审计：哪些来源进入 CPT？哪些 parser 或 classifier 改写它们？一条离线指令记录是什么？难度如何估计？哪些任务由程序生成？每类任务由哪种奖励判断？哪些记录、环境与 verifier 实现真正发布？

本 Card 支持精确的下游标签。Intern-S1 使用论文称为“offline RL”的 demonstration-style SFT，并进行混合验证的在线 RLVR。易验证任务可以接收 CompassVerifier、规则或环境奖励，开放式对话则接收 POLAR-7B。模型权重已开放，但训练记录、完整任务清单、奖励路由和可回放环境没有开放。使用者可以研究 recipe 并运行 checkpoint，却不能从已核查产物重建数据流水线。

最可复用的经验是区分 recipe disclosure 与 artifact disclosure。具体计数、过滤规则和优化设置确实提高可审计性，但不会自动让来源混合、被选记录或 verifier 误差变得可观察。要在不把基准结果误写成数据质量结论的前提下比较前沿报告，这一区分至关重要。
