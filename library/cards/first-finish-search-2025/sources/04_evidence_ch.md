论文表 2 和表 3 比较了 accuracy、总 token 和顺序 token。FFS 在所研究的推理模型上通常降低 token 消耗并保持竞争力；例如，论文聚合结果中 DeepSeek-R1 的平均总 token 为 31.1K，而 majority voting 为 42.2K，但不同数据集的结果并不一致。证据不是全面占优：FFS 在若干 Phi-4-Reasoning-Plus 和 QwQ-32B 配置中落后于 majority voting；在非推理模型 DeepSeek-V3 上，它在报告任务中均弱于 majority voting。对采样长度分布的 Welch 检验支持所分析数据中正确与错误轨迹长度存在差异，但这种关系依赖模型和任务。

实验只支持条件性结论：当正确轨迹具有有利的长度分布时，首个完成可以是低成本选择器。实验没有证明早结束轨迹天然正确，也没有证明异步墙钟顺序等同于语义轨迹长度，更不能把被丢弃轨迹视为低质量训练负例。benchmark accuracy 和 token 节省评估的是策略，不是轨迹语料质量。官方论文为 https://arxiv.org/abs/2505.18149；其链接仓库也已核验，但审阅时没有可用发布。
