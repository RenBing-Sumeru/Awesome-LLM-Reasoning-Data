主要贡献是受控的行为图谱，而不是新的验证器架构。将 TPR 与 TNR 分开，可以看见单一总体分数如何掩盖随难度变化的错误拒绝，以及随生成器变化的错误接受；再把二者连接到 conditional pass rate，则明确展示了它们对 verifier-filtered test-time sampling 的影响。

对数据整理而言，后续开放制品同样重要：它保留了反馈约定的两端。Candidate CoTs 及其 ground-truth labels 可以跨 generator-verifier pairs 连接到验证器生成的 rationale 与 verdict，从而支持仅凭汇总图表无法完成的审计。
