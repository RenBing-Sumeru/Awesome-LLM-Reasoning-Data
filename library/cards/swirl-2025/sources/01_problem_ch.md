OpenReview 官方版本标明该论文发表于 COLM 2025；arXiv:2504.04736 v2 的日期为 2025 年 4 月 28 日。论文要解决的问题是：当传统单回答 RL 目标不为中间动作提供显式训练信号时，如何让自回归语言模型 policy 从多步推理与工具交互中学习。它的实际贡献是数据构造与训练 recipe，不是新 benchmark，也不是已核验的公开数据发布。（论文 p.1；§1，pp.1–2；§2，pp.3–5）

源数据对象是一条完整轨迹 `tau=(s1,a1,...,sK,aK)`。`s1` 为任务 prompt；后续每个 state 包含此前的完整上下文，包括上一模型动作及工具响应；动作可包含 chain-of-thought 与带标签的搜索/计算器调用，或带标签的最终答案。一条含 K 个动作的轨迹随后被转换为 K 条以动作结束的前缀子轨迹，因此主优化器消费的数据对象不同于最初生成的完整 episode。（论文 §2.1，pp.3–4；§2.2，pp.4–5；Figure 2）

该对象属于 `environment_agent_trajectory_data`，因为搜索与计算器 observation 被写入可回放 state；同时属于 `training_usage_optimization_objectives`，因为 SWiRL 在离线 RL 中给每个动作前缀附加模型奖励。论文也在同一组合成轨迹上比较 SFT，但 SFT 不是主方法；HotPotQA、GSM8K、CofCA、MuSiQue 与 BeerQA 是评测面，不是 SWiRL 发布的 benchmark。（论文 §2；§4；Appendix C）

本卡依据完整 COLM 论文与 Appendices A–F 达到双语研究审阅深度：任务池、prompt、轨迹 schema、筛选器、工具、实验结果及若干评测 ID 均有披露。复用仍被阻塞，因为未核验到官方轨迹语料、逐步标签或奖励、实现、向量索引、checkpoint 或工件许可证。
