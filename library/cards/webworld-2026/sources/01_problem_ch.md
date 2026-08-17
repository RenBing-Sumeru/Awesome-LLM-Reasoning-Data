WebWorld: A Large-Scale World Model for Web Agent Training 回答的问题是：真实网页智能体训练受延迟、成本、频率限制、安全风险和长程交互轨迹稀缺约束。主来源是 https://arxiv.org/abs/2602.14721；公开状态为 arXiv preprint（2026）。

决策边界：它应作为网页智能体训练的 world-model/simulator 方向收录，不是已验证真实轨迹发布，也不是确定性环境。评测面是：一个记录包含 instruction/history/state/action 输入、预测的下一步浏览器观察或状态转移、模拟 rollout 元数据和下游评测结果。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
