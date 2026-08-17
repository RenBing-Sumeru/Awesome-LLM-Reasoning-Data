1. **结构化事实 Judge：** 评测模型生成 SQL/程序并执行核验 claim 的能力，单独报告 entailment、contradiction 和 abstention。


2. **数据 Agent 训练：** 使用参考程序和执行结果构造 verifier reward，但应防止模型利用数据库错误或超时模式投机。


3. **grounding 审计：** 把长报告中的可结构化 claim 映射到数据库验证，并保留查询和结果作为可审计证据。
