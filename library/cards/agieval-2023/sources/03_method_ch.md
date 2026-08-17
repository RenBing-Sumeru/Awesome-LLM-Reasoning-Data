1. 输入是来自官方/公开来源的考试记录、任务名、题干、可选选项和标准答案。 
2. 构造时作者按考试任务组织文件，发布 prompt 与 evaluation scripts，并在 zero-shot、few-shot、chain-of-thought 等设置下评测模型。 
3. harness 让模型作答，再抽取预测选项或文本答案，与 reference answer 做比较。 
4. 输出是每个任务准确率和 aggregate 摘要；反馈单位是最终答案，不是可验证推理轨迹。 
5. 复现必须固定 GitHub commit、数据文件、prompt template、decoding budget、answer-extraction 规则、模型版本，以及比较中是否包含中文或英文任务。
