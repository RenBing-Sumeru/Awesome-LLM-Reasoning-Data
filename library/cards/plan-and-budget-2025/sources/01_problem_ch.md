Plan-and-Budget 研究的是测试时计算分配，而不是一个新的后训练数据集：固定 token 上限可减少冗长推理，也可能截断困难问题。ICLR 2026 论文把一个查询表示为不确定性不同的子问题，并检验规划加局部分配是否改变任务分数与计费 completion tokens（论文第 3–5 节）。

对本图谱类别而言，一条潜在 episode 很具体：上游任务项、LLM 生成的分解、难度/credits 标注、调度后的预算、目标模型预测、token 使用字段和任务分数。作者仓库发布了预分解的评测输入和可生成这些结果的代码，但没有发布作者实际运行得到的 prompt-to-output 结果 manifest。因此它是一个轨迹可得性不完整的推理/评测 recipe，而不是可直接训练的轨迹语料证据。

论文覆盖 MATH-500、抽样的 NaturalInstructions 和 TravelPlanner；它没有证明这些公开 benchmark 输入适合作训练数据，也没有证明结果能推广到这些任务和 evaluator 之外。此处 L4 的证据边界是最终 arXiv/OpenReview 论文及其链接的作者代码，包括预处理、推理和评测文件。
