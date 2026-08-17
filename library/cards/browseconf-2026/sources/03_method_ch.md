论文在 BrowseComp 与 BrowseComp-zh 上评估 gpt-oss-120b 和 DeepSeek-V3.1。网页 harness 提供 Google 搜索工具，每个查询返回十条标题、摘要和 URL；访问工具先用 Jina 抽取页面，再由摘要模型选择与目标相关的内容。推理设置为 temperature 0.6、top-p 0.95、上下文上限 128k。若某次尝试耗尽上下文，则置信度记为 -1，三个变体以不同方式处理该失败尝试。对照包括 Pass@1、oracle 式 Pass@10、十样本 self-consistency 和按置信度加权的 self-consistency。

可复用轨迹需要保留验证集版本与阈值选择规则；每次尝试的答案、置信度、token 和交互次数；搜索查询、返回 URL、网页快照、访问目标与摘要；此前答案或轨迹摘要上下文；停止原因、最终选择及 judge 结果。论文与元数据没有建立公开代码/数据包、不可变网页快照、完整查询动作日志或逐次运行种子，因此这些工件仍为 unknown 或不可得。
