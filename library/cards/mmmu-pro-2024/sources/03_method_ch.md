1. 输入：MMMU 风格的多模态学术题、图像或图示、文本题干/选项、学科标签和参考答案。
2. 流程：识别能被纯文本解出的题目并移除或改写；构造 standard MMMU-Pro 设置和减少直接文本线索的 vision-only 设置；随元数据一起发布为官方评测对象。
3. 输出：带版本的 benchmark 样本、模型 prompt、目标答案，以及 standard / vision-only 子集上的模型汇总分数。
4. 验收者：官方答案键或评测器给出 answer-level 的通过/失败或准确率信号；它不提供逐步推理证明、视觉 grounding 证书，也不是训练用 reward model。
5. 复现边界：必须固定 Hugging Face dataset revision、官方 GitHub evaluator revision、prompt/scaffold 策略、答案修正日期，以及结果到底来自 standard、vision-only 还是 corrected split。
