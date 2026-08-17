VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks 回答的问题是：真实网页界面通过布局、图片、图标和视觉状态传递信息，但许多网页智能体基准没有充分测试多模态 grounding。主来源是 https://arxiv.org/abs/2401.13649；公开状态为 ACL 2024 / arXiv（2024）。

决策边界：它应作为多模态浏览器智能体评测面收录，不是静态视觉问答，也不是通用模型报告。评测面是：一个任务包含自然语言目标、浏览器/页面状态、截图或视觉证据、可选 DOM/HTML 上下文、动作历史和最终任务成功条件。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
