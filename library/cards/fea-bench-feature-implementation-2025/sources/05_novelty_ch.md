SWE-bench 从 issue 与修复 PR 构造真实仓库 bug-fix tasks，验证模型能否恢复已有行为。FEA-Bench 沿用可执行环境与 F2P/P2P oracle，但把任务选择标准改为“新增功能”：PR 必须增加新组件，同时修改仓库中与其交互的既有代码。

新意因此不是新的测试 harness，而是 feature-specific data selection 和意图审计，使 benchmark 同时要求 code completion 与 repository editing。它填补的是任务类型缺口，而非提出新的 coding agent 或训练目标。
