DockSmith 处理的是软件工程智能体数据经常隐去的一项前提：智能体开始修复代码之前，仓库必须先变成能够构建、运行目标测试、返回有效诊断并给出可信终止信号的环境。规范书目信息以 OpenReview 上的 ICML 2026 最终版为准；arXiv v2 用于定位章节与附录，但作者名单与最终版有实质差异。本文属于“环境与智能体轨迹数据”赛道，因为监督信号来自仓库与 Docker 环境中的状态—动作—观察循环，而非静态的问题—答案对。

数据源从 GitHub 仓库中的已合并 pull request 开始，仓库至少有 500 stars 和 200 forks。论文面向十种语言、超过 15,000 个仓库，保留包含实质代码修改与测试相关修改的 PR，并可能用语言模型扩写简短的 PR 描述。Docker rollout 与验证前约有 200,000 个经过整理的 PR 派生实例。人工合并和测试相关修改只是任务来源筛选条件，并不能证明后续生成的 Dockerfile、evaluation script 或轨迹成功。

论文层面的一个实例是多轮环境构造 episode：仓库与任务上下文；Context Retrieval、Dockerfile、Eval Script、Test Analysis 四类智能体的动作；Dockerfile 与 evaluation-script 产物；shell、构建和测试命令；执行日志、失败摘要与修复；以及最终的构建/测试结果。公开数据对象更窄：39,719 个按智能体拆分的聊天片段关联到 2,876 个 instance ID，消息字段为 `role`、`content`、`loss_mask`，旁路索引另含 `sample_id`、`instance_id`、`agent_type`、`source_file` 和 `num_assistants` 等字段。39,719 是 fragment 数量，不是 39,719 条完整 episode；筛选后用于训练的完整 episode 数仍为 unknown。

正文以 L4 内容深度连接任务来源、环境交互、执行反馈、仅成功轨迹进入 SFT 的选择边界、公开 fragment schema、实验证据与审计风险；规范 `curation_level` 仍保持 `L3_summary_ready`，等待人工 workflow。下游基准分数不被视为每个片段都正确、安全、许可清晰或可重放的证明。
