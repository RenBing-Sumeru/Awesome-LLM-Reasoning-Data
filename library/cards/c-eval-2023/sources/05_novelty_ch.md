已有基线是英文为主的考试和知识 benchmark，尤其是 MMLU 式多学科多选题。C-Eval 改变的是语言语境、学科 taxonomy 和考试来源，同时保留简单的答案键评分契约。

方向信号是 foundation-model evaluation 需要语言和教育体系特定的评测面，而不只是把英文任务翻译成中文。质量信号来自公开论文、官网、GitHub evaluator、Hugging Face release 和明确的学科/层级结构。不是新的部分包括多选准确率、prompt-based evaluation 和答案键评分。复用前要检查 license、测试标签是否公开、精确 split、prompt 模板、答案规范化、学科不均衡，以及中文 benchmark 训练混合中的污染。
