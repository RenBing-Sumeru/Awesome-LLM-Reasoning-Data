论文表 1 报告五个数学数据集的平均 accuracy：完整 CMCTS 为 83.4，CMCTS-PRM 为 82.5，CMCTS-RULE 为 78.7，Native-MCTS+PRM 为 77.2，Native-MCTS 为 76.8，Qwen2.5 72B CoT 为 78.6。消融比较动作子集、PRM 和偏序规则；论文还用 jina-embeddings-v3 与 UMAP 可视化采样状态，以论证受约束动作提高多样性。这些都是作者实现与 benchmark parser 下的方法评估结果。

证据支持组合搜索配置相对所研究基线提高了报告指标，也表明移除组件会改变性能。它不能证明 PRM 已校准、所有中间步骤正确、四类动作完备，或发布的树数据质量可靠。论文自己承认，动作集合的完备性既没有理论证明也没有实验验证，且评测局限于数学。官方 arXiv 来源为 https://arxiv.org/abs/2502.11169，论文链接仓库为 https://github.com/pass-lin/CMCTS；在声称完整性前必须固定并检查具体 commit。
