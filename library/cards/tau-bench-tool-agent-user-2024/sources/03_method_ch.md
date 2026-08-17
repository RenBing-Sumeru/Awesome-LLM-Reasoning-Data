输入包括领域 policy、初始数据库、工具/API 定义、隐藏用户 instruction、agent prompt 或 scaffold，以及动作预算。输出是一段 message/tool-call transcript、工具 observation、最终数据库状态和 pass/fail reward。

benchmark 构造 airline 和 retail 任务，任务需要在 policy 约束下完成订票、订单、退款或账户类状态修改。模拟用户会在多轮中透露信息，agent 需要补全缺失字段、选择工具调用并避免非法操作。论文报告原始 benchmark 包含 115 个 retail tasks 和 50 个 airline tasks。

verifier 是根据最终数据库状态和必要回复字符串计算的 terminal reward。复现必须固定原始仓库版本，因为官方 README 后来提示初始 airline/retail 任务已过时，并指向 tau2/tau3 仓库。分数还依赖用户模拟器模型、prompt、工具 schema、retry/action budget、依赖版本，以及评测的是论文原始任务还是后续修复任务。
