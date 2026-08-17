一句话贡献：ToolLLM 提出 ToolBench：覆盖 16,464 个真实 API 的工具使用数据集，并配套 ToolEval 与 ToolLLaMA 用于训练和评测。主要贡献由三部分组成：从 RapidAPI 构造 ToolBench 数据，用 DFSDT 搜索解题路径并训练 ToolLLaMA，以及用 ToolEval 自动评测轨迹。

数据对象包含 API 模式、用户指令、检索到的工具、工具调用、API 观测、解题路径、最终答案和 ToolEval 分数。成功条件是工具调用链满足用户指令，或在 ToolEval 中优于对比轨迹。最接近的对比对象是 APIBench、ToolBench 后续稳定化版本和其他工具调用评测，但这里的方向标签应同时覆盖训练数据、工具环境轨迹和评测器。
