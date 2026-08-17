一句话贡献是：AgentRewardBench 把网页智能体评估的反馈契约变成 benchmark 对象，将完整 episode 与专家参考标签、特定任务的 environment reward 和多种 LLM judge 输出逐条配对。

该对象连接三个层次。第一，source agent 通过 AgentLab 与 BrowserGym 执行 benchmark goal，生成包含 reasoning、browser action、accessibility-tree observation、screenshot、error 和 summary 的 trajectory。第二，网页智能体专家复核完整 episode。发布记录含 binary success、side effect 与 looping 判断，适用时保留原始 `Unsure`，并包含四级 optimality：complete failure、suboptimal、somewhat optimal、completely optimal。第三，自动 evaluator 根据不同表示预测标签。论文主比较包括 12 种 LLM judge 配置与一个 functional rule 参照；release 另含两种 GPT-4o-mini 输入消融，因此共有 14 种 LLM 配置加 `functional`。

参考契约依赖专家判断，被比较的自动信号则属于 mixed contract。专家 success 是对完整 action sequence 的事后语义判断，并非可执行的 replay predicate。`functional` evaluator 将存储的累计 environment reward 大于 0.5 映射为 success，不输出 side effect、optimality 或 looping。简化 LLM judge 输入 goal 与 action/reasoning history，并可选加入最终 screenshot 和/或 accessibility tree，随后输出 reasoning 与四个标签字段。模型生成的 judge reasoning 是 evaluator artifact，不是专家 rationale。

因此论文的核心并非简单宣称“人工好、自动化差”，而是测量不同反馈机制各自会犯什么错误。environment rule 可能拒绝专家认定成功的 trajectory；LLM judge 则可能因相信误导性的 reasoning、漏读任务细节、误解 action intent，或没有把 episode 与 browser state 对齐而产生 false success。输入表示同样会改变 judge 行为；报告结果中，加入更多 modality 并不会单调提升表现。

对 reasoning-data 整理而言，这意味着 evaluator 输出与分歧本身属于数据对象。trajectory 不能仅凭 environment reward 或 LLM judgment 就被认证。该 release 支持反馈契约的 evaluation 与 audit；论文对 RFT、RL 和 reward model 的前瞻讨论不能证明存在 `reward_modeling` 或 agent-training 用途。
