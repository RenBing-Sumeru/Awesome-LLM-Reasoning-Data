VISCO 可用于评测或训练多模态 critic、视觉 PRM 和自我修正模型，步骤级字段适合 first-error detection、错误类型分类和 critique-conditioned refinement。训练时应把同源图像或基础数据集按组拆分，避免视觉内容泄漏；评测时应同时报告 critique 准确率、过度批评率和修正后的最终准确率，防止模型通过大量否定获得表面召回率。
