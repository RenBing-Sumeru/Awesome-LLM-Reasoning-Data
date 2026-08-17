一句话贡献是：面向文档 grounded tool use 的 retrieval-augmented API-calling benchmark 和 Gorilla 模型系列。

核心机制是API 文档摄取、synthetic instruction 生成、API 文档检索、模型生成调用，以及 AST-based evaluation。被评分对象是来自 HuggingFace、TorchHub、TensorHub/TensorFlow Hub 文档的 APIBench 记录；论文报告过滤后 1,645 个 API，每个 API 10 个 synthetic instruction-API pairs，并含 API 名称、参数、领域、框架、环境要求、示例和描述等元数据，反馈契约是对生成 API 调用和参数做 AST subtree matching；若调用不匹配数据库中任何 API，则计为 hallucination。

最近对比对象是tool-use benchmark、function-calling 数据集，以及没有严格 API-call matching 的 RAG 设置。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
