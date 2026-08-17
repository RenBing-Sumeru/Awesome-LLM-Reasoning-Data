一句话贡献：Mind2Web 2: Evaluating Agentic Search with Agent-as-a-Judge 把任务记录包含长程信息需求、公开/私有 split 元数据、证据来源要求、答案输出面和任务级树状 rubric。绑定到具体反馈契约，形成可复用对象。

核心机制：作者用 1000+ 人工小时构造 130 个长程任务，评测 10 个前沿 agentic-search 系统，并用专门 judge agent 取代单一静态答案。反馈契约：Agent-as-a-Judge 用任务专属树状 rubric 同时评分答案正确性和来源归因；指标包括 Partial Completion、Success Rate 和 Pass@3。最接近的对比对象是：短程网页搜索问答、静态答案基准和早期 Mind2Web 式动作基准。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
