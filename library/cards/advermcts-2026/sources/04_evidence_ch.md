证据支持推理阶段搜索改进，同时也暴露验证器错误；它没有证明这些临时反例已经是干净、可复用的数据集。

| 证据 | 报告结果 | 能支持什么 | 证据边界 |
|---|---|---|---|
| 表 1，Qwen3-4B-Instruct-2507 | AdverMCTS 在 APPS/TACO 上平均 Pass@1 为 49.67/38.00；MCTS-Thought 为 43.44/31.00，RethinkMCTS 为 43.67/33.67 | 在报告设置下，完整方法改善最终程序选择 | benchmark 表现不是测试标签质量的直接度量 |
| 图 4 消融 | 完整方法为 49.7/38.0；移除 Attacker tree 为 43.3/31.0，移除 divergence-driven synthesis 为 46.0/33.7，移除 Global Filtering Hub 为 48.3/35.3 | 在受控预算下，各命名组件都有贡献 | 没有隔离全部交互，也没有发布生成记录 |
| 表 3，TACO gold-code 核验 | Arbiter 标注测试有效率为 79.88%，majority voting 为 37.88%；对应下游 Pass@1 为 49.67/37.33 与 43.67/32.67 | Arbiter 优于该投票基线 | 经 gold code 检查的 Arbiter 标签仍约有五分之一无效 |
| 图 7，判别审计 | 291 个伪正确程序中杀死 165 个：recall 56.7%、precision 78.95%；同时误杀 44 个正确程序，false-positive rate 为 16.1% | 保留测试能发现不少静默错误，也会污染部分决策 | 仍存在大量 false negative 与 false positive |
| 附录 C.1，oracle 测试实验 | 向 MCTS-Thought 提供一半隐藏测试后，APPS 平均 Pass@1 从 43.44 升至 55.33，TACO 从 31.00 升至 43.67 | 弱可见验证确实是瓶颈 | 使用隐藏测试是 oracle 诊断，不是可部署方法 |
| 附录 C.3，Attacker 预算 | APPS Competition 从 1 次 Attacker rollout 的 31% 升至 2 次的 36%；继续增加可能饱和或下降 | 增加对抗搜索并非单调有益 | 精确成本效益仍未报告 |

表 2 还报告：移除 Solver 上下文、把 Attacker MCTS 换成 Best-of-N，或使用 Random-MCTS，平均结果均低于完整方法。图 5 报告 16-rollout 的方法以较少 token 超过 32-sample 基线，但图中没有给出完整、可复现的成本账本，因此本 Card 不把该结论转写为精确效率数字。

以上数字均为作者报告。核验到的仓库包含实现代码，却没有不可变 release、发布的结果包、生成测试集、精确抽样题目 ID 或独立复现。因此即使论文消融较完整，证据置信度仍为中。
