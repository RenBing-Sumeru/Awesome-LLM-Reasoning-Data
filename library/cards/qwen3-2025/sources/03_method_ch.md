对于预训练，报告称约 36T-token 的混合数据覆盖代码、STEM、推理、书籍、多语言文本和合成内容；使用 Qwen2.5-VL 从类 PDF 文档抽取文本，再由 Qwen2.5 精炼；并用 Qwen2.5 系列模型合成教材、问答、指令和代码片段。报告给出了三阶段预训练，但未公开原始来源、混合权重、来源许可或清单。

对于 Long-CoT cold start，问题覆盖数学、代码、逻辑推理和通用 STEM，并配有已验证的参考答案或基于代码的测试。Qwen2.5-72B-Instruct 去除难以验证或无需 CoT 即可解决的查询，并标注领域。QwQ-32B 生成候选响应；当其重复失败时，人工标注者评估准确性。响应过滤会排除错误答案、大量重复、缺乏依据的猜测、thinking-summary 不一致、不恰当的语言或风格变化，以及疑似与潜在验证集相似的内容。精确 prompts、阈值、样本量和保留率均未披露。

对于推理 RL，报告称 3,995 个 query-verifier pairs 满足与 cold start 分离、可学习性、难度和子领域覆盖等标准，并使用 GRPO 更新模型。它说明了大 batch、每查询较多 rollouts 和 off-policy 训练，但没有给出数值。随后报告通过 continual SFT 融合 thinking/non-thinking：thinking 数据由 Stage-2 模型在 Stage-1 查询上以 rejection sampling 生成，non-thinking 数据则覆盖多类任务并通过自动生成的质量 checklist 进行整理。后续 general-RL 阶段和基于 logits 的强到弱蒸馏仅在高层级被提及，其数据和优化配置未知。
