黑盒 LLM 的概率、梯度和内部状态不可访问，因此 reference-free 幻觉检测常依赖同一问题多次生成的一致性；但只比较回答之间是否相似，会忽略问题—回答是否真正对齐，也无法给用户一个更可靠替代答案。

HalluCounter 联合建模 response–response 与 query–response 的一致性和对齐，训练分类器输出幻觉标签、置信度和最佳候选，并发布跨域评测集。
