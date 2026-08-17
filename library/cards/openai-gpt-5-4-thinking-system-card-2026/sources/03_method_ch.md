已披露系统必须重建为四条流水线。

**Training。** 三类宽泛来源先经过高层质量/风险 filtering、个人信息减少和安全 classification。Reasoning model 接受未披露 RL。GPT-5.4 专属干预包括：长 rollout 自回退并保护隐式模拟用户工作；在 computer-use 中遵守 platform 与 developer 提供的 confirmation policy；prompt-injection training，其 connector/function-call 评测被承认为训练数据 split；以及面向校准双重用途帮助、拒绝或降级有害 action 的 cyber safety training。任务来源、simulator、trace schema、label、reward、detector 逻辑、rollout 数、optimizer、schedule、compute 和 checkpoint lineage 均为 unknown。

**Evaluation。** Challenging Production Benchmarks 选择先前模型失败的难例，不代表平均 production prevalence。Dynamic safety evaluation 生成可适应的 multi-turn conversation，并检查每条 assistant message。Production-like evaluation 从近期 GPT-5.2 Thinking 的去标识 conversation 采样，保留上下文，只用 GPT-5.4 Thinking 重采样最后一轮，再应用 automatic label；它是 point-in-time model-only estimate。Prompt-injection 评测使用与训练重叠的 split。其他表面使用 HealthBench example-specific rubric、GPT-4o fairness judgment、policy/task grader、CoT-Control instruction、hidden unit test、cyber flag、environment success、medal threshold、pass@1，以及 expert/manual review。

**Monitoring and audit。** 4 月 24 日 monitorability 更新定义 13 项评测、24 个 environment 和三类 archetype。GPT-5 Thinking 观察 CoT、action/final output 或 all messages；task-specific answer grader 提供目标 label；g-mean-squared 与 cross-fit filtering 聚合结果。CoT-Control 将来自 GPQA、MMLU-Pro、HLE、BFCL 和 SWE-bench Verified 的 13,000 多道问题与控制 CoT format 的合成 instruction 配对。该审计 pipeline 不是训练 reward。

**Deployment。** High-cyber 监督先应用 topical classifier，再由 safety-reasoner monitor 按 threat taxonomy 判断。Flag 可以触发异步 message block、actor-level enforcement、trusted-access control 和人工复核。System-message policy 与 account control 位于模型外围，可独立于训练变化。

评测预算必须附着于具体表面：CVE-Bench 使用三次 rollout、zero-day prompt、无源码访问、40 题中可运行 34 题和 pass@1；Cyber Range 使用 16 次 trial，只要任一成功就判场景通过；外部 cyber 任务最多 1,000 turns，每 100K token compaction。Monorepo-Bench 从 pre-change branch 开始，允许 command-line 与 Python action，仅当全部人工编写 hidden unit test 通过才成功。MLE-Bench 使用选定 30 个 competition 子集和 bronze-medal predicate。没有一项被披露为训练 sampling 或 reward。

复现需要不可变 living-page revision、simulator/monitor checkpoint、prompt、label、traffic frame、environment commit、hidden test、budget、sampling、grader calibration、全局 membership 和 item-to-checkpoint lineage。这些均未发布。
