一句话贡献是：tau2-bench 把客服评测改造为双控制环境，由 agent 与可调用工具的模拟用户共同生成 stateful episode，并发布任务、环境、组件 evaluator 和模型生成轨迹，使成功与失败都可被检查。

该机制连接三类对象。第一，有版本的 task 指定初始 agent/user state、scenario constraint、required 或 reference action 与 evaluator criterion。第二，orchestrator 让 agent 和 user simulator 通过消息或单次 tool call 交替行动，双方拥有不同 tool space 与可变 database。第三，混合反馈契约检查所得状态与轨迹。在整个 benchmark 层面，component 可包括 DB equivalence、environment/status assertion、action matching、required communication 与 natural-language assertion。选中的 component 相乘形成近似二值 scalar reward；发布的 `RewardInfo` 保留最终 reward 与 component breakdown。论文报告的 telecom 任务主要使用确定性 environment assertion，并在适用的预期失败或转人工情形加入 ACTION gate。

该反馈可以观察 evaluator 可见的 final state、已记录 action、必须传达的事实，以及启用 assertion judge 时发送给它的 natural-language claim；它不能证明规范未覆盖的语义要求已满足，不能证明 task predicate 完整，也不能保证 user simulator 符合真实客户行为。对话终止与成功判定同样分离：STOP、TRANSFER、OUT-OF-SCOPE、maximum-step 或 maximum-error 会结束 episode，真正的任务成功由 reward component 决定。元数据中的 state/action 与 full-episode granularity 表示可记录的监督表面，不等同于每个推理 token 都有 dense process reward。

相对原始 tau-bench 风格的单控制设置，具体变化是用户获得受工具约束的自身状态，并能执行 agent 无法代替完成的动作。相对本卡片仅用于深度校准的 `the-agent-company-2024`，tau2-bench 聚焦拥有分离 agent/user tool space 的轮流客服协作与组合式 telecom 任务，而不是带 checkpoint scoring 的多应用工作环境。两项比较都不能证明某个 evaluator 更有效或任务更具代表性。

对 reasoning-data 研究而言，方向信号是显式链条 `task specification -> shared state -> agent/user action 与 observation -> component check -> terminal reward`。已检查的官方 v0.1.0 run 同时保留成功与失败 episode，支持 verifier 和 failure audit。论文只把这条链用于 evaluation；后续 Gym 与面向 RL 的仓库功能属于之后的软件演化，不能作为论文时代训练用途的证据。
