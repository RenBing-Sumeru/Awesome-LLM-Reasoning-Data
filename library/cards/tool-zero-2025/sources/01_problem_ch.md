规范来源是 ACL Anthology 收录的 Findings of EMNLP 2025 终稿，页码 9135–9147，DOI 为 `10.18653/v1/2025.findings-emnlp.485`；较早的 ACL ARR/OpenReview 版本和 arXiv:2511.01934 是其他官方记录。Tool Zero 研究的问题是：在训练早期精确规则反馈过于稀疏时，能否不经过 SFT checkpoint，直接用强化学习让 base language model 学会可靠的函数调用。（论文 §1、§4.2–4.3）

论文把工具使用形式化为查询 `q` 与工具集合 `T` 上的轨迹：每一步把自然语言推理 action、所选工具子集，与工具执行或用户反馈产生的 observation 配对。实际报告的 RL 单元更窄，并且是离线的：ToolACE 或 xLAM 的 prompt/对话历史加 JSON candidate-tool list，由策略补全为自然语言 thought 和一个或多个 Python 风格函数调用，再与 ground-truth call 和 reference AST 比较。论文没有发布 Tool-Zero 专属 live environment 或可重置执行服务。

这一区分使论文属于 `environment_agent_trajectory_data`，因为它定义 thought/action/tool/observation 字段；同时也属于 `training_usage_optimization_objectives`，因为主要贡献是 GRPO 消费的整段 completion 标量反馈。它不是已发布的 agent-environment 数据集、learned reward model、process-supervision 语料或新 benchmark。BFCL-v3、API-Bank、Nexus Raven、Tool-Alpaca 与 Seal-Tools 都是评测面。

本 Card 根据终稿、appendix、官方 venue 记录、checklist、上游 dataset card 和 MindSpeed-RL 检查，以双语 L4 内容深度撰写。规范元数据仍保持已接受的 `L3_summary_ready`：Tool-Zero 专属代码、处理后训练语料、checkpoint、评测 harness、不可变 benchmark 版本，以及报告数字不一致的解释均未公开。
