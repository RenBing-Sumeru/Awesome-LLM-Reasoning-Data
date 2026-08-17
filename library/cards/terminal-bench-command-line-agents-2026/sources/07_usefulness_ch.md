当研究问题涉及智能体在 shell 内操作、修改文件、运行工具、调试失败并满足可执行成功标准时，可以使用 Terminal-Bench。它特别适合比较 agent scaffold、命令规划策略、tool-call policy，以及失败命令后的恢复行为。

在整理时，应把它同时标为 benchmark/evaluation surface 和 environment/trajectory-data source。可复用对象不只是最终分数，而是任务定义、沙盒配置、交互轨迹、测试结果和版本元数据。

实验中需要固定 dataset 和 harness 的确切版本，并保留日志。报告 pass rate 时应同时给出 timeout、concurrency、model、scaffold、retry policy，以及智能体是否有网络访问。若用于训练数据工作，要把公开任务和 held-out evaluation 分开，并记录轨迹过滤和 license 限制。
