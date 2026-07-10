主要局限和审计风险：

- 学习型 verifier 可能引入新的 false positive。
- 方法效果依赖 disagreement 样本如何采样。
- 额外 verifier 会改变 RL 训练的成本结构。
- 如果校准细节不公开，奖励面很难复现。
- 它可能更适合规则 verifier 已经较强但有脆弱边界的领域。
