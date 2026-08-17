官方 arXiv 报告称，该发布覆盖模型家族的完整生命周期，包括构建所用的每个阶段、检查点、数据点和依赖项。AI2 项目页给出了从预训练，经 Think/Instruct 的 SFT、DPO、RL，到 RL-Zero 的阶段图，并链接到可下载工件。

官方预训练集合标明了完整预训练数据池、midtraining 数据池、长上下文数据池、最终阶段混合数据和较小的实验混合数据。官方后训练集合列出了 Think SFT/DPO/RL、Instruct SFT/DPO/RL、RL-Zero 数据、相应检查点和工具使用子集。7B Instruct model card 独立说明 Dolma 3 用于预训练、Dolci 用于后训练，并列出 Base、SFT、DPO 和 RLVR 阶段。

论文为数据选择和反馈提供了机制层面的证据，例如已发布的来源混合表、microanneal/integration-test 流程、按任务划分的 verifier、去污设置和 RL 超参数。这些事实足以支持可审计的披露台账，但并不单独证明外部团队已复现每个工件、validator、generator 或结果。
