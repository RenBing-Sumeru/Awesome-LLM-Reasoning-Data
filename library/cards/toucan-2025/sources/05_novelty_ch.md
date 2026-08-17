TOUCAN 的方向信号来自规模、真实 MCP 执行、异构社区服务、显式任务/轨迹评审与已发布 SFT 投影的组合。它把 machine-readable 工具 specification 一直转化为完整 state-action-observation episode，而不是停留在静态 function-call 示例或模拟工具输出。三类扩展还把 abstention/irrelevance、persona/constraint 变化与 multi-turn 交互纳入同一构造系统。

最可复用的质量信号不是“real-world”措辞或 benchmark 分数，而是可见的反馈契约：Kimi-K2 任务维度、可审查的结构规则、目标工具覆盖/顺序、GPT-OSS-120B 响应维度，以及 119,287 行 SFT 子集的明确阈值。full config 保留这些评审与 MCP 元数据，支持缩减 SFT 视图本身无法完成的离线分析。

也要明确哪些并不新。合成任务生成、LLM-as-judge 过滤、supervised fine-tuning、tool-call template 与 benchmark 评测都是既有组件。真实服务调用不是新的正确性证明，论文也没有提供通用 reward 或可回放环境包。因此，该贡献更适合作为大规模一体化构造与发布配方，而不是 mixed heuristic 已解决 agent 验证的证据。

复用检查应比较来源服务/任务重叠、工具名碰撞行为、成功与拒绝轨迹保留情况，并确认下游结论在固定唯一行数核算后仍成立。119,287 个 SFT 行必须与 1,527,259 条 full trajectory 保持子集关联，而不能额外相加。
