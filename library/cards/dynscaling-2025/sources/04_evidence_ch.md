评估覆盖 198 道 GPQA Diamond 题目和合并后的 60 道 AIME 题目，使用 Gemini 1.5 Flash 与 Gemini 2.5 Pro。论文用“准确率—输出 token 预算”曲线比较 DynScaling、基于多数投票的 best-of-N，以及三类顺序/并行基线；所有报告结果取三次独立运行的平均值，并使用 moving average 平滑。组件消融显示，移除动态分配或集成采样都会使结果下降；分析还比较了 variation ratio、normalized entropy、inverse margin 和多种探索系数。论文另外衡量新增预算中有多少被分配给仍然答错的查询。这些结果支持该配方在所研究配置下的有效性，但不能验证每个不确定性分数、合成上下文、分配决策或生成回复都是高质量数据。由于没有公开轨迹集，也无法进行条目级审计。

