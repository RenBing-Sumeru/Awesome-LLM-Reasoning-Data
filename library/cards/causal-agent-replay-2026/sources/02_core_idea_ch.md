本文的贡献是把一条已记录的随机性智能体 episode 转化为显式的 structural-causal replay 对象：保留事实前缀，在选定 step 实施干预，重跑受影响的后缀，对完整分支评分，再把 bad-outcome 概率的变化归因到决策，而不是仅凭 transcript 外观判断。

轨迹被形式化为 state、action、observation 与终局 outcome 的序列。CAR 提供五类 intervention：`do_resample` 从同一 policy 重新采样 action；`do_action` 强制指定 action；`do_observation` 替换环境返回；`do_context` 修改记录的 context；`do_policy` 更换 policy。deterministic replay 先重建 provider messages 并比较 request digest，再注入 recorded observations、多次测量 action-signature match。counterfactual forward replay 不同，它在分支后向提供的 live 或 mocked Environment 请求新 observation。

反馈契约是 mixed。调用方提供的 `OutcomeFunction` 把完整 trajectory 映射为 label 和 `[0,1]` score。`RuleOutcome` 具有确定性，但只能观察规则编码的内容；`JudgeOutcome` 使用 OpenAI-compatible LLM rubric，会引入模型噪声、偏差和 prompt attack 风险。contrastive attribution 估计对 step `k` 及其后缀重采样后 bad-label 概率的变化，对干预后比例使用 Wilson interval、对差值使用 bootstrap interval，并把最晚出现显著 rescue 的 step 报告为 point of commitment。Shapley attribution 则对保留事实 action 的 coalition 采样，以带不确定性的 trajectory-level marginal contribution 分配效应。

Atlas 中最接近的工作是 Who&When Pro、AgenTracer 和 TraceElephant，它们在收集到的 failure log 中定位负责 agent 或 step。CAR 的区别是为调用方生成的轨迹定义可复用的 intervention/replay 接口，而不是发布带标签的 benchmark corpus。后续仓库使用 `llama3.2` 3B surrogate 处理 Who&When logs，因为原始 policy 与 state 不可用；这一 surrogate 边界揭示了静态日志与因果 replay 之间的差距，并没有消除该差距。
