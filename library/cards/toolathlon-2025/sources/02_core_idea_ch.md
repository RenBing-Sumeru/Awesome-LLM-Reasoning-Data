Toolathlon 的核心贡献，是把真实跨应用任务、可执行环境初始化、完整工具交互 episode，以及任务专属的确定性终态 evaluator 绑定为一个 benchmark contract。论文把任务建模为包含 state、action、observation、transition、reward 与 instruction 的 POMDP；实际实现则把 reward 收窄为智能体完成交互后的 execution-based success（论文第 2.1 节，第 3 页；第 2.4 节，第 5 页）。

任务对象包含简洁或模糊指令、选定的 MCP server 与本地工具、初始化资产，以及静态或动态获取的 ground truth。轨迹对象包含连续的 assistant 决策、工具调用、工具响应与不断变化的 workspace/application state。在已检查的当前代码中，`traj_log.json` 还记录 resolved configuration、request/session ID、时间戳、执行状态、统计量和成本；`eval_res.json` 记录 `pass` 以及 detail 或 failure。这些当前文件名与字段对应仓库 commit `3b647e6`，不能据此声称论文时期每次运行都使用完全相同的序列化格式。

反馈契约是确定性终态评测。每个任务都有人工编写的 evaluator，把最终 workspace 或 application state 与静态快照或实时 ground truth 比较。`TaskEvaluator` 在成功执行后返回 `pass=true` 或 `false`，执行状态不是 `SUCCESS` 时返回 `pass=null`。因此，agent loop 结束、最终自然语言回答或 `claim_done` 都不是正确性的 terminal predicate；只有执行后的 evaluator 才能确立 benchmark success。

不能混淆 state-action 细节与监督粒度。日志保留 state-action-tool 事件，因此可以进行 state-action-level 分析；但已披露 reward 只是完整 episode 的一个终态 binary outcome。论文没有报告逐步正确性标签、critique、preference pair、dense reward 或 process-reward trace。evaluator 能观察任务专属代码实际查询的状态字段；它不能认证未查询的副作用、用户满意度、谓词之外的语义质量，也不能保证其他有效终态不会被误拒。

Atlas 中最接近的对照包括侧重 MCP 智能体评测的 MCP-AgentBench、研究有状态工具交互的 τ2-bench，以及在多应用环境中研究长程工作的 TheAgentCompany。Toolathlon 的区别性契约，是把 108 个模糊 workflow、广泛的 MCP/本地工具面、初始化跨应用状态与逐任务确定性终态 checker 结合起来。其方向信号不是“程序化检查本身很新”，而是环境状态和 evaluator 版本必须成为智能体轨迹记录的一等组成部分。
