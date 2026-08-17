1. **自主性能 agent 评测：** 在固定资源下运行 OpenHands/SWE-agent，报告 correctness pass、SR、expert parity、action/time 和按仓库/优化类型分层结果。

2. **定位与 profiling 研究：** 分析 agent flamegraph、修改函数与 gold patch 差异，训练 workload→bottleneck retriever；成功仍以独立 workload 加速和回归测试为准。

3. **性能 RL：** 将正确性作为门控，将裁剪后的 SR 作为连续 reward，并对噪声和超时建模。若硬件与官方环境不同、无法重复测量或准备把 498 test 题直接训练，结果不具可比性且会污染 benchmark。
