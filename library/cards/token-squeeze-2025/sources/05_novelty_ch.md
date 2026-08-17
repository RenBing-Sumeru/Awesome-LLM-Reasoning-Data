基线并不只是“让输出变短”。shortest-correct selection、prompt/decode compression、token penalty、SFT、DPO 与外部模型 rewriting 都已覆盖问题的一部分。论文比较了 shortest/fixed-quantile/Q-DYN selection、GPT-4o-mini 与 TokenSkip rewriting、DPO、SFT 和组合目标（Tables 2-4）。

具体变化是一套分层数据/反馈接口：正例深度随单提示正确率变化，而不是全局最短规则；rejected 候选明确更长且错误；只有局部 continuation-distribution KL 代理通过时才能缩短步骤；DPO-L 按 chosen/rejected 长度缩放 preference margin，而 SFT 稳定正例。贡献在于组合，而非孤立组件（论文 §§3.1-3.3）。

对 rollout-trace 类别，这说明 selector、verifier 行为、候选长度和 objective 是耦合的。改变采样数或 merged_verify 会改变 p、正例与 pair 分布，因此应在匹配 rollout 和生成预算下与 search-distillation 配方比较。

并非新的部分：答案核验、自采样、DPO、SFT、KL regularization、长度惩罚与 rewriting 都早于本文。KL 不正式证明语义保持，benchmark 提升本身也不建立数据质量。复用需有完整生成记录、comparator 审计、选择分布、排除样本、源许可证、重叠检查与固定版本。
