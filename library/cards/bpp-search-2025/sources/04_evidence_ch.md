论文报告 StructuredOR 共含 124 个问题，覆盖十个领域：Agriculture 24、Logistics 20、Education 15、Sports 12、Military 12、Energy 12、Telecommunications 11、Manufacturing 9、Health Services 5、Finance 4。在锁定的官方 Hugging Face 修订版中，124 个文件均可解析为 JSON，其中训练集 86 条、测试集 38 条。所有 `question` 精确字符串互不重复，两个目录之间也没有精确字符串重合。但该审计并未检测语义近重复、共享模板或仅参数不同的变体。

搜索比较带有条件性。评测只保留完整遍历 GPT-4o ToT 后至少得到一个正确答案的问题：StructuredOR 为 30/38，MAMO-ComplexLP 为 72/211，NL4OPT 为 143/289。在这些策略模型可解的子集上，论文报告 PRM 引导搜索与最终成对选择相较所比较策略提高准确率并减少遍历。然而，更宽 beam 的消融并非单调改进：相似的正确与错误候选可能得到接近的 PRM 分数，增加 beam 宽度有时反而降低准确率。

这些实验支持在所报告条件协议下对搜索栈的论断，但不能证明 124 条公开数据的质量、覆盖度或抗泄漏能力，也不构成对学习式选择器的独立验证。由于原始树、入选与被拒节点、检查器输出、分数以及逐样例预算均未发布，公开材料无法复现从新增搜索计算到最终结果的因果路径。
