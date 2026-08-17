Claude Haiku 4.5 System Card 记录了一个小型、快速的 hybrid-reasoning 模型如何面向 coding、computer use、tool use 与通用助手场景进行训练、后训练、审计和发布。对 reasoning-data atlas 而言，它的价值不只在 benchmark，而在于明确连接了来源类别、偏好劳动、agentic RL、reasoning-trace 谱系与后训练行为审计。

核心问题是披露粒度。Anthropic 命名了五类训练来源、RLHF 与 RLAIF、crowd-worker 偏好选择、监督学习中的前代模型 reasoning text，以及 agentic RL 的上下文感知干预，却没有开放定量 mixture、记录 schema、reward model、偏好语料、全局 split 或 item-level provenance。

因此，本 Card 把该系统卡视为披露台账，而非可复现包。训练信号、评测 grader、部署 safeguard 与推理展示机制被严格分开。
