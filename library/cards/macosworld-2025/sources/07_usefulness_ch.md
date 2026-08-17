对`environment_agent_trajectory_data`而言，macOSWorld是一套评测环境recipe：应保留task ID、指令语言、AMI/snapshot ID、准备命令、macOS/应用版本、截图序列、规范化VNC action、conversation history、终止状态、grader output和安全结果。在同一固定任务对象上同时记录成功与失败episode，可支持轨迹失败分析、grounding诊断与环境版本研究。

对`benchmarks_evaluation_surfaces`而言，任务特定AppleScript/JavaScript/zsh命令是终态可执行反馈的具体实例。研究者可逐项审计predicate的false positive、false negative、部分奖励丢失、版本脆弱性和gaming，再把二值成功与另行设计的细粒度reward比较，但不能把后者写成本文已发布内容。

29项安全子集可用于受控研究上下文欺骗，前提是把`gold`、`distracted`和未处理三种结果保持分离，只在分析阶段与普通任务成功连接。多语言变体可检验prompt语言与本地化界面如何共同影响planning和grounding，但语言比较需要控制应用覆盖和right-to-left布局。

当前复用等级是**仅限评测与审计**。直接训练复用仍受以下缺口阻挡：不可变轨迹manifest、明确的训练/评测划分、decontamination检查、evaluator错误分析、逐记录provenance/权利，以及把task JSON、AMI、应用、模型adapter与结果绑定起来的版本化bundle。论文的benchmark分数说明这些审计值得开展，但不能认证数据对象。
