核心配方是 Motion Transfer：一种 VLA 架构与联合训练流程，目标是在 ALOHA、双臂 Franka 和 Apollo humanoid 数据之间对齐知识，同时混合公开互联网 text、image、video 数据。通用 VLA 评测中，同一个 checkpoint 控制三种具身，不做 embodiment-specific post-training，因此可以测试跨机器人技能迁移。

第二个思路是显式 embodied thinking。VLA 接收指令与感知后，先生成自然语言 thought，把它追加到 context，再产生连续动作。Thought 可以形成从高层计划、数秒片段到 primitive-motion inner monologue 的层级。这是可观察的推理接口；报告没有披露训练期 thinking target 由谁撰写、如何生成及过滤。

完整 agent 以 ER 1.5 作为 orchestrator。它处理用户输入与环境反馈，分解任务，按需调用 Google Search 或用户定义工具，向 VLA 发送自然语言步骤指令，并用 success detection 决定何时切换子任务。这种组合把语义规划与低层控制分开，同时保留 progress 和 failure 信号。
