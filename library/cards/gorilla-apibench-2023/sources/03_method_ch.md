输入是一条记录所需的任务材料和元数据：来自 HuggingFace、TorchHub、TensorHub/TensorFlow Hub 文档的 APIBench 记录；论文报告过滤后 1,645 个 API，每个 API 10 个 synthetic instruction-API pairs，并含 API 名称、参数、领域、框架、环境要求、示例和描述等元数据。

流程：收集 API 文档；过滤并结构化 API 元数据；生成 instruction-call pairs；推理时检索相关 API 文档；让模型生成 API 调用；用 AST 匹配和 hallucination 检查评分。

输出是在该契约下评分的 benchmark record 或 evaluation summary：对生成 API 调用和参数做 AST subtree matching；若调用不匹配数据库中任何 API，则计为 hallucination。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
