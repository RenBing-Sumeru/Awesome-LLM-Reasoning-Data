最接近的构造基线提供两种不同的扩展杠杆：SWE-rebench 收集新鲜历史任务，并投入成本配置其环境；SWE-Smith 复用已准备环境，但在目标仓库内部生成合成缺陷。SWE-Mirror 组合两者：从外部真实 issue 获取语义模式，同时把可执行任务放入可复用的目标 Gym。

新的数据接口是成对迁移对象：源 issue/PR 抽象、目标 `problem_statement`、生成的隐藏 `test.patch`、引入故障的 `mirror.patch`、反向 `fix.patch`，以及三种状态的测试日志。反馈接口也比单次最终测试更严格：新增验证之前测试行为必须一致，issue 引入后必须失败，应用反向修复后必须恢复且不能出现论文列出的回归。

不少组件来自既有工作，而非本文独创，包括 GitHub issue 挖掘、Agentless 风格的定位与 patch 生成、SWE 风格任务 schema、可执行测试、OpenHands/MOpenHands 交互、拒绝失败轨迹和 Qwen2.5-Coder SFT。60,671 个任务与 40 个 Gym 的复用属于工程规模扩展，跨仓库语义再实例化才是概念变化。把它作为可复用 recipe 前，仍需检查源到目标的忠实度、语义重复、隐藏测试充分性、环境固定、发布完整性与 benchmark overlap。
