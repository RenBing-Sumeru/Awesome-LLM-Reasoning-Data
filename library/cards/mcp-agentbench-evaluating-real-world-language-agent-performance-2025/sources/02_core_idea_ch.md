核心贡献是一套按类别控制的 MCP evaluation surface：围绕确定性工具构造真实感单轮请求，让智能体在多 server 工具环境中交互，再判断 final answer 是否满足用户需求。六个 strata 由 server scope（单 server／多 server）与调用结构（单次／并行／顺序）交叉得到，每类恰有 100 个 query。

数据层与执行层必须区分。构造阶段，Claude 3.7 Sonnet 协助生成 user profile、scenario、objective、success criteria、query 和 reference answer；每个 query 还生成五条候选 execution trajectory，用于筛查参考答案。评测阶段，被测模型产生 ReAct history——Thought、Action、Observation 循环后给出 Final Answer——或 native tool-calling conversation。这些 history 能反映行为，但论文既没有把它们定义为 gold trajectory，也没有核实到公开 archive。

MCP-Eval 是反馈接口。o3-mini-high 只接收 `(user query, curated reference answer, model final answer, fixed rubric)`，输出 `pass` 或 `fail`，aggregate metric 为 Pass Rate。rubric 优先检查 core intent，把貌似来自外部的具体数据视为工具使用证据，强调 sufficiency 而非穷举匹配，并忽略表面格式。它能观察答案内容与 reference 的一致程度，却不能确认是否实际调用工具、server 是否选对、中间调用是否失败或不安全，也不能核验外部状态是否被有效改变。

interaction loop 与 task-success predicate 也不是一回事。模型输出不再包含 tool call 的文本时，循环结束；tool call 与文本 response 都计入 30-action cap，超限后系统要求立即作答。成功与否随后才由 answer-level judge 判定，因此 episode 结束不代表任务完成。

ComplexMCP 发布 seeded mutable state、reference trajectory、target state 与程序化 state-difference evaluator；相比之下，MCP-AgentBench 以 answer judge 换取更广的无状态 MCP 覆盖。Toolathlon 使用 task-specific evaluator，且后续为部分模型发布完整 trajectory log；MCP-AgentBench 的官方页面则没有建立 executable release 或 trajectory archive。它最有方向价值的地方，是揭示丰富 agent episode 仍可能只获得 answer-level supervision。
