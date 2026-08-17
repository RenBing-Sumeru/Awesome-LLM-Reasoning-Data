ComplexMCP 的核心贡献，是同时依据必需的最终状态变化与非预期 collateral change 来评测长程 MCP 交互。sandbox 在多个相互依赖的应用上暴露大量工具；确定性 seed 规定初始状态和扰动，递归状态差分 evaluator 再把执行后的环境与任务目标比较。

数据／评测对象有两层。task 层把 query 与 application set 绑定到 seed、difficulty level、通过验收的参考轨迹、参考调用数和目标状态。episode 层则是有序的 ReAct-style history，包含模型或标注者文本、带 JSON 参数的具名 tool call、结构化 response 或 error、隐式状态转移、结束条件和捕获的 final state。current release 为 47 个任务各物化一条人工接受的参考 episode；被评测模型的 history 主要以汇总指标报告，并未作为完整 corpus 发布。

反馈契约是明确的。设 target-state diff 中有 `T` 个必需变化，completion 为 `M/T`，其中 `M` 是匹配的必需变化数；misbehavior 为 `Mb/T`，其中 `Mb` 统计 collateral change；binary success 要求 completion 等于 1 且 misbehavior 等于 0。evaluator 递归比较嵌套状态，排除部分 timestamp 或 random-ID 字段，并对 content 字段使用特殊 fuzzy matching。该契约能观察编码进目标状态的要求与非预期差分，但不能证明未编码的语义要求已满足、有效替代状态应被接受，或 reasoning trace 本身质量较高。

在指定 track 中，最近的对照是 tau2-bench：二者都把可执行有状态环境作为 verifier 的组成部分；但 tau2-bench 关注双控制客服交互，并在论文时期 tag 下发布成功与失败评测 episode。ComplexMCP 更关注大规模 MCP tool space、跨应用依赖、seeded fault 与最终状态 collateral-change accounting；其当前官方 release 只保留通过验收的 gold/reference episode，且没有论文时期 release lock。

因此，方向信号并不只是“工具更多”，而是把 stateful task、action/observation history、target-state delta 与 collateral-change check 连接为同一个可审计 evaluation object。其有效边界仍受公开 evaluator 实现、rollout 保留不完整以及未经校准的安全暴露限制。
