Mind2Web 2: Evaluating Agentic Search with Agent-as-a-Judge 回答的问题是：深度搜索智能体需要回答长程信息需求并给出来源证据，但短程网页问答和静态答案基准无法检查答案是否完整、及时且有引用支撑。主来源是 https://arxiv.org/abs/2506.21506；公开状态为 NeurIPS 2025 Datasets and Benchmarks / arXiv（2025）。

决策边界：它应作为 agentic search 的基准和 judge 框架收录，不是训练数据集，也不是通用模型榜单。评测面是：任务记录包含长程信息需求、公开/私有 split 元数据、证据来源要求、答案输出面和任务级树状 rubric。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
