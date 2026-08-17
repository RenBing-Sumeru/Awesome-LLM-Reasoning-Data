1. **代码 RLVR：** 以 corner_cases 和 checker 在沙箱中判定候选代码，并把编译错误、超时、错误答案与通过分开记录。

2. **测试生成研究：** 使用 results 字段监督模型从 false positive/negative 报告修正 generator，直接评测 TPR、TNR 和新增错误发现率。

3. **漏洞审计：** 在部署前加入目标模型产生的新失败程序重新压力测试；若没有可靠正负程序池，不宜照搬停止阈值。
