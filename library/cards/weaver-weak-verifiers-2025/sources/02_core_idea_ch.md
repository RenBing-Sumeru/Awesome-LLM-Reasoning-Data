Weaver 把异构 verifier 转成二值 voter，并把回答正确性视为潜变量。Reward model 输出先归一化和阈值化，judge 输出解析为二值判断，边际行为过于极端的 verifier 被移除。在“给定正确性后各 verifier 投票条件独立”的假设下，可观察的两两投票矩用于估计每个 verifier 的 true-positive rate 与 true-negative rate。少量带标签开发样本提供类别先验和阈值信息，但测试 query-response 标签不参与弱监督模型拟合。

拟合参数形成一个类似 Naive Bayes 的候选正确性后验概率，后验最高的候选被选中。因此反馈契约是由多个 judgment-required 信号推导出的 answer-level scalar score，而不是程序化证明，也不是 oracle label。

这些后验分数还作为 soft pseudo-label，用来训练 ModernBERT-Large（396M）cross-encoder。由此产生两个相关数据对象：高成本的集成选择 ledger，以及由 query-response 与 Weaver 分数组成的 distilled verifier 训练集。论文同时评估 selector 效果和蒸馏效率，但两类评估都不能把每个伪标签升级为经认证的 ground truth。
