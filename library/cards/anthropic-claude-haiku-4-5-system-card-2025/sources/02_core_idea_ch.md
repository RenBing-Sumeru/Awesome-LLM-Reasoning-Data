报告披露五类粗粒度训练来源：截至 2025 年 2 月的公开互联网信息；非公开第三方数据；来自数据标注服务和付费 contractor 的数据；Claude 用户主动 opt-in 的数据；Anthropic 内部生成数据。Deduplication 与 classification 被列为清理步骤；公共 crawler 遵循 robots.txt，并避开密码、登录与 CAPTCHA 保护页面。

后训练包括 reinforcement learning from human feedback 与 AI feedback。通过 data-work platform 雇用的 crowd worker 参与偏好选择、安全评测与对抗测试。系统卡没有说明各阶段的偏好记录究竟是 pairwise、listwise 还是 rubric-based，也没有说明人类和 AI 信号如何聚合成 reward。

在 agentic RL 中，Haiku 4.5 被明确训练去感知精确上下文使用量：接近 200K-token 发布上下文上限时适当收尾，剩余上下文较多时继续坚持。这是具体的 state-awareness 干预，但任务分布、rollout 环境、episode budget、reward 和算法未披露。

Reasoning 谱系还有两层。部分早期监督学习数据包含前代 Anthropic 模型生成的 reasoning text；另有极少数很长的 extended-thinking trace 会在推理时由第二个 Haiku 4.5 实例为用户总结。前者是训练证据，后者只是展示机制。
