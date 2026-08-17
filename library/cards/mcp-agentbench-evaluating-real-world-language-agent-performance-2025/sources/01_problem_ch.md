MCP-AgentBench 用于评测语言智能体能否调用 Model Context Protocol（MCP）暴露的工具来回答自然语言请求。正式出版信息为 2026 年 *Proceedings of the Fortieth AAAI Conference on Artificial Intelligence*，卷 40、期 37、页 30888–30896，DOI 为 `10.1609/aaai.v40i37.40347`。entry ID 末尾保留 2025，是因为 arXiv:2509.09734 于 2025-09-10 首次提交；本卡的 `year` 与 `venue` 按 publisher 记录填写为 2026 和 AAAI 2026。

论文处理的是一个具体评测缺口：许多 tool-agent benchmark 只提供规模较小或同质化的 API surface，而实际 MCP client 可能同时暴露大量异构 server，要求智能体在工具间选择，并执行并行调用或让后续参数依赖先前 observation 的顺序调用。MCP-AgentBench 从 369 个候选 server 筛出 33 个可执行、稳定、无状态、纯文本 server，共 188 个工具，并构建 600 个在六类 server 范围／调用依赖组合上均衡的 query。它排除了有状态 server、非文本 interface 和持久 side effect 评测，因此不衡量智能体能否安全地改变外部状态。

一条 benchmark instance 在概念上包含 category、单轮合成用户 query、预期的 MCP server/tool surface 和整理后的 reference answer。实际评测还会产生 episode：可用工具描述、模型文本或结构化 tool call、argument、工具 observation 或 error、顺序 history、final answer、action count，以及事后 binary judgment。由于同一任务可能存在多条有效工具路径，论文把 query-reference-answer pair 而不是某条唯一 execution path 作为参考对象。

这一边界使论文属于 `environment_agent_trajectory_data`：环境中确实产生了 state-action-observation history，但反馈只附着在答案上。MCP-Eval 向 o3-mini-high 提供 query、reference answer、被测 final answer 和 rubric，不向 judge 展示 trace 或最终外部状态。论文只报告 evaluation，没有 SFT、reward-model、RLVR 或 agent-training 实验。

AAAI 与 arXiv 官方页面可核验论文、appendix、prompt、构造说明、judge interface 与 aggregate result；但这些页面没有链接作者维护的 benchmark dataset、评测仓库、server bundle、逐题 manifest、judge log 或成功／失败 rollout archive。因此，本卡正文达到 L4 信息深度，同时保留 accepted metadata 的 `L3_summary_ready` 与 `partial` 状态。
