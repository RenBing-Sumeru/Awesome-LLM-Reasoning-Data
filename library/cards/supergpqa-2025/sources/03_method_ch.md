输入包括专家级原始题目、来源材料、标注者改写、LLM 回答和元数据标签。目标实例是一条多选 QA 记录，要求只有一个正确选项，并带 discipline、field、subfield、difficulty 字段。

流程可以拆成六步：

1. expert annotators 选择可信的学科资源和原始问题；
2. 标注者把题目转写、翻译或改写成多选格式，必要时生成干扰项；
3. 自动和 LLM 辅助检查验证格式、选项完整性、答案唯一性、领域相关性和潜在歧义；
4. 用 SOTA LLM 回答和专家反馈识别过易、可疑或不可靠题目；
5. 专家带外部资源复核可疑候选；
6. 官方 inference 脚本按模型类型运行 zero-shot 或 five-shot，evaluation 脚本解析回答并按答案键评分。

输出是 Hugging Face 数据集、评测代码、排行榜分数和公开的模型 response/answer records。复现必须固定数据集 revision、prompt 变体、评测模式、parser 行为、模型快照、回答记录和排行榜日期。
