既有 tool-use benchmark 经常只评测有限 API collection、单个 server，或仅检查 final response，而没有系统平衡 call dependency。MCP-AgentBench 的具体改变，是围绕 MCP deployment structure 组织 600 个 query：单／多 server 与单次／并行／顺序调用交叉，底层覆盖 33 个无状态文本 server 和 188 个工具。

其构造 recipe 也比笼统要求 LLM “生成真实任务”更具体：先选择符合 category 的确定性工具，构造 user profile、scenario、objective、success criteria 与当前上下文；再合成不显式提工具的单轮请求，进行人工核验；随后生成五条 execution candidate，并把 aggregate pass rate 低于 20% 的 reference case 交给专家修订。所得对象是 category-balanced query-reference-answer，而不是宣称某一条 trajectory 是唯一正确路径。

单独看，多数组件并非新发明：ReAct、native tool calling、LLM-assisted synthetic query generation、human-in-the-loop checking、LLM-as-a-judge 与 binary pass rate 都早于本文。`mcprouter` 是第三方 integration；33 个 server、188 个工具的规模属于工程贡献，本身不能证明 benchmark data 或 judge 可靠。

对 reasoning-data 研究而言，关键方向信号来自 behavior richness 与 feedback granularity 的错位。被测模型可以选 server、发出相互依赖的 call、观察 error、retry 并累积长 history，但 MCP-Eval 只看 final answer 与 reference。这使论文适合研究 agent 环境中 answer-level supervision 的边界，包括为可信的虚构具体信息误给分，以及无法惩罚不安全或冗余调用。

在把该 benchmark 当作可复用 infrastructure 之前，还需核实作者官方不可变 task/server release、逐条 manifest、rights statement、完整成功／失败 episode、replay metadata、decontamination policy，以及独立 judge/security calibration。论文的 benchmark ranking 不能替代这些检查。
