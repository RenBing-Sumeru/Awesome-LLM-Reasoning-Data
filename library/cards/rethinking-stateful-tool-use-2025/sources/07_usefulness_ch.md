对“环境与智能体轨迹数据”赛道，DialogTool 可作为有状态对话 episode 的 schema：研究工具 abstention、请求缺失参数、事务确认、App/API 路由、参数规范化、历史结果利用、错误传播及角色化回复。VirtualMobile 的确定性 call 也可成为生成工具函数的单元测试。

可 replay 的衍生记录应保留 source record/split、dialogue turn、action state、App/API schema 版本、必需/可选参数、前后环境状态、原始 call/result/exception、生成回复、各 verifier 输出、模型/prompt/版本、seed 和 reset 结果。成功、失败、malformed call、missing argument、API exception、recovery attempt 与 timeout 都应保留，并额外定义 episode 完成 predicate。

现有证据支持 evaluation 和受控数据生成，不支持无限制 training reuse。用于 SFT、preference learning 或 agent optimization 前，需要官方许可发布、去污染边界、来源 lineage、隐私审查、代码 sandbox 和版本化 reset/replay harness。benchmark 分数本身不证明轨迹完整或安全。
