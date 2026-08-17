OpenAI 于 2026 年 3 月 5 日首次发布 *GPT-5.4 Thinking System Card*。这是 living report：3 月 17 日加入 GPT-5.4 mini appendix，4 月 24 日更新 Chain of Thought Evaluations。当前 38 页 PDF 仍保留 3 月 5 日封面，却包含两项后续更新，因此本 Card 将 7 月 24 日检索快照视为版本化证据，而不是不可变首发 artifact。

报告对 Atlas 的核心问题是四个层次之间的归因。Training 点名通用 reasoning RL，以及面向 long rollout、computer-use confirmation policy、prompt injection 和 cyber safety 的 GPT-5.4 专属干预。Evaluation 使用动态对抗会话、对去标识 production-like traffic 的末轮重采样、policy/task grader、CoT audit、hidden test、flag 和 environment predicate。Monitoring 在审计套件中使用 GPT-5 Thinking CoT monitor。Deployment 再加入 topical cyber classifier、safety-reasoner monitor、block、access control 和人工复核。这些组件有关联，却不可互换。

最具体的训练对象是不断变化 workspace 中的长 agent rollout。Agent 被训练在长时间工作后回退自己的改动，同时保护隐式模拟用户工作。忠实的最小记录应包含任务与 workspace state、已有改动的 ownership、agent action 与 tool call、state diff、final artifact、自回退与保留判断及 feedback。Simulator、record schema、数量、detector、reward、terminal predicate、成功与失败 trace 和保留策略均未披露。

本报告属于 `frontier_reports_data_disclosure_ledger`，因为它暴露了多种 agent 与安全 feedback surface，同时保持 corpus 和 reward ledger 关闭。L4 表示 living page、当前 PDF、发布页、带日期更新和 section-level 证据足以支持双语审计，并不表示数据、grader、monitor、hidden test、权重或环境可复用。
