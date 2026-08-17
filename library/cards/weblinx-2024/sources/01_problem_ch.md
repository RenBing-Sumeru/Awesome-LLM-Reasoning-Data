WebLINX: Real-World Website Navigation with Multi-Turn Dialogue 回答的问题是：网页导航智能体需要根据多轮对话在真实网站上行动，但完整页面过大且动态，不能只靠简单 prompt 处理。主来源是 https://arxiv.org/abs/2402.05930；公开状态为 ICML 2024 Spotlight / PMLR 235（2024）。

决策边界：它应作为对话条件下的网页导航数据和评测收录，不是 WebShop 式终止奖励环境。评测面是：一个样本包含对话上下文、网站/页面观察、截图、HTML 或筛选页面元素、动作历史、目标下一步动作、网站 id 和 split 元数据。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
