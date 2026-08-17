对 `rollout_search_test_time_trace_data` 而言，本文可作为评测 schema 与归因 baseline。复现实验应记录 prompt/split ID、精确的 target/draft checkpoint、输出长度预算、每个分支完成结果、draft proposal 与接受决策、聚合分数/平票、被选答案、scorer 输出、加速器/运行时状态、请求并发度及重复墙钟计时；equal-token 与 equal-latency 比较应分开报告。

它可支持三类具体研究：（1）在相同延迟下比较长链、best-of-N 和 speculative-decoding 策略；（2）通过 selector 消融，把 majority/confidence aggregation 与分支生成的作用分开；（3）做硬件/负载迁移审计，找出选定配置何时跨入 compute-bound 区间。采集时应保留失败候选与失败配置，而非只保存最终选中答案。

复用等级：**仅适合作为阅读与评测参考**。公开论文足以重建概念性搜索空间和 benchmark 对照，但仍需自行补齐系统细节；由于没有候选级轨迹数据集、过程标签、带许可的运行包或经核验的作者实现，它不能直接用于训练数据复用。
