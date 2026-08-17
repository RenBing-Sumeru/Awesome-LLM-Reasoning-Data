最有力的证据来自匹配或明确改变数据预算后的同策略比较，而不是 “state-of-the-art” 标签。

- Table 2 中，Qwen2.5-VL-7B-Instruct 在八个 benchmark 上平均为 59.69，random-11K GRPO baseline 为 60.89，ThinkLite-VL-7B 为 64.18。72B 对应结果为 base 68.25、random 7.5K 69.91、MCTS-selected 7.5K 72.67；相对同规模随机选择的平均差分别为 3.29 与 3.06 分。ThinkLite-VL-7B 和 72B 在 MathVista testmini 上分别为 75.1 与 79.7，但这些分数是模型结果，不是逐条数据验证。（论文 Table 2）
- Table 3 对 7B 组合做消融：selected 11K 平均 64.18，unsolved-only 5.6K 为 62.04，late-solved-only 5.4K 为 62.38，random 11K 为 60.89，self-consistency-selected 23K 为 63.15，full 70K 为 63.13。在这一配方下，晚解与未解样本的组合优于任一单独部分及更大规模替代方案；它仍不能证明每条被保留的未解记录都有效。（论文 Table 3）
- Table 4 比较离线与在线筛选。7B 的 offline MCTS、offline self-consistency 和 online self-consistency 平均为 64.18、63.15、62.34；72B 对应为 72.67、71.01、70.12。作者同时指出，online self-consistency 虽然最终提升很小，但收敛更快。（论文 §4.3、Table 4）
- Table 5 检验模型特定性。7B policy 在自身 11K 上平均 64.18，在 72B 选出的 7.5K 上为 61.24；72B policy 在自身子集上为 72.67，在 7B 子集上为 70.24。两个集合重叠 5.4K，其中 3.6K 被双方都判为未解。这是不能把 Hard-11K 当作模型无关难度集的直接证据。（论文 §4.4、Table 5）
- 附录 Table 9 改变 7B 阈值：Fullset 63.13、Iter1+Unsolved 63.29、Iter5+Unsolved 63.89、Iter10+Unsolved 62.65、Iter20+Unsolved 62.61、Iter30+Unsolved 62.39、Iter40+Unsolved 62.26、Unsolved 62.04。该表支持加入中等难度区间，但其中 Iter5+Unsolved 的 63.89 与 Tables 2–4 对同一名义 11K 设置给出的 64.18 冲突；附近正文也写 63.89。本 Card 保留该不一致，不自行选择某个数值。（附录 B.2、Table 9；正文 Tables 2–4）
- 附录 Figure 5 报告，random-11K 与 full-pool 模型可在训练中获得更高 reward，却以更低 benchmark 结果结束。这是一个有用的负结果：training reward 不是下游 reasoning performance 的充分 proxy。但图中没有公开原始曲线或逐运行日志。（附录 B.1、Figure 5）

artifact 证据仍不完整。官方 collection 包含 70K pool、7B Hard-11K dataset、7B/72B checkpoint 与论文。70K viewer 报告 69,997 行且只有 train split；Hard-11K 页面只提供单个 Parquet 和极简加载示例，viewer 不可用。GitHub 仓库含 selector 与评测目录，但没有正式 release 或顶层 license。未发现 72B-selected 7.5K 数据、全量 `K` 表、rejected set、失败轨迹 ledger 或与论文匹配的训练 launcher。

以上数值均为作者报告的 point estimate，本 Card 未独立复现。主要表格与消融表格没有显示重复运行离散度。NeurIPS checklist 虽将 statistical significance 标为 yes，并只指向 Section 4，但所检查结果未公开核心对比的 seed、confidence interval 或 error bar。因此，较小的 benchmark 差异不宜过度解读；较大的同规模描述性差距仍可作为作者设置下的证据。
