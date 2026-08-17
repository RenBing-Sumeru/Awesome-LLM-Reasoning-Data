MMMU 关注的问题是：多模态模型能否解决需要视觉理解和学科推理共同参与的大学级专家题。主要来源是 Yue 等人的 "MMMU: A Massive Multi-discipline Multimodal Understanding and Reasoning Benchmark for Expert AGI"，2023 年 arXiv，CVPR 2024 Oral；官方项目页、GitHub、CVF 论文页和 Hugging Face 数据集发布基准资产。

收录边界是 multimodal academic evaluation surface。它不是训练配方，不是普通 visual-chat 数据集，也不是交互环境。一个数据对象包含一张或多张图片/图表、文本题干、选项或短答案目标、subject/subfield 元数据和 split 信息。

反馈契约是在按题型规范化后与 benchmark target 做 answer-level scoring。它对 atlas 的价值在于把 MMLU 风格的宽学科评测从纯文本扩展到图表、科学示意图、医学图像和设计材料等异构视觉证据。
