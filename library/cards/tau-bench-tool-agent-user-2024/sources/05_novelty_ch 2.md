既有工作基线是：工具使用 benchmark 常测试单条指令下的函数选择；任务型对话 benchmark 常评估对话而不包含有状态 API 变更和规则式终止谓词；Web 类 agent 环境测试交互，但不一定同时包含隐藏用户信息与领域 policy 遵守。

新变化是 tau-bench 把四个面绑定在一个 benchmark 中：LM 模拟用户、有状态数据库工具、领域 policy 和最终状态 reward。pass^k 指标也把问题从“agent 是否有一次能做对”改为“agent 能否在随机多轮对话中持续做对”。

方向信号在于：客服 agent 需要长程可靠性，而不只是工具调用语法正确。Tau-bench 把协作、部分可观测、policy 阅读和数据库状态验证变成 agent evaluation 的核心，后续工作又沿着 dual-control、task fixes、voice、knowledge 等方向扩展。

质量信号包括形式化环境定义、任务构造流程、代码/数据发布、benchmark 统计、baseline 结果和失败分析。官方仓库也已经把它与 tau2/tau3 后续工作连接起来，说明该基准在同一系列中持续演进。

并不新的部分包括 LM 用户模拟、工具调用、规则式 reward 和任务型对话。新意在于把这些组件组合成可重复的可靠性 benchmark，并用数据库状态评分和 pass^k 衡量一致性。

复用前需要检查精确仓库 tag、任务版本、task fixes、license、用户模拟器模型、动作预算、prompt scaffold，以及分数来自原始 tau-bench 任务还是后续 tau2/tau3 代码库。
