# 04 证据

构造证据来自公开 PRM800K 仓库：它发布了约 800,000 个 step-level label，覆盖约 75,000 条解答和约 12,000 个 MATH 题目，并附有标注说明、grading 代码、split 文件和 scored sample。OpenAI 发布页和论文都说明，在作者设定下过程监督比结果监督更适合做 reward-model selection。

论文报告的核心数字是 process-supervised model 在代表性 MATH test subset 上解出 78% 的题。论文还报告，随着候选解数量增加，PRM best-of-N 比 ORM 和 majority vote 更能扩展。行级证据是人类步骤标签和最终答案 grading 结果；aggregate success rate 本身不能证明每一步语义都正确。分数复用受 MATH split、采样预算、生成模型、答案 grader 行为和公开数据污染影响。
