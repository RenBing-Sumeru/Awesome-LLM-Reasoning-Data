先前 baseline 是 ARC-AGI-1，以及 2019 年 “On the Measure of Intelligence” 中的 benchmark 设定。ARC-AGI-2 保留同样的最小网格转换接口，但更新任务分布，用于在更高认知复杂度上提供更细粒度测量。

新信号不在新的 scoring algorithm；verifier 仍是 exact grid match。新意在于新一代人工策划任务分布，以及 public、semi-private、fully-private 的多层结构，用来兼顾开放研究与高风险评测中的泄漏控制。

复用前应检查 training/evaluation 是否分离，solver 开发是否反复使用 public evaluation feedback，private-tier 结果是否可与 public 分数比较，attempt limit 是两次还是界面特定政策，以及是否报告 search budget。
