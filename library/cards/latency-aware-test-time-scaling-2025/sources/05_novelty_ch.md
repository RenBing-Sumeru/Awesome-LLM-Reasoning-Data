最接近的 baseline 是按 token 预算进行 test-time scaling：budget forcing 拉长单条推理链，重复采样/self-consistency 生成多个分支并对答案做 majority voting；speculative decoding 则独立用于加速顺序生成。这些基础组件均非本文首创。（论文 §2）

真正改变的是优化单位。论文不再只记录 token 数与分数，而把评测对象表示为联合的“配置—结果”记录：输出长度、分支数、draft length、draft 接受率、聚合方式、延迟和准确率；随后搜索应将多少并发资源分给 branch-wise 与 sequence-wise parallelism。由此，系统吞吐进入 scaling attribution，并显式暴露 workload 从 memory-bound 转为 compute-bound 的过程。

论文给出的质量信号有明确条件，而非普遍结论：Tables 1、3 报告三次运行的均值/标准差，Table 2 比较搜索成本，Table 4 压测请求数。该工作没有提出新的最终答案 verifier、候选质量标签、训练目标或开放轨迹发布。复用前必须核对目标硬件、请求负载、model/draft 配对和答案聚合是否与论文条件一致。
