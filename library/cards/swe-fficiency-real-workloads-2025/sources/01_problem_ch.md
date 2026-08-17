许多性能 benchmark 告诉模型要修改的函数或只测微型 kernel，省略真实 performance engineer 必须完成的 profiling、调用链理解、瓶颈定位和相关回归测试选择。仅比较修改前后是否更快也会奖励轻微“凑合式”优化，无法判断模型是否接近专家在同一 PR 中实现的加速。

SWE-fficiency 设计 pass-to-pass 仓库性能任务：给 agent 完整代码库和一个慢 workload，不提示具体修复位置；agent 必须调查、修改并让相关单测保持通过。498 个任务来自 9 个主流 Python 科学计算/HPC 仓库，以专家 PR 的 speedup 为基线，用 Speedup Ratio 衡量模型获得了多少专家可实现的收益。
