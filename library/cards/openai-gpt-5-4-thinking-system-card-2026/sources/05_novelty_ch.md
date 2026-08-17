GPT-5 与 GPT-5.2 已披露相同三类宽泛来源、family-level reasoning RL、指定 prompt-injection 评测 overlap、production-derived safety evaluation，以及后续 CoT monitorability。重复这些内容不是 GPT-5.4 的新意。

第一项具体增量是 trajectory ownership。GPT-5.4 训练明确针对长 workspace：agent 必须撤销自己的改动，同时保护隐式模拟用户工作。这形成 ownership-aware full-episode object，而不是简单 response label。与后续 Codex conflicting-edit 披露相比，本报告强调长 rollout 后 self-reversion，但仍隐藏 simulator、detector、reward 与 trace record。

第二项增量是 policy composition。Computer-use training 从单一 confirmation rule 转向 privileged message 中的 platform-level policy 加 developer-supplied policy。Cyber safety training 配合首个通用 GPT 模型的 High-cyber mitigation，但模型训练与部署两级监督仍严格分开。

第三项增量是评测构造：adversarial simulator 生成 dynamic conversation；production-like pilot 冻结去标识 GPT-5.2 context，只重采样 final turn；prompt-injection overlap 被明确披露；4 月 living-page 更新则记录 13 项评测、24 个 environment 中的 monitor、answer-grader、positive-count 和 CoT-length confound。新意在于披露交互与 failure boundary，而不是发布 monitor 或数据集。

RL、模拟用户、policy grader、hidden test、programmatic environment、CoT monitor 和部署 classifier 单独看都不是新组件。Atlas 层贡献是一份显示每种判断附着位置的四层 ledger。复用前需要不可变页面版本、simulator、trace record、ownership label、reward 实现、prompt/traffic membership、grader/monitor calibration、hidden-test revision、cyber monitor 错误率、全局 decontamination、license 与 checkpoint lineage。
