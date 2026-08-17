已有基线是通用代码生成评测，常见对象是算法函数或人工小题。DS-1000 把对象改成实际 data-science snippet，正确性依赖真实库 API、array/dataframe 语义、绘图副作用和机器学习/统计函数行为。

方向信号是评估 library-use competence，而不只是算法合成。质量信号是为降低记忆而做的问题扰动、功能测试、表层约束，以及对 accepted solution 错误率的显式审计。不新的是单元测试、StackOverflow 来源和 accuracy 汇总。复用检查应覆盖数据 license、原问题 lineage、包版本漂移、stateful 执行、prompt 简化，以及目标模型是否见过公开 DS-1000 记录。
