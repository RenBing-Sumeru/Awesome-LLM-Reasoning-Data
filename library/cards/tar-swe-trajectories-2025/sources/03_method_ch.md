输入池来自三种系统的原始评测日志。RepairAgent 只保留主修复轨迹并排除 mutation sub-trajectories；AutoCodeRover 因后续版本不可用而采用 V1，从三次运行中取第一次，并使用 SWE-bench Lite instance；OpenHands 提供 CodeAct 在 SWE-bench Lite 上的 issue-resolution 运行。作者对每个 agent 随机抽取 40 条轨迹，并按比例保留约 10 条成功案例，但没有披露随机种子或不可变 sampling-frame 版本。

解析器按 agent 定制。RepairAgent 与 OpenHands 提供结构化 JSON，但仍需专门抽取；AutoCodeRover 输出为半结构化格式，解析器启发式识别 tool call，把前置文本归为 thought，并定位 call result。统一分析 episode 是有序 thought、action、result 序列；公开 RQ1 CSV 还包含 instance_id、n_iterations、is_resolved 和 token 指标。发布提供多个解析后的 pair view，而不是单一 canonical row schema。

动作分析先自动映射已知工具，再人工检查其余 action。最终词表有八类：Explore、Locate、Search、Reproduce、Generate Fix、Run tests、Refactor、Explain。无法归入任何类别的 action 占 8.3%，并被排除在后续动作分析之外。成功与失败轨迹通过固定长度、n=4 的 action n-gram 进行比较。

语义分析把相邻组件分为五类关系：thought-action、thought-thought、action-action、result-thought、result-action，并对约 14,000 个 pair 做 open coding。第一作者用五个月完成标注；两位作者共同讨论标签体系、处理歧义、交叉检查标注并复查异常。论文没有报告完整 double-coded 比例、数值一致性、adjudication log 或版本化标注指南。

终止验证随 substrate 而异。AutoCodeRover 与 OpenHands 用 SWE-bench 测试判断最终补丁是否解决 issue；RepairAgent 先使用 Defects4J plausibility，再人工比对补丁是否与开发者补丁相同或语义等价。RepairAgent 的上限为 40 次迭代，OpenHands 为 100 次；精确解码参数、重试、成本，以及这些日志中 AutoCodeRover/OpenHands 的 backbone model 均为 unknown。论文只明确 RepairAgent 使用 GPT-3.5。

输出包括轨迹统计、解析后的 thought/action/result 视图、action-category CSV、五类语义标注、序列挖掘结果，以及成功/失败对比。证据支持的用途是 evaluation 和 audit；研究没有执行 SFT、PRM、reward-model、RLVR 或 agent-policy training。复现必须固定 agent/benchmark commit、raw logs、parser 版本、所选 instance 清单、environment、工具版本、reset semantics、标注指南和仓库快照，而这些信息尚未全部提供。
