先验基线是原始 MMLU：4 选项、覆盖广、使用方便，但逐渐饱和且对 prompt 敏感。MMLU-Pro 改变的是评测对象：清洗题池，把选项数增至 10，并报告一个更难的 14 领域基准。

方向信号是 frontier-model 压力下的 benchmark maintenance。质量信号包括强模型分数明显下降，以及数据和评测代码的公开发布。

不新的部分包括答案键 exact match、多选题评测和宽 subject reporting。复用前要检查与 MMLU 的重叠、生成或来源干扰项质量、数据集 revision、MIT 许可兼容性、prompt/scoring 设置和污染策略。
