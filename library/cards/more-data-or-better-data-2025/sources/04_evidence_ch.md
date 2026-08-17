Math-Cosmo 在报告运行中使 MATH accuracy 提升 1.72 点,但同一行还报告 GPQA-Diamond -5.05、HellaSwag -1.26 与 Sanitized-MBPP -0.77(附录 Table 9)。NaturalReasoning-QwQ 使 MATH 提升 1.92、MathBench-a 提升 1.47,同时 MMLU、HellaSwag、GSM8K、HumanEval 与 Sanitized-MBPP 回退(Table 3)。这些混合 task delta 只支持更窄的结论:候选格式和 teacher 选择会改变多任务 mixture;它们不能证明任一语料整体质量更高。

弱点引导结果同样不均一。纯检索得到超过 75,000 条、82M token,却报告 MATH -1.70;检索加增广报告 MATH +3.72,但 GPQA-Diamond -3.03、HumanEval -1.83(Table 4)。用相同流程构造的教材数据也分化:Intermediate Algebra-QA 的 MATH 为 -0.24,Calculus-QA 的 MATH 为 +4.66,但 MathBench-a 为 -2.93、MathBench-t 为 -5.87(附录 Table 10)。这是 mixture 与领域交互的证据,不是稳定的记录质量排序。

开放数据表提供了有用的负对照。OpenR1-Math 在一个设置中报告 MATH +8.96,同时 MathBench-t 与两个代码 benchmark 下降(附录 Table 8);小型精选 LIMO 与 s1K 的变化也较小且混合(附录 Table 7)。论文还报告 dependency-graph 问题、加入 Long-CoT trace、按 reasoning length 划分难度收益有限(§5)。这些失败结果反驳了把 token 数与 trace 长度当作充分选择标准。

所有结果都来自论文统一但披露不完整的 pipeline。作者明确说明没有 confidence interval 与 p-value;重复运行方差、seed 与生成语料也不可得,而且各候选配方同时改变多个变量。因此,benchmark performance 只是这些干预在某一 scaffold 下的证据,不能证明数据正确、多样、合法、已去污染或具有因果优势。
