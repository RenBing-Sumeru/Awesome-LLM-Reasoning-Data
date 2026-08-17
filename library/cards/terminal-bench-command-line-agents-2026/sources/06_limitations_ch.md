最大局限是 benchmark drift。仓库描述的是 beta 套件和持续扩展，论文描述的是特定 Terminal-Bench 2.0 快照。只有固定 task set、dataset version、harness version、runtime image、package dependencies、timeout policy 和 agent adapter 时，结果才可比较。

第二个局限是 contamination。公开任务指令、测试、参考解法和轨迹都可能进入训练数据。一旦发生，高分可能反映 benchmark 记忆或对 harness 的特化，而不是通用命令行能力。

该 benchmark 还依赖环境保真度。网络访问、package mirror、Docker 行为、OS 细节、flaky tests 和硬件差异都可能改变结果。程序化测试比自由文本 judge 更清楚，但仍可能低估任务意图，或奖励脆弱捷径。

最后，命令行只是 agent interface 的一种。Terminal-Bench 不测 GUI 感知、网页导航、语音交互或 human-in-the-loop 协作流程。它应被视为强 terminal substrate，而不是所有专业智能体工作的完整代理。
