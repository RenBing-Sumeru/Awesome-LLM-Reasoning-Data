主来源是 Gioacchini 等人的《AgentQuest: A Modular Benchmark Framework to Measure Progress and Improve LLM Agents》，正式收录于 NAACL 2024 System Demonstrations；ACL Anthology 页面、arXiv 版本和 NEC Research 官方仓库是主要证据。

它要解决的问题是：许多 agent benchmark 只给最终成功率或总分，读者难以判断 agent 是在逐步接近目标、重复无效动作，还是被环境接口、工具调用或任务拆解卡住。这里收录 AgentQuest 的边界是 agent 评测框架和 trajectory 级审计面，不把它写成训练数据配方，也不把其示例任务解释成通用 agent 能力标准。

可复用对象是一条 benchmark 运行记录：任务、driver、action、observation/state 更新、最终结果，以及 progress 或 repetition 指标。它对 atlas 的价值在于反馈契约更细：不仅看 pass/fail，也把中途进展和重复行为显式化，便于比较 scaffold 和诊断失败。
