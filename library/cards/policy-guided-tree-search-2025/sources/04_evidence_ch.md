论文报告了使用 LLaMA 3.1 8B 与 70B 在七类 benchmark 上的实验：GSM8K、MATH500、AQUA、StrategyQA、PrOntoQA、GPQA 和 Blocksworld。比较对象包括 Chain-of-Thought prompting、树搜索 baseline、PGTS 以及 reward-weighted self-consistency 变体。根据论文各表，作者把更高任务准确率与更低生成成本归因于学习式树导航。这些是作者报告的 benchmark 结果；公开发布不包含论文运行的树、控制器 checkpoint、结果文件或逐条决策，因此无法独立重建。

最直接可审计的计算证据是聚合数据。在 MATH 上，论文报告 MCTS 的 token 用量是 Chain-of-Thought 的 16.25 倍，PGTS 为 5.28 倍；在 GSM8K 上，MCTS 为 13.33 倍，PGTS 为 1.29 倍。这些归一化总量支持一个较窄结论：在论文比较设置中，PGTS 运行生成的 token 少于对应 MCTS 设置。它们不证明墙钟时间相同、模型调用结构相同或逐样本预算相同，也不揭示节省是否集中于简单样本，而困难样本仍消耗上限。

AQUA 的宽度消融明确展示预算敏感性。在宽度 2、4、8 时，PGTS 报告生成 token 数分别为 252.16、283.24、370.54，MCTS 分别为 399.13、1241.37、3282.41。这说明搜索宽度会改变成本，且两类控制器在该设置中的扩展方式不同；但它不证明已发布数据对象带有完整 token 账本，也不证明所有 baseline 在生成 token、延迟或费用上严格匹配。

策略训练曲线报告约在 1,000 个训练样本附近收敛，实验协议将每个数据集训练切分的策略训练样本数限制为最多 1,000。该结果支持在论文设置下对控制器 sample efficiency 的观察。由于精确样本 ID、随机种子、每次 update 的 rollout 数、优化器 batch 设置和训练 checkpoint 均缺失，不能据此得到完全可复现的控制器训练数据集。

实现审计补充的是“可表示性”证据，而不是实验记录已经发布的证据。`pgts.py` 维护带有节点奖励、访问次数、trace、特征和 ID 的父子树；保存被选动作的 log-probability、value、reward 与 trajectory return；并能把 root 与 trajectory 交给评估代码序列化。已生成但未访问的子节点，以及被放弃的已访问路径，都可以继续挂在树上。审计版本中没有发现已提交的论文结果 `.pth` 文件、replay buffer、完整动作分布或语义化分支清单。

不能把 benchmark 表现当作搜索数据质量的证明。终点正确仍可能伴随无效中间推理；likelihood 塑形奖励可能偏好流畅错误；聚合准确率也不能证明 provenance、分支覆盖、奖励校准、污染控制或许可状态。现有证据支持 PGTS 配方及其报告的计算/准确率行为，但逐条数据层面的主张必须受缺失 artifact 边界约束。
