AgentBench 可作为 agent 评测数据 schema 参考：任务 id、环境名、指令、可用工具/动作、observation 历史、解析后的模型动作、环境返回、终止状态、分数、模型/scaffold 元数据和预算。它也适合当作构建新 agent benchmark 的 checklist：verifier 必须显式，轨迹必须足够可回放以解释失败。

在 atlas 中复用时，要分清 benchmark instance、已执行轨迹和模型聚合分数。最值得复用的是环境级反馈契约，而不是某个排行榜数字。它还可帮助审计工具/API 任务如何成为评测面，而不是普通 instruction-following 数据。
