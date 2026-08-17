本卡以ICML 2025、PMLR 267的最终论文为规范来源，并辅以在`paper.yaml`所列固定版本上检查的官方ITBench框架、ITBench-Lite、ITBench-Trajectories与ITBench-SRE-Agent。最终论文包含**102个场景：42个SRE、50个CISO和10个FinOps**。早期arXiv稿件中的94个场景属于版本历史，不能作为最终基准规模。

ITBench处理的具体缺口是：通用AI智能体需要在部分可观测的运维系统中调查并采取行动，而静态问答基准无法呈现工具错误、状态演化、危险操作，也不能区分智能体选择stop与系统真正恢复到目标状态。SRE场景基于作者在其SaaS产品中观察到的事件，CISO场景源于CIS benchmarks，FinOps场景源于FinOps Foundation的domains与capabilities；逐事件provenance未披露。

论文的主要评测对象是`M/E/T/D`场景四元组：metadata、operational environment、triggering events与desired outcome。一次运行还包括部分观察、action与tool call、环境响应、结构化最终答案或终态、明确的stop事件，以及领域特定评估。后续官方artifact又增加两类不同对象：ITBench-Lite提供**65个静态场景**（35个SRE snapshot、15个FinOps合成异常场景和15个CISO静态场景），ITBench-Trajectories则提供SRE ReAct session log，并在文件存在时附带输出与judge结果。

本卡归入`environment_agent_trajectory_data`，因为环境、state/action history、terminal predicate和反馈对象共同定义一条记录。Card不把benchmark分数当作数据质量证明，也不从评测日志推导不存在的训练recipe。现有来源足以支撑待人工审核的L4深度双语正文，但canonical metadata保持`L3_summary_ready`，整体发布状态保持`partial`。
