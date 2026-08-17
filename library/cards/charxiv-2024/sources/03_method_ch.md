1. 输入：从 arXiv 论文中选出的科学图表图片，以及人工整理的问题和参考答案。
2. 流程：作者筛选图表，构造描述类和推理类问题，核验答案，并发布 validation/test 数据、图片和元数据。
3. 输出：可用于提示模型的 benchmark record、模型回答和逐题正确性。
4. 反馈：通过官方 evaluator 判断回答是否与参考答案一致；非严格字符串匹配场景使用 GPT-4o 式语义判分。
5. 复现边界：必须固定 split、图片文件、prompt 模板、评测代码、GPT-4o 判分模型/日期和 leaderboard 快照。它是 evaluation-only 资源，不能直接等同于训练 reward。
