先验基线分成两类：MMLU 这类纯文本宽学科基准，以及领域更窄或专家覆盖较弱的多模态基准。MMMU 改变的是评测对象：把宽大学科和必须使用的视觉证据结合在一起。

方向信号是面向专家多模态推理的 evaluation surface，而不只是 captioning、VQA 或图表识别。质量信号包括 CVPR 2024 Oral、公开 benchmark artifact，以及论文报告的人类/模型差距。

不新的部分包括 answer-level scoring、考试题和 image-question 数据集。复用前要检查来源许可、图像权利、split policy、hidden-test 处理、答案规范化、OCR/视觉预处理，以及每个样本是否真的需要图像。
