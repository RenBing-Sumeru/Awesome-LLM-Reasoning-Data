阶段 1 仅在干净的图像 caption 数据上训练跨模态 MLP，视觉编码器和语言模型保持冻结。阶段 2 在单图 instruction 数据上训练所有组件，覆盖 VQA、数学和科学推理、grounding、captioning、OCR 与 computer use。阶段 3 继续全模型训练，使用长文档、多图、序列图像和负责 AI 数据。Microsoft 报告了 AdamW、bf16 mixed precision、DeepSpeed ZeRO-1 和每阶段一个 epoch，但没有提供完整学习率数值或可复现实验配置。

对于质量控制，审阅者将数据集归为优质、答案错误或 caption 较差、问题质量低、图像质量低、以及格式/逻辑错误。优质数据大多保留；部分错误答案/caption 由 GPT-4o 和 o4-mini 重写，二者也在适当情况下用于验证或 majority-voting 流水线；高错误率数据集和根本有缺陷的图像会被排除。报告还描述了由图像出发生成 caption/VQA、数学/科学图像详细描述、scrambled/caption-matching 多图示例、序列截图变化和提示多样化。精确提示、teacher 分配、阈值、错误率和产出均未披露。
