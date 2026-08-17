官方报告支持以下数值披露：3,000+ 个真实 MCP 工具和 20,000+ 个合成工具，以及从工具到 agent/task/trajectory 的构造路径。它还支持带 rubric 的 LLM filtering、有状态 simulator、定向真实执行 sandboxes、报告称可支持 10,000+ 并发实例的 Kubernetes SWE sandbox，以及包含 RLVR 和 self-critique 的联合 RL 设计。

附录 B 披露了 tool-call 的消息结构：含可用工具与参数 schema 的声明、assistant invocation section 和 tool-result message。它称使用 TypeScript 进行简洁声明，并在部分训练数据中使用 JSON declarations 以提升兼容性。这是接口证据，而不是工具训练语料、parsers、constrained-decoding 实现或覆盖审计的发布。

官方 repository 和 Hugging Face 页面支持 code/documentation 及 Modified MIT 模型权重的可用性。它们并不能证明可复现性、数据权利、环境可用性、verifier 有效性、critic 校准或对 reward hacking 的防护。报告的模型性能是作者评估的证据，而不是这些缺失工件可用的证据。
