MathVista 可作为多模态数学 benchmark 的数据结构参考，也可作为视觉推理声明的审计清单。它适合用来区分文本数学能力与图表、几何图、表格、科学图像推理能力。

复用时应保留来源数据集、image id/file、问题、答案、答案类型、任务类型、视觉上下文类型、推理技能标签、split、prompt、OCR/caption 输入、原始模型输出、抽取答案和 evaluator 判定。

在 atlas 中，MathVista 是 evaluation-only 证据。它能指导 benchmark 选择和多模态 evaluator 设计，但逐样本复用必须检查图像 provenance 和许可证。
