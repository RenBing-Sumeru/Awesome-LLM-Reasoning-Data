ComplexMCP 是一个面向动态 MCP sandbox 中语言模型智能体的 ICML 2026 评测基准。主要论文来源为 ICML/OpenReview 版本，并与 arXiv:2605.10787v2 及官方 `ATH-MaaS/complex-mcp` 仓库交叉核验。由于仓库没有把某个 tag 或 release 对应到论文实验，本卡的 artifact 级陈述固定到 2026 年 7 月 20 日检查的 current-main commit `617e963bd838bee5793a39e6b34165b79535828f`。

论文关注短程、彼此独立的 tool-use benchmark 与真实工作流之间的差距：真实动作会改变共享状态，后续操作依赖先前动作，还可能遇到瞬时故障。一个任务由自然语言指令、确定性 seed、可用工具、应用初始状态、目标状态和 evaluator 构成。智能体需要发现相关工具、检查状态、执行相互依赖的动作、处理 observation 或故障，并在不引入无关状态改动的情况下结束。这是 evaluation 问题，不是论文报告的智能体训练 recipe。

基准包含 47 个手工整理任务，覆盖 15 个 MCP server 和 315 个工具，其中有 7 个 stateful application server 与 8 个 stateless service server。7 个有状态应用是 LightOS/System、LightTalk、LightShop、LightWeather、LightFlight、LightStock 和 LightNews。query 不提供显式工具名提示；带 seed 的初始化与扰动使环境本身成为反馈契约的一部分。

发布的数据对象是一个 47 行、7 列的 `data.parquet` 表，字段为 `seed`、`query`、`apps`、`level`、`output`、`tool_cnt` 和 `gt_env`。每个 `output` 是一条通过人工验收的成功参考 demonstration，包含 reasoning/text、JSON tool call、tool response 和 `[END]` 标记；`gt_env` 保存嵌套的目标最终状态。因此，release 提供的是 47 条成功 gold/reference trajectory，而不是论文对每个模型、每次 trial 评测所得的全部成功与失败 rollout。

该对象属于 `environment_agent_trajectory_data`，因为 task state、action、observation、可变状态转移、final state、completion、collateral change 与 terminal outcome 可以被联合审计。现有证据足以支撑 L4 深度的 Card 草稿，但 accepted metadata 仍正确保持 `L3_summary_ready` 与 `partial`：论文时期版本身份、完整 replay artifact、独立 rights 以及 verifier/security calibration 仍未解决。
