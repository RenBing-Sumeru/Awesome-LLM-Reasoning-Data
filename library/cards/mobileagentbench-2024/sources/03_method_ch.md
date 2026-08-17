输入包括任务指令、Android emulator 状态、该任务需要的应用数据、agent policy 或模型 wrapper，以及任务 validator。观察可以包含截图式视觉上下文，也可以包含 accessibility/UI 结构，具体取决于选用的 agent 接口。

benchmark 流程如下：

1. 安装 benchmark，准备 Android emulator、所需应用和任务数据。
2. 选择任务集合，并为单个任务 reset emulator/应用状态。
3. 向 agent 暴露当前 observation。
4. 在 emulator 中执行 agent 的 UI-level action，并记录状态转移。
5. 重复直到 agent 停止、超时或达到步数预算。
6. 运行任务 validator 给出 success/failure，并在任务集合上聚合分数。

verifier 是任务特定 validator 及其检查的 emulator 状态。复现时要固定 MobileAgentBench 仓库版本、Android emulator 镜像、系统/应用版本、seed data、Python 依赖、action interface、task list、step budget、model prompt 和 baseline-agent 配置。未能在精确 release 中核验的字段应保持未知：public/private split 规则、数据完整 license、评测中是否调用外部 live service。
