这不是数据发布。它对 Track 12 的独特价值，是对 routed frontier system 所做的多层次、但仍不完整的披露。报告不只说存在 routing，还点名真实 router feedback signals；不只列出拒答政策，还描述 output-centric safe-completion training；并把并行测试时计算识别为独立推理设置。相较单模型 benchmark 表，这些内容揭示了更多系统边界。

报告还使若干归因边界清晰可见。代表生产对话的数据既作为评测输入出现，也在 sycophancy 场景中用于形成训练 reward signal；但系统卡没有证明每个 production benchmark 都进入训练。生物风险保障结合了训练与运营控制。事实性、安全性和能力结果衡量的是特定 grader 与设置下的行为，不是训练混合的质量、合法性、覆盖度或溯源。

因此，本图谱记录的创新点是披露账本本身：粗粒度来源类别、少量明确反馈字段、一项安全目标、routed inference scaffold 和广泛的 release audit，并与显式 unknowns 配对。它不是可复现的 GPT-5 配方、已发布 router dataset，也不能证明 benchmark 提升来自某个特定数据干预。
