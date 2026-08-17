# 03 方法

输入是 MATH 题目、按步骤切分的模型生成解、参考答案/最终答案 grading 规则，以及人类步骤标注。官方 release 的 JSONL 记录包含题目文本、ground truth、生成步骤、模型答案、每步候选 completion、rating、flag 和元数据。

流程如下：

1. 为 MATH 题目生成大量逐步解答。
2. 把部分解答和候选下一步展示给人类标注者。
3. 收集 positive、neutral、negative 的步骤评分，并记录 flag 和被选择的 continuation。
4. 用 active learning 把标注预算集中到看似可信但可能含错的解答上。
5. 训练 process reward model 估计步骤正确性，并由步骤分数汇总出整条解答分数。
6. 比较 PRM best-of-N、outcome reward model 和 majority vote。

复现必须固定 PRM800K GitHub release 或 commit、Git LFS 数据、MATH split、答案 grader、标注说明、生成模型族、采样数量、PRM 打分规则，以及使用的是公开标签还是未公开的内部模型权重。
