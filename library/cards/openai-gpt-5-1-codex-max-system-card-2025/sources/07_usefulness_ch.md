安全复用等级是 **reading/audit reference only**。本 Card 可用于建立前沿编码代理报告的比较披露矩阵：逐项检查报告是否点名 prompt 来源、record schema、generator、state/action trajectory、verifier 或 reward、environment、失败样例、split、decontamination、license、compaction budget 以及 item-to-checkpoint lineage。它也提供了一个具体案例，说明安全训练、benchmark evaluation 和部署防护必须作为不同层记录。

对于数据构造研究，已披露的恶意软件流水线提示了一个可审计目标 schema：prompt、代码片段、环境配置、policy 类别、目标 response、grader outcome、adversarial 或 edge-case 标签、provenance 和版本；但实际样例与 generator 不可用。对于 agent RL，冲突编辑干预提示可设计一项受控实验，保留按时间排序的 workspace diff、user-model action、agent action、保留判断、reward value、合理冲突标签，以及成功和失败 episode。这些是建议的重建要求，并非对已发布字段的主张。

对于 verifier 设计，报告可用于比较 policy grader、hidden test、端到端浏览器测试、environment predicate、专家 rubric、模型 judge 和 classifier 加人工复核的混合反馈。合适的后续 baseline 应在版本固定环境中测量错误保留、具有破坏性的“不回退”、合理冲突解决、grader disagreement 和 reward hacking。对于 evaluation，本 Card 中带条件的 protocol 能帮助审查 pass@k、rollout 数、context window、subset selection、refusal policy 和不可运行任务是否保持一致。

本 Card 不能用于训练类似 GPT-5.1-Codex-Max 的代理、复现其 RL 干预、验证其安全 reward、回放内部环境或再分发隐藏数据。任何下游训练项目都必须另行获得任务权利、发布 artifact、verifier 代码、环境版本以及训练/评测 overlap 证据。在这些条件满足前，适当用途是系统卡比较、审计清单设计和 failure-analysis 规划。
