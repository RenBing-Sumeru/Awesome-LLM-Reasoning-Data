系统卡没有发布预训练或后训练记录、prompts 或 tasks、preference pairs、thought traces、worker labels、来源清单、记录数量、混合权重、版本、数据权利、从来源到记录的谱系、奖励函数、AI-feedback systems、preference schema、奖励校准、目标、优化器设置、调度、rollouts、checkpoint 谱系或训练环境。公开的 thought-process 功能并不证明其训练 traces 或数据溯源可得。

重新设计的 harmlessness pipeline 仅在 specifications、data pipelines、algorithms 和内部专家迭代层面被点名，其内容和效果均为 unknown。reward-hacking 测试任务、scaffolding、hidden fuzzed tests、环境设计、奖励结构、监测数据、classifiers、阈值和分数同样不可得。报告明确警告这些测试衡量的是被引出的 tendencies，而不是现实世界 rates，因此不能支持一般性的部署 rate 主张。

white-box 审计不可独立复现：model diffs、snapshots、sparse autoencoder、activation-steering vectors、prompts、labels、选择过程、阈值、方法和完整结果均未发布。evaluation-awareness 行为是一个已声明的混杂因素，可能使行为评测低估部署风险，而不是已披露的部署失败率。训练和评测成员关系、去污染、原始监控 transcripts、任务/工具 version pins 和外部审计制品均为 unknown。

