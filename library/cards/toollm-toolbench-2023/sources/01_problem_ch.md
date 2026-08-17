一手来源：https://arxiv.org/abs/2307.16789。公开状态是 ICLR 2024 spotlight，年份为 2023。开源语言模型工具使用能力弱，一个原因是普通指令微调很少覆盖真实 API 使用。ToolLLM 关注如何大规模构造工具使用数据并评测 API 调用行为。

评测对象包括用户指令、选中的 API、工具调用链、API 返回结果、最终答案或失败状态，以及 ToolEval 判断。反馈契约是 ToolEval 对完整工具使用轨迹的通过率和胜率判断。它应作为工具使用数据、环境轨迹和评测器的组合来读；不能把 ToolBench、ToolLLaMA 和 ToolEval 混成同一个证据对象。
