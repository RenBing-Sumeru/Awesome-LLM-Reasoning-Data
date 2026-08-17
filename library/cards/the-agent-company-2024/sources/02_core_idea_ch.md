一句话贡献是：TheAgentCompany 把一个虚构软件公司封装为有版本的多服务智能体环境，用加权 checkpoint 评测人工编写的工作任务，并发布按模型区分的结果、截图与完整评测轨迹。

核心机制连接三类对象。第一，每个任务同时定义智能体可见意图、隐藏评测逻辑与环境 setup。第二，episode 暴露 browser/UI、terminal、code/workspace、文件及 RocketChat observation，并记录智能体 action 与环境转移。第三，混合反馈契约把所得状态或轨迹映射为加权 checkpoint 结果。多数 evaluator 是检查最终/中间状态或轨迹的确定性 Python 程序；175 个任务中有 51 个（29%）对复杂或非结构化交付物使用带 rubric 或 reference output 的 LLM judge。全部 checkpoint 通过才算 full success；加权 checkpoint 完成度给出 partial score，同时 benchmark 还报告二值 full-completion 指标。

该反馈能观察 evaluator 可见的环境状态、选定轨迹事件，以及由任务特定 predicate 捕获的输出；它不能认证测试未覆盖的语义质量、predicate 之外的意图遵从，也不能保证 LLM judge 的稳定性与校准。运行时 evaluator 加密可以阻止直接偷看，但公开的 evaluator 源码与 task prompt 仍允许 benchmark-specific 优化并带来未来污染。因此元数据中的 state/action-level supervision 指 checkpoint 敏感的过程证据，不表示发布在每个推理步骤后都提供经校准 reward。

相对静态 completion benchmark，关键变化是成功依赖多个服务间协调的状态修改，部分任务还要求与模拟同事交互。相对 `tau2-bench-2025` 与 `osworld-mcp-2025` 等相邻环境 benchmark，本卡片能确认的区分点是自托管公司 substrate、人工实现的加权 checkpoint，以及保留完整模型/harness 特定 episode 的官方 run 目录。这些工作仍是有用对照，但现有证据不能证明 TheAgentCompany 的 judge 更准确或任务更具代表性。

对 reasoning-data 研究而言，方向信号是明确连接 `task prompt -> environment state -> action history -> checkpoint feedback -> terminal outcome`。这条链支持 episode replay 与 verifier audit，但不能单凭日志存在就支持 SFT、preference learning、reward-model training、process supervision 或 agent RL；论文证据支持的用途仅为 evaluation。
