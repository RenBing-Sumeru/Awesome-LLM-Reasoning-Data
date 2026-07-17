在目标无关的 Alpaca 设置中，ProDS 在 Vicuna、Koala、WizardLM、Self-Instruct 和 LIMA 风格评测上与 IFD 等选择规则比较。论文报告其选出的前 5% 数据在 t-SNE 后更接近 WizardLM 测试分布：平均欧氏距离为 67.13，而 IFD 前 5% 为 85.85；分析还显示，其收益并不只由更短的偏好回答解释。

对于目标化选择，论文在 MMLU、TyDiQA 和 BBH 上与 BM25、DSIR、RDS 和 LESS 比较，并说明训练数据中没有与这些目标任务直接相关的样本。这支持偏好导出的选择能提供超出回答生成相似度的信息，但 GPT-4 的成对判断和验证集构造仍可能引入目标泄漏与评判器偏差。
