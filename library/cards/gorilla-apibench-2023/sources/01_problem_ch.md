Gorilla / APIBench 用文档驱动指令和 AST 匹配评测 LLM 的 API 调用能力。 主来源是NeurIPS 2024 proceedings、arXiv 2305.15334、Gorilla 项目页和 ShishirPatil/gorilla 仓库。

它回答的具体问题是：LLM 能否从大量且变化的 API 文档中正确选择并调用 API，而不是幻觉工具。决策边界是API tool-use benchmark 和数据发布，不是实时多步环境 benchmark。

数据对象或评测面是来自 HuggingFace、TorchHub、TensorHub/TensorFlow Hub 文档的 APIBench 记录；论文报告过滤后 1,645 个 API，每个 API 10 个 synthetic instruction-API pairs，并含 API 名称、参数、领域、框架、环境要求、示例和描述等元数据。它对 atlas 的价值在于把反馈契约说清楚：对生成 API 调用和参数做 AST subtree matching；若调用不匹配数据库中任何 API，则计为 hallucination。
