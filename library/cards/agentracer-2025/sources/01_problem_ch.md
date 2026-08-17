AgenTracer 追问的不是多智能体系统是否完成任务，而是：一次执行失败后，哪个智能体诱发了失败，以及纠正哪个最早决定性步骤会改变终局结果。单一的环境成功/失败信号无法回答这种归因问题；不受约束的 LLM 诊断又可能看似合理，却与终局没有因果联系。因此，该工作把责任智能体与决定性步骤归因视为由反事实回放落地的 process-level supervision（论文第 3—4 节）。

论文层面的数据对象是一条完整轨迹 `tau=(s0,a0,...,sT)`，以及责任智能体 `i*` 和决定性步骤 `t*`。构建过程还使用任务 ground truth、环境反馈、所提出的纠正或变异，以及回放后的终局结果。公开 parquet 的对象更窄：每行含 `question_ID`、`question`、`ground_truth`、`history`、`mistake_agent`、`mistake_step`、`mistake_reason`；每个 history item 含 `content`、`name`、`role` 与整数 `step`。它没有公开成对干预、回放 transcript 或终局 evaluator 输出。

该工作属于 `environment_agent_trajectory_data`，因为标签附着在可执行 episode 内具名智能体的动作上，并由环境层面的结果翻转决定保留或丢弃。它不是完整 agent-training 轨迹的通用发布，不是纯程序化 verifier 数据集，也不能证明自由文本 rationale 忠实。其反馈契约是“模型提出干预 + 任务特定执行”的混合形式。

ICLR 官方页面将其列为 ICLR 2026 Poster；`agentracer-2025` 仍保留为 atlas 稳定 ID，因为首个 arXiv 版本发布于 2025 年。官方 venue、OpenReview/arXiv 论文与附录、项目页、固定 commit 的仓库审计和已发布文件检查，足以支持 L4 内容；这些证据只支持方法与有限公开样本，不支持把 TracerTraj-2.5K、AgenTracer-8B 或论文规模 RL workflow 写成已经发布。
