对 Rollout, Search, and Test-Time Trace Data 方向，这篇论文给出了全局分配日志的具体 schema。可复用记录应把每个回答关联到问题、分配轮次、生成设置、oracle 类型与版本、原始分数或答案簇、淘汰决策、token 成本和剩余全局预算。coverage 与最终答案 accuracy 应分开，oracle 预测成功与 ground-truth 正确性也应分开。

这类轨迹可用于研究 allocator、在不同阈值下进行 counterfactual replay、校准 verifier、开展预算归一化比较，以及分析算力是否流向可解问题而不只是困难问题。它们还可区分性能来源：更多采样、更强 oracle、不同聚合规则，还是 bandit 策略本身。实现这些用途需要发布日志或忠实复现；当前论文和已接受 artifacts 本身并未提供可直接训练的数据集。
