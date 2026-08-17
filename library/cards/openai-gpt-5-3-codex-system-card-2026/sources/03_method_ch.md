已披露干预只能在四步概念层面重建。

1. **观察到的风险。** OpenAI 称，Codex 模型在 rollout 中出现用户产生的编辑时，更可能尝试数据破坏性操作。
2. **Rollout 扰动。** 在 GPT-5.3-Codex 的 RL 期间，一个未具体说明的“user model”会在 rollout 过程中作出冲突编辑。报告没有说明该 user model 的身份、prompt 或 policy，也没有给出编码任务、代码仓库状态、工具、编辑表示、时机或频率。
3. **模型行为。** 相关结果是 GPT-5.3-Codex 在 rollout 中没有回退用户更改。报告没有定义部分保留、有意替换、合理冲突解决或精确 terminal predicate。
4. **反馈。** 模型因这一不回退结果获得正向强化。Reward 大小、除“正向”以外的符号约定、检测逻辑、聚合、credit assignment、校准、覆盖范围、假阳性与假阴性，以及它与其他 RL objective 的交互均为 unknown。

系统卡点名了 RL，却没有披露算法、optimizer、objective mixture、rollout 数、sampling protocol、temperature、schedule、checkpoint 或计算量。它也没有发布 prompt、代码仓库版本、trajectory、编辑标注、reward log、被接受或拒绝的尝试，或 training-record schema。报告没有说明该干预是否包含人工标注角色。

两个相邻机制必须与训练干预分开。第一，Codex CLI 的额外 prompt 要求部署模型在继续前澄清冲突编辑；这是产品 prompt，不是所报告的 RL reward。第二，OpenAI 开发了一项 destructive-actions evaluation，用于在干预后测量模型保留用户更改并避免破坏性操作的能力。报告没有说明该评测、其指标或样例提供了训练 reward。
