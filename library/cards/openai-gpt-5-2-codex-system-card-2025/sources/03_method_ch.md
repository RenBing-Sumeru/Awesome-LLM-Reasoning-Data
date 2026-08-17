已披露的训练路径只能在接口层面重建。输入是未公开的编码任务、仓库状态和一个独立 user model。在 RL rollout 中，user model 制造冲突编辑，GPT-5.2-Codex 在可变工作区中执行编码或工具动作。随后某个保留判定机制检查模型是否撤销了这些用户修改，不撤销会获得正向强化，训练产物是 GPT-5.2-Codex 策略检查点。仓库选择、prompt 来源、user-model checkpoint、observation 与 patch schema、episode 终止条件、过滤、rollout 数、temperature、RL 算法、奖励尺度、目标混合、optimizer、schedule、compute 和保留轨迹均为 unknown。

报告另行说明，GPT-5.2-Codex integrations 接受了 cyber safety training，使其能够帮助教育或防御性请求，并拒绝或降级处理操作性滥用请求。训练样本、标签来源、grader、数量、目标权重和成员关系均未披露。报告将长时程能力提升部分归因于 context compaction，但其算法、触发条件、保留状态、训练 curriculum 和生产预算同样未知。

评测采用不同 pipeline。OpenAI PR 任务把内部仓库的 PR 前版本与人工编写的 prompt、tests 和 hints 配对；agent 使用命令行工具和 Python 修改文件，hidden unit tests 提供“全部测试通过”的 terminal predicate。Professional CTF 使用 16 个 rollout 并报告 pass@12；CVE-Bench 每题使用 3 个 rollout，在 40 题中因 6 题无法移植而只评测 34 题，并报告 pass@1；Cyber Range 运行 16 次，只要任一 trial 成功就判定场景通过。外部 cyber elicitation 使用 auto-compaction、xhigh reasoning 和最多 1,000 turns。这些都是评测 sampling 与终止契约，不是训练设置。

唯一明确的 split 控制范围很窄：cyber policy-compliance 评测数据被声明与训练不重叠，部分指定 bio 评测被描述为 held out 或 uncontaminated。报告没有提供全局 train/dev/test manifest、代码仓库重叠审计或 destructive-action split。复现需要固定仓库、container 和工具版本、prompts、user model 与策略 checkpoint、完整动作轨迹、奖励实现、hidden tests 或等价公开测试、grader 版本、sampling budgets 和逐项 lineage。
