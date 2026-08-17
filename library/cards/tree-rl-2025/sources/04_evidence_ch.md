这些证据应被理解为系统层面的配方证据，而非数据质量验证。

- **搜索比较。** 在 Omni-MATH-500 上，附录表 4 报告入选的 (6,2,1,2) EPTree 设定为 30 个叶节点、56.9 PassRate、22,268 个生成 token；multi-16 为 16 个叶节点、52.4 PassRate、19,858 个 token。表 2 还报告熵分叉为 56.9 PassRate 和 22,268 token，随机分叉为 54.8 和 24,213，multi-chain 为 52.4 和 19,858。这是预算可比的搜索结果，不是轨迹标签精度的测量。
- **RL 评测。** 表 1 报告 Qwen-2.5-14B 线的贪婪评测平均准确率：TreeRL 为 44.5，ChainRL 为 41.6；GLM4-9B 为 29.3 对 27.2；DeepSeek-R1-Distill-Qwen-2.5-7B 为 65.8 对 64.5。六个报告基准为 MATH500、Omni-MATH-500、AIME2024、AMC、OlympiadBench 和 LiveCodeBench。作者也指出，在该设定下两种 RL 方法相对 SFT 基线的提升都较小。
- **消融边界。** 论文报告，在已测试的过程信号设计中，结合全局与局部 advantage 并做平方根重加权的表现最好；只使用一部分采样回答的提升较小。但这不能分离搜索拓扑、更多叶节点、更多优化 trace 与过程归因各自的影响。
- **工件证据。** 官方仓库公开并采用 Apache-2.0 许可证。它包含所述 10,562,582 字节输入 JSONL、launcher、EPTree 实现和远程奖励代码；未核验到原始 EPTree 发布或 TreeRL checkpoint。因此，性能结果不能证明公开输入文件或未共享运行时树具有高质量。
