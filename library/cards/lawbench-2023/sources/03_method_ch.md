1. 输入：中文法律 prompt 或上下文、任务元数据，以及法律记忆、理解、应用任务的官方 target answer。
2. 流程：整理任务，提供标准 prompt template，通过 OpenCompass 兼容评测脚本运行模型，解析模型输出，并计算 task metric。
3. 输出：模型回答、单任务分数，以及三个认知层级上的 aggregate comparison。
4. 反馈：evaluator 以官方答案为参照给 correctness 或 metric score；它不验证模型推理是否会被法院或律师采纳。
5. 复现：需要固定 GitHub commit、data directory version、OpenCompass 环境、prompt template、answer parser、模型 decoding 设置，以及是否使用 few-shot examples 或 retrieval。

这张卡只把 LawBench 作为 evaluation-only benchmark。若把样本转成训练数据或 preference label，反馈契约会改变，并产生 benchmark contamination 风险。
