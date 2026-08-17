核心 pipeline 如下：

1. **输入与事实记录。** 调用方提供任务、随机性 `Policy`、`Environment`、message codec，以及可选的 `OutcomeFunction`。recorder 保存面向请求的精确 `state_before`、原始 provider action、随后得到的 observation 和根/分支标识。核心 tool loop 每轮接受一个 `tool_call` 或 `final` action；`final` 终止 episode，超过默认 `max_steps=20` 则抛出 `ReplayError`，不会保存截断运行。
2. **重建与保真度审计。** deterministic replay 根据已记录的 action 与 observation 重建 messages，并逐步检查 canonical state digest。随后在 `RecordedEnvironment` 注入事实 observation 的条件下重新调用 policy，报告每一步 action-signature match rate 与整条序列复现率。signature 比较 tool 选择与哈希后的参数，或比较 `final`；它不要求文本 token 完全一致，也不复现 live world state。
3. **干预与分支。** 从 `do_resample`、`do_action`、`do_observation`、`do_context` 和 `do_policy` 中选择一种。复制 branch index `k` 之前的步骤，在 `k` 应用干预并运行后缀。counterfactual forward replay 会向提供的 Environment 请求新输出，因此除非调用方提供 mock，真实工具可能再次执行。
4. **Outcome 与选择。** 用 `RuleOutcome`、`JudgeOutcome` 或其他调用方函数为每条完整子轨迹评分。contrastive attribution 保持 `[0,k)` 为事实前缀，对 `k` 及全部后续随机选择重采样 K 次。代码默认 K=16；arXiv v1 Figure 1 展示每一步 48 次 rollout。选出的 point of commitment 是 rescue-effect interval 排除零的最晚一步。
5. **交互归因。** Shapley 通过保留部分事实 action 定义 coalition，其余部分重新运行。代码默认 64 个 permutation、antithetic reverse pairing、每次 coalition evaluation 一个 rollout、不同 permutation 之间不缓存而重新评估，并可设置样本数或估计成本 circuit breaker。采样 marginal contribution 用 normal-approximation interval 汇总。
6. **输出与用途。** 保存根与子轨迹 JSON 及 SQLite lineage index，随后输出 reconstruction report、action-match summary、contrastive effect、causal-locus 决策或 abstention，以及/或者 Shapley value。支持的用途仅为 evaluation 与 audit；不存在 optimizer、policy-training scaffold、CAR split 或已发布的 CAR trajectory dataset。

复现必须区分三个 artifact 版本：arXiv v1 是五页 synthetic-SCM 论文；GitHub `v0.2.0` 的 commit `db90fa28b97164c35e7c524e4597b8cbdb3035af` 包含后续 adapter 与 Who&When 工作；PyPI 只提供 `0.0.1`。真实 replay 还需要固定 model/provider/runtime 与 tool 版本、sampling state、environment snapshot、reset 与 timeout 规则、idempotency 或 approval 控制及 rollback 语义；这些控制尚未作为 CAR 的共同契约实现。
