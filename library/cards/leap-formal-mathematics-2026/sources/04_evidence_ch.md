论文结果以 Gemini 3.1 Pro 为 LEAP backend，并使用不同形式、不同预算的 test-time search。本 Card 未独立复现实验。

- Putnam 2025 的 Table 2 报告 LEAP 在两个 rollout 下解出 12/12；Gemini 3.1 Pro 和 Goedel-Prover-V2-32B 在 pass@128 下均为 0/12，Hilbert 在两个 rollout 下为 4/12，Aristotle 在两个 rollout 下为 9/12。Table 3 显示成功证明并非等预算事件：每题使用 46 至约 3,000 次 LLM call、8 至 211 个 active DAG node、300 至约 2,000 行 proof。
- Lean-IMO-Bench 的 Table 4 报告 LEAP 解出 Basic 25/30（83.3%）和 Advanced 17/30（56.7%），合计 42/60，即 70%。Aristotle 分别为 23/30 与 6/30，Hilbert 为 11/30 与 2/30。LEAP 在 Geometry 上仍只有 Basic 1/6、Advanced 1/8。
- Table 5 的 iterative-revision ablation 显示，Basic set 上 Gemini 3.1 Pro 从 one-shot pass@128 的 20.0% 提升到“一次初始 sample + 最多 20 次 revision”的 36.6%；Goedel-Prover-V2-32B 则从 10.0% 降到 6.6%。这个 negative result 限定了结论：compiler feedback 并非对所有 backend 都有效。
- 去掉全局 DAG memory 后，Basic/Advanced solve rate 从 83.3/56.7 降到 73.3/40.0（Table 6）。去掉 LLM decomposition reviewer 后，Putnam A5 在八个 rollout 后仍失败，而完整配置以两个 rollout 解出；Figure 3 展示了一次形式上可接受、实质上只是重建祖先目标的分解。

官方仓库发布了 12 道 Putnam、42 道已解 Lean-IMO-Bench 以及两个 open-problem case 的成功 Lean proof，因此可以核验 artifact availability。但它不能证明 replayability：agent code、prompt、DAG log、compiler-message history 与失败分支均未发布。benchmark performance 支持论文的 evaluation claim，不等于公开数据或 verifier pipeline 已完整、可训练。
