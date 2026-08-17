数据本身提供 1,210 对文件和 68,647 条人工测试，覆盖 11 个真实项目；人工套件对目标代码的中位覆盖率为 60.4%，说明任务不是只有少量 toy assertions。核心模型实验显示，即使表现最好的 GPT-4o，生成测试的平均 coverage 也只有 35.2%，明显低于人写套件，并且 execution、coverage 与 mutation 指标会给出不同排序。

这支持 benchmark 能揭示真实测试生成瓶颈，而非所有模型都轻易饱和。边界是这些数字主要来自 Python/pytest 仓库；较低 coverage 不必然等于测试无价值，较高 coverage 也不能单独证明能发现语义缺陷。
